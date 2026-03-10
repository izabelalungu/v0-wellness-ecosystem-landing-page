"use client"

import { motion } from "framer-motion"

export function PlatformaAI() {
  return (
    <section id="ai-integration" className="py-20 lg:py-28 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-foreground tracking-tight">
            Integrarea evaluării posturale AI
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Evaluarea posturală prin inteligență artificială este nucleul platformei. 
              Rezultatele sunt salvate în timp real și conectate la totul ce faci.
            </p>

            <div className="space-y-4">
              <div className="bg-background border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-4">Cum funcționează:</h3>
                <ul className="space-y-3 text-foreground">
                  {[
                    "1. Efectuezi o evaluare posturală prin camera dispozitivului",
                    "2. Sistemul AI analizează alinierea corporală în 17 puncte cheie",
                    "3. Iei rezultatele și recomandările personalizate",
                    "4. Programul se ajustează automat în platformă",
                    "5. Progresul este urmărit și raportat săptămânal"
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p>
                Fiecare evaluare adaugă date la profilul tău de progres. 
                Cu cât mai multe evaluări faci, cu atât mai accurate devin recomandările AI.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
