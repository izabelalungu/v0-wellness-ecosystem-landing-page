"use client"

import { motion } from "framer-motion"
import { BarChart3, Clock, Zap, Dumbbell } from "lucide-react"

export function NutrieBenefits() {
  const benefits = [
    {
      icon: Zap,
      title: "Nutriție echilibrată",
      description: "Mese create pentru sănătate și energie optimă"
    },
    {
      icon: Clock,
      title: "Economisire de timp",
      description: "Nu mai este nevoie să gătești zilnic"
    },
    {
      icon: BarChart3,
      title: "Consistență alimentară",
      description: "Mai ușor să urmezi un plan alimentar"
    },
    {
      icon: Dumbbell,
      title: "Suport pentru antrenament",
      description: "Mese create pentru performanță și recuperare"
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-chart-3/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground tracking-tight">
            Beneficiile programului
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Programul de nutriție STAI DREPT aduce beneficii reale și măsurabile pentru sănătate și stil de viață.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-xl p-6 border border-chart-3/20 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-chart-3/10 flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-chart-3" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
