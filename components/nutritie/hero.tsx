"use client"

import { Leaf } from "lucide-react"
import { motion } from "framer-motion"
import { PageHero } from "@/components/shared/page-hero"

function MealCards() {
  const meals = [
    { meal: "Mic dejun proteic", desc: "Bowl cu quinoa și legume" },
    { meal: "Prânz echilibrat", desc: "Pui cu legume la cuptor" },
    { meal: "Cină ușoară", desc: "Pește alb cu broccoli" },
    { meal: "Desert sanatos", desc: "Iaurt grecesc cu fructe" }
  ]

  return (
    <div className="space-y-3">
      {meals.map((item, i) => (
        <motion.div
          key={i}
          className="bg-card border border-border rounded-xl p-4 lg:p-6 shadow-sm"
          whileHover={{ translateX: 4 }}
        >
          <div className="font-semibold text-foreground text-sm">{item.meal}</div>
          <div className="text-sm text-muted-foreground">{item.desc}</div>
        </motion.div>
      ))}
    </div>
  )
}

export function NutrieHero() {
  return (
    <PageHero
      ribbonIcon={Leaf}
      ribbonText="Program de nutriție"
      ribbonColor="chart-3"
      title="Programul de Nutriție STAI DREPT"
      subtitle="Mese echilibrate și planuri alimentare create pentru energie, recuperare și performanță."
      primaryButtonText="Vezi meniul lunar"
      secondaryButtonText="Aboneaza-te la planul de mese"
      sideContent={<MealCards />}
    />
  )
}
