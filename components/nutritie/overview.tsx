"use client"

import { motion } from "framer-motion"

export function NutrieOverview() {
  return (
    <section id="nutrition-overview" className="py-20 lg:py-28 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-foreground tracking-tight">
            Programul de nutriție STAI DREPT
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Nutriția nu este o sarcină — este o parte esențială a unui stil de viață sănătos. 
              Programul nostru oferă mese proaspete, gustoase și nutrițional echilibrate, 
              adaptate obiectivelor tale de wellness și postură.
            </p>

            <p>
              Fiecare masă este preparată de specialiști în nutriție cu ingrediente de calitate. 
              Poți alege opțiuni de livrare sau ridicare, și toate meniurile sunt urmărite în platformă 
              pentru a vedea macronutrienții și caloric.
            </p>

            <div className="bg-background border border-border rounded-lg p-6">
              <p className="font-semibold text-foreground mb-4">Ce include programul:</p>
              <ul className="space-y-2 text-foreground">
                {[
                  "Mese zilnice: mic dejun, prânz, cină, desert",
                  "Opțiuni flexibile pentru orice dieta sau restricții",
                  "Ingrediente proaspete și de calitate",
                  "Livrare gratuită sau ridicare de la centru",
                  "Urmărire macronutrienți în platformă",
                  "Planuri adaptate progresului tău de fitness"
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
