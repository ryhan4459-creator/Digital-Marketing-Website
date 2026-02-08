"use client"

import { useLanguage } from "@/lib/language-context"

export function ProcessSection() {
  const { t } = useLanguage()

  return (
    <section className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            {t.process.tag}
          </p>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            {t.process.title}
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.process.items.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < t.process.items.length - 1 && (
                <div className="absolute right-0 top-8 hidden h-px w-8 translate-x-full bg-border lg:block" />
              )}
              <div className="flex flex-col items-start">
                <span className="text-5xl font-bold text-primary/20">
                  {step.number}
                </span>
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
