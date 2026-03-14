"use client"

import { motion } from "framer-motion"
import { Sofa, AlertCircle, Zap, Clock } from "lucide-react"

const audiences = [
  {
    icon: Sofa,
    label: "Persoane sedentare",
    count: "42%",
  },
  {
    icon: AlertCircle,
    label: "Cu dureri de spate",
    count: "31%",
  },
  {
    icon: Zap,
    label: "Sportivi și atleti",
    count: "18%",
  },
  {
    icon: Clock,
    label: "Persoane ocupate",
    count: "9%",
  },
]

export function ForWhomSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <span className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-xs font-medium text-primary uppercase tracking-wide">Publicul nostru</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground tracking-tight">
                Pentru cine este
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                STAI DREPT este perfect pentru oricine dorește să-și îmbunătățească sănătatea, postura și calitatea vieții.
              </p>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed">
              Indiferent de vârstă, nivel de activitate fizică sau probleme de sănătate, avem un program adaptat pentru tine. 
              Ecosistemul nostru a ajutat mii de oameni să-și atingă obiectivele de wellness.
            </p>
          </motion.div>

          {/* Right - Audience Stats */}
          <motion.div 
            className="space-y-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {audiences.map((audience, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-6 p-6 bg-card border border-border rounded-xl hover:shadow-md transition-shadow"
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <audience.icon className="w-8 h-8 text-primary" />
                </div>
                
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">{audience.label}</p>
                  <p className="text-2xl font-bold text-foreground">{audience.count}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
