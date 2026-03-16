"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, Utensils, ArrowRight } from "lucide-react"

const benefits = [
  "Ingrediente proaspete, naturale",
  "Meniuri echilibrate nutrițional",
  "Mâncare sănătoasă și gustoasă",
  "Opțiuni personalizate pentru nevoile tale",
]

export function NutrieFeaturedNutrition() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Ribbon */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-chart-3/10 border border-chart-3/20">
            <Utensils className="w-3.5 h-3.5 text-chart-3" />
            <span className="text-xs font-medium text-chart-3 uppercase tracking-wide">Meniuri echilibrate</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left - Title */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight text-balance">
              Mâncare bună,
              <br />
              <span className="text-chart-3">sănătoasă și</span>
              <br />
              echilibrată
            </h2>
          </motion.div>

          {/* Center - Featured Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative aspect-square max-w-sm mx-auto">
              {/* Discount badge */}
              <div className="absolute -top-4 left-4 z-10 bg-chart-3 text-white px-4 py-2 rounded-full shadow-lg">
                <p className="text-[10px] uppercase tracking-wide">Plan</p>
                <p className="text-lg font-bold">Lunar</p>
              </div>

              {/* Main image placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-chart-3/15 to-chart-3/5 rounded-full flex items-center justify-center border-4 border-chart-3/20">
                <div className="text-center">
                  <span className="text-8xl">🍽️</span>
                  <p className="text-sm text-muted-foreground mt-4">Masă completă</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-chart-3/10 rounded-full" />
              <div className="absolute top-1/4 -right-4 w-8 h-8 bg-chart-3/20 rounded-full" />
            </div>
          </motion.div>

          {/* Right - Benefits & CTA */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-chart-3/15 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-chart-3" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="h-12 px-8 bg-chart-3 hover:bg-chart-3/90 text-white">
              Vezi programele
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
