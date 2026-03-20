"use client"

import { motion } from "framer-motion"
import { Smartphone, Calendar, BarChart3, Settings, Heart, Zap } from "lucide-react"

export function DashboardFunctionality() {
  const features = [
    {
      icon: Settings,
      title: "Date Personale & Abonamente",
      description: "Profilul tău, istoricul abonamentelor, preferințe. Tot în mismo loc, ușor de actualizat.",
    },
    {
      icon: Calendar,
      title: "Intrări Sală, Saună, Terapii",
      description: "Calendar complet: ce ședințe ai planificat, ce ai completat, ce îți rămâne. Booking instant din platformă.",
    },
    {
      icon: Heart,
      title: "Plăți & Comenzi de Mese",
      description: "Istoric plin de tranzacții și comenzi. Facturi, detalii și management rapid al abonamentelor.",
    },
    {
      icon: Zap,
      title: "Bibliotecă Workout & Programe Active",
      description: "Acces la toate exercițiile, toate programele și să poți vedea exact ce ai de făcut azi.",
    },
    {
      icon: BarChart3,
      title: "Grafice, Targeturi & Progres",
      description: "Vizualizări clare: cum evolueaza greutatea, forța, postura. Targeturi setate și progresul către ele.",
    },
    {
      icon: Smartphone,
      title: "Notificări & Reminders Inteligente",
      description: "Alertă pentru sesiune următoare, meniu zilei, raport de progres. Atunci când ai nevoie, nu mai mult.",
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
            <span className="text-xs font-medium text-primary uppercase tracking-wide">Dashboard</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Ce Poți Face în Platformă
          </h2>
          <p className="text-lg text-muted-foreground">
            Nu e abstract. Iată exact ce instrumente ai și cum transformă platforma o problemă complexă în ceva simplu și direct.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={i}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 p-8 bg-muted/50 border border-border rounded-xl text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-foreground font-medium mb-1">
            Paltforma transformă datele în acțiuni. Controlul este în mâinile tale.
          </p>
          <p className="text-muted-foreground">
            Poți vedea orice informație și poți lua orice decizie, instant. Nu ești dependent de nimeni ca să știi starea ta.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
