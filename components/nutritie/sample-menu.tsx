"use client"

import { motion } from "framer-motion"

export function NutrieSampleMenu() {
  return (
    <section id="sample-menu" className="py-20 lg:py-28 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-2xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground tracking-tight">
            Exemplu de meniu săptămânal
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Iată cum ar putea arăta o săptămână de mese proaspete și echilibrate.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-foreground/5 border border-border rounded-xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  {['Luni', 'Marți', 'Miercuri', 'Joi'].map(day => (
                    <th key={day} className="px-6 py-4 text-left font-semibold text-foreground">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { meal: 'Mic Dejun', items: ['Ou fiert', 'Iaurt', 'Omletă', 'Pâine'] },
                  { meal: 'Prânz', items: ['Pui cu broccoli', 'Pește cu orez', 'Vită cu cartofi', 'Mâncare veg'] },
                  { meal: 'Cină', items: ['Somon', 'Pui ușor', 'Pești albi', 'Salată proteică'] },
                  { meal: 'Desert', items: ['Fructe', 'Iaurt', 'Budincă', 'Baton energetic'] }
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border last:border-b-0">
                    <td className="px-6 py-4 font-semibold text-foreground">{row.meal}</td>
                    {row.items.map((item, j) => (
                      <td key={j} className="px-6 py-4 text-sm text-muted-foreground">{item}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm text-muted-foreground mt-6"
        >
          * Meniurile se actualizează săptămânal. Poți personaliza în funcție de preferințe și restricții alimentare.
        </motion.p>
      </div>
    </section>
  )
}
