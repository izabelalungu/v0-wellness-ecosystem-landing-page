"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Monitor } from "lucide-react"
import { motion } from "framer-motion"

export function PlatformaHero() {
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
              <Monitor className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium text-primary">Platforma digitală</span>
            </div>
            
            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground text-balance">
                Platforma STAI DREPT
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Platforma digitală care îți gestionează antrenamentele, nutriția, evaluările și progresul într-un singur loc.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="text-base h-12 px-6">
                Creeaza cont
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-base h-12 px-6">
                Incepe evaluarea
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Dashboard Preview */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative aspect-[4/3] max-w-lg mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-2xl" />
              
              <div className="relative h-full bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
                <div className="px-4 py-3 border-b border-border flex items-center justify-between bg-muted/30">
                  <span className="text-xs font-medium text-muted-foreground">Dashboard</span>
                  <div className="flex gap-1.5">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-muted" />
                    ))}
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-primary/5 rounded-lg p-3 h-16" />
                    <div className="bg-primary/5 rounded-lg p-3 h-16" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="h-2 bg-primary/20 rounded-full w-full" />
                    <div className="h-2 bg-primary/10 rounded-full w-3/4" />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-8 bg-muted rounded" />
                    <div className="h-8 bg-muted rounded" />
                    <div className="h-8 bg-muted rounded" />
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
