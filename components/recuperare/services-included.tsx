"use client"

import { motion } from "framer-motion"
import { Stethoscope, Activity, Hand, Flame, UserCheck, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Stethoscope,
    title: "Doctor în centru",
    description: "Consultații directe, fără drumuri la alte clinici. Evaluare medicală integrată în procesul tău de recuperare.",
    highlight: "Programări directe"
  },
  {
    icon: Activity,
    title: "Fizioterapie",
    description: "Tratamente specializate pentru reducerea durerii, refacerea mobilității și accelerarea vindecării țesuturilor.",
    highlight: "Echipamente moderne"
  },
  {
    icon: UserCheck,
    title: "Kinetoterapie",
    description: "Exerciții terapeutice ghidate pentru recuperarea funcționalității, îmbunătățirea forței și stabilității.",
    highlight: "Program personalizat"
  },
  {
    icon: Hand,
    title: "Masaj terapeutic",
    description: "Tehnici specializate pentru relaxare musculară, eliminarea tensiunilor și îmbunătățirea circulației.",
    highlight: "Specialiști certificați"
  },
  {
    icon: Flame,
    title: "Saună",
    description: "Recuperare pasivă prin căldură, reducerea inflamației și accelerarea proceselor de vindecare naturală.",
    highlight: "Inclus în abonament"
  }
]

export function RecuperareServicesIncluded() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-chart-2/10 border border-chart-2/20 mb-6">
            <span className="w-2 h-2 bg-chart-2 rounded-full" />
            <span className="text-xs font-medium text-chart-2 uppercase tracking-wide">Servicii incluse</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Un pachet complet, nu intervenții izolate
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Toate serviciile funcționează împreună într-un traseu coerent. 
            Scapi de drumuri inutile între locații — totul se întâmplă aici.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="group bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md hover:border-chart-2/30 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-chart-2/10 flex items-center justify-center mb-4 group-hover:bg-chart-2/20 transition-colors">
                <service.icon className="w-6 h-6 text-chart-2" />
              </div>
              <div className="inline-block px-2 py-0.5 rounded bg-chart-2/10 text-xs font-medium text-chart-2 mb-3">
                {service.highlight}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Highlight box */}
        <motion.div
          className="bg-chart-2/5 border border-chart-2/20 rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-foreground mb-3">
            Doctor în centru = Zero drumuri inutile
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Nu mai alergi între cabinet medical și centru de recuperare. 
            Ai tot ce ai nevoie într-un singur loc, cu programări directe și coordonare completă.
          </p>
          <Button className="bg-chart-2 hover:bg-chart-2/90 text-white">
            Programează o consultație
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
