"use client"

import { motion } from "framer-motion"
import { Truck, MapPin, Utensils, Activity, Award } from "lucide-react"

const services = [
  {
    icon: Truck,
    title: "Livrare flexibilă",
    description: "Primești mesele direct la tine acasă sau la birou, în intervalul dorit.",
  },
  {
    icon: MapPin,
    title: "Pickup din centru",
    description: "Ridici comanda direct din centrul STAI DREPT când vii la antrenament.",
  },
  {
    icon: Utensils,
    title: "Opțiuni variate",
    description: "Meniuri pentru orice preferință: standard, vegetarian, low-carb sau hiperproteic.",
  },
  {
    icon: Activity,
    title: "Integrare completă",
    description: "Nutriția sincronizată cu antrenamentele și recuperarea pentru rezultate optime.",
  },
]

export function NutrieServicesBenefits() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Ribbon */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-chart-3/10 border border-chart-3/20">
            <Award className="w-3.5 h-3.5 text-chart-3" />
            <span className="text-xs font-medium text-chart-3 uppercase tracking-wide">Servicii complete</span>
          </div>
        </motion.div>

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Îți oferim cele mai bune
              <br />
              <span className="text-chart-3">servicii de nutriție</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Programul nostru de nutriție este conceput să se integreze perfect în stilul tău de viață. 
              De la preparare până la livrare, totul este gândit pentru confortul și sănătatea ta.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-chart-3/10 flex items-center justify-center">
                <service.icon className="w-7 h-7 text-chart-3" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
