"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

const tiers = [
  {
    name: "Evaluare",
    highlight: false,
    label: "Start",
    description: "Pentru prima evaluare posturală",
    features: [
      "Evaluare posturală AI",
      "Raport detaliat postură",
      "Recomandări personalizate",
      "Acces 30 zile la raport",
    ],
    cta: "Programează evaluare",
  },
  {
    name: "Program Activ",
    highlight: true,
    label: "Popular",
    description: "Pentru progres constant",
    features: [
      "Tot din Evaluare",
      "Acces la antrenamente",
      "Plan nutriție personalizat",
      "Monitorizare progres",
      "Suport prioritar",
      "Dashboard complet",
    ],
    cta: "Începe programul",
  },
  {
    name: "Ecosistem Complet",
    highlight: false,
    label: "Premium",
    description: "Acces la toate serviciile",
    features: [
      "Tot din Program Activ",
      "Ședințe recuperare incluse",
      "Mese livrate la domiciliu",
      "Acces nelimitat la centru",
      "Consultații 1-la-1",
    ],
    cta: "Contactează-ne",
  },
]

export function PlatformaComparisonTiers() {
  return (
    <section className="py-20 lg:py-28 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-xs font-medium text-primary uppercase tracking-wide">Niveluri de acces</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground tracking-tight">
            Alege nivelul de acces<br />potrivit pentru tine
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            De la evaluare inițială până la acces complet în ecosistemul STAI DREPT.
          </p>
        </motion.div>

        {/* Tiers Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl p-8 transition-all duration-300 ${
                tier.highlight
                  ? "bg-primary text-primary-foreground shadow-xl shadow-primary/20 scale-105 relative"
                  : "bg-card border border-border"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-primary text-xs font-bold px-3 py-1 rounded-full">
                  {tier.label}
                </div>
              )}

              <div className="mb-6">
                <p className={`text-xs uppercase tracking-wide mb-2 ${tier.highlight ? "text-white/70" : "text-muted-foreground"}`}>
                  {tier.label}
                </p>
                <h3 className={`text-2xl font-bold mb-2 ${tier.highlight ? "text-white" : "text-foreground"}`}>
                  {tier.name}
                </h3>
                <p className={`text-sm ${tier.highlight ? "text-white/80" : "text-muted-foreground"}`}>
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      tier.highlight ? "bg-white/20" : "bg-primary/10"
                    }`}>
                      <Check className={`w-3 h-3 ${tier.highlight ? "text-white" : "text-primary"}`} />
                    </div>
                    <span className={`text-sm ${tier.highlight ? "text-white/90" : "text-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full h-12 ${
                  tier.highlight
                    ? "bg-white text-primary hover:bg-white/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
