"use client"

import { motion } from "framer-motion"
import { UtensilsCrossed } from "lucide-react"

interface MenuItem {
  name: string
  description: string
  calories: string
}

interface MenuCategory {
  title: string
  emoji: string
  items: MenuItem[]
  highlighted?: boolean
}

const menuCategories: MenuCategory[] = [
  {
    title: "Mic dejun",
    emoji: "🍳",
    items: [
      { name: "Bowl Proteic", description: "Ouă, avocado, legume proaspete și semințe", calories: "420 kcal" },
      { name: "Smoothie Bowl", description: "Fructe de pădure, banană, granola și miere", calories: "380 kcal" },
      { name: "Toast Integral", description: "Pâine integrală, brânză, roșii și verdețuri", calories: "320 kcal" },
    ],
  },
  {
    title: "Prânz",
    emoji: "🥗",
    highlighted: true,
    items: [
      { name: "Salată Caesar", description: "Piept de pui la grătar, parmezan, crutoane", calories: "480 kcal" },
      { name: "Bowl cu Quinoa", description: "Quinoa, legume coapte, hummus, tahini", calories: "520 kcal" },
      { name: "Wrap Proteic", description: "Curcan, legume proaspete, sos light", calories: "450 kcal" },
      { name: "Supă de legume", description: "Legume de sezon, verdețuri, pâine integrală", calories: "280 kcal" },
    ],
  },
  {
    title: "Cină",
    emoji: "🍲",
    items: [
      { name: "Somon la cuptor", description: "File de somon, sparanghel, lămâie", calories: "520 kcal" },
      { name: "Pui cu legume", description: "Piept de pui, legume la wok, orez brun", calories: "480 kcal" },
      { name: "Curry de linte", description: "Linte roșie, lapte de cocos, orez basmati", calories: "440 kcal" },
    ],
  },
]

export function NutrieMenuCards() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Ribbon */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-chart-3/10 border border-chart-3/20">
            <UtensilsCrossed className="w-3.5 h-3.5 text-chart-3" />
            <span className="text-xs font-medium text-chart-3 uppercase tracking-wide">Meniuri zilnice</span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Meniuri delicioase
          </h2>
          <div className="w-24 h-1 bg-chart-3 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Menu Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {menuCategories.map((category, i) => (
            <motion.div
              key={i}
              className={`rounded-2xl p-6 lg:p-8 ${
                category.highlighted
                  ? "bg-chart-3/5 border-2 border-chart-3/30 shadow-lg"
                  : "bg-card border border-border"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <span className="text-3xl">{category.emoji}</span>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>

              {/* Menu Items */}
              <div className="space-y-5">
                {category.items.map((item, j) => (
                  <div key={j} className="space-y-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <h4 className="font-semibold text-foreground">{item.name}</h4>
                      <span className="text-sm font-medium text-chart-3 whitespace-nowrap">{item.calories}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
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
