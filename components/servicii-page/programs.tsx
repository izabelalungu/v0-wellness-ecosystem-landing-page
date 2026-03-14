"use client"

import { motion } from "framer-motion"
import { Dumbbell, Activity, UtensilsCrossed, Monitor } from "lucide-react"

const programs = [
  {
    icon: Dumbbell,
    title: "Fitness",
    description: "Antrenamente personalizate sub supravegherea unor antrenori certificați, cu acces la echipamente moderne și programe adaptate nivelului tău.",
    color: "bg-primary",
  },
  {
    icon: Activity,
    title: "Recuperare Posturală",
    description: "Servicii complete de recuperare: fizioterapie, kinetoterapie, masaj terapeutic și terapie în saună, pentru o recuperare optimă.",
    color: "bg-chart-2",
  },
  {
    icon: UtensilsCrossed,
    title: "Nutriție",
    description: "Planuri nutriționale personalizate, meniuri echilibrate lunare și livrare flexibilă direct la domiciliu sau ridicare din centru.",
    color: "bg-chart-3",
  },
  {
    icon: Monitor,
    title: "Platformă Digitală",
    description: "Dashboard personal complet: monitorizare progres, evaluări posturale IA, planuri de antrenament și sincronizare a tuturor serviciilor.",
    color: "bg-primary",
  },
]

export function ProgramsSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-xs font-medium text-primary uppercase tracking-wide">Serviciile noastre</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground tracking-tight">
            Programele disponibile
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Fiecare program este conceput pentru a oferi rezultate concrete și sustenabile, integrate intr-un ecosistem complet.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Image Placeholder */}
              <div className={`w-full h-48 ${program.color} flex items-center justify-center`}>
                <program.icon className="w-16 h-16 text-white/40" />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-3">{program.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{program.description}</p>

                {/* Hover indicator */}
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Afla mai mult
                  <span>→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
