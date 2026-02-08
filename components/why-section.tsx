"use client"

import {
  TrendingUp,
  Target,
  DollarSign,
  Users,
  Clock,
  Globe,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const icons = [TrendingUp, Target, DollarSign, Users, Clock, Globe]

export function WhySection() {
  const { t } = useLanguage()

  return (
    <section id="why" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            {t.why.tag}
          </p>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            {t.why.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {t.why.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {t.why.items.map((reason, index) => {
            const Icon = icons[index]
            return (
              <div key={reason.title} className="group flex gap-5">
                <div className="flex-shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-border bg-card transition-colors group-hover:border-primary group-hover:bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <span className="text-xs font-bold text-primary">
                    {reason.number}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-foreground">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
