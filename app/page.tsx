"use client"

import { LanguageProvider } from "@/contexts/language-context"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { StatisticsInfographic } from "@/components/statistics-infographic"
import { TimelineInfographic } from "@/components/timeline-infographic"
import { PortfolioSection } from "@/components/portfolio-section"
import { InsightsSection } from "@/components/insights-section"
import { AwardsSection } from "@/components/awards-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { NewsletterSignup } from "@/components/newsletter-signup"

export default function HomePage() {
  return (
    <LanguageProvider>
      <main className="min-h-screen overflow-hidden">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <StatisticsInfographic />
        <TimelineInfographic />
        <PortfolioSection />
        <InsightsSection />
        <AwardsSection />
        <ContactSection />
        <NewsletterSignup />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
