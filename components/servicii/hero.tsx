"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

export function ServiciiHero() {
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
                Servicii integrate pentru
                <br />
                <span className="text-primary">rezultate durabile</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Ecosistemul STAI DREPT reunește antrenament, recuperare posturală, nutriție și tehnologie 
                într-un program coerent. Serviciile lucreaza impreuna pentru transformarea ta.
              </p>
            </div>

            {/* Benefits list */}
            <div className="space-y-3">
              {[
                "Program personalizat adaptat nevoilor tale",
                "Servicii online și onsite disponibile",
                "Suport continuu din parte specialiștilor",
                "Progres măsurabil și monitorizat constant"
              ].map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="text-base h-12 px-6">
                Programează o evaluare
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-base h-12 px-6">
                Descoperă serviciile potrivite
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Visual Stats */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-4">
              {[
                { number: "4", label: "Servicii complementare" },
                { number: "100%", label: "Ecosystem integrat" },
                { number: "Online + Onsite", label: "Flexibilitate completă" },
                { number: "24/7", label: "Acces la platformă" }
              ].map((stat, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 lg:p-8">
                  <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
