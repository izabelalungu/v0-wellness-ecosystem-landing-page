"use client"

import { motion } from "framer-motion"
import { Trophy, Target, Users } from "lucide-react"

export function RecuperareSportsCredibility() {
  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-chart-2/20 border border-chart-2/30">
              <Trophy className="w-3.5 h-3.5 text-chart-2" />
              <span className="text-xs font-medium text-chart-2 uppercase tracking-wide">Testată în performanță</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              Metodologie validată în 
              <span className="text-chart-2"> sportul de performanță</span>
            </h2>

            <p className="text-lg text-white/70 leading-relaxed">
              Aceleași principii și standarde pe care le aplicăm sportivilor de elită sunt disponibile 
              și pentru tine. Diferența nu este în metodă, ci în intensitate și obiective.
            </p>

            <p className="text-white/60 leading-relaxed">
              Am lucrat cu sportivi și echipe din diverse discipline, unde recuperarea rapidă și 
              prevenția accidentărilor sunt critice. Această experiență ne-a permis să dezvoltăm 
              protocoale precise, pe care acum le adaptăm inteligent pentru fiecare persoană.
            </p>

            <div className="flex items-center gap-6 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-chart-2">500+</p>
                <p className="text-xs text-white/60">Sportivi recuperați</p>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <p className="text-3xl font-bold text-chart-2">15+</p>
                <p className="text-xs text-white/60">Ani de experiență</p>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <p className="text-3xl font-bold text-chart-2">98%</p>
                <p className="text-xs text-white/60">Rată de succes</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Message */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-chart-2/20 flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-chart-2" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Standarde de performanță</h3>
                    <p className="text-sm text-white/60">Protocoale dezvoltate pentru sportivi, adaptate pentru toți</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-chart-2/20 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-chart-2" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Accesibil pentru toți</h3>
                    <p className="text-sm text-white/60">Nu trebuie să fii sportiv pentru a beneficia de aceste metode</p>
                  </div>
                </div>

                <div className="h-px bg-white/10" />

                <p className="text-sm text-white/50 italic">
                  &ldquo;Folosim aceleași principii care ajută sportivii să revină rapid pe teren, 
                  dar le adaptăm pentru nevoile și ritmul fiecărei persoane.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
