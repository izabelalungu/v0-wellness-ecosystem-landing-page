import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { NutrieVisualIntro } from "@/components/nutritie/visual-intro"
import { NutrieFeaturedNutrition } from "@/components/nutritie/featured-nutrition"
import { NutrieTrustStrip } from "@/components/nutritie/trust-strip"
import { NutrieMenuCards } from "@/components/nutritie/menu-cards"
import { NutrieServicesBenefits } from "@/components/nutritie/services-benefits"
import { NutrieWeeklyOffer } from "@/components/nutritie/weekly-offer"
import { NutrieSubscriptionBanner } from "@/components/nutritie/subscription-banner"
import { FinalCTA } from "@/components/landing/final-cta"

export default function NutriePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <NutrieVisualIntro />
      <NutrieFeaturedNutrition />
      <NutrieTrustStrip />
      <NutrieMenuCards />
      <NutrieServicesBenefits />
      <NutrieWeeklyOffer />
      <NutrieSubscriptionBanner />
      <FinalCTA />
      <Footer />
    </main>
  )
}

