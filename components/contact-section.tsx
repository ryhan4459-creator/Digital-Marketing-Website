"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Info */}
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
              {t.contact.tag}
            </p>
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
              {t.contact.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {t.contact.subtitle}
            </p>

            <div className="mt-10 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {t.contact.emailLabel}
                  </p>
                  <p className="font-semibold text-foreground">
                    ryhan4459@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {t.contact.phoneLabel}
                  </p>
                  <p className="font-semibold text-foreground">
                    +880 1943562390
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {t.contact.addressLabel}
                  </p>
                  <p className="font-semibold text-foreground">
                    {t.contact.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-lg border border-border bg-background p-8">
            <h3 className="mb-6 text-xl font-bold text-foreground">
              {t.contact.formTitle}
            </h3>
            <form className="flex flex-col gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  {t.contact.nameLabel}
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder={t.contact.namePlaceholder}
                  className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  {t.contact.emailFieldLabel}
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder={t.contact.emailPlaceholder}
                  className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  {t.contact.phoneFieldLabel}
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder={t.contact.phonePlaceholder}
                  className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  {t.contact.messageLabel}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full resize-none rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <Button type="submit" size="lg" className="w-full text-base">
                {t.contact.submitButton}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
