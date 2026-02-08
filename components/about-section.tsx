"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Text Content */}
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
              {t.about.tag}
            </p>
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
              {t.about.title}
            </h2>
            <div className="mt-6 flex flex-col gap-5 text-base leading-relaxed text-muted-foreground">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/about-digital.jpg"
              alt={t.about.imgAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
