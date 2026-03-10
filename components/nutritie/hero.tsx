"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf } from "lucide-react"
import { motion } from "framer-motion"

export function NutrieHero() {
  return (
    <section className="pt-24 pb-12 lg:pt-32 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-chart-3/10 border border-chart-3/20">
              <Leaf className="w-3.5 h-3.5 text-chart-3" />
              <span className="text-xs font-medium text-chart-3">Program de nutriție</span>
            </div>

            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground text-balance">
                Programul de Nutriție STAI DREPT
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Mese echilibrate și planuri alimentare create pentru energie, recuperare și performanță.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="text-base h-12 px-6 bg-chart-3 hover:bg-chart-3/90 text-white">
                Vezi meniul lunar
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-base h-12 px-6">
                Aboneaza-te la planul de mese
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Meal Visuals */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-3">
              {[
                { meal: "Mic dejun proteic", desc: "Bowl cu quinoa și legume" },
                { meal: "Prânz echilibrat", desc: "Pui cu legume la cuptor" },
                { meal: "Cină ușoară", desc: "Pește alb cu broccoli" },
                { meal: "Desert sanatos", desc: "Iaurt grecesc cu fructe" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  className="bg-card border border-border rounded-xl p-4 lg:p-6 shadow-sm"
                  whileHover={{ translateX: 4 }}
                >
                  <div className="font-semibold text-foreground text-sm">{item.meal}</div>
                  <div className="text-sm text-muted-foreground">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
