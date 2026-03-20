"use client"

import { Activity } from "lucide-react"
import { PageHero } from "@/components/shared/page-hero"
import { motion } from "framer-motion"

function RecoveryVisual() {
  return (
    <div className="relative aspect-[4/3] max-w-lg mx-auto lg:max-w-none">
      <div className="absolute inset-0 bg-gradient-to-br from-chart-2/5 to-chart-2/10 rounded-2xl" />
      
      <div className="relative h-full bg-card rounded-2xl border border-border overflow-hidden shadow-lg p-6 lg:p-8">
        <div className="space-y-4">
          {/* Progress indicator */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">Progresul tău</span>
            <span className="text-xs text-chart-2 font-semibold">+34% ameliorare</span>
          </div>
          
          {/* Visual progress bars */}
          <div className="space-y-3">
            {[
              { label: "Mobilitate", value: 78 },
              { label: "Reducere durere", value: 85 },
              { label: "Forță posturală", value: 62 },
              { label: "Stabilitate", value: 71 },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className="text-foreground font-medium">{item.value}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-chart-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${item.value}%` }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Next session */}
          <div className="mt-6 p-3 bg-chart-2/5 rounded-xl border border-chart-2/20">
            <p className="text-xs text-muted-foreground">Următoarea ședință</p>
            <p className="text-sm font-medium text-foreground">Kinetoterapie cu Marian</p>
            <p className="text-xs text-chart-2">Mâine, 10:00</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function RecuperareHero() {
  return (
    <PageHero
      ribbonText="Recuperare personalizată"
      ribbonColor="chart-2"
      title="Scapă de Dureri. Recuperează-te Complet."
      titleHighlight="Un traseu clar spre progres."
      subtitle="Fizioterapie, kinetoterapie și masaj coordonate de specialiști. Doctor în centru, fără drumuri inutile. Totul într-un singur loc, adaptat nevoilor tale."
      primaryButtonText="Programează o evaluare"
      secondaryButtonText="Vezi cum funcționează"
      sideContent={<RecoveryVisual />}
    />
  )
}
