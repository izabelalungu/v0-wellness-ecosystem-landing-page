"use client"

import { motion } from "framer-motion"
import { Bell, TrendingUp, MessageCircle } from "lucide-react"

export function ProgressReminders() {
  const features = [
    {
      icon: Bell,
      title: "Reminders Inteligente",
      description: "Notificări precise pentru ședința următoare, meniu zilei, rapoarte lunare. Nici prea devreme, nici prea târziu.",
    },
    {
      icon: TrendingUp,
      title: "Urmărire Progres în Timp Real",
      description: "Fiecare exerciție, fiecare mâncare este înregistrată. Vezi evoluția instant, nu aștepți o lună.",
    },
    {
      icon: MessageCircle,
      title: "Suport și Continuitate",
      description: "Platforma nu te lasă singur. Te motivează, te ghidează și te ține conectat la procesul tău, zi după zi.",
    },
  ]

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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-chart-3/10 border border-chart-3/20 mb-6">
            <span className="w-2 h-2 bg-chart-3 rounded-full" />
            <span className="text-xs font-medium text-chart-3 uppercase tracking-wide">Engagement & Suport</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Progres, Rapoarte și Reminders.
          </h2>
          <p className="text-lg text-muted-foreground">
            Scopul nu e ca tu să memorezi. Scopul e ca platforma să te ajute să rămâi consecvent și să vezi rezultatele pe măsură ce se întâmplă.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={i}
                className="bg-white border border-border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-lg bg-chart-3/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-chart-3" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom message */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-foreground font-medium max-w-2xl mx-auto">
            Nu ești abandonat după prima ședință. Platforma e mecanismul care te ține conectat la progres, zi după zi.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
