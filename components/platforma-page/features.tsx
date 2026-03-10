"use client"

import { FeatureGrid, FeatureCard } from "@/components/shared/feature-grid"
import { SectionHeader } from "@/components/shared/section-header"
import { LayoutDashboard, LibraryIcon, TrendingUp, Scan, Apple, CreditCard } from "lucide-react"

const features = [
  {
    icon: <LayoutDashboard className="w-7 h-7 text-primary" />,
    title: "Dashboard personal",
    description: "Vezi toate activitățile, programele și progresul într-un singur loc."
  },
  {
    icon: <LibraryIcon className="w-7 h-7 text-primary" />,
    title: "Workout Library",
    description: "Bibliotecă de exerciții și programe de antrenament."
  },
  {
    icon: <TrendingUp className="w-7 h-7 text-primary" />,
    title: "Progres și statistici",
    description: "Grafice și monitorizarea evoluției în timp."
  },
  {
    icon: <Scan className="w-7 h-7 text-primary" />,
    title: "Evaluare posturală",
    description: "Analiză automată a posturii prin computer vision."
  },
  {
    icon: <Apple className="w-7 h-7 text-primary" />,
    title: "Gestionare nutriție",
    description: "Acces la meniuri și comenzi de mese."
  },
  {
    icon: <CreditCard className="w-7 h-7 text-primary" />,
    title: "Management abonamente",
    description: "Administrarea abonamentelor pentru servicii și programe."
  },
]

export function PlatformaFeatures() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Ce poți face în Platforma"
          description="Toate instrumentele necesare pentru a-ți gestiona sănătatea și progresul."
        />

        <FeatureGrid columns={3}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index}
            />
          ))}
        </FeatureGrid>
      </div>
    </section>
  )
}
