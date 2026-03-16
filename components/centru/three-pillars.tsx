"use client"

import { motion } from "framer-motion"
import { Dumbbell, Activity, BarChart3, Layers } from "lucide-react"

const pillars = [
  {
    icon: Dumbbell,
    title: "Antrenament",
    description: "Sală complet echipată cu antrenori certificați. Sesiuni personalizate pentru forță, mobilitate și postură."
  },
  {
    icon: Activity,
    title: "Recuperare Posturală",
    description: "Fizioterapie, kinetoterapie și masaj terapeutic. Specialiști dedicați pentru corecție și prevenție."
  },
  {
    icon: BarChart3,
    title: "Progres Digital",
    description: "Evaluări periodice sincronizate în platformă. Monitorizare continuă și rapoarte detaliate despre evoluția ta."
  }
]

export function CentruThreePillars() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-chart-2/10 border border-chart-2/20 mb-4">
            <Layers className="w-3.5 h-3.5 text-chart-2" />
            <span className="text-xs font-medium text-chart-2 uppercase tracking-wide">Ecosistem complet</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            Totul într-un singur loc
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Antrenament, recuperare și monitorizare digitală — integrate pentru rezultate durabile.
          </p>
        </motion.div>

        {/* 3 Cards */}
        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-xl p-8 text-center flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-16 h-16 rounded-lg bg-chart-2/10 flex items-center justify-center mb-6">
                <pillar.icon className="w-8 h-8 text-chart-2" />
              </div>
              <h3 className="font-bold text-xl text-foreground mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
