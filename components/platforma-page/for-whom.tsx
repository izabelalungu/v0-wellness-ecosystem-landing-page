"use client"

import { FeatureGrid, FeatureCard } from "@/components/shared/feature-grid"
import { SectionHeader } from "@/components/shared/section-header"
import { Users, AlertCircle, Trophy, Zap } from "lucide-react"

const audiences = [
  {
    icon: <Users className="w-7 h-7 text-primary" />,
    title: "Membri ai centrului STAI DREPT",
    description: "Gestionează toate serviciile dintr-un singur loc."
  },
  {
    icon: <AlertCircle className="w-7 h-7 text-primary" />,
    title: "Persoane cu probleme posturale",
    description: "Monitorizare și îmbunătățire continuă a posturii."
  },
  {
    icon: <Trophy className="w-7 h-7 text-primary" />,
    title: "Sportivi care vor monitorizare avansată",
    description: "Analiză detaliată a performanței și progresului."
  },
  {
    icon: <Zap className="w-7 h-7 text-primary" />,
    title: "Persoane care doresc progres măsurabil",
    description: "Urmărire obiectivă și rezultate concrete."
  },
]

export function PlatformaForWhom() {
  return (
    <section className="py-20 lg:py-28 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Pentru cine este Platforma"
          description="Instrumentele potrivite pentru orice tip de utilizator."
        />

        <FeatureGrid columns={2}>
          {audiences.map((audience, index) => (
            <FeatureCard
              key={index}
              icon={audience.icon}
              title={audience.title}
              description={audience.description}
              delay={index}
            />
          ))}
        </FeatureGrid>
      </div>
    </section>
  )
}
