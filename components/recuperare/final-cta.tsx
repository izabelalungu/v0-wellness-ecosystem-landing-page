"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function RecuperareFinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-chart-2/10 rounded-full blur-3xl" />
      
      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-chart-2/20 border border-chart-2/30 mb-6">
          <span className="w-2 h-2 bg-chart-2 rounded-full" />
          <span className="text-xs font-medium text-chart-2 uppercase tracking-wide">Începe acum</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 tracking-tight">
          Primul pas spre ameliorare?
          <br />
          <span className="text-chart-2">O simplă programare.</span>
        </h2>

        <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
          Nu mai amâna. Evaluarea inițială îți arată exact ce ai nevoie 
          și cum arată traseul tău de recuperare. Fără obligații, fără presiune.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="h-14 px-8 text-base bg-chart-2 hover:bg-chart-2/90 text-white">
            Programează evaluarea
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-14 px-8 text-base border-white/20 text-white hover:bg-white/10"
          >
            <Phone className="w-4 h-4 mr-2" />
            Sună-ne direct
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
