"use client"

import { motion } from "framer-motion"
import { Activity, Dumbbell, UtensilsCrossed, BarChart3, Monitor } from "lucide-react"

const trustMarkers = [
  { icon: Activity, label: "Evaluări" },
  { icon: Dumbbell, label: "Antrenamente" },
  { icon: UtensilsCrossed, label: "Nutriție" },
  { icon: BarChart3, label: "Progres" },
  { icon: Monitor, label: "Management" },
]

export function PlatformaTrustBar() {
  return (
    <section className="py-10 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground mb-8">
            Platforma digitală care conectează toate serviciile STAI DREPT într-un singur loc
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {trustMarkers.map((marker, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 text-muted-foreground/60 hover:text-foreground transition-colors"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <marker.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{marker.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
