import { Button } from "@/components/ui/button"
import { ArrowRight, Dumbbell, Activity, UtensilsCrossed, Monitor } from "lucide-react"

const services = [
  {
    icon: Dumbbell,
    title: "Gym Program",
    description: "Antrenament personal, sesiuni de grup și planuri de fitness personalizate pentru dezvoltarea forței, îmbunătățirea mobilității și corectarea posturii.",
    features: ["Antrenament 1-la-1", "Sesiuni de grup", "Planuri personalizate", "Acces sală"],
    color: "text-primary",
    bgColor: "bg-primary/5",
  },
  {
    icon: Activity,
    title: "Recuperare Posturală",
    description: "Servicii complete de recuperare: fizioterapie, kinetoterapie, masaj terapeutic și ședințe de saună pentru restabilirea alinierii naturale a corpului.",
    features: ["Fizioterapie", "Kinetoterapie", "Masaj terapeutic", "Planuri de recuperare"],
    color: "text-chart-2",
    bgColor: "bg-chart-2/5",
  },
  {
    icon: UtensilsCrossed,
    title: "Nutriție",
    description: "Mese proaspete și echilibrate preparate de specialiști în nutriție. Program flexibil cu livrare sau ridicare de la centru.",
    features: ["Mese zilnice", "Planuri personalizate", "Livrare disponibilă", "Meniu săptămânal"],
    color: "text-chart-3",
    bgColor: "bg-chart-3/5",
  },
  {
    icon: Monitor,
    title: "Platformă Digitală",
    description: "Dashboard-ul tău personal de wellness. Urmărește antrenamentele, gestionează abonamentele și vizualizează progresul oricând, de oriunde.",
    features: ["Urmărire progres", "Bibliotecă exerciții", "Planificare mese", "Gestionare plăți"],
    color: "text-primary",
    bgColor: "bg-primary/5",
  },
]

export function ServicesOverview() {
  return (
    <section id="servicii" className="py-16 lg:py-24 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            Servicii integrate pentru rezultate durabile
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Fiecare serviciu funcționează în sinergie pentru o experiență completă de wellness. 
            Alege unul sau combină-le pentru rezultate optime.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/20 transition-colors"
            >
              <div className="flex items-start gap-5">
                <div className={`w-12 h-12 rounded-lg ${service.bgColor} flex items-center justify-center shrink-0`}>
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-xl mb-2 text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex} 
                        className="px-2.5 py-1 bg-muted text-muted-foreground text-xs rounded-md border border-border"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Button variant="ghost" size="sm" className="p-0 h-auto text-foreground hover:text-primary hover:bg-transparent">
                    Află mai multe
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
