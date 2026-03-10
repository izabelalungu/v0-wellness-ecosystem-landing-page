"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function ServiciiHero() {
  return (
    <section className="pt-24 pb-12 lg:pt-32 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium text-primary">Ecosistem integrat</span>
            </div>
            
            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground text-balance">
                Serviciile STAI DREPT
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Un ecosistem complet pentru sănătate care combină antrenament personalizat, recuperare posturală, nutriție echilibrată și monitorizare digitală.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="text-base h-12 px-6">
                Incepe evaluarea
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-base h-12 px-6">
                Vezi programele
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Ecosystem Visual */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative aspect-square max-w-lg mx-auto lg:max-w-none">
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-3xl" />
              
              {/* Grid container for ecosystem elements */}
              <div className="relative h-full bg-card rounded-3xl border border-border overflow-hidden shadow-lg p-8">
                {/* Gym element */}
                <div className="absolute top-8 left-8 w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center group hover:bg-primary/15 transition-colors">
                  <span className="text-2xl">💪</span>
                </div>
                
                {/* Recovery element */}
                <div className="absolute top-8 right-8 w-20 h-20 bg-chart-2/10 rounded-xl flex items-center justify-center group hover:bg-chart-2/15 transition-colors">
                  <span className="text-2xl">🏥</span>
                </div>
                
                {/* Nutrition element */}
                <div className="absolute bottom-8 left-8 w-20 h-20 bg-chart-3/10 rounded-xl flex items-center justify-center group hover:bg-chart-3/15 transition-colors">
                  <span className="text-2xl">🥗</span>
                </div>
                
                {/* Platform element */}
                <div className="absolute bottom-8 right-8 w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center group hover:bg-primary/15 transition-colors">
                  <span className="text-2xl">📊</span>
                </div>
                
                {/* Center connection visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center border-2 border-primary/20">
                    <span className="text-sm font-bold text-primary text-center">STAI<br/>DREPT</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
