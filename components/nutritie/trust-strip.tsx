"use client"

import { motion } from "framer-motion"
import { Leaf, Apple, Salad, Heart, Sparkles } from "lucide-react"

const trustItems = [
  { icon: Leaf, label: "Organic" },
  { icon: Apple, label: "Fresh" },
  { icon: Salad, label: "Vegetarian" },
  { icon: Heart, label: "Sănătos" },
  { icon: Sparkles, label: "Premium" },
]

export function NutrieTrustStrip() {
  return (
    <section className="py-12 lg:py-16 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          className="text-center text-xs font-medium text-muted-foreground uppercase tracking-widest mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Principiile noastre de nutriție
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-8 lg:gap-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {trustItems.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-xl bg-chart-3/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-chart-3" />
              </div>
              <span className="text-xs font-medium text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
