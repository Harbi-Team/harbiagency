import { useEffect, useRef } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap"
import { ACT_LABELS } from "@/lib/constants"
import { ChevronDown } from "lucide-react"

export const Act1Intro = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Initial animation on load
      const tl = gsap.timeline({ delay: 0.5 })

      tl.fromTo(
        labelRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 100, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 50 },
          { opacity: 0.6, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.4"
        )

      // Scroll-triggered fade out
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const opacity = 1 - self.progress
          const scale = 1 - self.progress * 0.2
          gsap.set(
            [
              titleRef.current,
              subtitleRef.current,
              descRef.current,
              labelRef.current,
            ],
            {
              opacity,
              scale,
            }
          )
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="act-section bg-transparent" id="act1">
      <div className="container mx-auto px-6 text-center">
        <div ref={titleRef} className="mb-4 opacity-0">
          <h1 className="text-display-hero text-foreground">YA AVCI OLURSUN</h1>
        </div>

        <div ref={subtitleRef} className="mb-12 opacity-0">
          <h2 className="text-display-hero text-foreground/60">YA DA AV.</h2>
        </div>

        <p
          ref={descRef}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0"
        >
          Dijital dünya bir ormandır. Sessizseniz, ölüsünüz.{" "}
          <span className="text-foreground font-semibold">Harbi Agency</span>,
          size bu ormanda hayatta kalmayı değil, kral olmayı vaat ediyor.
        </p>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-primary" />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 w-px h-32 bg-gradient-to-b from-transparent via-muted to-transparent" />
        <div className="absolute top-1/3 right-20 w-px h-24 bg-gradient-to-b from-transparent via-muted to-transparent" />
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-muted rounded-full" />
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-muted rounded-full" />
      </div>
    </section>
  )
}
