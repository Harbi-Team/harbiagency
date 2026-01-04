import { Link } from "react-router-dom"
import { SITE_NAME, NAV_LINKS, SITE_CONFIG } from "@/lib/constants"

export const Footer = () => {
  return (
    <footer className="relative z-10 bg-background border-t border-border">
      <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <img
                src="/harbi/harbi_logo.png"
                alt="HARB!"
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Dijital dönüşümde stratejik ortağınız.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-display-small text-foreground">NAVİGASYON</h4>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-display-small text-foreground">İLETİŞİM</h4>
            <div className="space-y-2 text-muted-foreground text-sm">
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="block hover:text-foreground transition-colors"
              >
                {SITE_CONFIG.contact.email}
              </a>
              <a
                href={`tel:${SITE_CONFIG.contact.phone.replace(/\s/g, "")}`}
                className="block hover:text-foreground transition-colors"
              >
                {SITE_CONFIG.contact.phoneDisplay}
              </a>
              <p>{SITE_CONFIG.contact.address}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © 2025 {SITE_NAME}. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6 text-muted-foreground text-xs">
            {SITE_CONFIG.social.instagram && (
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                Instagram
              </a>
            )}
            {SITE_CONFIG.social.linkedin && (
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
            )}
            {SITE_CONFIG.social.twitter && (
              <a
                href={SITE_CONFIG.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                Twitter
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
