"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, Star, ArrowRight } from "lucide-react"

const benefits = [
  "Fresh și gustos",
  "100% ingrediente naturale",
  "Echilibrat nutrițional",
  "Perfect pentru recuperare",
]

const countdownItems = [
  { value: "7", label: "Zile" },
  { value: "12", label: "Ore" },
  { value: "45", label: "Min" },
  { value: "30", label: "Sec" },
]

export function NutrieWeeklyOffer() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Ribbon */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-chart-3/10 border border-chart-3/20">
            <Star className="w-3.5 h-3.5 text-chart-3" />
            <span className="text-xs font-medium text-chart-3 uppercase tracking-wide">Oferta săptămânii</span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Meniul săptămânii
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left - Offer Details */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Sale badge */}
            <div className="inline-block bg-chart-3 text-white text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded">
              Economisești 15%
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              Pachet Power Week
            </h3>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-3">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-chart-3 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-sm text-muted-foreground line-through">599 lei</span>
              <span className="text-3xl font-bold text-chart-3">499 lei</span>
              <span className="text-sm text-muted-foreground">/ săptămână</span>
            </div>

            <Button size="lg" className="h-12 px-8 bg-chart-3 hover:bg-chart-3/90 text-white">
              Comandă acum
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>

          {/* Right - Image and Countdown */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Main image */}
            <div className="relative aspect-[4/3] bg-gradient-to-br from-chart-3/15 to-chart-3/5 rounded-3xl flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <span className="text-9xl">🥘</span>
                <p className="text-lg font-medium text-foreground mt-4">Pachet complet 7 zile</p>
                <p className="text-sm text-muted-foreground">21 mese echilibrate</p>
              </div>

              {/* Decorative food elements */}
              <div className="absolute top-4 left-4 w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-sm">
                <span className="text-2xl">🥬</span>
              </div>
              <div className="absolute bottom-8 left-8 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-sm">
                <span className="text-xl">🍅</span>
              </div>
              <div className="absolute top-1/3 right-4 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-sm">
                <span className="text-xl">🥑</span>
              </div>
            </div>

            {/* Countdown badges */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 space-y-2">
              {countdownItems.map((item, i) => (
                <div
                  key={i}
                  className="w-14 h-14 bg-chart-3 text-white rounded-lg flex flex-col items-center justify-center shadow-lg"
                >
                  <span className="text-lg font-bold leading-none">{item.value}</span>
                  <span className="text-[9px] uppercase tracking-wide">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
