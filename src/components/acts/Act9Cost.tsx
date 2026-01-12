import { useEffect, useRef } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap"
import { ACT_LABELS } from "@/lib/constants"

const WARNINGS = ["TOO LATE", "ACTION NOW", "DO LATE", "TOO LATE", "ACTION NOW"]

export const Act9Cost = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      })

      tl.fromTo(
        ".act9-badge",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.7)" }
      )
        .fromTo(
          ".act9-title",
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
          "-=0.2"
        )
        .fromTo(
          ".act9-desc",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .fromTo(
          ".act9-box",
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" },
          "-=0.2"
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative flex items-center justify-center bg-primary overflow-hidden"
      id="act9"
    >
      {/* Background text pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 flex flex-col justify-center opacity-20">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`text-[15vw] font-display text-primary-foreground/40 whitespace-nowrap leading-none ${
                i % 2 === 0 ? "marquee-text" : "marquee-text-reverse"
              }`}
              style={{
                animationDelay: `${i * -2.5}s`,
                animationDuration: `${15 + i * 2}s`,
              }}
            >
              {[...Array(10)].map((_, j) => (
                <span key={j} className="inline-block mx-8">
                  {WARNINGS[j % WARNINGS.length]}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Warning badge */}
        <div className="act9-badge inline-block bg-primary-foreground text-primary px-6 py-2 mb-8">
          <span className="font-display text-sm tracking-wider">
            UYARI: ZAMAN AKIYOR
          </span>
        </div>

        <h2 className="act9-title text-display-large text-primary-foreground mb-4">
          <span className="cinematic-thriller-text" data-text="HAREKETSİZLİĞİN">
            HAREKETSİZLİĞİN
          </span>
        </h2>
        <h2 className="act9-title text-display-large text-primary-foreground/80 mb-12">
          <span className="cinematic-thriller-text" data-text="BEDELİ">
            BEDELİ
          </span>
        </h2>

        <p className="act9-desc text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto mb-4">
          Rakipleriniz şu an sizi geçiyor. Her saniye kaybediyorsunuz.
        </p>
        <p className="act9-desc text-xl md:text-2xl text-primary-foreground font-semibold underline underline-offset-4 mb-12">
          Durmak, geriye düşmektir.
        </p>

        <div className="act9-box inline-block bg-primary-foreground text-primary px-8 py-4 border-2 border-primary-foreground">
          <p className="font-display text-lg md:text-xl">
            BUGÜN ADIM ATMAZSANIZ, 1 YIL SONRA NEREDE OLACAKSINIZ?
          </p>
        </div>
      </div>
    </section>
  )
}
