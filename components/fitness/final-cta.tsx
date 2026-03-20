"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Scan } from "lucide-react"

export function FitnessFinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-slate-900 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-xs font-medium text-primary uppercase tracking-wide">Pasul următor</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance leading-tight">
            Primul pas e să vii să vezi.
            <br />
            <span className="text-primary">Restul vine de la sine.</span>
          </h2>

          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
            Programează o vizită gratuită, vorbește cu un antrenor și descoperă cum arată un antrenament structurat, într-un spațiu la înălțimea obiectivelor tale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Button size="lg" className="h-14 px-8 text-base">
              <MapPin className="w-4 h-4 mr-2" />
              Programează o Vizită
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-base border-white/20 text-white hover:bg-white/10"
            >
              <Scan className="w-4 h-4 mr-2" />
              Fă Evaluarea Inițială
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
