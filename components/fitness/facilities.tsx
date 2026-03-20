"use client"

import { motion } from "framer-motion"
import { Dumbbell, Bike, Waves, Coffee, WifiIcon, ShieldCheck } from "lucide-react"

const facilities = [
  {
    icon: Dumbbell,
    category: "Antrenament",
    items: ["Aparatură de forță profesională", "Zone cardio complet echipate", "Spațiu funcțional și stretching", "Greutăți libere complete"],
  },
  {
    icon: Waves,
    category: "Recuperare și confort",
    items: ["Saună inclusă în abonament", "Dușuri și vestiare separate", "Zonă de relaxare post-antrenament", "Lumini și ventilație optimizate"],
  },
  {
    icon: Coffee,
    category: "Facilități generale",
    items: ["Recepție și asistență permanentă", "Apă și refill la dispoziție", "Parcare disponibilă", "Acces cu cardul de abonament"],
  },
  {
    icon: ShieldCheck,
    category: "Standard de mentenanță",
    items: ["Curățenie zilnică programată", "Verificare și întreținere echipamente", "Protocol de igienă respectat", "Spațiu monitorizat"],
  },
]

export function FitnessFacilities() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <Bike className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-primary uppercase tracking-wide">Facilități și echipamente</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
            Tot ce ai nevoie pentru un antrenament complet.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            De la echipamentele de antrenament la detaliile de confort — spațiul este gândit ca o experiență completă, nu ca o simplă sală cu aparate.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((fac, i) => {
            const Icon = fac.icon
            return (
              <motion.div
                key={i}
                className="bg-background border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-4">{fac.category}</h3>
                <ul className="space-y-2">
                  {fac.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* Comfort callout */}
        <motion.div
          className="mt-8 flex items-center gap-4 bg-background border border-border rounded-xl p-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <WifiIcon className="w-5 h-5 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Conectat la platformă:</span> Scanezi la intrare, ședința se înregistrează automat în contul tău și progresul este actualizat în timp real.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
