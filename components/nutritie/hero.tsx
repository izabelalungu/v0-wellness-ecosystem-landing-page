"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
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
            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground text-balance">
                Nutriție personalizată
                <br />
                <span className="text-primary">pentru obiective reale</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Mese proaspete și echilibrate preparate zilnic. Planuri adaptate obiectivelor tale, 
                cu flexibilitate și ușurință de utilizare.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-3">
              {[
                "Mese proaspete preparate zilnic",
                "Livrare la domiciliu sau ridicare de la centru",
                "Planuri adaptate obiectivelor tale",
                "Urmărire nutrienți direct din platformă"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="text-base h-12 px-6">
                Explorează programul nutriție
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-base h-12 px-6">
                Vezi meniurile disponibile
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Meal Cards */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-4">
              {[
                { meal: "Mic dejun", desc: "Ou,, pâine integrală" },
                { meal: "Prânz", desc: "Piept pui, orez brun" },
                { meal: "Cină", desc: "Somon, cartofi dulci" },
                { meal: "Desert", desc: "Iaurt grecesc, fructe" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  className="bg-card border border-border rounded-lg p-4 lg:p-6"
                  whileHover={{ translateX: 4 }}
                >
                  <div className="font-semibold text-foreground">{item.meal}</div>
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
