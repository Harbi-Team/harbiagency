import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { gsap } from "@/lib/gsap";
import { X } from "lucide-react";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Menu = ({ isOpen, onClose }: MenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuRef.current || !linksRef.current) return;

    const tl = gsap.timeline();

    if (isOpen) {
      document.body.style.overflow = "hidden";
      tl.to(menuRef.current, {
        x: 0,
        duration: 0.6,
        ease: "power3.out",
      }).fromTo(
        linksRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.3"
      );
    } else {
      document.body.style.overflow = "";
      tl.to(menuRef.current, {
        x: "100%",
        duration: 0.4,
        ease: "power3.in",
      });
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className="fixed inset-0 z-[100] bg-background translate-x-full"
      style={{ transform: "translateX(100%)" }}
    >
      <div className="h-full flex flex-col px-6 md:px-12 py-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Link
            to="/"
            onClick={onClose}
            className="text-display-small text-foreground"
          >
            {SITE_NAME}
          </Link>
          <button
            onClick={onClose}
            className="p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Close menu"
          >
            <X size={32} />
          </button>
        </div>

        {/* Navigation Links */}
        <div
          ref={linksRef}
          className="flex-1 flex flex-col justify-center items-center gap-6"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={onClose}
              className="text-display-large text-foreground hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center text-muted-foreground text-sm">
          <p>© 2025 {SITE_NAME}. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </div>
  );
};
