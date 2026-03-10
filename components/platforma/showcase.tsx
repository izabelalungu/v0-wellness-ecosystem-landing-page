"use client"

import { motion } from "framer-motion"

export function PlatformaShowcase() {
  return (
    <section id="showcase" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground tracking-tight">
            Interfață intuitivă și ușor de utilizat
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Platforma STAI DREPT este proiectată pentru a fi simplă, rapidă și plăcută de folosit. 
            Totul este la un clic distanță.
          </p>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg"
        >
          <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-muted/20">
            <span className="text-sm font-medium text-foreground">Platform Screenshot - Dashboard</span>
            <div className="flex gap-2">
              {[1, 2, 3].map(i => <div key={i} className="w-2.5 h-2.5 rounded-full bg-muted" />)}
            </div>
          </div>

          <div className="p-8">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-2">
                <div className="px-4 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm">
                  Dashboard
                </div>
                {['Antrenamente', 'Nutriție', 'Recuperare', 'Progres', 'Setări'].map((item, i) => (
                  <div key={i} className="px-4 py-3 rounded-lg text-muted-foreground text-sm hover:bg-muted/30 cursor-default">
                    {item}
                  </div>
                ))}
              </div>

              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Score Card */}
                <div className="bg-gradient-to-br from-primary/5 to-primary/2 border border-primary/10 rounded-xl p-6">
                  <div className="text-xs font-medium text-muted-foreground mb-2">SCOR POSTURAL ACTUAL</div>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-4xl font-bold text-primary">8.7</div>
                      <div className="text-xs text-muted-foreground mt-1">+0.8 vs. luna trecută</div>
                    </div>
                    <div className="w-16 h-12 bg-primary/20 rounded-lg" />
                  </div>
                </div>

                {/* Progress Charts */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Mobilitate', value: 78 },
                    { title: 'Forță', value: 85 },
                    { title: 'Echilibru', value: 72 },
                    { title: 'Consistență', value: 92 }
                  ].map((item, i) => (
                    <div key={i} className="bg-muted rounded-lg p-4">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-medium text-foreground">{item.title}</span>
                        <span className="text-sm font-bold text-primary">{item.value}%</span>
                      </div>
                      <div className="h-2 bg-background rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: `${item.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm">
                    Comenzi Antrenament
                  </button>
                  <button className="flex-1 px-4 py-3 bg-muted text-foreground rounded-lg font-medium text-sm">
                    Vezi Rapoarte
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
