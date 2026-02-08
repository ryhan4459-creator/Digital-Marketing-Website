import { LanguageProvider } from "@/lib/language-context"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { WhySection } from "@/components/why-section"
import { StatsSection } from "@/components/stats-section"
import { ProcessSection } from "@/components/process-section"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhySection />
        <StatsSection />
        <ProcessSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
