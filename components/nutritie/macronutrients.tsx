"use client"

import { motion } from "framer-motion"
import { Zap, BarChart3 } from "lucide-react"

export function MacronutrientsSection() {
  const macroPoints = [
    {
      label: "Proteine",
      description: "Structura musculară și satietate durabilă",
      highlight: true
    },
    {
      label: "Carbohidrați",
      description: "Energie pentru antrenamente și recuperare activă"
    },
    {
      label: "Grăsimi Sănătoase",
      description: "Funcție hormonală și absorbție nutrienți"
    },
    {
      label: "Micronutrienți",
      description: "Imunitate, energie celulară și recuperare"
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-chart-3/10 border border-chart-3/20">
                <BarChart3 className="w-3.5 h-3.5 text-chart-3" />
                <span className="text-xs font-medium text-chart-3 uppercase tracking-wide">Nutriție Calculată</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Macronutrienți Calculați pentru Tine
              </h2>
              <p className="text-lg text-muted-foreground">
                Fiecare masă nu este aleatorie. Structura nutrițională este calculată în jurul obiectivului tău, vârstei, activității fizice și metabolismului.
              </p>
            </div>

            <div className="space-y-4">
              {macroPoints.map((point, i) => (
                <motion.div
                  key={i}
                  className={`flex gap-4 p-4 rounded-lg transition-colors ${
                    point.highlight 
                      ? "bg-chart-3/5 border border-chart-3/20" 
                      : "bg-background border border-transparent"
                  }`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="flex-shrink-0">
                    <Zap className="w-5 h-5 text-chart-3" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{point.label}</p>
                    <p className="text-sm text-muted-foreground">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground italic border-l-2 border-chart-3/20 pl-4">
              Rezultatul: mese care nu doar alocă calorii, ci construiesc cu logică nutrițională în spatele fiecărei bucăți.
            </p>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-chart-3/5 to-chart-3/10 rounded-2xl p-8 border border-chart-3/20">
              <div className="space-y-6">
                {/* Sample macro breakdown */}
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Exemplu Mic Dejun</p>
                  <div className="space-y-2">
                    {[
                      { name: "Proteine", value: "35g", percent: 70, color: "bg-primary" },
                      { name: "Carbohidrați", value: "45g", percent: 75, color: "bg-chart-3" },
                      { name: "Grăsimi", value: "12g", percent: 50, color: "bg-chart-2" }
                    ].map((macro, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="font-medium text-foreground">{macro.name}</span>
                          <span className="text-muted-foreground">{macro.value}</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${macro.color} rounded-full`}
                            style={{ width: `${macro.percent}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-chart-3/20">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">Total energetic:</span> 412 kcal
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Calculat pentru tine, adaptat zilei și obiectivelor.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
