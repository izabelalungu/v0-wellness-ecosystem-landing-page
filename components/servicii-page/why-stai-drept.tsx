"use client"

import { motion } from "framer-motion"
import { Zap, Users, BarChart3 } from "lucide-react"

const reasons = [
  {
    icon: Zap,
    title: "Sistem integrat",
    description: "Toate serviciile funcționează în armonie, fiecare aspect (antrenament, recuperare, nutriție, platformă) suportând progresul tău.",
  },
  {
    icon: Users,
    title: "Specialiști dedicați",
    description: "Antrenori certificați, fizioterapeuti și nutriționiști care lucrează coordonat pentru planul tău personalizat.",
  },
  {
    icon: BarChart3,
    title: "Progres măsurabil",
    description: "Evaluări periodice și date concrete în platformă, cu grafice și rapoarte detailate despre evoluția ta.",
  },
]

export function WhyStaiDreptSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-xs font-medium text-primary uppercase tracking-wide">De ce noi</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground tracking-tight">
            De ce STAI DREPT
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Un ecosistem complet și gândit pentru rezultate reale.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-xl p-8 text-center flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="font-bold text-xl text-foreground mb-4">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
