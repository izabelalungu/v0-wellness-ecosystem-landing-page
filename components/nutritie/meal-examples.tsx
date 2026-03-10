"use client"

import { motion } from "framer-motion"

export function NutrieMealExamples() {
  const meals = [
    { emoji: "🥣", name: "Mic dejun proteic", description: "Bowl cu quinoa și legume proaspete" },
    { emoji: "🥗", name: "Salată echilibrată", description: "Legume mixte cu sos pesto și piept pui" },
    { emoji: "🍗", name: "Pui cu legume", description: "Piept pui la cuptor cu broccoli și cartofi" },
    { emoji: "🐟", name: "Pește alb", description: "Somon cu orez brun și asparagus" },
    { emoji: "🍝", name: "Paste integrale", description: "Paste din grâu integral cu sos tomat ușor" },
    { emoji: "🍰", name: "Desert sanatos", description: "Iaurt grecesc cu fructe și granola" }
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
            Exemple de mese din program
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Mese proaspete, echilibrate și delicioase pregătite de echipa noastră de nutriționiști și bucătari.
          </p>
        </motion.div>

        {/* Meals Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {meals.map((meal, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ translateY: -4 }}
            >
              <div className="text-4xl mb-4">{meal.emoji}</div>
              <h3 className="font-bold text-foreground mb-2">{meal.name}</h3>
              <p className="text-sm text-muted-foreground">{meal.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
