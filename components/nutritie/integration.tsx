"use client"

import { motion } from "framer-motion"
import { Dumbbell, Activity, Monitor } from "lucide-react"

export function NutrieIntegration() {
  const integrations = [
    {
      icon: Dumbbell,
      title: "Nutriție + Antrenament",
      description: "Mese create pentru a susține antrenamentele și pentru a oferi energia necesară"
    },
    {
      icon: Activity,
      title: "Nutriție + Recuperare",
      description: "Alimentație care ajută procesul de recuperare post-antrenament"
    },
    {
      icon: Monitor,
      title: "Monitorizare în platformă",
      description: "Planurile și progresul pot fi urmărite în platforma digitală STAI DREPT"
    }
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
            Integrarea cu sistemul STAI DREPT
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Programul de nutriție funcționează în perfectă sinergie cu celelalte servicii STAI DREPT.
          </p>
        </motion.div>

        {/* Integration Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {integrations.map((item, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-14 h-14 rounded-full bg-chart-3/10 flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-chart-3" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
