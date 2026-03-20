"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ClipboardList, Target, Route, UserCheck } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: UserCheck,
    title: "Primire și orientare",
    description: "Ești întâmpinat la recepție, ți se explică spațiul și ai posibilitatea să pui orice întrebare. Nu ești lăsat să te descurci singur.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Evaluare inițială",
    description: "Discuție scurtă despre obiectivele tale, nivelul actual de activitate și orice limitări fizice relevante. Baza de la care construim.",
  },
  {
    number: "03",
    icon: Target,
    title: "Recomandare personalizată",
    description: "În funcție de evaluare, ești orientat spre abonamentul și tipul de program potrivit pentru tine: individual, ghidat sau de grup.",
  },
  {
    number: "04",
    icon: Route,
    title: "Intrare în program",
    description: "Primești acces la platformă, programul tău este configurat și începi structurat, cu un traseu clar în față.",
  },
]

export function FitnessFirstVisit() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-xs font-medium text-primary uppercase tracking-wide">Prima Vizită</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
            Nu vii și te descurci singur. Există o intrare ghidată în proces.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Prima interacțiune cu STAI DREPT este structurată intenționat. Vrei să știi la ce să te aștepți — iată exact cum arată.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={i}
                className="relative bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-5xl font-black text-muted/20 absolute top-4 right-4 leading-none select-none">
                  {step.number}
                </div>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Button size="lg" className="h-12 px-8 text-base">
            Programează Prima Vizită
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
