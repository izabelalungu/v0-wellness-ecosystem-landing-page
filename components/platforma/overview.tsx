"use client"

import { motion } from "framer-motion"

export function PlatformaOverview() {
  return (
    <section id="platform-overview" className="py-20 lg:py-28 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-foreground tracking-tight">
            Platforma STAI DREPT — Centrul tău digital de wellness
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Platforma digitală STAI DREPT centralizeaza întreaga experiență de wellness. 
              Indiferent că folosești serviciile onsite, online sau o combinație, totul este 
              sincronizat și accesibil dintr-un singur dashboard.
            </p>
            
            <p>
              Dashboard-ul tău arată scorul postural, progresul în timp, antrenamentele programate, 
              mesele pentru săptămâna, și oferă recomandări personalizate bazate pe evoluția ta.
            </p>

            <div className="bg-background border border-border rounded-lg p-6 mt-8">
              <p className="font-semibold text-foreground mb-4">
                Componente principale ale platformei:
              </p>
              <ul className="space-y-3">
                {[
                  "Dashboard personal cu indicatori de progres și statistici",
                  "Biblioteca de exerciții cu videouri și instrucțiuni detaliate",
                  "Planificator de mese și gestionare comenzi nutriție",
                  "Calendar programări: antrenamente, fizioterapie, sesiuni 1-la-1",
                  "Tracking postură: scor, evoluție, rapoarte lunare",
                  "Gestionare abonamente și plăți",
                  "Notificări personalizate și prompts de motivare"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
