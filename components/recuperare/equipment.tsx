"use client"

import { motion } from "framer-motion"
import { Cpu, Zap, Shield, TrendingUp } from "lucide-react"

const equipment = [
  {
    icon: Cpu,
    title: "Tehnologie de diagnostic",
    description: "Echipamente moderne pentru evaluare posturală precisă și analiză a mișcării."
  },
  {
    icon: Zap,
    title: "Aparatură de fizioterapie",
    description: "Dispozitive de ultimă generație: electroterapie, ultrasunet, laser terapeutic."
  },
  {
    icon: Shield,
    title: "Echipamente de recuperare",
    description: "Instrumente specializate pentru mobilizare, stretching și refacere țesuturi."
  },
  {
    icon: TrendingUp,
    title: "Sisteme de monitorizare",
    description: "Urmărirea progresului în timp real și ajustarea continuă a protocoalelor."
  }
]

export function RecuperareEquipment() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-chart-2/10 border border-chart-2/20">
              <span className="w-2 h-2 bg-chart-2 rounded-full" />
              <span className="text-xs font-medium text-chart-2 uppercase tracking-wide">Dotări moderne</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              Echipamente de ultimă generație
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Procesul de recuperare este susținut de instrumente moderne, bine integrate într-un sistem complet. 
              Nu doar oameni competenți, ci și dotările necesare pentru rezultate reale.
            </p>

            <div className="space-y-4">
              {equipment.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-chart-2/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-chart-2" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square bg-gradient-to-br from-chart-2/10 to-chart-2/5 rounded-2xl flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 rounded-full bg-chart-2/20 flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-10 h-10 text-chart-2" />
                </div>
                <p className="text-lg font-semibold text-foreground mb-2">Standard profesionist</p>
                <p className="text-sm text-muted-foreground">
                  Aceleași echipamente folosite în clinici de top și centre de performanță sportivă
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
