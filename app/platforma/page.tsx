import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { PlatformaTrustBar } from "@/components/platforma-page/trust-bar"
import { PlatformaProductHero } from "@/components/platforma-page/product-hero"
import { PlatformaDarkFeatures } from "@/components/platforma-page/dark-features"
import { PlatformaAnalyticsSection } from "@/components/platforma-page/analytics-section"
import { PlatformaComparisonTiers } from "@/components/platforma-page/comparison-tiers"
import { PlatformaTestimonialSection } from "@/components/platforma-page/testimonial-section"
import { FinalCTA } from "@/components/landing/final-cta"

export default function PlatformaPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PlatformaTrustBar />
      <PlatformaProductHero />
      <PlatformaDarkFeatures />
      <PlatformaAnalyticsSection />
      <PlatformaComparisonTiers />
      <PlatformaTestimonialSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
