"use client"

import { motion } from "framer-motion"
import { TrendingUp, BarChart3, CheckCircle } from "lucide-react"

export function MonthlyProgressReports() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-chart-2/10 border border-chart-2/20 mb-6">
            <span className="w-2 h-2 bg-chart-2 rounded-full" />
            <span className="text-xs font-medium text-chart-2 uppercase tracking-wide">Urmărire Progres</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Rapoarte Lunare. Control Total Asupra Progresului.
          </h2>
          <p className="text-lg text-muted-foreground">
            Progresul nu este lăsat la voia întâmplării. O dată pe lună, primești o evaluare detaliată a evoluției tale, a ce ai realizat și a pasului următor.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: TrendingUp,
              title: "Ce ai Făcut",
              description: "Sesiuni completate, mese consumate, progres măsurat. O poză clară a activității tale lunare.",
            },
            {
              icon: BarChart3,
              title: "Cum ai Evoluat",
              description: "Câți kg ai pierdut/câștigat, cât ai crescut în forță, cum s-a îmbunătățit postura. Cifre concrete, nu promisiuni.",
            },
            {
              icon: CheckCircle,
              title: "Ce Urmează",
              description: "Following pe baza progresului, platforma ajustează programul. Poate intensifica, diversifica sau schimba abordarea.",
            },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                className="bg-white border border-border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-lg bg-chart-2/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-chart-2" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom message */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-foreground font-medium">
            Ai control și vizibilitate. Știi exact unde ești și cum ajungi acolo.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
