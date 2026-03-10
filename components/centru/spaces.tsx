"use client"

import { motion } from "framer-motion"
import { Dumbbell, Activity, Zap, Wind } from "lucide-react"

const spaces = [
  {
    icon: Dumbbell,
    title: "Zona Gym",
    description: "Echipamente complete pentru antrenament de forță, cardio și mobilitate. Spațiu spațios, ventilat și luminat natural."
  },
  {
    icon: Activity,
    title: "Zona Recuperare & Wellness",
    description: "Spațiu dedicat fizioterapiei, kinetoterapiei și masajului terapeutic. Echipamente specializate și confort maxim."
  },
  {
    icon: Zap,
    title: "Zona Terapie",
    description: "Spații private pentru ședințe 1-la-1 cu specialiști. Consultații personalizate și programe adaptate."
  },
  {
    icon: Wind,
    title: "Saună & Recuperare",
    description: "Saună pentru recuperare musculară și relaxare. Facilitate complementară pentru wellness complet."
  }
]

export function CentruSpaces() {
  return (
    <section id="spaces" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground tracking-tight">
            Spațiile Centrului
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Fiecare zonă este proiectată pentru un anumit tip de activitate, 
            cu comoditate, siguranță și profesionalism.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {spaces.map((space, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 lg:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-5">
                <space.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-foreground">{space.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{space.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
