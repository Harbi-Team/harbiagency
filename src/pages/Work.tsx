import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Scene } from "@/components/three/Scene"
import { Link } from "react-router-dom"

const PROJECTS = [
  {
    id: 1,
    title: "AI CAMPUS",
    category: "Branding & Web",
    description: "Teknoloji Üssü.",
  },
  {
    id: 2,
    title: "THE DIGITAL",
    category: "Strategy",
    description: "Dominasyon: Global.",
  },
  {
    id: 3,
    title: "NOVA STARTUP",
    category: "Web Development",
    description: "Dijital Gökdelen.",
  },
  {
    id: 4,
    title: "BRAND X",
    category: "Production",
    description: "Görsel Şölen.",
  },
]

const Work = () => {
  return (
    <div className="relative bg-background min-h-screen">
      <Scene />
      <Header />

      <main className="relative z-10 pt-32 pb-24">
        <div className="container mx-auto px-6">
          <span className="text-section-label block mb-8">PORTFÖLİO</span>
          <h1 className="text-display-hero text-foreground mb-16">İŞLERİMİZ</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className="group relative aspect-video bg-card border border-border overflow-hidden cursor-pointer transition-all duration-500 hover:border-primary"
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
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-foreground text-sm uppercase tracking-wider">
                    PROJEYİ İNCELE →
                  </span>
                </div>
              </div>
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
