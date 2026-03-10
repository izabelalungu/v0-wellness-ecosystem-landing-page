import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { NutrieHero } from "@/components/nutritie/hero"
import { NutrieOverview } from "@/components/nutritie/overview"
import { NutrieProcess } from "@/components/nutritie/process"
import { NutrieFeatures } from "@/components/nutritie/features"
import { NutrieSampleMenu } from "@/components/nutritie/sample-menu"
import { NutriePlatformIntegration } from "@/components/nutritie/platform-integration"
import { NutrieWhy } from "@/components/nutritie/why-nutrition"
import { NutrieFAQ } from "@/components/nutritie/faq"
import { FinalCTA } from "@/components/landing/final-cta"

export default function NutriePagee() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <NutrieHero />
      <NutrieOverview />
      <NutrieProcess />
      <NutrieFeatures />
      <NutrieSampleMenu />
      <NutriePlatformIntegration />
      <NutrieWhy />
      <NutrieFAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
