import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { CentruHero } from "@/components/centru-page/hero"
import { CentruAbout } from "@/components/centru-page/about"
import { CentruZones } from "@/components/centru-page/zones"
import { CentruServices } from "@/components/centru-page/services"
import { CentruRecoveryProcess } from "@/components/centru-page/recovery-process"
import { CentruFacilities } from "@/components/centru-page/facilities"
import { CentruIntegration } from "@/components/centru-page/integration"
import { CentruForWhom } from "@/components/centru-page/for-whom"
import { CentruFinalCTA } from "@/components/centru-page/final-cta"

export default function CentruPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <CentruHero />
      <CentruAbout />
      <CentruZones />
      <CentruServices />
      <CentruRecoveryProcess />
      <CentruFacilities />
      <CentruIntegration />
      <CentruForWhom />
      <CentruFinalCTA />
      <Footer />
    </main>
  )
}

