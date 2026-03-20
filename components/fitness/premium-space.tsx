"use client"

import { motion } from "framer-motion"
import { Wind, Layers, Users, Sparkles } from "lucide-react"

const highlights = [
  {
    icon: Wind,
    title: "Spațiu aerisit, fără aglomerație",
    description: "350 mp gândite pentru libertate de mișcare. Nu o sală înghesuită — un mediu în care te poți concentra pe antrenament.",
  },
  {
    icon: Layers,
    title: "Zone separate, clar organizate",
    description: "Cardio, forță, stretching și recuperare au fiecare zona lor. Fluxul este natural, fără să interferezi cu alți membri.",
  },
  {
    icon: Users,
    title: "Potrivit pentru toată familia",
    description: "De la adolescenți la seniori activi. Spațiul și programele sunt adaptate oricărui nivel și oricărui obiectiv.",
  },
  {
    icon: Sparkles,
    title: "Curățenie și confort la standarde ridicate",
    description: "Igiena nu este opțională. Echipamentele sunt întreținute, spațiile sunt curate, iar atmosfera este una de care îți va plăcea.",
  },
]

export function FitnessPremiumSpace() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-slate-900 rounded-2xl overflow-hidden aspect-square">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="text-7xl font-black text-white/10">350</div>
                  <div className="text-2xl font-bold text-white">mp</div>
                  <div className="text-white/50 text-sm">spațiu dedicat antrenamentului</div>
                </div>
              </div>
              {/* Corner badges */}
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
                Premium
              </div>
              <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur text-white text-xs px-3 py-1.5 rounded-full border border-white/20">
                Județul Vâlcea nr. 1
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-xs font-medium text-primary uppercase tracking-wide">Spațiul STAI DREPT</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                Nu o sală obișnuită. Un mediu gândit pentru progres real.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Când intri în sala STAI DREPT, simți imediat diferența. Nu aglomerație, nu echipamente strânse la grămadă — ci spațiu, lumină, ordine și o atmosferă care te face să vrei să revii.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={i}
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-10">{item.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
