import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { ServiciiHero } from "@/components/servicii-page/hero"
import { EcosystemSection } from "@/components/servicii-page/ecosystem"
import { HowItWorksSection } from "@/components/servicii-page/how-it-works"
import { ProgramsSection } from "@/components/servicii-page/programs"
import { WhyStaiDreptSection } from "@/components/servicii-page/why-stai-drept"
import { ForWhomSection } from "@/components/servicii-page/for-whom"
import { BenefitsSection } from "@/components/servicii-page/benefits"
import { FinalCTAServiceii } from "@/components/servicii-page/final-cta"

export default function ServiciiPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ServiciiHero />
      <EcosystemSection />
      <HowItWorksSection />
      <ProgramsSection />
      <WhyStaiDreptSection />
      <ForWhomSection />
      <BenefitsSection />
      <FinalCTAServiceii />
      <Footer />
    </main>
  )
}
