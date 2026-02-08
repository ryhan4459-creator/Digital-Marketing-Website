"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useLanguage } from "@/lib/language-context"

export function FaqSection() {
  const { t } = useLanguage()

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            {t.faq.tag}
          </p>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            {t.faq.title}
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {t.faq.items.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base font-semibold text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
