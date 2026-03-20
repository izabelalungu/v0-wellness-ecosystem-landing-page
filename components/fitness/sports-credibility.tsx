"use client"

import { motion } from "framer-motion"
import { Trophy, Users2, TrendingUp } from "lucide-react"

export function FitnessSportsCredibility() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <Trophy className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium text-primary uppercase tracking-wide">Credibilitate sportivă</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Bun pentru sportivi profesioniști. Accesibil pentru toată lumea.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Sala STAI DREPT este spațiul de pregătire ales de echipe profesioniste din regiune, inclusiv CSM Râmnicu Vâlcea. Asta nu înseamnă că nu este locul tău — înseamnă că standardul este ridicat pentru toată lumea.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Când un spațiu este potrivit pentru performanță de nivel înalt, devine automat un mediu mai bun și pentru obiectivele tale — indiferent că vrei să slăbești, să câștigi masă musculară sau pur și simplu să te miști mai bine.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { icon: Trophy, label: "Echipe profesioniste", value: "Se antrenează aici" },
                { icon: Users2, label: "CSM Râmnicu Vâlcea", value: "Partener sportiv" },
                { icon: TrendingUp, label: "Standard de pregătire", value: "Nivel înalt" },
              ].slice(0, 2).map((stat, i) => {
                const Icon = stat.icon
                return (
                  <div key={i} className="bg-muted/50 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                      <p className="text-sm font-semibold text-foreground">{stat.value}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-slate-900 rounded-2xl p-8 text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 border-2 border-primary/30">
                <Trophy className="w-10 h-10 text-primary" />
              </div>
              <div>
                <div className="text-white font-bold text-lg mb-1">CSM Râmnicu Vâlcea</div>
                <div className="text-white/50 text-sm">Partener de pregătire sportivă</div>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="text-white/60 text-sm leading-relaxed">
                  Dacă standardele sunt ridicate pentru profesioniști, sunt ridicate pentru toată lumea. Nu facem excepții.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
