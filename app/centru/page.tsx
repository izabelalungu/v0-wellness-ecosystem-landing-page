import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { CentruHero } from "@/components/centru/hero"
import { CentruAbout } from "@/components/centru/about"
import { CentruSpaces } from "@/components/centru/spaces"
import { CentruServices } from "@/components/centru/services"
import { CentruVisit } from "@/components/centru/how-visit-works"
import { CentruFAQ } from "@/components/centru/faq"
import { FinalCTA } from "@/components/landing/final-cta"

export default function CentruPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <CentruHero />
      <CentruAbout />
      <CentruSpaces />
      <CentruServices />
      <CentruVisit />
      <CentruFAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}

