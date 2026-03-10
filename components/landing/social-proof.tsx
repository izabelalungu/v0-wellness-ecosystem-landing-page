"use client"

import { motion } from "framer-motion"

const stats = [
  {
    value: "2.500+",
    label: "Clienți activi",
    sublabel: "în ultimul an",
  },
  {
    value: "15",
    label: "Specialiști",
    sublabel: "certificați",
  },
  {
    value: "96%",
    label: "Satisfacție",
    sublabel: "rating clienți",
  },
  {
    value: "24/7",
    label: "Acces platformă",
    sublabel: "monitorizare progres",
  },
]

export function SocialProof() {
  return (
    <section className="py-8 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="relative pl-4 border-l-2 border-primary/20"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <p className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight">{stat.value}</p>
              <p className="text-sm font-medium text-foreground mt-0.5">{stat.label}</p>
              <p className="text-xs text-muted-foreground">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
