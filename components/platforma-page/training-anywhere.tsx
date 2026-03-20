"use client"

import { motion } from "framer-motion"
import { MapPin, Globe, Wifi } from "lucide-react"

export function TrainingAnywhere() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-chart-2/10 border border-chart-2/20">
                <span className="w-2 h-2 bg-chart-2 rounded-full" />
                <span className="text-xs font-medium text-chart-2 uppercase tracking-wide">Flexibilitate</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
                Antrenament Oriunde.
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Programul tău nu se termină atunci când pleci din centru. Platforma leagă experiența fizică dintr-o sală cu exercițiile pe care le poți face de acasă, de la muncă sau din vacanță. 
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Continuitate totală: dacă o ședință e planificată pe matine-ul zilei, o poți face oriunde. Dacă ai alte obligații, platforma îți oferă alternative. Progresul continuă, indiferent de locație.
              </p>
            </div>

            {/* Features list */}
            <div className="space-y-4">
              {[
                {
                  icon: MapPin,
                  title: "Din Centru",
                  description: "Ședințe planificate, echipamente disponibile, antrenor prezent. Experiență completă.",
                },
                {
                  icon: Wifi,
                  title: "De Acasă",
                  description: "Exerciții fără echipamente sau cu ce ai la îndemână. Platforma se adaptează.",
                },
                {
                  icon: Globe,
                  title: "Din Vacanță",
                  description: "Progresul nu se odihnește. Program lightweight, dar constant, oriunde ești.",
                },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={i}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-chart-2/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-chart-2" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            className="relative aspect-square max-w-lg mx-auto lg:max-w-none"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-chart-2/5 to-chart-2/5 rounded-2xl" />
            <div className="relative h-full bg-gradient-to-br from-muted to-muted/50 rounded-2xl border border-border overflow-hidden shadow-sm flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="flex justify-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <div className="w-16 h-16 rounded-xl bg-chart-2/10 flex items-center justify-center">
                    <Wifi className="w-8 h-8 text-chart-2" />
                  </div>
                  <div className="w-16 h-16 rounded-xl bg-chart-3/10 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-chart-3" />
                  </div>
                </div>
                <div>
                  <p className="text-foreground font-semibold text-lg">Un singur program</p>
                  <p className="text-muted-foreground text-sm">Trei locații. Aceeași progresie.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
