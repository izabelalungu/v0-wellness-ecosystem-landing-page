"use client"

import { motion } from "framer-motion"
import { Users, Heart, Zap, Target } from "lucide-react"

const services = [
  { icon: Users, title: "Antrenament Personal", description: "Sesiuni 1-la-1 cu antrenori certificați" },
  { icon: Heart, title: "Fizioterapie", description: "Recuperare și tratament sub îndrumarea specialiștilor" },
  { icon: Zap, title: "Kinetoterapie", description: "Exerciții corective și terapeutice personalizate" },
  { icon: Target, title: "Masaj Terapeutic", description: "Relaxare musculară și recuperare accelerată" }
]

export function CentruServices() {
  return (
    <section id="onsite-services" className="py-20 lg:py-28 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground tracking-tight">
            Servicii disponibile la centru
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Specialiștii noștri oferă o gamă completă de servicii pentru transformarea ta.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-foreground/5 border border-border rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center mb-4">
                <service.icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
