"use client"

import { motion } from "framer-motion"
import { CheckCircle, Target } from "lucide-react"

export function ObjectiveBasedNutrition() {
  const objectives = [
    {
      goal: "Slăbire Sănătoasă",
      description: "Deficit caloric controlat cu macronutrienți optimizați pentru a păstra masa musculară",
      benefits: ["Kcal calculate individual", "Proteine amplificate", "Carbohidrați smarti", "Fats sănătoase"]
    },
    {
      goal: "Masă Musculară",
      description: "Surplus caloric strategic cu aport proteic ridicat și carbohidrați pentru energie",
      benefits: ["Kcal în surplus", "Proteine 2g/kg", "Carbohidrați amplificați", "Timing nutrienți"]
    },
    {
      goal: "Menținere & Wellness",
      description: "Echilibru nutrițional pentru sănătate generală și susținerea rezultatelor",
      benefits: ["Macronutrienți echilibrați", "Varietate maximă", "Flexibilitate zilnică", "Durabilitate"]
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-chart-3/10 border border-chart-3/20">
            <Target className="w-3.5 h-3.5 text-chart-3" />
            <span className="text-xs font-medium text-chart-3 uppercase tracking-wide">Alege obiectivul tău</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Mese Personalizate pe Obiectiv
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nu mâncare obișnuită. Fiecare plan este construit în jurul scopului tău specific.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {objectives.map((obj, i) => (
            <motion.div
              key={i}
              className="bg-card border border-border rounded-xl p-8 hover:border-chart-3/40 transition-colors"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-xl font-bold text-foreground mb-3">{obj.goal}</h3>
              <p className="text-sm text-muted-foreground mb-6">{obj.description}</p>
              
              <div className="space-y-3">
                {obj.benefits.map((benefit, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-chart-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
