"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar, UtensilsCrossed, CheckCircle2, Package } from "lucide-react"

export function NutrieHowItWorks() {
  const steps = [
    {
      icon: Calendar,
      title: "Alegi zilele",
      description: "Selectezi zilele din lună în care vrei să primești mese."
    },
    {
      icon: UtensilsCrossed,
      title: "Alegi mesele",
      description: "Mic dejun, prânz, cină și desert — combină cum îți convine."
    },
    {
      icon: CheckCircle2,
      title: "Alegi opțiunile",
      description: "Două variante disponibile pentru fiecare masă."
    },
    {
      icon: Package,
      title: "Primești mesele",
      description: "Livrare la domiciliu sau ridicare din centru."
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground tracking-tight">
            Cum funcționează sistemul de mese
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Un proces simplu și flexibil. Tu decizi ce vrei, și noi pregătim mesele pentru tine.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-4 gap-4 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-background rounded-xl p-6 border border-border h-full flex flex-col">
                <div className="w-12 h-12 rounded-full bg-chart-3/10 flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-chart-3" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground flex-grow">{step.description}</p>
              </div>

              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 justify-center items-center pointer-events-none">
                  <ArrowRight className="w-5 h-5 text-border" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
