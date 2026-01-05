import { useEffect, useRef } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap"

export const Act3Solution = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const lineTopRef = useRef<HTMLDivElement>(null)
  const lineBottomRef = useRef<HTMLDivElement>(null)

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

      // Animate lines
      tl.fromTo(
        [lineTopRef.current, lineBottomRef.current],
        { scaleX: 0 },
        { scaleX: 1, duration: 1, ease: "power3.inOut" }
      )
        .fromTo(
          ".act3-title",
          { opacity: 0, y: 60, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        )
        .fromTo(
          ".act3-subtitle",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="act-section bg-transparent" id="act3">
      <div className="container mx-auto px-6 text-center">
        {/* Top decorative line */}
        <div
          ref={lineTopRef}
          className="w-full max-w-3xl mx-auto h-px bg-primary mb-16 origin-left"
          style={{ transform: "scaleX(0)" }}
        />

        <h2 className="act3-title text-display-large text-foreground mb-4">
          KAOSUN İÇİNDEKİ
        </h2>
        <h2 className="act3-title text-display-large text-foreground/50 mb-12">
          DÜZEN
        </h2>

        <p className="act3-subtitle text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          Biz aileniz değiliz. Biz sizin{" "}
          <span className="text-primary font-semibold">
            stratejik silahınızız.
          </span>
        </p>

        {/* Bottom decorative line */}
        <div
          ref={lineBottomRef}
          className="w-full max-w-3xl mx-auto h-px bg-primary mt-16 origin-right"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      {/* Floating particles decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-muted rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>
    </section>
  )
}
