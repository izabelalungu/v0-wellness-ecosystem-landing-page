"use client"

import { motion } from "framer-motion"
import { Dumbbell, Activity, UtensilsCrossed, Monitor, Smartphone } from "lucide-react"
import { useState, useEffect } from "react"

const pillars = [
  {
    icon: Dumbbell,
    title: "Gym",
    description: "Antrenamente personalizate pentru forță și mobilitate",
    color: "bg-primary",
    textColor: "text-primary-foreground",
  },
  {
    icon: Activity,
    title: "Recuperare",
    description: "Fizioterapie, kinetoterapie și masaj terapeutic",
    color: "bg-chart-2",
    textColor: "text-white",
  },
  {
    icon: UtensilsCrossed,
    title: "Nutriție",
    description: "Mese echilibrate și planuri personalizate",
    color: "bg-chart-3",
    textColor: "text-white",
  },
  {
    icon: Monitor,
    title: "Platformă",
    description: "Monitorizare digitală și management integrat",
    color: "bg-primary",
    textColor: "text-primary-foreground",
  },
  {
    icon: Smartphone,
    title: "App Mobile",
    description: "Acces la toate serviciile din orice loc",
    color: "bg-chart-2",
    textColor: "text-white",
  },
]

export function EcosystemOverview() {
  const [activeIndex, setActiveIndex] = useState(2) // Center card starts active
  const [autoPlay, setAutoPlay] = useState(true)

  // Auto-rotate every 3 seconds
  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % pillars.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const handleCardClick = (index: number) => {
    setActiveIndex(index)
    setAutoPlay(false)
  }

  // Calculate grid positions: 2 left, center, 2 right
  const getGridPosition = (index: number) => {
    const positions: Record<number, string> = {
      0: "col-start-1 row-start-1",
      1: "col-start-1 row-start-2",
      2: "col-start-2 row-start-1 row-span-2",
      3: "col-start-3 row-start-1",
      4: "col-start-3 row-start-2",
    }
    return positions[index]
  }

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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-xs font-medium text-primary uppercase tracking-wide">Ecosistem integrat</span>
            </div>
            
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

          {/* Right - Grid Cards Layout */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="grid grid-cols-3 gap-4 max-w-2xl">
              {pillars.map((pillar, index) => {
                const isActive = index === activeIndex

                return (
                  <motion.div
                    key={index}
                    className={`${getGridPosition(index)} cursor-pointer`}
                    onClick={() => handleCardClick(index)}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      animate={{ scale: isActive ? 1.05 : 1 }}
                      transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    >
                      <div
                        className={`rounded-2xl p-6 text-center transition-all duration-300 h-full flex flex-col items-center justify-center ${
                          isActive
                            ? `${pillar.color} ${pillar.textColor} shadow-2xl scale-105`
                            : "bg-card border border-border text-foreground shadow-md hover:shadow-lg hover:scale-105"
                        }`}
                      >
                        <div
                          className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${
                            isActive ? "bg-white/20" : "bg-muted"
                          }`}
                        >
                          <pillar.icon className={`w-7 h-7 ${isActive ? pillar.textColor : "text-foreground"}`} />
                        </div>
                        <h3 className={`font-semibold text-base mb-2 ${isActive ? pillar.textColor : "text-foreground"}`}>
                          {pillar.title}
                        </h3>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-sm leading-relaxed"
                          >
                            {pillar.description}
                          </motion.p>
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {pillars.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? "bg-primary w-6"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to pillar ${index + 1}`}
                />
              ))}
            </div>

            {/* Resume auto-play button hint */}
            {!autoPlay && (
              <motion.div
                className="text-center mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <button
                  onClick={() => setAutoPlay(true)}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Click to resume auto-play
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

