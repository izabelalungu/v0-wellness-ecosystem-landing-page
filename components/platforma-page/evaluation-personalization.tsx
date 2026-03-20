"use client"

import { motion } from "framer-motion"
import { Check, Zap, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

export function EvaluationPersonalization() {
  const steps = [
    {
      number: "1",
      title: "Ești evaluat complet",
      description: "Evaluare inițială detaliată: postura, forță, mobilitate, obiective. Platforma înțelege exact de unde pornești.",
      icon: Target,
    },
    {
      number: "2",
      title: "Recomandare personalizată",
      description: "AI-ul analizează rezultatele și propune direcția optimă: ce program, ce intensitate, ce abordare se potrivește ție.",
      icon: Zap,
    },
    {
      number: "3",
      title: "Program adaptat",
      description: "Nu primești generic. Programul este construit pe baza nivelului și obiectivului tău, iar dificultatea se ajustează pe măsură ce progresezi.",
      icon: Check,
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-xs font-medium text-primary uppercase tracking-wide">Cum Funcționează</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Evaluare + Personalizare + Adaptare
          </h2>
          <p className="text-lg text-muted-foreground">
            Platforma nu îți oferă un program generic. Te evaluează, înțelege obiectivul tău și construiește o cale personalizată. Iar programul evoluează cu tine.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={i}
                className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary">{step.number}</div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Key Message */}
        <motion.div
          className="bg-muted/50 border border-border rounded-xl p-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-foreground font-medium mb-2">
            Dificultatea se ajustează automat pe măsură ce progresezi
          </p>
          <p className="text-muted-foreground">
            Dacă o exerciție devine prea ușoară, platforma o înlocuiește. Dacă e prea grea, o adaptează. Programul tău este într-o evoluție constantă, la fel ca și tu.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
