"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Dumbbell, Activity, UtensilsCrossed, Monitor } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: Dumbbell,
    title: "Antrenament Personalizat",
    description: "Programe de fitness adaptate nivelului și obiectivelor tale, sub supravegherea antrenorilor certificați.",
  },
  {
    icon: Activity,
    title: "Recuperare Posturală",
    description: "Servicii complete de recuperare: fizioterapie, kinetoterapie, masaj și terapii specializate.",
  },
  {
    icon: UtensilsCrossed,
    title: "Nutriție Echilibrată",
    description: "Planuri nutriționale personalizate cu meniuri lunare și opțiuni de livrare flexibile.",
  },
  {
    icon: Monitor,
    title: "Platformă Digitală",
    description: "Dashboard complet pentru monitorizare progres, evaluări și sincronizare a tuturor serviciilor.",
  },
]

export function ServicesCardsSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-xs font-medium text-primary uppercase tracking-wide">Serviciile noastre</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground tracking-tight">
            Servicii premium pentru postura ta
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Descoperă gama completă de servicii STAI DREPT, fiecare conceput pentru a oferi rezultate concrete și sustenabile.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Image Placeholder */}
              <div className="w-full h-56 bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                <service.icon className="w-20 h-20 text-primary/20" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                <Button
                  variant="ghost"
                  size="sm"
                  className="p-0 h-auto text-primary hover:text-primary/80"
                >
                  Descoperă mai mult
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
