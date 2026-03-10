"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const benefits = [
  "Postura imbunatatita",
  "Mai putine dureri",
  "Mai multa energie",
  "Progres masurabil",
]

export function BenefitsSection() {
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
            Beneficii
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ceea ce poti astepta cand iti incepi calatoria cu STAI DREPT.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4 text-primary" />
              </div>
              <span className="text-lg font-medium text-foreground">{benefit}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
