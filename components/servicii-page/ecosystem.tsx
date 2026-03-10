"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Dumbbell, Activity, UtensilsCrossed, Monitor } from "lucide-react"
import { motion } from "framer-motion"

const ecosystemCards = [
  {
    icon: Dumbbell,
    title: "Fitness Training",
    description: "Antrenamente personalizate, programe ghidate si suport din partea antrenorilor.",
    color: "text-primary",
    bgColor: "bg-primary/5",
  },
  {
    icon: Activity,
    title: "Recuperare Posturala",
    description: "Fizioterapie, kinetoterapie, masaj si terapii de recuperare.",
    color: "text-chart-2",
    bgColor: "bg-chart-2/5",
  },
  {
    icon: UtensilsCrossed,
    title: "Nutritie",
    description: "Planuri alimentare si mese echilibrate livrate sau ridicate din centru.",
    color: "text-chart-3",
    bgColor: "bg-chart-3/5",
  },
  {
    icon: Monitor,
    title: "Platforma Digitala",
    description: "Monitorizarea progresului, programe personalizate si evaluari.",
    color: "text-primary",
    bgColor: "bg-primary/5",
  },
]

export function EcosystemSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium text-primary uppercase tracking-wide mb-4">
            Ecosistemul STAI DREPT
          </p>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground tracking-tight">
            Patru piloni, o singura solutie
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            STAI DREPT combina patru servicii complementare intr-un sistem integrat. 
            Fiecare pilonpot fi folosit independent sau in combinatie pentru rezultate optime.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {ecosystemCards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`w-14 h-14 rounded-xl ${card.bgColor} flex items-center justify-center mb-6`}>
                <card.icon className={`w-7 h-7 ${card.color}`} />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">{card.description}</p>
              
              <Button variant="ghost" size="sm" className="p-0 h-auto text-foreground hover:text-primary">
                Afla mai mult
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
