"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export function ServiciiOutcomes() {
  const outcomes = [
    { title: "Postură mai bună", description: "Aliniament corporeal optim și eliminarea dezechilibrelor" },
    { title: "Reducerea durerii", description: "Diminuare semnificativă a durerilor de spate și gât" },
    { title: "Mobilitate crescută", description: "Flexibilitate și amplitudine de mișcare îmbunătățite" },
    { title: "Echilibru corporal", description: "Simetrie musculară și control corporeal superior" },
    { title: "Performanță fizică", description: "Forță și rezistență crescute în activitățile zilnice" },
    { title: "Progres măsurabil", description: "Urmărire detaliată și rapoarte personalizate săptămânal" }
  ]

  return (
    <section id="outcomes" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground tracking-tight">
            Rezultate pe care le poți urmări
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Serviciile integrate STAI DREPT aduc beneficii concrete și măsurabile 
            pentru postura, mobilitatea și sănătatea ta generală.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 lg:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <h3 className="font-bold text-lg text-foreground">{outcome.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{outcome.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
