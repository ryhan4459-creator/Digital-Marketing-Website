"use client"

import { useLanguage } from "@/lib/language-context"
import { Languages } from "lucide-react"

export function LanguageSwitcher() {
  const { locale, toggleLocale } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggleLocale}
      className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary"
      aria-label={
        locale === "bn" ? "Switch to English" : "বাংলায় পরিবর্তন করুন"
      }
    >
      <Languages className="h-4 w-4 transition-colors group-hover:text-primary" />
      <span className="hidden sm:inline">
        {locale === "bn" ? "English" : "বাংলা"}
      </span>
      <span className="sm:hidden">{locale === "bn" ? "EN" : "বা"}</span>
    </button>
  )
}
