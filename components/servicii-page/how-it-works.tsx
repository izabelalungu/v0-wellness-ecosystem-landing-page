"use client"

import { motion } from "framer-motion"
import { CheckCircle2, ClipboardList, TrendingUp, Award } from "lucide-react"

const steps = [
  {
    icon: ClipboardList,
    title: "Evaluare",
    description: "Analiza posturala si chestionar initial.",
  },
  {
    icon: CheckCircle2,
    title: "Plan Personalizat",
    description: "Program combinat de antrenament, recuperare si nutritie.",
  },
  {
    icon: TrendingUp,
    title: "Monitorizare",
    description: "Progresul este urmarit prin platforma digitala.",
  },
  {
    icon: Award,
    title: "Rezultate",
    description: "Postura imbunatatita, energie crescuta si performanta.",
  },
]

export function HowItWorksSection() {
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
            Cum functioneaza
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Un proces clar si structurat care te ghideaza de la evaluare pana la rezultate.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-3 w-6 h-0.5 bg-border" />
              )}

              <div className="bg-card border border-border rounded-xl p-6 h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="font-bold text-lg text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
