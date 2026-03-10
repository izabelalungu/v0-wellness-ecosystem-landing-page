import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { NutrieHero } from "@/components/nutritie/hero"
import { NutrieAbout } from "@/components/nutritie/about"
import { NutrieHowItWorks } from "@/components/nutritie/how-it-works"
import { NutrieMealExamples } from "@/components/nutritie/meal-examples"
import { NutrieBenefits } from "@/components/nutritie/benefits"
import { NutrieIntegration } from "@/components/nutritie/integration"
import { NutrieDeliveryOptions } from "@/components/nutritie/delivery-options"
import { NutrieForWhom } from "@/components/nutritie/for-whom"
import { NutrieFinalCTA } from "@/components/nutritie/final-cta"

export default function NutriePagee() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <NutrieHero />
      <NutrieAbout />
      <NutrieHowItWorks />
      <NutrieMealExamples />
      <NutrieBenefits />
      <NutrieIntegration />
      <NutrieDeliveryOptions />
      <NutrieForWhom />
      <NutrieFinalCTA />
      <Footer />
    </main>
  )
}

