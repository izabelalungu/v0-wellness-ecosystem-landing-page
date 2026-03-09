import { Check } from "lucide-react"

const benefits = [
  {
    title: "Îmbunătățirea posturii",
    description: "Corectarea dezaliniamentelor și dezvoltarea obiceiurilor corecte de postură.",
  },
  {
    title: "Reducerea durerii de spate",
    description: "Eliminarea durerilor cronice de spate, gât și articulații prin programe țintite.",
  },
  {
    title: "Mobilitate mai bună",
    description: "Creșterea flexibilității și îmbunătățirea calității mișcării zilnice.",
  },
  {
    title: "Echilibru corporal",
    description: "Restabilirea echilibrului muscular și a simetriei corporale.",
  },
  {
    title: "Performanță fizică",
    description: "Optimizarea performanței în activitățile zilnice și sportive.",
  },
  {
    title: "Progres măsurabil",
    description: "Monitorizarea evoluției cu date concrete și evaluări periodice.",
  },
]

export function Benefits() {
  return (
    <section className="py-16 lg:py-24 bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Rezultate reale, îmbunătățiri durabile
          </h2>
          <p className="text-background/70 leading-relaxed">
            Abordarea noastră integrată aduce beneficii concrete pentru 
            postura, mobilitatea și sănătatea ta generală.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex items-start gap-4 p-5 rounded-lg border border-background/10 bg-background/5"
            >
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                <Check className="w-4 h-4 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                <p className="text-sm text-background/60 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
