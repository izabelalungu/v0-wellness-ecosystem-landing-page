"use client"

import { motion } from "framer-motion"
import { Activity, Briefcase, Dumbbell, Heart, Users } from "lucide-react"

const audiences = [
  { icon: Heart, label: "Dureri de spate" },
  { icon: Briefcase, label: "Sedentarism" },
  { icon: Dumbbell, label: "Sportivi activi" },
  { icon: Activity, label: "Recuperare" },
  { icon: Users, label: "Oricine vrea să se simtă mai bine" },
]

export function CentruAudienceTrust() {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-chart-2/10 border border-chart-2/20 mb-4">
            <Users className="w-3.5 h-3.5 text-chart-2" />
            <span className="text-xs font-medium text-chart-2 uppercase tracking-wide">Pentru tine</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-3">
            Pentru cine este Centrul STAI DREPT
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Lucrăm cu oameni din toate categoriile care vor să își îmbunătățească postura și sănătatea.
          </p>
        </motion.div>

        {/* Audience chips row */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-full"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <audience.icon className="w-4 h-4 text-chart-2" />
              <span className="text-sm font-medium text-foreground">{audience.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
