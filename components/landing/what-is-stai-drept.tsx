import { Dumbbell, Stethoscope, Salad, LayoutDashboard } from "lucide-react"

const pillars = [
  {
    icon: Dumbbell,
    title: "Gym Program",
    description: "Antrenamente personalizate ghidate de antrenori certificați pentru forță, mobilitate și postură corectă.",
  },
  {
    icon: Stethoscope,
    title: "Recuperare Posturală",
    description: "Fizioterapie, kinetoterapie și masaj terapeutic pentru corectarea dezechilibrelor și reducerea durerii.",
  },
  {
    icon: Salad,
    title: "Nutriție",
    description: "Mese proaspete și echilibrate, planuri nutriționale personalizate cu livrare sau ridicare de la centru.",
  },
  {
    icon: LayoutDashboard,
    title: "Platformă Digitală",
    description: "Dashboard personal pentru urmărirea progresului, gestionarea programelor și a abonamentelor.",
  },
]

export function WhatIsStaiDrept() {
  return (
    <section id="despre" className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            Un ecosistem complet pentru sănătatea ta
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            STAI DREPT reunește toate serviciile de care ai nevoie pentru îmbunătățirea 
            posturii și a sănătății într-o singură experiență integrată.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-md bg-muted flex items-center justify-center mb-4">
                <pillar.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
