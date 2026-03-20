"use client"

import { motion } from "framer-motion"
import { ClipboardCheck, FileText, Play, TrendingUp, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Evaluare",
    description: "Programezi o evaluare inițială. Specialiștii noștri analizează situația ta completă."
  },
  {
    icon: FileText,
    step: "02",
    title: "Recomandare",
    description: "Primești un plan personalizat cu serviciile potrivite și frecvența optimă."
  },
  {
    icon: Play,
    step: "03",
    title: "Intervenție",
    description: "Începi ședințele de recuperare — fizioterapie, kinetoterapie, masaj — toate coordonate."
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Monitorizare",
    description: "Progresul tău este urmărit continuu. Planul se ajustează în funcție de evoluție."
  }
]

export function RecuperareHowToStart() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-chart-2/10 border border-chart-2/20 mb-6">
            <span className="w-2 h-2 bg-chart-2 rounded-full" />
            <span className="text-xs font-medium text-chart-2 uppercase tracking-wide">Cum începi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Un proces simplu și ghidat
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nu intri într-un sistem complicat sau rece. 
            Traseul este logic, clar și adaptat ritmului tău.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="bg-background rounded-xl p-6 border border-border shadow-sm h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-chart-2/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-chart-2" />
                  </div>
                  <span className="text-2xl font-bold text-chart-2/30">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
              
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-6">
            Primul pas este cel mai simplu: programează o evaluare.
          </p>
          <Button size="lg" className="bg-chart-2 hover:bg-chart-2/90 text-white h-12 px-8">
            Programează evaluarea inițială
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
