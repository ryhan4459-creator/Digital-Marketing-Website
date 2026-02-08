"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
          {t.hero.tag}
        </p>
        <h1 className="text-balance text-4xl font-bold leading-tight text-primary-foreground md:text-6xl lg:text-7xl">
          {t.hero.title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
          {t.hero.description}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild className="text-base">
            <a href="#services">
              {t.hero.ctaPrimary}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-primary-foreground/30 bg-transparent text-base text-primary-foreground hover:bg-primary-foreground/10"
          >
            <a href="#about">{t.hero.ctaSecondary}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
