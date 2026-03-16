import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { ServiciiHero } from "@/components/servicii-page/hero"
import { IntegratedSolutionSection } from "@/components/servicii-page/integrated-solution"
import { StepsProcessSection } from "@/components/servicii-page/steps-process"
import { ServicesCardsSection } from "@/components/servicii-page/services-cards"
import { WhyStaiDreptSection } from "@/components/servicii-page/why-stai-drept"
import { ForWhomSection } from "@/components/servicii-page/for-whom"
import { BenefitsSection } from "@/components/servicii-page/benefits"
import { FinalCTAServiceii } from "@/components/servicii-page/final-cta"

export default function ServiciiPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ServiciiHero />
      <IntegratedSolutionSection />
      <StepsProcessSection />
      <ServicesCardsSection />
      <WhyStaiDreptSection />
      <ForWhomSection />
      <BenefitsSection />
      <FinalCTAServiceii />
      <Footer />
    </main>
  )
}
