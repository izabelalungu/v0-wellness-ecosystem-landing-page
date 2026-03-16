import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { CentruHero } from "@/components/centru/hero"
import { CentruAudienceTrust } from "@/components/centru/audience-trust"
import { CentruThreePillars } from "@/components/centru/three-pillars"
import { CentruExperienceStart } from "@/components/centru/experience-start"
import { CentruStatsHighlight } from "@/components/centru/stats-highlight"
import { CentruCenterExperience } from "@/components/centru/center-experience"
import { CentruTestimonialCase } from "@/components/centru/testimonial-case"
import { CentruFAQ } from "@/components/centru/faq"
import { FinalCTA } from "@/components/landing/final-cta"

export default function CentruPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <CentruHero />
      <CentruAudienceTrust />
      <CentruThreePillars />
      <CentruExperienceStart />
      <CentruStatsHighlight />
      <CentruCenterExperience />
      <CentruTestimonialCase />
      <CentruFAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}

