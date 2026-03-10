"use client"

import { motion } from "framer-motion"
import { TrendingUp, Activity, Heart, Scale, Zap, BarChart3 } from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "Postură corectă",
    description: "Corectarea dezaliniamentelor și dezvoltarea unei posturi sănătoase pe termen lung.",
    metric: "+45%",
    metricLabel: "îmbunătățire medie",
  },
  {
    icon: Heart,
    title: "Reducerea durerii",
    description: "Eliminarea durerilor cronice de spate, gât și articulații prin programe țintite.",
    metric: "87%",
    metricLabel: "clienți fără dureri",
  },
  {
    icon: Activity,
    title: "Mobilitate îmbunătățită",
    description: "Creșterea flexibilității și a calității mișcării în activitățile zilnice.",
    metric: "3x",
    metricLabel: "flexibilitate crescută",
  },
  {
    icon: Scale,
    title: "Echilibru corporal",
    description: "Restabilirea echilibrului muscular și a simetriei între părțile corpului.",
    metric: "92%",
    metricLabel: "simetrie restaurată",
  },
  {
    icon: Zap,
    title: "Performanță fizică",
    description: "Optimizarea performanței în sport și activitățile zilnice prin fundații solide.",
    metric: "+30%",
    metricLabel: "eficiență mișcare",
  },
  {
    icon: BarChart3,
    title: "Progres măsurabil",
    description: "Monitorizarea evoluției cu date concrete și evaluări periodice prin AI.",
    metric: "24/7",
    metricLabel: "acces la date",
  },
]

export function Benefits() {
  return (
    <section className="py-20 lg:py-28 bg-foreground text-background relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px' 
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 tracking-tight">
            Rezultate reale, îmbunătățiri durabile
          </h2>
          <p className="text-lg text-background/70 leading-relaxed">
            Abordarea noastră integrată aduce beneficii concrete și măsurabile 
            pentru postura, mobilitatea și sănătatea ta generală.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              className="group p-6 rounded-2xl border border-background/10 bg-background/5 hover:bg-background/10 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/90 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">{benefit.metric}</p>
                  <p className="text-xs text-background/50">{benefit.metricLabel}</p>
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
              <p className="text-sm text-background/60 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
