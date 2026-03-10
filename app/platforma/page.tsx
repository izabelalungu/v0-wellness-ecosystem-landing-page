import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { PlatformaHero } from "@/components/platforma-page/hero"
import { PlatformaOverview } from "@/components/platforma-page/overview"
import { PlatformaFeatures } from "@/components/platforma-page/features"
import { PlatformaAI } from "@/components/platforma-page/ai-evaluation"
import { PlatformaProgress } from "@/components/platforma-page/progress"
import { PlatformaIntegration } from "@/components/platforma-page/integration"
import { PlatformaHowItWorks } from "@/components/platforma-page/how-it-works"
import { PlatformaForWhom } from "@/components/platforma-page/for-whom"
import { PlatformaFinalCTA } from "@/components/platforma-page/final-cta"

export default function PlatformaPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PlatformaHero />
      <PlatformaOverview />
      <PlatformaFeatures />
      <PlatformaAI />
      <PlatformaProgress />
      <PlatformaIntegration />
      <PlatformaHowItWorks />
      <PlatformaForWhom />
      <PlatformaFinalCTA />
      <Footer />
    </main>
  )
}
