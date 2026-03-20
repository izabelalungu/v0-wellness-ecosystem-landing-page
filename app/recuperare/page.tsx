import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { RecuperareHero } from "@/components/recuperare/hero"
import { RecuperareForWhom } from "@/components/recuperare/for-whom"
import { RecuperareMethodConcept } from "@/components/recuperare/method-concept"
import { RecuperareSportsCredibility } from "@/components/recuperare/sports-credibility"
import { RecuperareServicesIncluded } from "@/components/recuperare/services-included"
import { RecuperareEquipment } from "@/components/recuperare/equipment"
import { RecuperareTeam } from "@/components/recuperare/team"
import { RecuperareHowToStart } from "@/components/recuperare/how-to-start"
import { RecuperareTestimonials } from "@/components/recuperare/testimonials"
import { RecuperareFAQ } from "@/components/recuperare/faq"
import { RecuperareFinalCTA } from "@/components/recuperare/final-cta"

export default function RecuperarePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <RecuperareHero />
      <RecuperareForWhom />
      <RecuperareMethodConcept />
      <RecuperareSportsCredibility />
      <RecuperareServicesIncluded />
      <RecuperareEquipment />
      <RecuperareTeam />
      <RecuperareHowToStart />
      <RecuperareTestimonials />
      <RecuperareFAQ />
      <RecuperareFinalCTA />
      <Footer />
    </main>
  )
}
