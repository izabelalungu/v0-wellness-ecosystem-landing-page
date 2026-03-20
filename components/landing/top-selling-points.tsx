"use client"

import { motion } from "framer-motion"
import { Zap, Package, Eye, Settings, Lock } from "lucide-react"

export function TopSellingPoints() {
  const points = [
    {
      icon: Zap,
      title: "Scapi de dureri rapid",
      description: "Evaluare AI + plan personalizat în 48 ore"
    },
    {
      icon: Package,
      title: "Totul într-un singur loc",
      description: "Antrenament, recuperare, nutriție, platformă - integrate"
    },
    {
      icon: Eye,
      title: "Monitorizare online",
      description: "Urmărești progresul zilnic prin app-ul STAI DREPT"
    },
    {
      icon: Settings,
      title: "Program personalizat",
      description: "Nu template-uri, ci strategie adaptată ție"
    },
    {
      icon: Lock,
      title: "Locuri limitate",
      description: "Doar 50 clienți activi simultan, atenție maximă"
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {points.map((point, index) => {
            const Icon = point.icon
            return (
              <motion.div
                key={index}
                className="bg-card border border-border rounded-xl p-6 lg:p-5 text-center hover:border-primary/30 transition-colors"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-sm lg:text-base font-semibold text-foreground mb-2">
                  {point.title}
                </h3>
                <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
