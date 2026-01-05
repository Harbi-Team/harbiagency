import { MessageCircle } from "lucide-react"
import { useContactModal } from "@/contexts/ContactModalContext"

export const FloatingContactButton = () => {
  const { openModal } = useContactModal()

  return (
    <button
      onClick={openModal}
      className="fixed bottom-8 right-8 z-50 group flex items-center gap-3 px-6 py-4 bg-primary text-primary-foreground rounded-full shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
      aria-label="İletişime Geç"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="font-semibold hidden md:inline">İletişime Geç</span>
    </button>
  )
}
