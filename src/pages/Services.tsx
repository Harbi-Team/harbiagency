import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Scene } from "@/components/three/Scene"
import { SERVICES } from "@/lib/constants"
import { Link } from "react-router-dom"

const Services = () => {
  return (
    <div className="relative min-h-screen">
      <Scene />
      <Header />

      <main className="relative z-10 pt-32 pb-24">
        <div className="container mx-auto px-6">
          <span className="text-section-label block mb-8">HİZMETLER</span>
          <h1 className="text-display-hero text-foreground mb-8">ARAÇLAR</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-16">
            Dijital savaşta ihtiyacınız olan tüm silahlar burada. Seçiminizi
            yapın.
          </p>

          <div className="space-y-0">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="group border-b border-border py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 cursor-pointer transition-all duration-500 hover:pl-8"
              >
                <div className="flex items-center gap-8">
                  <span className="text-display-small text-muted-foreground">
                    0{index + 1}
                  </span>
                  <h3 className="text-display-medium text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground md:max-w-md">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-24 p-12 bg-primary text-center">
            <h2 className="text-display-medium text-primary-foreground mb-6">
              HANGİ SİLAHI SEÇECEKSİN?
            </h2>
            <Link
              to="/contact"
              className="btn-harbi-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary inline-block"
            >
              STRATEJİ GÖRÜŞME
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Services
