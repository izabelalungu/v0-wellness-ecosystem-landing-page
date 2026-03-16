"use client"

import { motion } from "framer-motion"
import { Leaf, Phone, Clock } from "lucide-react"

export function NutrieVisualIntro() {
  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Ribbon */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-chart-3/10 border border-chart-3/20">
            <Leaf className="w-3.5 h-3.5 text-chart-3" />
            <span className="text-xs font-medium text-chart-3 uppercase tracking-wide">Program de nutriție</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Image */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-chart-3/10 to-chart-3/5 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto bg-chart-3/15 rounded-full flex items-center justify-center mb-3">
                      <span className="text-4xl">🥗</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Salată fresh</p>
                  </div>
                </div>
              </div>
              {/* Small floating image */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-chart-3/15 to-chart-3/10 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-3xl">🍳</span>
              </div>
            </div>
          </motion.div>

          {/* Center Content */}
          <motion.div
            className="text-center lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.1] mb-6 text-balance">
              Descoperă gustul
              <br />
              <span className="text-chart-3">mâncării sănătoase</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-md mx-auto">
              Mese echilibrate și planuri alimentare create pentru energie, 
              recuperare și performanță optimă în fiecare zi.
            </p>

            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 text-chart-3" />
                <span>Luni - Vineri: 08:00 - 18:00</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 text-chart-3" />
                <span className="font-semibold text-foreground">+40 (XXX) XXX XXXX</span>
              </div>
            </div>
          </motion.div>

          {/* Right Images */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-chart-3/10 to-chart-3/5 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto bg-chart-3/15 rounded-full flex items-center justify-center mb-3">
                      <span className="text-4xl">🍲</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Supă caldă</p>
                  </div>
                </div>
              </div>
              {/* Circular badge */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-chart-3 rounded-full flex items-center justify-center text-white shadow-lg rotate-12">
                <div className="text-center -rotate-12">
                  <p className="text-[10px] uppercase tracking-wide">Stai</p>
                  <p className="text-xs font-bold">DREPT</p>
                  <p className="text-[8px]">Nutriție</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile images row */}
        <motion.div
          className="lg:hidden grid grid-cols-2 gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="aspect-square bg-gradient-to-br from-chart-3/10 to-chart-3/5 rounded-2xl flex items-center justify-center">
            <span className="text-5xl">🥗</span>
          </div>
          <div className="aspect-square bg-gradient-to-br from-chart-3/10 to-chart-3/5 rounded-2xl flex items-center justify-center">
            <span className="text-5xl">🍲</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
