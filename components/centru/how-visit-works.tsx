"use client"

import { SectionHeader } from "@/components/shared/section-header"
import { StepsSection } from "@/components/shared/steps-section"

const steps = [
  { number: 1, title: "Programare", description: "Rezervă pe platformă sau prin telefon o ședință" },
  { number: 2, title: "Sosire", description: "Vii cu 10 minute înainte, check-in rapid" },
  { number: 3, title: "Evaluare", description: "Discuss nevoile cu specialistul tău" },
  { number: 4, title: "Ședință", description: "Activitate ghidată în spațiul dedicat" },
  { number: 5, title: "Recuperare", description: "Acces la saună și facilități de wellness" },
  { number: 6, title: "Raportare", description: "Progres se sincronizează în platformă" }
]

export function CentruVisit() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Cum funcționează o vizită"
          description="Un proces simplu și structurat pentru ca fiecare vizită să fie optimă și productivă."
        />

        <StepsSection steps={steps} vertical={false} />
      </div>
    </section>
  )
}

