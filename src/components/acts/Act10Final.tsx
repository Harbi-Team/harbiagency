import { useEffect, useRef } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap"
import { Link } from "react-router-dom"

export const Act10Final = () => {
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
        ".act10-title",
        { opacity: 0, y: 80, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" }
      )
        .fromTo(
          ".act10-desc",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          ".act10-btn",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.3"
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative flex items-center justify-center bg-transparent"
      id="act10"
    >
      <div className="container mx-auto px-6 text-center">
        <h2
          className="act10-title text-display-hero mb-8 text-yellow-500 font-black"
          style={{
            textShadow:
              "0 0 40px rgba(234, 179, 8, 0.5), 0 0 80px rgba(234, 179, 8, 0.3), 0 4px 20px rgba(0, 0, 0, 0.8)",
            WebkitTextStroke: "2px rgba(234, 179, 8, 0.3)",
          }}
        >
          HAZIR MISIN?
        </h2>

        <p
          className="act10-desc text-xl text-gray-300 max-w-xl mx-auto mb-12"
          style={{
            textShadow: "0 2px 10px rgba(0, 0, 0, 0.8)",
          }}
        >
          Vasatlıktan sıkıldıysan, zirveye oynamak istiyorsan, masaya oturalım.
        </p>

        <Link
          to="/contact"
          className="act10-btn inline-block border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300 text-xl px-12 py-5 font-bold tracking-wider"
          style={{
            boxShadow: "0 0 20px rgba(234, 179, 8, 0.3)",
          }}
        >
          BAŞVURUYU BAŞLAT
        </Link>
      </div>
    </section>
  )
}
