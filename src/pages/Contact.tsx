import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Scene } from "@/components/three/Scene"
import { toast } from "sonner"
import { pb } from "@/lib/pocketbase"
import { SITE_CONFIG } from "@/lib/constants"
import { Instagram, Linkedin, Twitter, Facebook, Youtube } from "lucide-react"

const Contact = () => {
  const location = useLocation()
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Auto-fill form from navigation state
  useEffect(() => {
    if (location.state) {
      const { name, surname, company, phone, email, message } =
        location.state as any
      setFormData({
        name: name && surname ? `${name} ${surname}` : name || "",
        company: company || "",
        phone: phone || "",
        email: email || "",
        message: message || "",
      })

      if (name || email) {
        toast.success(
          `Hoş geldiniz ${
            name || ""
          }! Formunuz hazır, inceleyip gönderebilirsiniz.`
        )
      }
    }
  }, [location.state])

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
              <span
                className="text-section-label block mb-4"
                style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.8)" }}
              >
                İLETİŞİM
              </span>
              <h1
                className="text-display-hero text-foreground mb-4"
                style={{
                  textShadow:
                    "0 4px 20px rgba(0, 0, 0, 0.9), 0 0 40px rgba(255, 221, 0, 0.3)",
                }}
              >
                KONUŞALIM
              </h1>
              <p
                className="text-xl text-muted-foreground mb-8"
                style={{ textShadow: "0 2px 15px rgba(0, 0, 0, 0.8)" }}
              >
                Projeniz için strateji görüşmesi yapmak ister misiniz? Formu
                doldurun, 24 saat içinde dönelim.
              </p>

              <div className="space-y-6">
                <div>
                  <h3
                    className="text-display-small text-foreground"
                    style={{ textShadow: "0 3px 15px rgba(0, 0, 0, 0.8)" }}
                  >
                    E-POSTA
                  </h3>
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.8)" }}
                  >
                    {SITE_CONFIG.contact.email}
                  </a>
                </div>
                <div>
                  <h3
                    className="text-display-small text-foreground"
                    style={{ textShadow: "0 3px 15px rgba(0, 0, 0, 0.8)" }}
                  >
                    TELEFON
                  </h3>
                  <a
                    href={`tel:${SITE_CONFIG.contact.phone.replace(/\s/g, "")}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.8)" }}
                  >
                    {SITE_CONFIG.contact.phoneDisplay}
                  </a>
                </div>
                <div>
                  <h3
                    className="text-display-small text-foreground"
                    style={{ textShadow: "0 3px 15px rgba(0, 0, 0, 0.8)" }}
                  >
                    ADRES
                  </h3>
                  <p
                    className="text-muted-foreground"
                    style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.8)" }}
                  >
                    {SITE_CONFIG.contact.addressFull}
                  </p>
                </div>

                {/* Social Media Links */}
                <div>
                  <h3
                    className="text-display-small text-foreground mb-4"
                    style={{ textShadow: "0 3px 15px rgba(0, 0, 0, 0.8)" }}
                  >
                    SOSYAL MEDYA
                  </h3>
                  <div className="flex gap-4">
                    {SITE_CONFIG.social.instagram && (
                      <a
                        href={SITE_CONFIG.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                      >
                        <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </a>
                    )}
                    {SITE_CONFIG.social.linkedin && (
                      <a
                        href={SITE_CONFIG.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                      >
                        <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </a>
                    )}
                    {SITE_CONFIG.social.twitter && (
                      <a
                        href={SITE_CONFIG.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                      >
                        <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </a>
                    )}
                    {SITE_CONFIG.social.facebook && (
                      <a
                        href={SITE_CONFIG.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                      >
                        <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </a>
                    )}
                    {SITE_CONFIG.social.youtube && (
                      <a
                        href={SITE_CONFIG.social.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                      >
                        <Youtube className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Form */}
            <div
              className="bg-card border border-border p-8 md:p-12"
              style={{ backgroundColor: "rgba(13, 13, 13, 0.95)" }}
            >
              <h2
                className="text-display-medium text-foreground mb-8"
                style={{ textShadow: "0 3px 15px rgba(0, 0, 0, 0.8)" }}
              >
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
