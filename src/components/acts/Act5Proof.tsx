import { useEffect, useRef } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap"
import { STATS } from "@/lib/constants"

export const Act5Proof = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const countersRef = useRef<HTMLDivElement>(null)

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
        ".act5-label",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      )
        .fromTo(
          ".act5-title",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.3"
        )
        .fromTo(
          ".stat-item",
          { opacity: 0, y: 40, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.4"
        )

      // Animate numbers
      const statElements = countersRef.current?.querySelectorAll(".stat-value")
      statElements?.forEach((el) => {
        const value = el.textContent || ""

        // Extract number and suffix separately
        const matches = value.match(/^(\d+)(.*)$/)
        if (!matches) return

        const numericValue = parseInt(matches[1]) || 0
        const suffix = matches[2] || ""

        ScrollTrigger.create({
          trigger: el,
          start: "top 80%",
          onEnter: () => {
            const obj = { val: 0 }
            gsap.to(obj, {
              val: numericValue,
              duration: 2,
              ease: "power2.out",
              onUpdate: function () {
                el.textContent = Math.round(obj.val) + suffix
              },
            })
          },
          once: true,
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="act-section bg-transparent" id="act5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="act5-title text-display-large text-foreground">
            RAKAMLAR KONUŞSUN
          </h2>
        </div>

        <div
          ref={countersRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="stat-item text-center">
              <div className="stat-value text-display-medium text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
