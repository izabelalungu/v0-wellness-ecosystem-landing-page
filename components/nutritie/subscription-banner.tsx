"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, Package } from "lucide-react"

export function NutrieSubscriptionBanner() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-slate-900 rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid lg:grid-cols-2">
            {/* Left - Image Collage */}
            <div className="relative h-64 lg:h-auto">
              <div className="absolute inset-0 grid grid-cols-2 gap-2 p-4">
                <div className="bg-gradient-to-br from-chart-3/30 to-chart-3/10 rounded-2xl flex items-center justify-center">
                  <span className="text-5xl">🥗</span>
                </div>
                <div className="bg-gradient-to-br from-chart-3/30 to-chart-3/10 rounded-2xl flex items-center justify-center">
                  <span className="text-5xl">🍲</span>
                </div>
                <div className="bg-gradient-to-br from-chart-3/30 to-chart-3/10 rounded-2xl flex items-center justify-center">
                  <span className="text-5xl">🥘</span>
                </div>
                <div className="bg-gradient-to-br from-chart-3/30 to-chart-3/10 rounded-2xl flex items-center justify-center">
                  <span className="text-5xl">🍽️</span>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              {/* Ribbon */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-chart-3/20 border border-chart-3/30 w-fit mb-6">
                <Package className="w-3.5 h-3.5 text-chart-3" />
                <span className="text-xs font-medium text-chart-3 uppercase tracking-wide">Abonamente</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
                Abonamente și livrare flexibilă
              </h2>

              <p className="text-white/70 leading-relaxed mb-8 max-w-md">
                Cu abonamentul STAI DREPT, primești mese echilibrate zilnic sau săptămânal. 
                Alege livrarea la domiciliu sau ridicarea din centru pentru maxim de flexibilitate.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-12 px-8 bg-chart-3 hover:bg-chart-3/90 text-white">
                  Descoperă planurile
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-white/50 text-sm flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Rezervări: <span className="text-white font-medium">+40 (XXX) XXX XXXX</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
