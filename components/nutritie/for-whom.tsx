"use client"

import { motion } from "framer-motion"
import { Activity, Heart, Zap, Clock } from "lucide-react"

export function NutrieForWhom() {
  const categories = [
    {
      icon: Zap,
      title: "Persoane active",
      description: "Pentru cei care doresc nutriție care susține un stil de viață activ și plin de energie"
    },
    {
      icon: Heart,
      title: "Persoane în transformare",
      description: "Pentru cei care doresc să-și schimbe obiceiurile alimentare și sănătatea"
    },
    {
      icon: Activity,
      title: "Sportivi",
      description: "Pentru cei care antrenează regulat și au nevoie de nutriție optimă pentru performanță"
    },
    {
      icon: Clock,
      title: "Persoane ocupate",
      description: "Pentru cei care vor mese echilibrate dar nu au timp să gătească zilnic"
    }
  ]

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
            Pentru cine este programul
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Programul de nutriție STAI DREPT este designed pentru oameni cu obiective variate și stiluri de viață diferite.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-xl p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-chart-3/10 flex items-center justify-center mb-4">
                <category.icon className="w-6 h-6 text-chart-3" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{category.title}</h3>
              <p className="text-sm text-muted-foreground">{category.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
