import { useEffect, useRef } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap"
import { ACT_LABELS, SERVICES } from "@/lib/constants"

export const Act4Arsenal = () => {
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
        ".act4-title",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
      )
        .fromTo(
          ".act4-subtitle",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" },
          "-=0.3"
        )
        .fromTo(
          ".service-card",
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.4,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.2"
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const getCardStyles = (index: number) => {
    const styles = [
      "bg-gradient-to-br from-zinc-900 to-black", // Web Development
      "bg-gradient-to-br from-zinc-800 to-zinc-900", // Branding
      "bg-gradient-to-br from-zinc-900 to-black", // Production
      "bg-gradient-to-br from-zinc-800 to-zinc-900", // Strateji
    ]
    return styles[index]
  }

  return (
    <section
      ref={sectionRef}
      className="act-section bg-black py-24 relative"
      id="act4"
    >
      {/* Particle background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(250, 204, 21, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(250, 204, 21, 0.1) 0%, transparent 50%)",
          }}
        ></div>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-500/30 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="act4-title text-6xl md:text-7xl font-bold text-white mb-4 tracking-wider">
            ARAÇLAR
          </h2>
          <p className="act4-subtitle text-yellow-500 text-sm tracking-widest">
            SEÇİMİNİZİ YAPIN
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`service-card group relative overflow-hidden rounded-lg ${getCardStyles(
                index
              )} p-12 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 border border-yellow-500/20 hover:border-yellow-500/40`}
            >
              {/* Animated circle icon */}
              <div className="absolute top-8 right-8 w-16 h-16 border-2 border-yellow-500/30 rounded-full flex items-center justify-center group-hover:border-yellow-500 transition-all duration-500">
                <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
              </div>

              {/* Decorative lines */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end min-h-[280px]">
                {/* Icon/Visual placeholder - you can add custom icons here */}
                <div className="mb-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                  {index === 0 && (
                    <svg
                      className="w-24 h-24 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z" />
                      <path d="M9.293 9.293 5.586 13l3.707 3.707 1.414-1.414L8.414 13l2.293-2.293zm5.414 0-1.414 1.414L15.586 13l-2.293 2.293 1.414 1.414L18.414 13z" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg
                      className="w-24 h-24 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                      <path d="M13 7h-2v6h6v-2h-4z" />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg
                      className="w-24 h-24 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 7c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-3.333L22 17V7l-4 3.333V7z" />
                    </svg>
                  )}
                  {index === 3 && (
                    <svg
                      className="w-24 h-24 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 3h18v2H3zm0 16h18v2H3zm2.707-7.707L7.414 13 5.707 14.707 4.293 13.293zm9.586 0 1.707 1.707-1.707 1.707-1.414-1.414zM12 10l-4 4h8z" />
                    </svg>
                  )}
                </div>

                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-wide">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                  {service.description}
                </p>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 via-yellow-500/0 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
