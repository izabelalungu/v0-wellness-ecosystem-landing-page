"use client"

import { StepsSection } from "@/components/shared/steps-section"
import { SectionHeader } from "@/components/shared/section-header"

export function PlatformaHowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Creezi cont",
      description: "Înregistrare rapidă pe platformă"
    },
    {
      number: 2,
      title: "Faci evaluarea posturală",
      description: "Analiză automată prin AI a posturii"
    },
    {
      number: 3,
      title: "Primesti programul personalizat",
      description: "Plan detaliat adaptat nevoilor tale"
    },
    {
      number: 4,
      title: "Monitorizezi progresul în platformă",
      description: "Urmărire continuă și rapoarte"
    }
  ]

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Cum funcționează"
          description="Patru pași simpli pentru a-ți începe transformarea."
        />

        <StepsSection steps={steps} vertical={false} />
      </div>
    </section>
  )
}
