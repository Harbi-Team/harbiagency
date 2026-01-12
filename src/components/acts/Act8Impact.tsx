import { useEffect, useRef } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap"
import { TrendingUp, Users, Zap, Target } from "lucide-react"

const IMPACTS = [
  {
    icon: TrendingUp,
    title: "Büyüme",
    description: "Satışlarınız ve marka bilinirliğiniz katlanarak artar.",
  },
  {
    icon: Users,
    title: "Sadakat",
    description: "Müşterileriniz markanıza bağlanır, geri gelir.",
  },
  {
    icon: Zap,
    title: "Hız",
    description: "Rakiplerinizden önce hareket edersiniz.",
  },
  {
    icon: Target,
    title: "Odak",
    description: "Doğru kitleye, doğru mesajla ulaşırsınız.",
  },
]

export const Act8Impact = () => {
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
        ".act8-label",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
      )
        .fromTo(
          ".act8-title",
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
          "-=0.2"
        )
        .fromTo(
          ".impact-card",
          { opacity: 0, y: 30, rotateY: -15 },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.3"
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="act-section bg-transparent py-24"
      id="act8"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="act8-title text-display-large text-foreground">
            HARB! İLE ÇALIŞTIKTAN SONRA
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto perspective-1000">
          {IMPACTS.map((impact) => (
            <div
              key={impact.title}
              className="impact-card group bg-card border border-border p-8 text-center transition-all duration-500 hover:border-primary hover:bg-card/80"
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-muted group-hover:bg-primary/20 transition-colors">
                <impact.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-display-small text-foreground mb-3">
                {impact.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {impact.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
