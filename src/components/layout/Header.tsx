import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { NAV_LINKS, SITE_NAME } from "@/lib/constants"
import { Menu } from "./Menu"

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-10">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="hover:opacity-80 transition-opacity duration-300"
            aria-label="Ana Sayfa"
          >
            <img
              src="/harbi/harbi_logo.png"
              alt="HARB! Dijital Ajans Logosu"
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex flex-col gap-1.5 p-2 group"
            aria-label="Menüyü Aç"
            aria-expanded={isMenuOpen}
          >
            <span className="w-8 h-0.5 bg-foreground transition-all duration-300 group-hover:bg-primary" />
            <span className="w-8 h-0.5 bg-foreground transition-all duration-300 group-hover:bg-primary" />
            <span className="w-6 h-0.5 bg-foreground transition-all duration-300 group-hover:w-8 group-hover:bg-primary" />
          </button>
        </nav>
      </header>

      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}
