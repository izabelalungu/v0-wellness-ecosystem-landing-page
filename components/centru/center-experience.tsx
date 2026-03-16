"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Building } from "lucide-react"
import { motion } from "framer-motion"

export function CentruCenterExperience() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Illustration placeholder */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-[4/3] max-w-lg mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-br from-chart-2/10 to-chart-2/5 rounded-3xl" />
              <div className="relative h-full bg-gradient-to-br from-muted to-muted/50 rounded-3xl border border-border overflow-hidden flex items-center justify-center p-8">
                {/* Illustration placeholder */}
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto bg-chart-2/10 rounded-2xl flex items-center justify-center">
                    <Building className="w-10 h-10 text-chart-2" />
                  </div>
                  <p className="text-muted-foreground font-medium">Spațiu modern</p>
                  <p className="text-sm text-muted-foreground">Gym • Recuperare • Wellness</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-chart-2/10 border border-chart-2/20">
              <Building className="w-3.5 h-3.5 text-chart-2" />
              <span className="text-xs font-medium text-chart-2 uppercase tracking-wide">Experiența la centru</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              Un spațiu creat pentru transformare
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Centrul STAI DREPT oferă un mediu premium dedicat posturii și recuperării. 
                Echipamente moderne, spații dedicate pentru fiecare tip de activitate, 
                și o atmosferă calmă și profesională.
              </p>
              <p>
                De la zona de gym complet echipată, la spațiile de fizioterapie și wellness — 
                totul este proiectat pentru a susține progresul tău continuu. Iar sesiunile 
                se sincronizează automat în platformă pentru monitorizare pe termen lung.
              </p>
            </div>

            <Button size="lg" className="bg-chart-2 hover:bg-chart-2/90 text-white h-12 px-6">
              Descoperă facilitățile
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
