import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Scene } from "@/components/three/Scene"
import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className="relative min-h-screen">
      <Scene />
      <Header />

      <main className="relative z-10 pt-32 pb-24">
        <div className="container mx-auto px-6">
          <span className="text-section-label block mb-8">HAKKIMIZDA</span>
          <h1 className="text-display-hero text-foreground mb-12">
            BİZ <span className="text-primary">HARB!</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                HARB!, sıradan bir dijital ajans değil. Biz markaları görünmez
                olmaktan kurtaran, rakiplerinin önüne geçiren ve dijital dünyada
                dominasyon kuran stratejik bir güç.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                2020'den beri 150+ projeyle, markalarını dönüştürmek isteyen
                şirketlere savaş planları oluşturuyoruz.
              </p>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-display-small text-foreground mb-2">
                  VİZYON
                </h3>
                <p className="text-muted-foreground">
                  Türkiye'nin en agresif ve sonuç odaklı dijital ajansı olmak.
                </p>
              </div>
              <div className="border-l-4 border-primary/60 pl-6">
                <h3 className="text-display-small text-foreground mb-2">
                  MİSYON
                </h3>
                <p className="text-muted-foreground">
                  Her müşterimizi sektöründe lider konuma taşımak.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact" className="btn-harbi inline-block">
              BİZİMLE ÇALIŞ
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default About
