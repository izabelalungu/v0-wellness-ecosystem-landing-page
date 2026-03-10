"use client"

import { SectionHeader } from "@/components/shared/section-header"
import { StepsSection } from "@/components/shared/steps-section"

export function IntegrationFlow() {
  const steps = [
    {
      number: 1,
      title: "Evaluare Inițială",
      description: "Analiza posturii prin AI și consultație cu specialistul"
    },
    {
      number: 2,
      title: "Identificarea Nevoilor",
      description: "Determinarea serviciilor potrivite pentru obiectivele tale"
    },
    {
      number: 3,
      title: "Program Personalizat",
      description: "Creare plan detaliat cu antrenamente, recuperare și nutriție"
    },
    {
      number: 4,
      title: "Acces Servicii",
      description: "Utilizare servicii online și onsite conform programului"
    },
    {
      number: 5,
      title: "Monitorizare Progres",
      description: "Urmărire continuă în platformă și ajustări periodice"
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Cum funcționează serviciile integrate"
          description="Un proces clar și structurat care asigură rezultate măsurabile la fiecare etapă."
        />

        <StepsSection steps={steps} vertical={true} />
      </div>
    </section>
  )
}

