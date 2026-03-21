"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useTransform, PanInfo } from "framer-motion"
import { Dumbbell, Activity, UtensilsCrossed, Monitor, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"

const pillars = [
  {
    icon: Dumbbell,
    title: "Gym",
    subtitle: "Antrenament",
    description: "Antrenamente personalizate pentru forță și mobilitate",
    benefits: ["Programe adaptate", "Tehnică impecabilă", "Progres măsurabil"],
    color: "bg-primary",
    textColor: "text-primary-foreground",
  },
  {
    icon: Activity,
    title: "Recuperare",
    subtitle: "Terapie",
    description: "Fizioterapie, kinetoterapie și masaj terapeutic",
    benefits: ["Dureri eliminate", "Mobilitate crescută", "Recuperare rapidă"],
    color: "bg-chart-2",
    textColor: "text-white",
  },
  {
    icon: UtensilsCrossed,
    title: "Nutriție",
    subtitle: "Program",
    description: "Mese echilibrate, macronutrienți calculați și planuri personalizate pentru fiecare obiectiv",
    benefits: ["Macronutrienți calibrați", "Mese zilnice", "Program integrat"],
    color: "bg-chart-3",
    textColor: "text-white",
  },
  {
    icon: Monitor,
    title: "Platformă",
    subtitle: "Digital",
    description: "Monitorizare digitală și management integrat al progresului",
    benefits: ["Progres în timp real", "Date concrete", "Dashboard complet"],
    color: "bg-primary",
    textColor: "text-primary-foreground",
  },
  {
    icon: Smartphone,
    title: "App Mobile",
    subtitle: "Acces",
    description: "Acces la toate serviciile din orice loc, oricând",
    benefits: ["Disponibil 24/7", "Sincronizare automată", "Notificări smart"],
    color: "bg-chart-2",
    textColor: "text-white",
  },
]

// Visual position configurations for the 5-card triangular composition
const positionConfigs = [
  { // far-left
    translateX: -260,
    translateY: 50,
    scale: 0.72,
    opacity: 0.3,
    zIndex: 1,
  },
  { // left
    translateX: -130,
    translateY: 15,
    scale: 0.85,
    opacity: 0.6,
    zIndex: 2,
  },
  { // center
    translateX: 0,
    translateY: 0,
    scale: 1,
    opacity: 1,
    zIndex: 3,
  },
  { // right
    translateX: 130,
    translateY: 15,
    scale: 0.85,
    opacity: 0.6,
    zIndex: 2,
  },
  { // far-right
    translateX: 260,
    translateY: 50,
    scale: 0.72,
    opacity: 0.3,
    zIndex: 1,
  },
]

export function EcosystemOverviewSection() {
  // Rotation state: tracks which pillar index is currently in the center position
  const [centerIndex, setCenterIndex] = useState(2) // Start with Nutriție (index 2) in center
  const containerRef = useRef<HTMLDivElement>(null)
  const dragX = useMotionValue(0)

  // Calculate visual position for each pillar based on current rotation
  const getVisualPosition = (pillarIndex: number): number => {
    // Calculate offset from center
    const offset = pillarIndex - centerIndex
    // Wrap around for circular behavior: -2, -1, 0, 1, 2 maps to positions 0-4
    let visualPos = offset
    if (visualPos > 2) visualPos -= 5
    if (visualPos < -2) visualPos += 5
    // Map to 0-4 (far-left=0, left=1, center=2, right=3, far-right=4)
    return visualPos + 2
  }

  // Rotate carousel forward (next card comes to center)
  const rotateForward = () => {
    setCenterIndex((prev) => (prev + 1) % 5)
  }

  // Rotate carousel backward (previous card comes to center)
  const rotateBackward = () => {
    setCenterIndex((prev) => (prev - 1 + 5) % 5)
  }

  // Handle click/tap on carousel area
  const handleCarouselClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const midpoint = rect.width / 2

    if (clickX > midpoint) {
      rotateForward()
    } else {
      rotateBackward()
    }
  }

  // Handle drag/swipe end
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50 // minimum drag distance to trigger rotation
    if (info.offset.x < -threshold) {
      rotateForward() // swipe left = forward
    } else if (info.offset.x > threshold) {
      rotateBackward() // swipe right = backward
    }
  }

  return (
    <section id="despre" className="py-20 lg:py-28 bg-muted/20 relative" style={{ isolation: "isolate" }}>
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

          {/* Right - 5-Card Circular Stacked Carousel */}
          <motion.div
            ref={containerRef}
            className="relative h-[480px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
            style={{ isolation: "isolate" }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onClick={handleCarouselClick}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
          >
            {/* Atmospheric background gradient */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-chart-2/5 blur-2xl pointer-events-none" />

            {/* 5-Card Container */}
            <div className="relative w-full h-full pointer-events-none" style={{ perspective: "1000px" }}>
              <AnimatePresence mode="sync">
                {pillars.map((pillar, index) => {
                  const visualPos = getVisualPosition(index)
                  const config = positionConfigs[visualPos]
                  const isCenter = visualPos === 2

                  return (
                    <motion.div
                      key={index}
                      className="absolute left-1/2 top-1/2"
                      initial={false}
                      animate={{
                        x: config.translateX - 160, // offset for card width centering
                        y: config.translateY - 200, // offset for card height centering
                        scale: config.scale,
                        opacity: config.opacity,
                        zIndex: config.zIndex,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 30,
                        mass: 0.8,
                      }}
                    >
                      <div
                        className={`
                          relative w-80 rounded-3xl overflow-hidden
                          ${pillar.color} ${pillar.textColor}
                          shadow-2xl border border-white/10
                          ${!isCenter ? "blur-[1px]" : ""}
                        `}
                      >
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 pointer-events-none" />

                        {/* Card Content */}
                        <div className="relative z-10 flex flex-col h-full p-8">
                          {/* Ribbon Label */}
                          <div className="inline-flex items-center gap-2 mb-3 w-fit px-3 py-1 rounded-full bg-white/15 border border-white/20">
                            <span className="text-xs font-semibold uppercase tracking-wide opacity-90">
                              {pillar.subtitle}
                            </span>
                          </div>

                          {/* Icon */}
                          <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-4">
                            <pillar.icon className="w-6 h-6" />
                          </div>

                          {/* Headline */}
                          <h3 className="text-2xl lg:text-3xl font-bold mb-2 leading-tight">
                            {pillar.title}
                          </h3>

                          {/* Description */}
                          <p className="text-sm leading-relaxed opacity-90 mb-4">
                            {pillar.description}
                          </p>

                          {/* Benefits */}
                          <div className="space-y-2 mb-6 flex-grow">
                            {pillar.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-center gap-2.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                                <span className="text-sm opacity-85">{benefit}</span>
                              </div>
                            ))}
                          </div>

                          {/* CTA Button */}
                          <Button 
                            className="bg-white/20 hover:bg-white/30 text-white border border-white/30 w-full rounded-xl font-medium"
                            variant="outline"
                          >
                            Descoperă
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>

            {/* Subtle hint for interaction */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-muted-foreground/50">
              Click sau swipe pentru a naviga
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
