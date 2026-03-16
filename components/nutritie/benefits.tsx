"use client"

import { motion } from "framer-motion"
import { Zap, Clock, BarChart3 } from "lucide-react"

export function NutrieBenefits() {
  const benefits = [
    {
      icon: Zap,
      title: "Nutriție echilibrată",
      description: "Mese create pentru sănătate și energie optimă, adaptate nevoilor tale nutritive și obiectivelor de wellness."
    },
    {
      icon: Clock,
      title: "Economisire de timp",
      description: "Nu mai este nevoie să gătești zilnic. Primești mese gata preparate, livrate la domiciliu sau ridicare din centru."
    },
    {
      icon: BarChart3,
      title: "Suport pentru rezultate",
      description: "Mese create pentru performanță fizică și recuperare. Urmezi planuri alimentare consistente pentru progres măsurabil."
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-chart-3/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-chart-3/10 border border-chart-3/20 mb-4">
            <span className="w-2 h-2 bg-chart-3 rounded-full" />
            <span className="text-xs font-medium text-chart-3 uppercase tracking-wide">Beneficii</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground tracking-tight">
            Beneficiile programului
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Programul de nutriție STAI DREPT aduce beneficii reale și măsurabile pentru sănătate și stil de viață.
          </p>
        </motion.div>

        {/* Benefits Grid - 3 centered cards */}
        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-xl p-8 border border-chart-3/20 text-center flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-16 h-16 rounded-lg bg-chart-3/10 flex items-center justify-center mb-6">
                <benefit.icon className="w-8 h-8 text-chart-3" />
              </div>
              <h3 className="font-bold text-xl text-foreground mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
