"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Dumbbell, TrendingUp } from "lucide-react"

const steps = [
  {
    icon: CheckCircle2,
    title: "Evaluare Inițială",
    description: "Analiza detaliată a posturii tale, chestionar de sănătate și stabilire a obiectivelor personale.",
  },
  {
    icon: Dumbbell,
    title: "Plan Personalizat",
    description: "Program combinat de antrenament, recuperare și nutriție adaptat exact nevoilor tale.",
  },
  {
    icon: TrendingUp,
    title: "Monitorizare Progres",
    description: "Urmărire continuă a progresului prin platforma digitală cu feedback regulat și ajustări.",
  },
]

export function StepsProcessSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-xs font-medium text-primary uppercase tracking-wide">Procesul tău</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground tracking-tight">
            Cum funcționează STAI DREPT
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Un proces clar și structurat care te ghidează de la evaluare până la rezultate concrete.
          </p>
        </motion.div>

        {/* Steps Grid - 3 columns */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              {/* Step Image Placeholder */}
              <div className="w-full h-40 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <step.icon className="w-16 h-16 text-primary/30" />
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
