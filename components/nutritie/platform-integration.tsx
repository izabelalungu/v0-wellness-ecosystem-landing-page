"use client"

import { motion } from "framer-motion"

export function NutriePlatformIntegration() {
  return (
    <section id="platform-integration" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-foreground tracking-tight">
            Nutriție integrată în platformă
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Programul de nutriție nu funcționează izolat — este o parte esențială a ecosistemului STAI DREPT. 
              In platformă, poți:
            </p>

            <div className="bg-card border border-border rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-foreground">Ce faci cu nutriția în platformă:</h3>
              <ul className="space-y-2 text-foreground">
                {[
                  "Vizualizezi meniurile săptămânale",
                  "Selectezi mesele pentru următoarele zile/săptămâni",
                  "Urmărești macronutrienții (proteine, carbohidrați, grăsimi)",
                  "Observi caloric per masă și per zi",
                  "Primești recomandări de mese bazate pe obiectivele tale",
                  "Gestionezi comenzile și plățile",
                  "Vezi istoricul meselor și tendințele consumului"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p>
              Nutriția se sincronizează cu progresul tău din antrenamente și recuperare. 
              Dacă crești volumul de antrenament, platforma recomandă ajustări în program nutrițional.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
