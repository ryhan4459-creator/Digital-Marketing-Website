"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Search,
  Share2,
  Mail,
  FileText,
  BarChart3,
  Smartphone,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const icons = [Search, Share2, Mail, FileText, BarChart3, Smartphone]

export function ServicesSection() {
  const { t } = useLanguage()

  return (
    <section id="services" className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            {t.services.tag}
          </p>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            {t.services.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {t.services.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, index) => {
            const Icon = icons[index]
            return (
              <Card
                key={service.title}
                className="group border-border bg-background transition-shadow hover:shadow-lg"
              >
                <CardContent className="p-8">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
