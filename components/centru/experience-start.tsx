"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function CentruExperienceStart() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Illustration placeholder */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-br from-chart-2/10 to-chart-2/5 rounded-3xl" />
              <div className="relative h-full bg-gradient-to-br from-muted to-muted/50 rounded-3xl border border-border overflow-hidden flex items-center justify-center p-8">
                {/* Illustration placeholder */}
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-chart-2/10 rounded-2xl flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-16 h-16 text-chart-2">
                      <circle cx="50" cy="25" r="12" fill="currentColor" opacity="0.3" />
                      <path d="M50 40 L50 70 M35 50 L65 50 M50 70 L35 95 M50 70 L65 95" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
                    </svg>
                  </div>
                  <p className="text-muted-foreground font-medium">Evaluare posturală</p>
                  <p className="text-sm text-muted-foreground">Analiză completă</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            className="space-y-6 order-1 lg:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-chart-2/10 border border-chart-2/20">
              <Sparkles className="w-3.5 h-3.5 text-chart-2" />
              <span className="text-xs font-medium text-chart-2 uppercase tracking-wide">Cum începe</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              Prima ta vizită la Centrul STAI DREPT
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Totul începe cu o evaluare posturală completă. Un specialist analizează postura ta, 
                identifică zonele care necesită atenție și discută obiectivele tale.
              </p>
              <p>
                Pe baza evaluării, construim împreună un plan personalizat care combină antrenament, 
                recuperare și monitorizare digitală — totul adaptat nevoilor tale specifice.
              </p>
            </div>

            <Button size="lg" className="bg-chart-2 hover:bg-chart-2/90 text-white h-12 px-6">
              Programează evaluarea
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
