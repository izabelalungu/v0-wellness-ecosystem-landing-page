"use client"

import { motion } from "framer-motion"
import { ClipboardCheck, Target, Users, TrendingUp } from "lucide-react"

const stats = [
  { icon: ClipboardCheck, label: "Evaluare inițială", value: "Gratuită", description: "Prima consultație" },
  { icon: Target, label: "Plan personalizat", value: "100%", description: "Adaptat nevoilor tale" },
  { icon: Users, label: "Ședințe ghidate", value: "1-la-1", description: "Cu specialiști certificați" },
  { icon: TrendingUp, label: "Progres monitorizat", value: "24/7", description: "În platformă digitală" },
]

export function CentruStatsHighlight() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Headline */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
              Ajutăm oameni să-și{" "}
              <span className="text-chart-2">transforme postura</span>{" "}
              și sănătatea
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              Cu o echipă dedicată și un sistem integrat, fiecare client primește exact ce are nevoie pentru a progresa.
            </p>
          </motion.div>

          {/* Right - 2x2 Stats Grid */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-card border border-border rounded-xl p-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <stat.icon className="w-5 h-5 text-chart-2" />
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
