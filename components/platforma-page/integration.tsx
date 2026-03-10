"use client"

import { FeatureGrid, FeatureCard } from "@/components/shared/feature-grid"
import { SectionHeader } from "@/components/shared/section-header"
import { Dumbbell, Activity, UtensilsCrossed } from "lucide-react"

const integrations = [
  {
    icon: <Dumbbell className="w-7 h-7 text-primary" />,
    title: "Antrenamente",
    description: "Gestionarea programelor și sesiunilor de antrenament."
  },
  {
    icon: <Activity className="w-7 h-7 text-primary" />,
    title: "Recuperare",
    description: "Istoricul terapiilor și programările pentru recuperare."
  },
  {
    icon: <UtensilsCrossed className="w-7 h-7 text-primary" />,
    title: "Nutriție",
    description: "Comenzi de mese și planuri alimentare."
  },
]

export function PlatformaIntegration() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Integrarea cu serviciile STAI DREPT"
          description="Platforma conectează toate serviciile pentru o experiență unificată."
        />

        <FeatureGrid columns={3}>
          {integrations.map((item, index) => (
            <FeatureCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              delay={index}
            />
          ))}
        </FeatureGrid>
      </div>
    </section>
  )
}
