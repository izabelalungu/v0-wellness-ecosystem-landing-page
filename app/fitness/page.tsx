import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { FitnessHero } from "@/components/fitness/hero"
import { FitnessPremiumSpace } from "@/components/fitness/premium-space"
import { FitnessFirstVisit } from "@/components/fitness/first-visit"
import { FitnessWhyUs } from "@/components/fitness/why-stai-drept"
import { FitnessFacilities } from "@/components/fitness/facilities"
import { FitnessMemberships } from "@/components/fitness/memberships"
import { FitnessTrainers } from "@/components/fitness/trainers"
import { FitnessSportsCredibility } from "@/components/fitness/sports-credibility"
import { FitnessTestimonials } from "@/components/fitness/testimonials"
import { FitnessFAQ } from "@/components/fitness/faq"
import { FitnessFinalCTA } from "@/components/fitness/final-cta"

export const metadata = {
  title: "Fitness | STAI DREPT — Sală Premium Râmnicu Vâlcea",
  description: "350 mp de echipamente premium, antrenori certificați și saună inclusă. Cea mai performantă sală din județul Vâlcea, parte din ecosistemul integrat STAI DREPT.",
}

export default function FitnessPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <FitnessHero />
      <FitnessPremiumSpace />
      <FitnessFirstVisit />
      <FitnessWhyUs />
      <FitnessFacilities />
      <FitnessMemberships />
      <FitnessTrainers />
      <FitnessSportsCredibility />
      <FitnessTestimonials />
      <FitnessFAQ />
      <FitnessFinalCTA />
      <Footer />
    </main>
  )
}
