"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-foreground text-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl" />
      </div>
      
      <motion.div 
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/10 border border-background/20 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-medium">Începe gratuit</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 tracking-tight">
          Pregătit să îți îmbunătățești postura?
        </h2>
        <p className="text-lg text-background/70 leading-relaxed mb-10 max-w-2xl mx-auto">
          Începe cu o evaluare posturală gratuită pentru a descoperi ce zone 
          necesită atenție și primește recomandări personalizate instant.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="h-14 px-8 text-base">
            Începe evaluarea gratuită
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="h-14 px-8 text-base border-background/20 text-foreground hover:bg-background/10"
          >
            <MapPin className="w-4 h-4 mr-2" />
            Vizitează centrul
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
