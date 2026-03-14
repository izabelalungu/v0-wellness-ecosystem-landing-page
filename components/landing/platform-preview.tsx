"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

export function PlatformPreview() {
  return (
    <section id="platforma" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-2xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-xs font-medium text-primary uppercase tracking-wide">Platformă digitală</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground tracking-tight">
            Dashboard-ul tău de wellness
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Gestionează întreaga experiență STAI DREPT dintr-un singur loc. 
            Antrenamente, nutriție, progres și programări — toate la un click distanță.
          </p>
        </motion.div>

        {/* Platform Preview */}
        <motion.div 
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-xl">
            {/* Browser Header */}
            <div className="bg-muted/50 px-4 py-3 border-b border-border flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-muted-foreground/20" />
                <div className="w-3 h-3 rounded-full bg-muted-foreground/20" />
                <div className="w-3 h-3 rounded-full bg-muted-foreground/20" />
              </div>
              <div className="flex-1 max-w-sm mx-auto">
                <div className="bg-background rounded-lg px-4 py-1.5 text-xs text-muted-foreground text-center border border-border">
                  app.staidrept.com/dashboard
                </div>
              </div>
              <div className="w-16" />
            </div>

            {/* Dashboard Content */}
            <div className="p-6 lg:p-8">
              <div className="space-y-6">
                {/* Welcome Section */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Bună dimineața, Ana</h3>
                    <p className="text-sm text-muted-foreground">Ai 2 activități programate astăzi</p>
                  </div>
                  <Button className="w-fit">
                    Începe antrenamentul
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                {/* Main Chart Section */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        Evoluție scor postural
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">Ultimele 30 zile</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-xs text-muted-foreground">Scor actual</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-chart-2" />
                        <span className="text-xs text-muted-foreground">Țintă</span>
                      </div>
                    </div>
                  </div>

                  {/* Chart Area */}
                  <div className="bg-muted/30 rounded-xl p-6 border border-border min-h-64 flex flex-col justify-between">
                    {/* Y-axis labels */}
                    <div className="flex justify-between text-xs text-muted-foreground mb-4 px-1">
                      <span>100</span>
                      <span>75</span>
                      <span>50</span>
                    </div>

                    {/* Bar Chart */}
                    <div className="h-40 flex items-end justify-between gap-1.5">
                      {[45, 48, 52, 50, 58, 55, 62, 60, 68, 72, 75, 80, 78, 82, 87].map((height, i) => (
                        <motion.div 
                          key={i} 
                          className={`flex-1 flex flex-col gap-0.5`}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${height}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: i * 0.04 }}
                        >
                          <div 
                            className={`w-full rounded-t ${i === 14 ? 'bg-primary' : 'bg-primary/40'}`}
                            style={{ height: '100%' }}
                          />
                          {/* Target line indicator for last bar */}
                          {i === 14 && (
                            <div className="absolute -bottom-5 text-xs text-chart-2 font-medium">
                              Țintă: 90
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>

                    {/* X-axis label */}
                    <div className="flex justify-between text-xs text-muted-foreground mt-6 px-1">
                      <span>1 zile</span>
                      <span>15 zile</span>
                      <span>30 zile</span>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid sm:grid-cols-3 gap-4 pt-4">
                  <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
                    <p className="text-xs text-muted-foreground mb-1">Scor postură</p>
                    <div className="flex items-baseline gap-1.5">
                      <p className="text-2xl font-bold text-foreground">87</p>
                      <span className="text-xs font-medium text-chart-3">+5 vs. anterior</span>
                    </div>
                  </div>
                  <div className="bg-muted/30 rounded-xl p-4 border border-border">
                    <p className="text-xs text-muted-foreground mb-1">Ședințe luna aceasta</p>
                    <p className="text-2xl font-bold text-foreground">18</p>
                  </div>
                  <div className="bg-muted/30 rounded-xl p-4 border border-border">
                    <p className="text-xs text-muted-foreground mb-1">Streak curent</p>
                    <p className="text-2xl font-bold text-foreground">12 zile</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Button variant="outline" size="lg" className="h-12 px-6">
            Explorează platforma
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

