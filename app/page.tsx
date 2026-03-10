import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { SocialProof } from "@/components/landing/social-proof"
import { AIPostureEvaluation } from "@/components/landing/ai-posture-evaluation"
import { EcosystemOverview } from "@/components/landing/ecosystem-overview"
import { ServicesOverview } from "@/components/landing/services-overview"
import { HowItWorks } from "@/components/landing/how-it-works"
import { PlatformPreview } from "@/components/landing/platform-preview"
import { Benefits } from "@/components/landing/benefits"
import { Testimonials } from "@/components/landing/testimonials"
import { FAQ } from "@/components/landing/faq"
import { FinalCTA } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <SocialProof />
      <AIPostureEvaluation />
      <EcosystemOverview />
      <ServicesOverview />
      <HowItWorks />
      <PlatformPreview />
      <Benefits />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
