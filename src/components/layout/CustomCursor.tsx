import { useEffect, useRef, useState } from "react"
import { gsap } from "@/lib/gsap"

export const CustomCursor = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const cursorOutlineRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const dot = cursorDotRef.current
    const outline = cursorOutlineRef.current
    const trail = trailRef.current

    if (!dot || !outline || !trail) return

    // Mouse position
    let mouseX = 0
    let mouseY = 0
    let outlineX = 0
    let outlineY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      setMousePos({ x: e.clientX, y: e.clientY })

      // Update dot position immediately
      gsap.to(dot, {
        x: mouseX,
        y: mouseY,
        duration: 0,
      })
    }

    const handleMouseEnter = (e: Event) => {
      setIsHovering(true)
    }

    const handleMouseLeave = (e: Event) => {
      setIsHovering(false)
    }

    // Function to attach listeners
    const attachListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, .cursor-pointer, .service-card, [onclick]'
      )

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter)
        el.addEventListener("mouseleave", handleMouseLeave)
      })

      return interactiveElements
    }

    // Initial attachment
    let elements = attachListeners()

    // Watch for DOM changes and reattach listeners
    const observer = new MutationObserver(() => {
      // Remove old listeners
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
      // Reattach to all elements
      elements = attachListeners()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    window.addEventListener("mousemove", handleMouseMove)

    // Animate outline with faster follow speed
    const animateOutline = () => {
      const dx = mouseX - outlineX
      const dy = mouseY - outlineY

      // Increased from 0.15 to 0.35 for faster response
      outlineX += dx * 0.35
      outlineY += dy * 0.35

      gsap.to(outline, {
        x: outlineX,
        y: outlineY,
        duration: 0.15,
        ease: "power2.out",
      })

      requestAnimationFrame(animateOutline)
    }

    animateOutline()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      observer.disconnect()
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Cursor Dot (Inner circle) */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 w-2 h-2 bg-yellow-500 rounded-full pointer-events-none z-[9999] transition-all duration-150 ease-out ${
          isHovering ? "scale-0" : "scale-100"
        }`}
        style={{
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 10px rgba(250, 204, 21, 0.5)",
        }}
      />

      {/* Cursor Outline (Outer circle) */}
      <div
        ref={cursorOutlineRef}
        className={`fixed top-0 left-0 w-10 h-10 border-2 rounded-full pointer-events-none z-[9998] transition-all duration-200 ease-out ${
          isHovering
            ? "scale-[1.8] border-yellow-400 bg-yellow-500/20 shadow-lg shadow-yellow-500/30"
            : "scale-100 border-yellow-500/60"
        }`}
        style={{
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Cursor Trail Effect */}
      <div
        ref={trailRef}
        className="fixed inset-0 pointer-events-none z-[9997] transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(250, 204, 21, 0.06), transparent 70%)`,
        }}
      />
    </>
  )
}
