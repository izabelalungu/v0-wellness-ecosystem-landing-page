"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Waves, Check } from "lucide-react"

const plans = [
  {
    name: "Acces Liber",
    description: "Flexibilitate maximă. Vii când vrei, antrenezi cum vrei.",
    highlight: false,
    sauna: true,
    features: [
      "Acces nelimitat la sală",
      "Saună inclusă",
      "Vestiare și dușuri",
      "Apă la dispoziție",
      "Monitorizare în platformă",
    ],
    cta: "Alege Planul",
  },
  {
    name: "Antrenament Ghidat",
    description: "Acces + ședințe săptămânale cu antrenor personal incluse.",
    highlight: true,
    sauna: true,
    features: [
      "Tot ce include Acces Liber",
      "2–4 ședințe/lună cu antrenor",
      "Program personalizat în platformă",
      "Evaluare lunară a progresului",
      "Ajustare periodică a programului",
    ],
    cta: "Cea mai populară opțiune",
  },
  {
    name: "Ecosistem Complet",
    description: "Sală + recuperare posturală + nutriție + platformă.",
    highlight: false,
    sauna: true,
    features: [
      "Tot ce include Antrenament Ghidat",
      "Ședințe de recuperare posturală",
      "Plan de nutriție personalizat",
      "Raport lunar integrat",
      "Acces prioritar la sesiuni speciale",
    ],
    cta: "Alege Ecosistemul",
  },
]

export function FitnessMemberships() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <Waves className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-primary uppercase tracking-wide">Abonamente</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
            Abonamente flexibile. Saună inclusă.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Alege nivelul de implicare potrivit pentru tine. Fiecare plan include sauna și accesul la platformă — pentru că nu tăiem din experiență.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              className={`relative rounded-xl border p-8 flex flex-col gap-6 ${
                plan.highlight
                  ? "bg-primary text-primary-foreground border-primary shadow-xl shadow-primary/20 scale-105"
                  : "bg-card border-border hover:border-primary/30 transition-colors"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs font-semibold px-4 py-1 rounded-full">
                  Recomandat
                </div>
              )}

              <div>
                <h3 className={`text-xl font-bold mb-2 ${plan.highlight ? "text-primary-foreground" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm leading-relaxed ${plan.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </div>

              {plan.sauna && (
                <div className={`flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full self-start ${
                  plan.highlight ? "bg-white/20 text-primary-foreground" : "bg-chart-2/10 text-chart-2"
                }`}>
                  <Waves className="w-3.5 h-3.5" />
                  Saună inclusă
                </div>
              )}

              <ul className="space-y-2 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className={`flex items-start gap-2 text-sm ${plan.highlight ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlight ? "text-primary-foreground" : "text-primary"}`} />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                className={`w-full h-12 ${
                  plan.highlight
                    ? "bg-white text-primary hover:bg-white/90"
                    : ""
                }`}
                variant={plan.highlight ? "default" : "outline"}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
