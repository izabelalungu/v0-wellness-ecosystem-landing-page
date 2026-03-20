"use client"

import { motion } from "framer-motion"
import { Sofa, Zap, Dumbbell, Briefcase, Users } from "lucide-react"

export function ForWhomSection() {
  const audiences = [
    {
      icon: Sofa,
      title: "Persoane Sedentare",
      description: "Dacă stai mult și doare spatele, eu program te va scoate din această stare și te va obișnui cu mișcarea zilnică."
    },
    {
      icon: Zap,
      title: "Persoane cu Dureri",
      description: "Chiar dacă durerile sunt cronice, evaluarea AI + echipa noastră va identifica cauza și va construi un plan de recuperare."
    },
    {
      icon: Dumbbell,
      title: "Sportivi",
      description: "Antrenament mai performant, recuperare optimizată și nutriție calculată pentru maximizarea performanței tale."
    },
    {
      icon: Briefcase,
      title: "Zone Corporate",
      description: "Programe adaptate pentru echipe, cu sesiuni de grup și tracking pentru angajați care vor să rămână activi."
    },
    {
      icon: Users,
      title: "Oricine Vrea Schimbare",
      description: "Indiferent de vârstă sau nivel de pregătire, sistemul se adaptează și iti creează traseul personalizat."
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Pentru cine este STAI DREPT
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ecosistemul se adaptează la nevoile tale, indiferent de punctul de plecare.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {audiences.map((audience, i) => {
            const Icon = audience.icon
            return (
              <motion.div
                key={i}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">{audience.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{audience.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
