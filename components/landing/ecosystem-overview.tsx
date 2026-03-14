"use client"

import { motion } from "framer-motion"
import { Dumbbell, Activity, UtensilsCrossed, Monitor } from "lucide-react"
import { useState } from "react"

const pillars = [
  {
    icon: Dumbbell,
    title: "Gym",
    description: "Antrenamente personalizate pentru forță și mobilitate",
    color: "bg-primary",
    textColor: "text-primary-foreground",
    index: 0,
  },
  {
    icon: Activity,
    title: "Recuperare",
    description: "Fizioterapie, kinetoterapie și masaj terapeutic",
    color: "bg-chart-2",
    textColor: "text-white",
    index: 1,
  },
  {
    icon: UtensilsCrossed,
    title: "Nutriție",
    description: "Mese echilibrate și planuri personalizate",
    color: "bg-chart-3",
    textColor: "text-white",
    index: 2,
  },
  {
    icon: Monitor,
    title: "Platformă",
    description: "Monitorizare digitală și management integrat",
    color: "bg-primary",
    textColor: "text-primary-foreground",
    index: 3,
  },
]

export function EcosystemOverview() {
  const [activeIndex, setActiveIndex] = useState(0)

  const getRotation = (index: number) => {
    const offset = (index - activeIndex + pillars.length) % pillars.length
    return (offset - 0.5) * 90
  }

  const getScale = (index: number) => {
    return index === activeIndex ? 1.1 : 0.85
  }

  const getZIndex = (index: number) => {
    return index === activeIndex ? 20 : 10
  }

  const handleRotate = (direction: number) => {
    setActiveIndex((prev) => (prev + direction + pillars.length) % pillars.length)
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

          {/* Right - Interactive Carousel */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative aspect-square max-w-md mx-auto flex items-center justify-center">
              {/* Central Hub */}
              <motion.div 
                className="absolute z-30 flex flex-col items-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring" }}
              >
                <div className="w-28 h-28 rounded-3xl bg-card border-2 border-primary shadow-lg flex flex-col items-center justify-center">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-2">
                    <span className="text-primary-foreground font-bold text-lg">SD</span>
                  </div>
                  <span className="text-sm font-semibold text-foreground">STAI DREPT</span>
                </div>
              </motion.div>

              {/* Carousel Cards - 4 positions around center */}
              {pillars.map((pillar) => {
                const rotation = getRotation(pillar.index)
                const scale = getScale(pillar.index)
                const zIndex = getZIndex(pillar.index)
                const isActive = pillar.index === activeIndex

                return (
                  <motion.div
                    key={pillar.index}
                    className="absolute"
                    animate={{
                      rotate: rotation,
                      x: Math.cos((rotation * Math.PI) / 180) * 160,
                      y: Math.sin((rotation * Math.PI) / 180) * 160,
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    style={{ zIndex }}
                  >
                    <motion.div
                      animate={{ scale }}
                      transition={{ type: "spring", stiffness: 100, damping: 15 }}
                      className="cursor-pointer"
                      onClick={() => setActiveIndex(pillar.index)}
                    >
                      <div
                        className={`w-40 rounded-2xl p-6 text-center transition-all duration-300 ${
                          isActive
                            ? `${pillar.color} ${pillar.textColor} shadow-xl`
                            : "bg-card border border-border text-foreground shadow-md hover:shadow-lg"
                        }`}
                      >
                        <div
                          className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 ${
                            isActive
                              ? "bg-white/20"
                              : "bg-muted"
                          }`}
                        >
                          <pillar.icon className={`w-6 h-6 ${isActive ? pillar.textColor : "text-foreground"}`} />
                        </div>
                        <h3 className={`font-semibold mb-1 ${isActive ? pillar.textColor : "text-foreground"}`}>
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

              {/* Navigation Dots */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-32 flex gap-2">
                {pillars.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeIndex
                        ? "bg-primary w-6"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to pillar ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

