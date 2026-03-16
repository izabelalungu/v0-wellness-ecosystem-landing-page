"use client"

import { motion } from "framer-motion"
import { Brain, BarChart3, Settings2, ListChecks, ArrowRight } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: ListChecks,
    title: "Gestionare Servicii",
    description: "Administrează-ți abonamentele, ședințele și programările din dashboard-ul tău personal.",
    link: "#",
    highlighted: false,
  },
  {
    icon: Brain,
    title: "Evaluare Posturală AI",
    description: "Analiză video cu inteligență artificială pentru evaluarea precisă a posturii și identificarea dezechilibrelor.",
    link: "#",
    highlighted: true,
  },
  {
    icon: Settings2,
    title: "Interfață Personalizabilă",
    description: "Configurează dashboard-ul după preferințele tale și accesează rapid secțiunile importante.",
    link: "#",
    highlighted: false,
  },
  {
    icon: BarChart3,
    title: "Progres Măsurabil",
    description: "Grafice și rapoarte detaliate care îți arată evoluția în timp real, cu metrici clare.",
    link: "#",
    highlighted: false,
  },
]

export function PlatformaDarkFeatures() {
  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-xs font-medium text-primary uppercase tracking-wide">Funcționalități</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 tracking-tight">
            Funcționalități care te ajută<br />să fii mai productiv
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Tot ce ai nevoie pentru a gestiona antrenamentele, recuperarea și progresul tău într-un mod eficient.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl p-6 transition-all duration-300 ${
                feature.highlighted
                  ? "bg-primary text-primary-foreground shadow-xl shadow-primary/20 scale-105"
                  : "bg-white/5 border border-white/10 hover:bg-white/10"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  feature.highlighted ? "bg-white/20" : "bg-white/10"
                }`}
              >
                <feature.icon className={`w-6 h-6 ${feature.highlighted ? "text-white" : "text-primary"}`} />
              </div>

              <h3 className={`font-bold text-lg mb-3 ${feature.highlighted ? "text-white" : "text-white"}`}>
                {feature.title}
              </h3>

              <p className={`text-sm leading-relaxed mb-4 ${feature.highlighted ? "text-white/80" : "text-white/60"}`}>
                {feature.description}
              </p>

              <Link
                href={feature.link}
                className={`inline-flex items-center gap-1 text-sm font-medium transition-colors ${
                  feature.highlighted
                    ? "text-white hover:text-white/80"
                    : "text-primary hover:text-primary/80"
                }`}
              >
                Descoperă mai mult
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
