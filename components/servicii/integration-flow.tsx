"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function IntegrationFlow() {
  const steps = [
    {
      number: "01",
      title: "Evaluare Inițială",
      description: "Analiza posturii prin AI și consultație cu specialistul"
    },
    {
      number: "02",
      title: "Identificarea Nevoilor",
      description: "Determinarea serviciilor potrivite pentru obiectivele tale"
    },
    {
      number: "03",
      title: "Program Personalizat",
      description: "Creare plan detaliat cu antrenamente, recuperare și nutriție"
    },
    {
      number: "04",
      title: "Acces Servicii",
      description: "Utilizare servicii online și onsite conform programului"
    },
    {
      number: "05",
      title: "Monitorizare Progres",
      description: "Urmărire continuă în platformă și ajustări periodice"
    }
  ]

  return (
    <section id="integration-flow" className="py-20 lg:py-28 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground tracking-tight">
            Cum funcționează serviciile integrate
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Un proces clar și structurat care asigură rezultate măsurabile la fiecare etapă.
          </p>
        </motion.div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex gap-6 items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Step number and connector */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mb-4">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-1 h-16 bg-border" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <h3 className="font-bold text-xl text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
