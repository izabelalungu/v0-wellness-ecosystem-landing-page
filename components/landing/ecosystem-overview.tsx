"use client"

import { motion } from "framer-motion"
import { Dumbbell, Activity, UtensilsCrossed, Monitor } from "lucide-react"

const pillars = [
  {
    icon: Dumbbell,
    title: "Gym",
    description: "Antrenamente personalizate",
    color: "bg-primary/10 text-primary",
    position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
  },
  {
    icon: Activity,
    title: "Recuperare",
    description: "Fizioterapie și kinetoterapie",
    color: "bg-chart-2/10 text-chart-2",
    position: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2",
  },
  {
    icon: UtensilsCrossed,
    title: "Nutriție",
    description: "Mese echilibrate și planuri",
    color: "bg-chart-3/10 text-chart-3",
    position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
  },
  {
    icon: Monitor,
    title: "Platformă",
    description: "Monitorizare și management",
    color: "bg-primary/10 text-primary",
    position: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
  },
]

export function EcosystemOverview() {
  return (
    <section id="despre" className="py-20 lg:py-28 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium text-primary uppercase tracking-wide">
              Ecosistem integrat
            </p>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              Tot ce ai nevoie pentru o postură sănătoasă
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              STAI DREPT nu este doar o sală, o clinică sau o aplicație. Este un ecosistem 
              complet în care fiecare serviciu funcționează în sinergie pentru rezultate 
              durabile și măsurabile.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Abordare holistică</p>
                  <p className="text-sm text-muted-foreground">Antrenament, recuperare și nutriție coordonate de specialiști.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Onsite și online</p>
                  <p className="text-sm text-muted-foreground">Ședințe la centru combinate cu monitorizare digitală continuă.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Progres măsurabil</p>
                  <p className="text-sm text-muted-foreground">Evaluări periodice și date concrete despre evoluția ta.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Visual Hub */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <circle cx="200" cy="200" r="120" className="fill-none stroke-border stroke-1" strokeDasharray="4 4" />
                {/* Lines to center */}
                <line x1="200" y1="80" x2="200" y2="160" className="stroke-border stroke-1" />
                <line x1="320" y1="200" x2="240" y2="200" className="stroke-border stroke-1" />
                <line x1="200" y1="320" x2="200" y2="240" className="stroke-border stroke-1" />
                <line x1="80" y1="200" x2="160" y2="200" className="stroke-border stroke-1" />
              </svg>
              
              {/* Center Hub */}
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring" }}
              >
                <div className="w-24 h-24 rounded-2xl bg-card border-2 border-primary shadow-lg flex flex-col items-center justify-center">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center mb-1">
                    <span className="text-primary-foreground font-bold text-sm">SD</span>
                  </div>
                  <span className="text-xs font-semibold text-foreground">STAI DREPT</span>
                </div>
              </motion.div>
              
              {/* Pillar Cards */}
              {pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${pillar.position} z-20`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="bg-card rounded-xl border border-border p-4 shadow-sm w-36">
                    <div className={`w-10 h-10 rounded-lg ${pillar.color} flex items-center justify-center mb-3`}>
                      <pillar.icon className="w-5 h-5" />
                    </div>
                    <p className="font-semibold text-sm text-foreground">{pillar.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{pillar.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
