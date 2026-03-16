"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function IntegratedSolutionSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <span className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-xs font-medium text-primary uppercase tracking-wide">Ecosistemul integrat</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground tracking-tight">
                Patru piloni, o singură soluție
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                STAI DREPT nu este doar o platformă. Este un ecosistem complet unde evaluarea, antrenamentul, recuperarea și nutriția sunt perfect integrate pentru a-ți oferi rezultate sustenabile și măsurabile.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-primary/10">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Evaluare profesională</h3>
                  <p className="text-sm text-muted-foreground">Analiza detaliată a posturii și stării de sănătate</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-primary/10">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Programe adaptate</h3>
                  <p className="text-sm text-muted-foreground">Antrenament, recuperare și nutriție personalizate</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-primary/10">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Monitorizare continuă</h3>
                  <p className="text-sm text-muted-foreground">Urmărire progres și ajustări în timp real</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-primary/10">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Suport integrat</h3>
                  <p className="text-sm text-muted-foreground">Echipa de specialiști disponibilă permanent</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button size="lg" className="h-14 px-8 text-base">
                Descoperă ecosistemul
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>

          {/* Right - Image Collage */}
          <motion.div
            className="relative h-full min-h-96"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-full">
              {/* Main large image */}
              <div className="absolute inset-0 rounded-2xl border-4 border-primary/30 overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏋️</div>
                  <p className="text-muted-foreground font-medium">Antrenament</p>
                </div>
              </div>

              {/* Overlay cards */}
              <motion.div
                className="absolute bottom-4 right-4 w-40 h-32 rounded-xl bg-card border-2 border-primary/20 shadow-lg p-4 flex flex-col items-center justify-center"
                whileHover={{ y: -8 }}
              >
                <div className="text-4xl mb-2">💪</div>
                <p className="text-sm font-semibold text-foreground text-center">Recuperare</p>
              </motion.div>

              <motion.div
                className="absolute top-8 left-8 w-32 h-32 rounded-xl bg-card border-2 border-chart-3/20 shadow-lg p-4 flex flex-col items-center justify-center"
                whileHover={{ y: -8 }}
              >
                <div className="text-4xl mb-2">🥗</div>
                <p className="text-sm font-semibold text-foreground text-center">Nutriție</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
