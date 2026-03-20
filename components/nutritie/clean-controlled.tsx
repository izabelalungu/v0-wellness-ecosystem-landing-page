"use client"

import { motion } from "framer-motion"
import { CheckCircle, Eye } from "lucide-react"

export function CleanControlledEating() {
  const cleanOptions = [
    {
      title: "Fără Zahăr Adăugat",
      description: "Dulcimea vine din ingrediente naturale, nu din aditivi. Control total asupra aportului de zahăr."
    },
    {
      title: "Uleiuri Sănătoase Doar",
      description: "Doar uleiuri de calitate: masline, cocos virgin, sau unt clar. Fără uleiuri rafinate nocive."
    },
    {
      title: "Fără Conservanți Inutili",
      description: "Preparate zilnic, fără conservanți artificiali. Prospețime naturală prin logistică rapidă."
    },
    {
      title: "Alegeri Personalizate",
      description: "Nu îți plac anumite ingrediente? Le excludem. Flexibilitate reală adaptată preferințelor tale."
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-chart-3/10 border border-chart-3/20">
            <Eye className="w-3.5 h-3.5 text-chart-3" />
            <span className="text-xs font-medium text-chart-3 uppercase tracking-wide">Control Total</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Mâncare Curată. Cu Control Total.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dacă vrei opțiuni mai curate sau mai bine controlate, noi respectăm asta. Flexibilitate fără compromisuri.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {cleanOptions.map((option, i) => (
            <motion.div
              key={i}
              className="flex gap-4 p-6 bg-card border border-border rounded-lg hover:border-chart-3/40 transition-colors"
              initial={{ opacity: 0, x: i % 2 === 0 ? -10 : 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <CheckCircle className="w-5 h-5 text-chart-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">{option.title}</h3>
                <p className="text-sm text-muted-foreground">{option.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Important Note */}
        <motion.div
          className="bg-chart-3/5 border border-chart-3/20 rounded-lg p-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-sm text-muted-foreground text-center">
            <span className="font-semibold text-foreground">Important:</span> Programul nostru de nutriție susține healthful living și obiective de fitness. Nu înlocuiește consultația medicală pentru condiții specifice de sănătate. Dacă ai nevoi medicale speciale, te recomandăm să consulți specialistul tău.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
