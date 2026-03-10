import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { PlatformaHero } from "@/components/platforma/hero"
import { PlatformaOverview } from "@/components/platforma/overview"
import { PlatformaFeatures } from "@/components/platforma/features"
import { PlatformaShowcase } from "@/components/platforma/showcase"
import { PlatformaAI } from "@/components/platforma/ai-integration"
import { PlatformaBenefits } from "@/components/platforma/benefits"
import { PlatformaFAQ } from "@/components/platforma/faq"
import { FinalCTA } from "@/components/landing/final-cta"

export default function PlatformaPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PlatformaHero />
      <PlatformaOverview />
      <PlatformaFeatures />
      <PlatformaShowcase />
      <PlatformaAI />
      <PlatformaBenefits />
      <PlatformaFAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
