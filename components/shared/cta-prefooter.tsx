"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useRef } from "react"

interface CTAPrefooterProps {
  title?: string
  description?: string
  primaryButtonText?: string
  secondaryButtonText?: string
  primaryButtonOnClick?: () => void
  secondaryButtonOnClick?: () => void
}

export function CTAPrefooter({
  title = "Pregătit să îți îmbunătățești postura?",
  description = "Începe cu o evaluare posturală gratuită pentru a descoperi ce zone necesită atenție și primești recomandări personalizate instant.",
  primaryButtonText = "Începe evaluarea gratuită",
  secondaryButtonText = "Vizitează centrul",
  primaryButtonOnClick,
  secondaryButtonOnClick,
}: CTAPrefooterProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="py-20 lg:py-28 bg-slate-900 text-background relative overflow-hidden"
    >
      {/* Mouse-tracking red glow */}
      <motion.div 
        className="absolute pointer-events-none"
        animate={{
          left: mousePos.x,
          top: mousePos.y,
        }}
        transition={{ type: "tween", duration: 0.2 }}
      >
        <div className="w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </motion.div>

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
      
      <motion.div 
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 border border-primary/30 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-medium text-primary uppercase tracking-wide">Până acum</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 tracking-tight text-background">
          {title}
        </h2>
        <p className="text-lg text-background/75 leading-relaxed mb-10 max-w-2xl mx-auto">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="h-14 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={primaryButtonOnClick}
          >
            {primaryButtonText}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="h-14 px-8 text-base border-background/20 text-background hover:bg-background/10"
            onClick={secondaryButtonOnClick}
          >
            <MapPin className="w-4 h-4 mr-2" />
            {secondaryButtonText}
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
