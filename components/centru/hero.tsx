"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export function CentruHero() {
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
            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground text-balance">
                Centrul STAI DREPT.
                <br />
                <span className="text-primary">Mișcare, recuperare și wellness</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Un spațiu premium dedicat posturii, mișcării și recuperării. 
                Cu specialiști, echipamente moderne și o abordare integrată.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="text-base h-12 px-6">
                <MapPin className="w-4 h-4 mr-2" />
                Programează o vizită
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-base h-12 px-6">
                Descoperă serviciile onsite
              </Button>
            </div>

            {/* Info */}
            <div className="text-sm text-muted-foreground space-y-2">
              <p><span className="font-semibold text-foreground">Locație:</span> București, sector 1 (detalii la contact)</p>
              <p><span className="font-semibold text-foreground">Program:</span> Luni-Vineri: 06:00-21:00, Sâmbătă: 08:00-18:00</p>
              <p><span className="font-semibold text-foreground">Contact:</span> +40 (XXX) XXX XXXX</p>
            </div>
          </motion.div>

          {/* Right Content - Center Photo Mockup */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative aspect-[4/3] max-w-lg mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/5 rounded-2xl" />
              
              <div className="relative h-full bg-gradient-to-br from-muted to-muted/50 rounded-2xl border border-border overflow-hidden shadow-sm flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏋️</div>
                  <p className="text-muted-foreground font-medium">Spațiu Premium</p>
                  <p className="text-sm text-muted-foreground">Gym • Recuperare • Wellness</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
