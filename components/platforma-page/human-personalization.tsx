"use client"

import { motion } from "framer-motion"
import { Users, Zap, Heart } from "lucide-react"

export function HumanPersonalization() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Visual */}
          <motion.div
            className="order-2 lg:order-1 relative aspect-square max-w-lg mx-auto lg:max-w-none"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/5 rounded-2xl" />
            <div className="relative h-full bg-gradient-to-br from-white to-white/50 rounded-2xl border border-border overflow-hidden shadow-sm flex items-center justify-center">
              <div className="text-center space-y-6 p-8">
                <div className="flex justify-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Zap className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-2xl">+</div>
                  <div className="w-14 h-14 rounded-full bg-chart-2/10 flex items-center justify-center">
                    <Users className="w-7 h-7 text-chart-2" />
                  </div>
                </div>
                <div>
                  <p className="text-foreground font-bold text-lg">AI + Om</p>
                  <p className="text-muted-foreground text-sm">Echilibrul perfect</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="order-1 lg:order-2 space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                <span className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-xs font-medium text-primary uppercase tracking-wide">Metodă</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
                Pas cu Pas. Ghidat de Antrenor.
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                AI-ul nu înlocuiește omul. Îl completează. Platforma construiește programul și se adaptează la progres, dar aceasta se petrece sub superviziunea antrenorului tău, care monitorizează, ghidează și corectează atunci când este nevoie.
              </p>
            </div>

            {/* Balance of power */}
            <div className="space-y-4">
              {[
                {
                  icon: Zap,
                  title: "AI Adaptează",
                  description: "Dificultatea crește gradual. Exercițiile se schimbă pe măsură ce progresezi. Sistemul învață din datele tale.",
                },
                {
                  icon: Users,
                  title: "Antrenor Ghidează",
                  description: "Revizuiește programul, oferă feedback, corige forma. Intervenția umană când tehnologia nu e suficientă.",
                },
                {
                  icon: Heart,
                  title: "Tu Progresezi",
                  description: "Ai o cale clară, suport constant și ajustări inteligente. Rezultatele urmează natural.",
                },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={i}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Bottom note */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <p className="text-sm text-foreground">
                <span className="font-semibold">De ce e important:</span> Tehnologia e mare, dar oamenii sunt mai importanți. Echilibrul ăsta face diferența între un algoritm și o soluție reală.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
