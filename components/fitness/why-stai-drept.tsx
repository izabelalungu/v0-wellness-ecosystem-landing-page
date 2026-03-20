"use client"

import { motion } from "framer-motion"
import { Trophy, Zap, HeartPulse, Link2 } from "lucide-react"

const differentiators = [
  {
    icon: Trophy,
    title: "Cel mai bine echipat spațiu din județul Vâlcea",
    description: "Nu spunem asta ca slogan. Îl susținem cu aparatură profesională, spațiu de 350 mp, saună și un nivel de detaliu greu de egalat în regiune.",
  },
  {
    icon: Zap,
    title: "Antrenori care știu ce fac cu tine",
    description: "Nu freelanceri care vin și pleacă. Antrenori integrati în ecosistem, care colaborează cu recuperatorul și nutritionistul pentru un program coerent.",
  },
  {
    icon: HeartPulse,
    title: "Recuperare și fitness sub același acoperiș",
    description: "Dacă te antrenezi și ai nevoie de recuperare, nu trebuie să cauți în altă parte. Totul este disponibil în același spațiu, coordonat.",
  },
  {
    icon: Link2,
    title: "Parte dintr-un ecosistem, nu o sală izolată",
    description: "Progresul tău din sală se reflectă în platformă, în planul de nutriție și în evaluările posturale periodice. Totul este conectat.",
  },
]

export function FitnessWhyUs() {
  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start"
        >
          {/* Left heading */}
          <div className="space-y-6 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-xs font-medium text-primary uppercase tracking-wide">De ce sala STAI DREPT</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-balance leading-tight">
              Diferența nu e la suprafață. E în fiecare detaliu.
            </h2>
            <p className="text-white/60 leading-relaxed">
              Există multe săli. Există puține locuri unde echipamentele, echipa, spațiul și sistemul de urmărire a progresului lucrează împreună pentru rezultatul tău.
            </p>
            <div className="pt-4 border-t border-white/10">
              <div className="text-4xl font-black text-primary mb-1">Nr. 1</div>
              <div className="text-sm text-white/50">în județul Vâlcea, ca standard de echipare și integrare de servicii</div>
            </div>
          </div>

          {/* Right cards */}
          <div className="space-y-4">
            {differentiators.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={i}
                  className="flex gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/8 transition-colors"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
