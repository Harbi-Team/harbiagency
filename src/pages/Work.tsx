import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { FloatingContactButton } from "@/components/layout/FloatingContactButton"
import { Scene } from "@/components/three/Scene"
import { Link } from "react-router-dom"

const PROJECTS = [
  {
    id: 1,
    title: "NEV DİJİTAL",
    category: "Web & Mobil App",
    description: "Yenilikçi Dijital Deneyimler.",
    link: "https://nevdijital.web.app/",
  },
  {
    id: 2,
    title: "THE DIGITAL ME",
    category: "Strategy",
    description: "The Digital Me Etkinliği için Strateji ve Yazılım Çözümleri.",
    link: "http://thedigitalmeevent.com/",
  },
  {
    id: 3,
    title: "NOVA STARTUP",
    category: "Web Development",
    description: "Dijital Gökdelen.",
    link: "",
  },
  {
    id: 4,
    title: "BRAND X",
    category: "Production",
    description: "Görsel Şölen.",
    link: "",
  },
]

const Work = () => {
  return (
    <div className="relative bg-background min-h-screen">
      <Scene />
      <Header />
      <FloatingContactButton />

      <main className="relative z-10 pt-32 pb-24">
        <div className="container mx-auto px-6">
          <span className="text-section-label block mb-8">PORTFÖLİO</span>
          <h1 className="text-display-hero text-foreground mb-16">İŞLERİMİZ</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <a
                key={project.id}
                href={project.link || "#"}
                target={project.link ? "_blank" : undefined}
                rel={project.link ? "noopener noreferrer" : undefined}
                className={`group relative aspect-video bg-card border border-border overflow-hidden transition-all duration-500 hover:border-primary ${
                  project.link ? "cursor-pointer" : "cursor-default"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-primary text-sm uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-display-medium text-foreground mt-2">
                    {project.title}
                  </h3>
                  <p className="text-primary/70 text-sm mt-2">
                    {project.description}
                  </p>
                </div>
                {project.link && (
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-foreground text-sm uppercase tracking-wider">
                      PROJEYİ İNCELE →
                    </span>
                  </div>
                )}
              </a>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/contact" className="btn-harbi inline-block">
              PROJENİ BAŞLAT
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Work
