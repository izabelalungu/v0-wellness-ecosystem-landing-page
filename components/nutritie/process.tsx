"use client"

import { motion } from "framer-motion"

export function NutrieProcess() {
  const steps = [
    {
      number: "01",
      title: "Alegi zilele",
      description: "Selectezi pentru ce zile vrei mese: fiecare zi, doar weekenduri, sau orice alt pattern."
    },
    {
      number: "02",
      title: "Alegi mesele",
      description: "Decizi care mese: mic dejun, prânz, cină, desert — combina cum îți convine."
    },
    {
      number: "03",
      title: "Alegi opțiunile",
      description: "Selectezi din meniu: poți alege vegetarian, proteic, light, sau alte variante."
    },
    {
      number: "04",
      title: "Selectezi livrarea",
      description: "Livrare la domiciliu gratuit sau ridicare de la centrul STAI DREPT."
    },
    {
      number: "05",
      title: "Primești mese",
      description: "Mese calde și proaspete la ușa ta sau gata la centru la ora fixă."
    }
  ]

  return (
    <section id="process" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground tracking-tight">
            Cum funcționează
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Un proces simplu și flexibil. Tu decizi ce vrei, și noi pregătim mesele pentru tine.
          </p>
        </motion.div>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex gap-6 items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">
                {step.number}
              </div>
              <div className="flex-1 pt-2">
                <h3 className="font-bold text-lg text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
