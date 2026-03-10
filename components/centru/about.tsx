"use client"

import { motion } from "framer-motion"

export function CentruAbout() {
  return (
    <section id="centru-about" className="py-20 lg:py-28 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-foreground tracking-tight">
            Despre Centrul STAI DREPT
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Centrul STAI DREPT este un spațiu modern și premium dedicat posturii, mișcării și recuperării. 
              Combinăm echipamente de ultimă generație cu specialiști certificați pentru a oferi o 
              experiență integrată de wellness.
            </p>

            <p>
              La centru, beneficiezi de:
            </p>

            <ul className="space-y-3 text-foreground">
              {[
                "Acces la o sală complet echipată cu echipamente cardiovasculare și de forță",
                "Spațiu dedicat recuperării cu echipamente de fizioterapie și kinetoterapie",
                "Ședințe 1-la-1 cu antrenori și specialiști certificați",
                "Saună și alte facilități de wellness pentru recuperare",
                "Pickup de mese și acces la servicii nutriționale",
                "Atmosferă calmă, profesională și accesibilă",
                "Continuitate perfectă cu serviciile digitale din platformă"
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p>
              Obiectivul nostru este să fii confortabil și sigur la fiecare vizită, 
              și să lucrezi cu profesioniști care înțeleg nevoile tale specifice.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
