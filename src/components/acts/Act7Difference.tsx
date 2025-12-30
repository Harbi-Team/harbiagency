import { useEffect, useRef } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap"
import { ACT_LABELS, COMPARISON } from "@/lib/constants"
import { Check, X } from "lucide-react"

export const Act7Difference = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      })

      tl.fromTo(
        ".comparison-left",
        { opacity: 0, x: -80 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
      ).fromTo(
        ".comparison-right",
        { opacity: 0, x: 80 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative flex items-stretch"
      id="act7"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        {/* Left side - Others */}
        <div className="comparison-left bg-secondary flex items-center justify-center p-12 md:p-20">
          <div className="text-center">
            <h3 className="text-display-medium text-secondary-foreground mb-12">
              DİĞERLERİ
            </h3>
            <ul className="space-y-6">
              {COMPARISON.others.map((item, index) => (
                <li
                  key={index}
                  className="text-secondary-foreground/70 text-lg flex items-center gap-3 justify-center"
                >
                  <X size={20} className="text-secondary-foreground/50" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right side - HARB! */}
        <div className="comparison-right bg-primary flex items-center justify-center p-12 md:p-20">
          <div className="text-center">
            <h3 className="text-display-medium text-primary-foreground mb-12">
              HARB!
            </h3>
            <ul className="space-y-6">
              {COMPARISON.harbi.map((item, index) => (
                <li
                  key={index}
                  className="text-primary-foreground text-lg flex items-center gap-3 justify-center font-medium"
                >
                  <Check size={20} className="text-primary-foreground" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
