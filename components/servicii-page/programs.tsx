"use client"

import { motion } from "framer-motion"
import { Dumbbell, Activity, UtensilsCrossed, Monitor } from "lucide-react"

const programs = [
  {
    icon: Dumbbell,
    title: "Fitness",
    description: "Antrenamente personalizate, suport din partea antrenorilor si acces la echipamente.",
    color: "text-primary",
    bgColor: "bg-primary/5",
  },
  {
    icon: Activity,
    title: "Recuperare Posturala",
    description: "Fizioterapie, kinetoterapie, masaj terapeutic si sauna.",
    color: "text-chart-2",
    bgColor: "bg-chart-2/5",
  },
  {
    icon: UtensilsCrossed,
    title: "Nutritie",
    description: "Mese sanatoase, meniuri lunare si livrare flexibila.",
    color: "text-chart-3",
    bgColor: "bg-chart-3/5",
  },
  {
    icon: Monitor,
    title: "Platforma Digitala",
    description: "Dashboard personal, progres, evaluari si planuri de antrenament.",
    color: "text-primary",
    bgColor: "bg-primary/5",
  },
]

export function ProgramsSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground tracking-tight">
            Programele disponibile
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Fiecare program este conceput pentru a oferi rezultate concrete si sustenabile.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-card to-card/50 border border-border rounded-2xl p-8 flex items-start gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`w-16 h-16 rounded-xl ${program.bgColor} flex items-center justify-center shrink-0`}>
                <program.icon className={`w-8 h-8 ${program.color}`} />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">{program.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{program.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
