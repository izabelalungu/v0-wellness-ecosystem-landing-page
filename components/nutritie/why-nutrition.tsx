"use client"

import { motion } from "framer-motion"
import { Zap, Leaf, Smile, TrendingUp } from "lucide-react"

export function NutrieWhy() {
  const benefits = [
    {
      icon: Zap,
      title: "Recuperare mai bună",
      description: "Nutriția optimă accelerează recuperarea musculară după antrenamente"
    },
    {
      icon: Leaf,
      title: "Energie și performanță",
      description: "Mese echilibrate îți oferă energia pentru a performa la nivel maxim"
    },
    {
      icon: Smile,
      title: "Stabilitate postură",
      description: "Nutriția susține dezvoltarea musculaturii care stabilizează postura"
    },
    {
      icon: TrendingUp,
      title: "Progres măsurabil",
      description: "Compoziția corporală se îmbunătățește cu antrenament + nutriție corectă"
    }
  ]

  return (
    <section id="why-nutrition" className="py-20 lg:py-28 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground tracking-tight">
            De ce nutriția importantă în STAI DREPT
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nutriția nu este doar o "completare" — este fundamentală pentru postură, recuperare și performanță.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-foreground/5 border border-border rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center mb-4">
                <benefit.icon className="w-5 h-5" />
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
