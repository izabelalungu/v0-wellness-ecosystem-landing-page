"use client"

import { motion } from "framer-motion"
import { Scan, FileCheck, Activity, BarChart3, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: Scan,
    step: "01",
    title: "Evaluare AI",
    description: "Începi cu evaluarea posturală prin camera dispozitivului. Identificăm dezechilibre și zone care necesită atenție.",
    highlight: "Online, gratuit",
  },
  {
    icon: FileCheck,
    step: "02",
    title: "Analiză și recomandări",
    description: "Primești un raport detaliat cu puncte slabe, riscuri și recomandări personalizate pentru programul tău.",
    highlight: "Rezultate instant",
  },
  {
    icon: Activity,
    step: "03",
    title: "Program personalizat",
    description: "Lucrezi cu echipa noastră în ședințe de antrenament, recuperare și consultanță nutrițională.",
    highlight: "Onsite sau online",
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Monitorizare continuă",
    description: "Urmărești progresul pe platformă cu evaluări periodice și ajustări ale programului.",
    highlight: "Acces 24/7",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground tracking-tight">
            Cum funcționează
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Un proces simplu și structurat pentru îmbunătățirea posturii tale. 
            De la evaluare la monitorizarea rezultatelor.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-[60px] left-[calc(12.5%+40px)] right-[calc(12.5%+40px)]">
            <div className="h-px bg-border relative">
              <motion.div 
                className="absolute inset-y-0 left-0 bg-primary"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                {/* Step Circle */}
                <div className="relative z-10 flex items-center justify-center w-20 h-20 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-2xl bg-card border border-border shadow-sm" />
                  <div className="relative w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-primary">{step.step}</span>
                    <ArrowRight className="w-3 h-3 text-muted-foreground hidden lg:block last:hidden" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{step.description}</p>
                  <span className="inline-block px-2.5 py-1 bg-primary/5 text-primary text-xs font-medium rounded-full">
                    {step.highlight}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
