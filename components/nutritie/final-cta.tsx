"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function NutrieFinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-r from-chart-3/20 via-chart-3/10 to-chart-3/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center space-y-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              Începe programul de nutriție STAI DREPT
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Alege mese echilibrate care susțin sănătatea, energia și performanța ta.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="text-base h-12 px-8 bg-chart-3 hover:bg-chart-3/90 text-white">
              Vezi meniul lunar
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-base h-12 px-8">
              Aboneaza-te la planul de mese
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
