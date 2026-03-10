"use client"

import { SectionHeader } from "@/components/shared/section-header"
import { StepsSection } from "@/components/shared/steps-section"

export function NutrieProcess() {
  const steps = [
    {
      number: 1,
      title: "Alegi zilele",
      description: "Selectezi pentru ce zile vrei mese: fiecare zi, doar weekenduri, sau orice alt pattern."
    },
    {
      number: 2,
      title: "Alegi mesele",
      description: "Decizi care mese: mic dejun, prânz, cină, desert — combina cum îți convine."
    },
    {
      number: 3,
      title: "Alegi opțiunile",
      description: "Selectezi din meniu: poți alege vegetarian, proteic, light, sau alte variante."
    },
    {
      number: 4,
      title: "Selectezi livrarea",
      description: "Livrare la domiciliu gratuit sau ridicare de la centrul STAI DREPT."
    },
    {
      number: 5,
      title: "Primești mese",
      description: "Mese calde și proaspete la ușa ta sau gata la centru la ora fixă."
    }
  ]

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Cum funcționează"
          description="Un proces simplu și flexibil. Tu decizi ce vrei, și noi pregătim mesele pentru tine."
        />

        <StepsSection steps={steps} vertical={true} />
      </div>
    </section>
  )
}

