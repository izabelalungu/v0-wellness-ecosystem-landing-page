"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import { motion } from "framer-motion"

export function PlatformaFinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6">
            <Zap className="w-3.5 h-3.5" />
            <span className="text-xs font-medium">Gata să começi?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 tracking-tight">
            Incepe experienta STAI DREPT
          </h2>

          <p className="text-lg leading-relaxed mb-8 opacity-90">
            Gestioneaza antrenamentele, nutritia si progresul tau intr-o singura platforma.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="h-12 px-8 text-base"
            >
              Creeaza cont
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-12 px-8 text-base border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Fa evaluarea posturala
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
