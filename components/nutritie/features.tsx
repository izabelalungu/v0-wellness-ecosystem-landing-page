"use client"

import { motion } from "framer-motion"
import { Coffee, Utensils, Moon, Cake } from "lucide-react"

const features = [
  {
    icon: Coffee,
    title: "Mic Dejun",
    items: ["Ou cu pâine integrală", "Orez cu brânză", "Smoothie proteic", "Muesli organic"]
  },
  {
    icon: Utensils,
    title: "Prânz",
    items: ["Piept pui cu legume", "Pește alb cu orez", "Vită slabă cu salată", "Tofu oriental"]
  },
  {
    icon: Moon,
    title: "Cină",
    items: ["Somon cu cartofi", "Pui la cuptor", "Pești ușori", "Mâncare vegetariană"]
  },
  {
    icon: Cake,
    title: "Desert",
    items: ["Iaurt grecesc", "Fructe proaspete", "Budincă proteică", "Baton energetic"]
  }
]

export function NutrieFeatures() {
  return (
    <section id="features" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground tracking-tight">
            Ce mesele oferim
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Opțiuni variate pentru fiecare parte a zilei. Poți alege din meniu sau cere o combinație personalizată.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 lg:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-4 text-foreground">{feature.title}</h3>
              <ul className="space-y-2">
                {feature.items.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
