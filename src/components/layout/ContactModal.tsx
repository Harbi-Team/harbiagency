import { useState, useEffect } from "react"
import { X, ArrowRight, ArrowLeft } from "lucide-react"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  name: string
  surname: string
  company: string
  phone: string
  email: string
  message: string
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    surname: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  })
  const navigate = useNavigate()

  useEffect(() => {
    if (isOpen) {
      // Prevent scroll on body
      document.body.style.overflow = "hidden"
      document.body.style.position = "fixed"
      document.body.style.width = "100%"
      document.body.style.top = "0"
    } else {
      // Restore scroll
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.width = ""
      document.body.style.top = ""
    }
    return () => {
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.width = ""
      document.body.style.top = ""
    }
  }, [isOpen])

  const handleNext = () => {
    if (step === 1 && (!formData.name || !formData.surname)) {
      toast.error("Lütfen isim ve soyisim giriniz")
      return
    }
    if (step === 2 && (!formData.phone || !formData.email)) {
      toast.error("Lütfen telefon ve e-posta giriniz")
      return
    }
    setStep(step + 1)
  }

  const handleBack = () => {
    setStep(step - 1)
  }

  const handleGoToContact = () => {
    if (!formData.message) {
      toast.error("Lütfen mesajınızı yazınız")
      return
    }

    // Navigate to contact page with form data
    navigate("/contact", {
      state: {
        name: formData.name,
        surname: formData.surname,
        company: formData.company,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
      },
    })
    onClose()

    // Reset form after navigation
    setTimeout(() => {
      setFormData({
        name: "",
        surname: "",
        company: "",
        phone: "",
        email: "",
        message: "",
      })
      setStep(1)
    }, 300)
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setStep(1)
      setFormData({
        name: "",
        surname: "",
        company: "",
        phone: "",
        email: "",
        message: "",
      })
    }, 300)
  }

  if (!isOpen) return null

  const getTitle = () => {
    if (step === 1) return "Merhaba! Sizinle tanışalım"
    if (formData.name && formData.surname) {
      return `Merhaba ${formData.name} ${formData.surname}!`
    }
    return "İletişim Formu"
  }

  return (
    <div className="fixed inset-0 z-[9998] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black"
        onClick={handleClose}
        style={{ touchAction: "none" }}
      />

      {/* Modal Container */}
      <div
        className="relative w-full max-w-2xl mx-4 bg-black shadow-2xl z-[9999] max-h-[90vh] overflow-y-auto"
        style={{ touchAction: "auto" }}
      >
        {/* Header */}
        <div className="relative p-6 md:p-8 border-b border-white/10">
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors text-white"
          >
            <X className="w-5 h-5" />
          </button>

          <h2 className="text-2xl md:text-3xl font-bold pr-12 text-white">
            {getTitle()}
          </h2>

          {/* Step Indicator */}
          <div className="flex gap-2 mt-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                  i <= step ? "bg-primary" : "bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 min-h-[400px] flex flex-col">
          {/* Step 1: Name & Surname */}
          {step === 1 && (
            <div className="space-y-8 flex-1">
              <div>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/20 focus:border-primary focus:outline-none transition-all text-lg text-white placeholder:text-white/40 relative z-10"
                  placeholder="Adınız"
                  autoFocus
                  autoComplete="off"
                  inputMode="text"
                />
              </div>

              <div>
                <input
                  type="text"
                  value={formData.surname}
                  onChange={(e) =>
                    setFormData({ ...formData, surname: e.target.value })
                  }
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/20 focus:border-primary focus:outline-none transition-all text-lg text-white placeholder:text-white/40 relative z-10"
                  placeholder="Soyadınız"
                  autoComplete="off"
                  inputMode="text"
                />
              </div>
            </div>
          )}

          {/* Step 2: Contact Info */}
          {step === 2 && (
            <div className="space-y-8 flex-1">
              <div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/20 focus:border-primary focus:outline-none transition-all text-lg text-white placeholder:text-white/40 relative z-10"
                  placeholder="E-Posta Adresiniz"
                  autoFocus
                  autoComplete="off"
                  inputMode="email"
                />
              </div>

              <div>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/20 focus:border-primary focus:outline-none transition-all text-lg text-white placeholder:text-white/40 relative z-10"
                  placeholder="Telefon Numaranız"
                  autoComplete="off"
                  inputMode="tel"
                />
              </div>
            </div>
          )}

          {/* Step 3: Company & Message */}
          {step === 3 && (
            <div className="space-y-8 flex-1 flex flex-col">
              <div>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/20 focus:border-primary focus:outline-none transition-all text-lg text-white placeholder:text-white/40 relative z-10"
                  placeholder="Firma Adı (Opsiyonel)"
                  autoFocus
                  autoComplete="off"
                  inputMode="text"
                />
              </div>

              <div className="flex-1 flex flex-col">
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full flex-1 min-h-[180px] px-0 py-3 bg-transparent border-0 border-b border-white/20 focus:border-primary focus:outline-none transition-all resize-none text-lg text-white placeholder:text-white/40 relative z-10"
                  placeholder="Mesajınız"
                  autoComplete="off"
                />
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8 pt-6 border-t border-white/10">
            {step > 1 && (
              <button
                onClick={handleBack}
                className="flex items-center gap-2 px-6 py-3 border border-white/20 hover:bg-white/5 transition-colors text-white"
              >
                <ArrowLeft className="w-4 h-4" />
                Geri
              </button>
            )}

            {step < 3 ? (
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors ml-auto"
              >
                İleri
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleGoToContact}
                className="px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors ml-auto"
              >
                İletişim Sayfasına Git →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
