import { useState } from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Scene } from "@/components/three/Scene"
import { toast } from "sonner"
import { pb } from "@/lib/pocketbase"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await pb.collection("harbiagencycom_contact").create({
        name: formData.name,
        company: formData.company,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
      })

      toast.success("Mesajınız alındı! En kısa sürede dönüş yapacağız.")
      setFormData({ name: "", company: "", phone: "", email: "", message: "" })
    } catch (error) {
      console.error("Form gönderim hatası:", error)
      toast.error("Bir hata oluştu. Lütfen tekrar deneyin.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative min-h-screen">
      <Scene />
      <Header />

      <main className="relative z-10 pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left side */}
            <div>
              <span className="text-section-label block mb-8">İLETİŞİM</span>
              <h1 className="text-display-hero text-foreground mb-8">
                KONUŞALIM
              </h1>
              <p className="text-xl text-muted-foreground mb-12">
                Projeniz için strateji görüşmesi yapmak ister misiniz? Formu
                doldurun, 24 saat içinde dönelim.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-display-small text-foreground mb-2">
                    E-POSTA
                  </h3>
                  <a
                    href="mailto:harbiagency@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    harbiagency@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="text-display-small text-foreground mb-2">
                    TELEFON
                  </h3>
                  <a
                    href="tel:+902121234567"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +90 212 123 45 67
                  </a>
                </div>
                <div>
                  <h3 className="text-display-small text-foreground mb-2">
                    ADRES
                  </h3>
                  <p className="text-muted-foreground">
                    Levent, İstanbul, Türkiye
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="bg-card border border-border p-8 md:p-12">
              <h2 className="text-display-medium text-foreground mb-8">
                BAŞVURU FORMU
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Adınız Soyadınız *"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full bg-transparent border-b border-border pb-4 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Şirket Adı"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-border pb-4 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Telefon"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-border pb-4 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="E-Posta Adresiniz *"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full bg-transparent border-b border-border pb-4 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Mesajınız"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className="w-full bg-transparent border-b border-border pb-4 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-harbi w-full text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "GÖNDERİLİYOR..." : "GÖNDER"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Contact
