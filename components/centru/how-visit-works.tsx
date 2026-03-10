"use client"

import { motion } from "framer-motion"

const steps = [
  { number: "1", title: "Programare", description: "Rezervă pe platformă sau prin telefon o ședință" },
  { number: "2", title: "Sosire", description: "Vii cu 10 minute înainte, check-in rapid" },
  { number: "3", title: "Evaluare", description: "Discuss nevoile cu specialistul tău" },
  { number: "4", title: "Ședință", description: "Activitate ghidată în spațiul dedicat" },
  { number: "5", title: "Recuperare", description: "Acces la saună și facilități de wellness" },
  { number: "6", title: "Raportare", description: "Progres se sincronizează în platformă" }
]

export function CentruVisit() {
  return (
    <section id="how-visit-works" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground tracking-tight">
            Cum funcționează o vizită
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Un proces simplu și structured pentru ca fiecare vizită să fie optimă și productivă.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                {step.number}
              </div>
              <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
