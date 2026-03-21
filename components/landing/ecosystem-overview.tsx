"use client"

import { motion } from "framer-motion"
import { Dumbbell, Activity, UtensilsCrossed, Monitor, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"

const pillars = [
  {
    id: "far-left",
    icon: Dumbbell,
    title: "Gym",
    subtitle: "Antrenament",
    description: "Antrenamente personalizate pentru forță și mobilitate",
    benefits: ["Programe adaptate", "Tehnică impecabilă", "Progres măsurabil"],
    color: "bg-primary",
    textColor: "text-primary-foreground",
    visualMockup: "🏋️",
  },
  {
    id: "left",
    icon: Activity,
    title: "Recuperare",
    subtitle: "Terapie",
    description: "Fizioterapie, kinetoterapie și masaj terapeutic",
    benefits: ["Dureri eliminate", "Mobilitate crescută", "Recuperare rapidă"],
    color: "bg-chart-2",
    textColor: "text-white",
    visualMockup: "💆",
  },
  {
    id: "center",
    icon: UtensilsCrossed,
    title: "Nutriție",
    subtitle: "Program",
    description: "Mese echilibrate, macronutrienți calculați și planuri personalizate pentru fiecare obiectiv",
    benefits: ["Macronutrienți calibrați", "Mese zilnice", "Program integrat"],
    color: "bg-chart-3",
    textColor: "text-white",
    visualMockup: "🥗",
  },
  {
    id: "right",
    icon: Monitor,
    title: "Platformă",
    subtitle: "Digital",
    description: "Monitorizare digitală și management integrat al progresului",
    benefits: ["Progres în timp real", "Date concrete", "Dashboard complet"],
    color: "bg-primary",
    textColor: "text-primary-foreground",
    visualMockup: "📊",
  },
  {
    id: "far-right",
    icon: Smartphone,
    title: "App Mobile",
    subtitle: "Acces",
    description: "Acces la toate serviciile din orice loc, oricând",
    benefits: ["Disponibil 24/7", "Sincronizare automată", "Notificări smart"],
    color: "bg-chart-2",
    textColor: "text-white",
    visualMockup: "📱",
  },
]

// Position mapping for the 5-card stacked triangular composition
const positionConfig = {
  "far-left": {
    translateX: -280,
    translateY: 60,
    scale: 0.75,
    opacity: 0.35,
    zIndex: 5,
    blur: 8,
  },
  "left": {
    translateX: -140,
    translateY: 20,
    scale: 0.88,
    opacity: 0.65,
    zIndex: 15,
    blur: 4,
  },
  "center": {
    translateX: 0,
    translateY: 0,
    scale: 1,
    opacity: 1,
    zIndex: 50,
    blur: 0,
  },
  "right": {
    translateX: 140,
    translateY: 20,
    scale: 0.88,
    opacity: 0.65,
    zIndex: 15,
    blur: 4,
  },
  "far-right": {
    translateX: 280,
    translateY: 60,
    scale: 0.75,
    opacity: 0.35,
    zIndex: 5,
    blur: 8,
  },
}

export function EcosystemOverviewSection() {
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

          {/* Right - Premium 5-Card Stacked Triangular Composition */}
          <motion.div 
            className="relative h-[500px] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {/* Atmospheric background gradient */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/8 via-transparent to-chart-2/8 blur-3xl pointer-events-none" />

            {/* 5-Card Container - Absolute positioning for stacked composition */}
            <div className="relative w-full h-full max-w-4xl">
              {pillars.map((pillar, index) => {
                const config = positionConfig[pillar.id as keyof typeof positionConfig]

                return (
                  <motion.div
                    key={pillar.id}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ 
                      opacity: config.opacity, 
                      scale: config.scale,
                    }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.1,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 100,
                      damping: 25,
                    }}
                    style={{
                      zIndex: config.zIndex,
                      filter: `blur(${config.blur}px)`,
                    }}
                  >
                    <motion.div
                      className={`
                        relative w-80 rounded-3xl overflow-hidden
                        ${pillar.color} ${pillar.textColor}
                        shadow-2xl border border-white/10
                        transition-all duration-300
                      `}
                      animate={{
                        x: config.translateX,
                        y: config.translateY,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 25,
                      }}
                    >
                      {/* Gradient overlay for premium feel */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 pointer-events-none" />

                      {/* Card Content */}
                      <div className="relative z-10 flex flex-col h-full p-8">
                        {/* Ribbon/Eyebrow Label */}
                        <div className="inline-flex items-center gap-2 mb-3 w-fit px-3 py-1 rounded-full bg-white/15 border border-white/20">
                          <span className="text-xs font-semibold uppercase tracking-wide opacity-90">
                            {pillar.subtitle}
                          </span>
                        </div>

                        {/* Headline */}
                        <h3 className="text-2xl lg:text-3xl font-bold mb-2 leading-tight">
                          {pillar.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm leading-relaxed opacity-90 mb-4">
                          {pillar.description}
                        </p>

                        {/* Benefits/Bullets */}
                        <div className="space-y-2.5 mb-6 flex-grow">
                          {pillar.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-2.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                              <span className="text-sm opacity-85">{benefit}</span>
                            </div>
                          ))}
                        </div>

                        {/* Button */}
                        <Button 
                          className={`
                            ${pillar.id === "center" 
                              ? "bg-white/20 hover:bg-white/30 text-white border border-white/30" 
                              : "bg-white/15 hover:bg-white/25 text-white/90 border border-white/20"
                            }
                            w-full rounded-xl font-medium transition-colors
                          `}
                          variant="outline"
                        >
                          Explore
                        </Button>

                        {/* Visual Mockup Area - Bottom */}
                        <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-center">
                          <div className="text-4xl opacity-70">{pillar.visualMockup}</div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
