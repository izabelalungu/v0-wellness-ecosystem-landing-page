"use client"

import { motion } from "framer-motion"
import { Sofa, AlertCircle, Zap, Clock } from "lucide-react"

const categories = [
  {
    icon: Sofa,
    title: "Persoane sedentare",
    description: "Care vor sa inceapa o viata mai activa si sa isi corecteze postura.",
  },
  {
    icon: AlertCircle,
    title: "Persoane cu dureri de spate",
    description: "Care cauta solutii pentru dureri cronice si disconfort postural.",
  },
  {
    icon: Zap,
    title: "Sportivi",
    description: "Care vor sa isi imbunatateasca performanta si sa previna ranirile.",
  },
  {
    icon: Clock,
    title: "Persoane ocupate",
    description: "Care vor sa isi imbunatateasca sanatatea fara sa consume mult timp.",
  },
]

export function ForWhomSection() {
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
            Pentru cine este
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            STAI DREPT este perfect pentru oricine doreste sa isi imbunatateasca sanatatea si postura.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="font-bold text-lg text-foreground mb-2">{category.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{category.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
