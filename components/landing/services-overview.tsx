"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Dumbbell, Activity, UtensilsCrossed, Monitor, MapPin, Globe } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: Dumbbell,
    title: "Gym Program",
    description: "Antrenamente personalizate pentru forță, mobilitate și corectarea posturii. Ședințe 1-la-1 sau în grup mic, ghidate de antrenori certificați.",
    features: ["Antrenament personal", "Sesiuni grup mic", "Evaluări periodice", "Acces sală complet"],
    type: "onsite",
    color: "text-primary",
    bgColor: "bg-primary/5",
    borderColor: "hover:border-primary/30",
  },
  {
    icon: Activity,
    title: "Recuperare Posturală",
    description: "Program complet de recuperare: fizioterapie, kinetoterapie și masaj terapeutic pentru corectarea dezechilibrelor și reducerea durerii.",
    features: ["Fizioterapie", "Kinetoterapie", "Masaj terapeutic", "Saună"],
    type: "onsite",
    color: "text-chart-2",
    bgColor: "bg-chart-2/5",
    borderColor: "hover:border-chart-2/30",
  },
  {
    icon: UtensilsCrossed,
    title: "Nutriție",
    description: "Mese proaspete și echilibrate preparate zilnic. Planuri nutriționale adaptate obiectivelor tale, cu opțiune de livrare sau ridicare.",
    features: ["Mese zilnice", "Plan personalizat", "Livrare disponibilă", "Monitorizare macros"],
    type: "hybrid",
    color: "text-chart-3",
    bgColor: "bg-chart-3/5",
    borderColor: "hover:border-chart-3/30",
  },
  {
    icon: Monitor,
    title: "Platformă Digitală",
    description: "Dashboard personal pentru gestionarea completă a experienței tale STAI DREPT: progres, antrenamente, mese, programări și plăți.",
    features: ["Urmărire progres", "Bibliotecă exerciții", "Planificare mese", "Gestionare cont"],
    type: "online",
    color: "text-primary",
    bgColor: "bg-primary/5",
    borderColor: "hover:border-primary/30",
  },
]

export function ServicesOverview() {
  return (
    <section id="servicii" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground tracking-tight">
            Servicii integrate pentru rezultate durabile
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Fiecare serviciu este proiectat să funcționeze independent sau în combinație 
            cu celelalte pentru o experiență completă de wellness.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className={`group bg-card border border-border rounded-2xl p-6 lg:p-8 transition-all duration-300 ${service.borderColor}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start justify-between mb-5">
                <div className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center`}>
                  <service.icon className={`w-7 h-7 ${service.color}`} />
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-muted rounded-full">
                  {service.type === "onsite" && <MapPin className="w-3 h-3 text-muted-foreground" />}
                  {service.type === "online" && <Globe className="w-3 h-3 text-muted-foreground" />}
                  {service.type === "hybrid" && (
                    <>
                      <MapPin className="w-3 h-3 text-muted-foreground" />
                      <span className="text-muted-foreground">/</span>
                      <Globe className="w-3 h-3 text-muted-foreground" />
                    </>
                  )}
                  <span className="text-[10px] font-medium text-muted-foreground capitalize">
                    {service.type === "hybrid" ? "Onsite + Online" : service.type}
                  </span>
                </div>
              </div>
              
              <h3 className="font-bold text-xl mb-2 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">{service.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <span 
                    key={featureIndex} 
                    className="px-3 py-1.5 bg-muted text-muted-foreground text-xs rounded-lg"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <Button variant="ghost" size="sm" className="p-0 h-auto text-foreground hover:text-primary hover:bg-transparent group-hover:translate-x-1 transition-transform">
                Află mai multe
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
