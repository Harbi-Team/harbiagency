import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { FloatingContactButton } from "@/components/layout/FloatingContactButton"
import { Scene } from "@/components/three/Scene"
import { Link } from "react-router-dom"

const TEAM = [
  {
    name: "Hüseyin Aydın",
    role: "CEO",
    image: "/team/huseyin-aydin.png",
    description: "CEO & Kurucu Ortak",
  },
  {
    name: "Muhammed Ali Aslan",
    role: "CTO",
    image: "/team/muhammed-ali-aslan.png",
    description: "CTO & Kurucu Ortak",
  },
  {
    name: "Yusuf Alemdar",
    role: "Art Director",
    image: "/team/yusufcan-alemdar.png",
    description: "Art Director & Kurucu Ortak",
  },
  {
    name: "Baransel Inal",
    role: "CIO",
    image: "/team/baransel-inal.png",
    description: "CIO & Kurucu Ortak",
  },
]

const Team = () => {
  return (
    <div className="relative min-h-screen">
      <Scene />
      <Header />
      <FloatingContactButton />

      <main className="relative z-10 pt-32 pb-24">
        <div className="container mx-auto px-6">
          <span className="text-section-label block mb-8">EKİP</span>
          <h1 className="text-display-hero text-foreground mb-8">
            ARKAMIZDA <span className="text-harbi-red">KİM VAR?</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-20">
            Dijital savaşın en deneyimli askerleri. "Hayır" diyebilen, veri
            odaklı, sonuç arayan profesyoneller.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {TEAM.map((member, index) => (
              <div
                key={member.name}
                className="group relative overflow-hidden border border-border transition-all duration-500 hover:border-primary"
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.description}`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-500" />
                </div>

                {/* Info Section */}
                <div className="p-6 bg-card">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-3xl font-display text-muted-foreground/40">
                      0{index + 1}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-primary px-2 py-1 border border-primary">
                      {member.role}
                    </span>
                  </div>
                  <h3 className="text-xl font-display uppercase text-foreground mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {member.description}
                  </p>
                </div>

                {/* Accent line */}
                <div className="h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link to="/contact" className="btn-harbi inline-block">
              EKİBE KATIL
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Team
