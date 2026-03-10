"use client"

import { motion } from "framer-motion"
import { Zap, Users, Brain, BarChart3 } from "lucide-react"

const reasons = [
  {
    icon: Zap,
    title: "Sistem integrat",
    description: "Toate programele sunt conectate intr-o singura platforma.",
  },
  {
    icon: Users,
    title: "Personalizare",
    description: "Plan adaptat nevoilor fiecarui client.",
  },
  {
    icon: Brain,
    title: "AI Posture Analysis",
    description: "Evaluare posturala prin analiza computer vision.",
  },
  {
    icon: BarChart3,
    title: "Monitorizare progres",
    description: "Progres vizibil si masurabil in platforma.",
  },
]

export function WhyStaiDreptSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground tracking-tight">
            De ce STAI DREPT
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Un ecosistem complet si gândit pentru rezultate reale.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="font-bold text-lg text-foreground mb-2">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
