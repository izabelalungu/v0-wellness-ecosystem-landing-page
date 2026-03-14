"use client"

import { motion } from "framer-motion"

const benefits = [
  {
    title: "Îmbunătățire posturală",
    description: "Postura mai dreaptă și aliniament spinal optim, cu exerciții personalizate și supravegherea constantă a progresului.",
  },
  {
    title: "Reducerea durerilor",
    description: "Diminuarea dramatică a durerilor de spate, gât și alte zone afectate prin recuperare sistematică și masaj terapeutic.",
  },
  {
    title: "Creșterea energiei",
    description: "Simți-te mai plin de energie, cu mobilitate îmbunătățită și abilitate crescută în activitățile zilnice.",
  },
  {
    title: "Rezultate măsurabile",
    description: "Progres clar tracked în platformă, cu evaluări periodice, grafice de evoluție și rapoarte personalizate.",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image Placeholder */}
          <motion.div 
            className="aspect-video bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-border flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm text-muted-foreground">Imagine reprezentativă</p>
            </div>
          </motion.div>

          {/* Right - Benefits List */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <span className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-xs font-medium text-primary uppercase tracking-wide">Beneficii</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-foreground tracking-tight">
                Ceea ce vei experimenta
              </h2>
            </div>

            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="border-l-2 border-primary/30 pl-6 py-2"
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <h3 className="font-semibold text-lg text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
