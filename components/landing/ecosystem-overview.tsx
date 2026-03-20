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
  }  return (
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

          {/* Right - Premium Layered Card Showcase */}
          <motion.div 
            className="relative h-96 flex items-center justify-center perspective"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {/* Background atmospheric subtle gradient */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-chart-2/5 blur-2xl pointer-events-none" />

            {/* Card Stack Container */}
            <div className="relative w-full max-w-2xl h-full">
              {pillars.map((pillar, index) => {
                const isActive = index === activeIndex
                const isLeft = index < activeIndex
                const isRight = index > activeIndex
                
                // Calculate offset and z-index for layered effect
                const offsetX = isLeft ? -120 : isRight ? 120 : 0
                const offsetY = isLeft || isRight ? 40 : 0
                const zIndex = isActive ? 30 : isLeft || isRight ? 10 : 5
                const scale = isActive ? 1 : 0.85
                const opacity = isActive ? 1 : 0.4

                return (
                  <motion.div
                    key={index}
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    onClick={() => handleCardClick(index)}
                    animate={{
                      x: offsetX,
                      y: offsetY,
                      zIndex: zIndex,
                      scale: scale,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 120,
                      damping: 20,
                      duration: 0.4,
                    }}
                  >
                    <motion.div
                      className={`
                        relative w-80 rounded-3xl p-8 
                        transition-all duration-300 backdrop-blur-sm
                        ${
                          isActive
                            ? `${pillar.color} ${pillar.textColor} shadow-2xl border border-white/20`
                            : `bg-card/60 border border-border/50 text-foreground/50 backdrop-blur-md blur-sm`
                        }
                      `}
                      style={{
                        opacity: opacity,
                      }}
                    >
                      {/* Gradient overlay for active card */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-black/10 pointer-events-none" />
                      )}

                      {/* Content */}
                      <div className="relative z-10 flex flex-col items-center text-center">
                        <motion.div
                          className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                            isActive 
                              ? "bg-white/20 shadow-lg" 
                              : "bg-muted/30"
                          }`}
                          animate={{ scale: isActive ? 1 : 0.8 }}
                        >
                          <pillar.icon 
                            className={`w-8 h-8 ${
                              isActive 
                                ? pillar.textColor 
                                : "text-foreground/40"
                            }`} 
                          />
                        </motion.div>

                        <h3 
                          className={`font-bold text-xl mb-3 transition-colors ${
                            isActive 
                              ? pillar.textColor 
                              : "text-foreground/50"
                          }`}
                        >
                          {pillar.title}
                        </h3>

                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p className={`text-sm leading-relaxed ${pillar.textColor} opacity-90`}>
                              {pillar.description}
                            </p>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>

            {/* Premium Navigation Dots */}
            <motion.div 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {pillars.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={`rounded-full transition-all ${
                    index === activeIndex
                      ? "bg-primary/80 w-3 h-3 shadow-lg shadow-primary/50"
                      : "bg-muted-foreground/20 w-2 h-2 hover:bg-muted-foreground/40"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  aria-label={`Go to pillar ${index + 1}`}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

