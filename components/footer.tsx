"use client"

import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border bg-foreground py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-primary">
              {t.footer.brand}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/60">
              {t.footer.description}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary-foreground/80">
              {t.footer.navTitle}
            </h4>
            <ul className="flex flex-col gap-3">
              {t.footer.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/50 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary-foreground/80">
              {t.footer.servicesTitle}
            </h4>
            <ul className="flex flex-col gap-3">
              {t.footer.servicesList.map((service) => (
                <li key={service}>
                  <span className="text-sm text-primary-foreground/50">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary-foreground/80">
              {t.footer.contactTitle}
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-primary-foreground/50">
              <li>ryhan4459@gmail.com</li>
              <li>+880 1943562390</li>
              <li>{t.contact.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-sm text-primary-foreground/40">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
