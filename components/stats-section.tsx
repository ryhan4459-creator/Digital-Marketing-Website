"use client"

import { useEffect, useState, useRef } from "react"
import { useLanguage } from "@/lib/language-context"

function useCountUp(target: number, inView: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let current = 0
    const increment = target / 60
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 25)
    return () => clearInterval(timer)
  }, [target, inView])

  return count
}

function StatCard({
  stat,
  inView,
}: {
  stat: { value: number; suffix: string; label: string }
  inView: boolean
}) {
  const count = useCountUp(stat.value, inView)
  return (
    <div className="text-center">
      <p className="text-4xl font-bold text-primary-foreground md:text-5xl">
        {count}
        <span className="text-primary">{stat.suffix}</span>
      </p>
      <p className="mt-3 text-sm text-primary-foreground/70">{stat.label}</p>
    </div>
  )
}

export function StatsSection() {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="stats" ref={ref} className="bg-foreground py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            {t.stats.tag}
          </p>
          <h2 className="text-balance text-3xl font-bold text-primary-foreground md:text-4xl">
            {t.stats.title}
          </h2>
        </div>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {t.stats.items.map((stat) => (
            <StatCard key={stat.label} stat={stat} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
