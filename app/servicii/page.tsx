import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { ServiciiHero } from "@/components/servicii/hero"
import { ServiciiGrid } from "@/components/servicii/services-grid"
import { IntegrationFlow } from "@/components/servicii/integration-flow"
import { ServiciiOutcomes } from "@/components/servicii/outcomes"
import { ServiciiFAQ } from "@/components/servicii/faq"
import { FinalCTA } from "@/components/landing/final-cta"

export default function ServiciiPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ServiciiHero />
      <ServiciiGrid />
      <IntegrationFlow />
      <ServiciiOutcomes />
      <ServiciiFAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
