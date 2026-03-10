"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/shared/section-header"
import { LineChart, BarChart } from "lucide-react"

export function PlatformaProgress() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Monitorizarea progresului"
          description="Urmărește evoluția ta în timp și vezi rezultatele măsurabile ale muncii tale."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Progress Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl border border-border p-6 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <LineChart className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">Progres lunar</h3>
            </div>
            
            <div className="h-40 flex items-end gap-2">
              {[40, 50, 45, 60, 65, 72, 80].map((height, i) => (
                <div key={i} className="flex-1">
                  <div 
                    className="bg-primary/20 rounded-t transition-all hover:bg-primary/30"
                    style={{ height: `${height}%` }}
                  />
                </div>
              ))}
            </div>
            
            <p className="text-xs text-muted-foreground mt-4">
              Scor postură: 40 → 80 (în 6 luni)
            </p>
          </motion.div>

          {/* Training Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-2xl border border-border p-6 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <BarChart className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">Statistici antrenament</h3>
            </div>
            
            <div className="space-y-4">
              {[
                { label: "Antrenamente/săptămână", value: "4.2" },
                { label: "Durată medie", value: "52 min" },
                { label: "Mese planificate", value: "18/20" },
                { label: "Atestaţi recuperare", value: "95%" }
              ].map((stat, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                  <span className="font-semibold text-foreground">{stat.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
