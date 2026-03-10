"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/shared/section-header"

export function PlatformaOverview() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              Platforma care conectează totul
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Platforma STAI DREPT conectează toate serviciile într-un singur sistem digital unde utilizatorii își pot gestiona programele, progresul și activitățile.
            </p>
            
            <ul className="space-y-3">
              {["Gestionare centralizată a antrenamentelor", "Monitorizare progres în timp real", "Acceso la nutriție și planuri de mese", "Integrare cu evaluarea posturală AI"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right - Dashboard Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-2xl" />
            
            <div className="relative bg-card rounded-2xl border border-border p-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="bg-muted rounded-lg p-4 h-20" />
                  ))}
                </div>
                
                <div className="space-y-2">
                  <div className="h-2 bg-primary/30 rounded-full w-full" />
                  <div className="h-2 bg-primary/20 rounded-full w-4/5" />
                  <div className="h-2 bg-primary/10 rounded-full w-3/5" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
