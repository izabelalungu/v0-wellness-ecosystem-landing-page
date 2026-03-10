"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/shared/section-header"
import { Scan } from "lucide-react"

export function PlatformaAI() {
  return (
    <section className="py-20 lg:py-28 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10">
              <Scan className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium text-primary">Tehnologie proprietară</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              Evaluare posturală prin AI
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sistemul nostru de computer vision analizează postura ta prin camera dispozitivului, identificând dezechilibre și oferind recomandări personalizate.
            </p>
            
            <ul className="space-y-2">
              {["Detectare aliniere corp", "Indicatori postură în timp real", "Analiză dezechilibre", "Recomandări personalizate"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right - Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-2xl" />
            
            <div className="relative bg-card rounded-2xl border border-border p-8 shadow-sm">
              <div className="space-y-4">
                {/* Body outline */}
                <div className="flex justify-center py-8">
                  <div className="space-y-2 w-16 text-center">
                    <div className="w-4 h-4 rounded-full bg-primary/20 mx-auto" />
                    <div className="w-6 h-6 rounded bg-primary/20 mx-auto" />
                    <div className="w-4 h-12 rounded-sm bg-primary/20 mx-auto" />
                    <div className="flex gap-2 justify-center">
                      <div className="w-2 h-8 bg-primary/20 rounded-sm" />
                      <div className="w-2 h-8 bg-primary/20 rounded-sm" />
                    </div>
                  </div>
                </div>
                
                {/* Analysis indicators */}
                <div className="space-y-2 pt-4 border-t border-border">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Alignment</span>
                    <span className="font-medium">85%</span>
                  </div>
                  <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                    <div className="w-[85%] h-full bg-primary rounded-full" />
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
