"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/lib/language-context"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t } = useLanguage()

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.why, href: "#why" },
    { label: t.nav.stats, href: "#stats" },
    { label: t.nav.contact, href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-bold text-primary">
          {t.nav.brand}
        </a>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Button asChild>
            <a href="#contact">{t.nav.cta}</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={t.nav.menuLabel}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 pb-6 lg:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild className="mt-4 w-full">
            <a href="#contact" onClick={() => setMobileOpen(false)}>
              {t.nav.cta}
            </a>
          </Button>
        </div>
      )}
    </header>
  )
}
