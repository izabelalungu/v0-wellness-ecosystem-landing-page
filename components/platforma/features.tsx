"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, BookOpen, Calendar, CreditCard, Utensils, Zap } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: BarChart3,
    title: "Dashboard Personal",
    description: "Vizualizare completă a progresului, scorului postural și metricilor de sănătate"
  },
  {
    icon: BarChart3,
    title: "Progres și Rapoarte",
    description: "Urmărire detaliată în timp cu rapoarte lunare și recomandări personalizate"
  },
  {
    icon: BookOpen,
    title: "Bibliotecă Exerciții",
    description: "Sute de exerciții cu videouri HD și instrucțiuni pas cu pas"
  },
  {
    icon: Calendar,
    title: "Programări Ședințe",
    description: "Calendar integrat pentru antrenamente, fizioterapie și alte sesiuni"
  },
  {
    icon: Utensils,
    title: "Gestionare Nutriție",
    description: "Meniuri zilnice, comenzi mese, urmărire macronutrienți și hidratare"
  },
  {
    icon: CreditCard,
    title: "Plăți și Abonamente",
    description: "Gestionare facile a tuturor abonamentelor și plăților într-un loc"
  },
]

export function PlatformaFeatures() {
  return (
    <section id="features" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground tracking-tight">
            Funcționalități principale
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Tot ce ai nevoie pentru a-ți gestiona programul de wellness, urmări progresul 
            și ajunge la obiectivele tale de sănătate.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 lg:p-8 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed flex-grow">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
