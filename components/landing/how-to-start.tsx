"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function HowToStartJourney() {
  const steps = [
    {
      number: "01",
      title: "Evaluare",
      description: "Testul postural AI detectează dezalinierea și disfuncțiile tale în 5 minute"
    },
    {
      number: "02",
      title: "Recomandare",
      description: "Echipa analizează rezultatul și creează un plan potrivit nevoilor tale"
    },
    {
      number: "03",
      title: "Program Personalizat",
      description: "Antrenamente, nutriție și recuperare adaptate și conectate în platformă"
    },
    {
      number: "04",
      title: "Monitorizare & Ajustări",
      description: "Progresul tău este urmărit zilnic, planul se adaptează automat"
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Cum alegi traseul potrivit
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Procesul este simplu, ghidat și transparent. Ești în mâini sigure de la primul pas.
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-12 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent transform -translate-x-1/2 hidden lg:block" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                {/* Step indicator */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg border-4 border-muted">
                      {step.number}
                    </div>
                  </div>
                  {i < steps.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-muted-foreground absolute top-3 left-14 hidden lg:block" />
                  )}
                </div>

                {/* Step content */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-muted-foreground mb-6">
            Gata de a începe? Fă testul postural gratuit acum și descoperă exact ce ai nevoie.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
