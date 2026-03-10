"use client"

import { motion } from "framer-motion"

export function CentruSpecialists() {
  const specialists = [
    { name: "Ana Popescu", title: "Antrenor Principal", certs: "Certificată ISSA" },
    { name: "Dr. Mihai Gheorghe", title: "Fizioterapeut", certs: "Licență Medicină, Specialitate Fizioterapie" },
    { name: "Liviu Trandafir", title: "Kinetoterapist", certs: "Certificat în Kinetoterapie Modernă" },
    { name: "Cristina Iordache", title: "Maseur Terapeutic", certs: "Certificată în Masaj Terapeutic" },
  ]

  return (
    <section id="specialists" className="py-20 lg:py-28 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground tracking-tight">
            Echipa noastră de specialiști
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Profesioniști certificați și cu experiență în domenii complementare ale wellness-ului.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialists.map((specialist, index) => (
            <motion.div
              key={index}
              className="bg-foreground/5 border border-border rounded-xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mx-auto mb-4">
                {specialist.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="font-bold text-foreground mb-1">{specialist.name}</h3>
              <p className="text-sm font-medium text-primary mb-2">{specialist.title}</p>
              <p className="text-xs text-muted-foreground">{specialist.certs}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
