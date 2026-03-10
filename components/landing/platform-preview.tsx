"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Dumbbell, Utensils, TrendingUp, Calendar, CreditCard, Bell } from "lucide-react"
import { motion } from "framer-motion"

const platformFeatures = [
  { icon: TrendingUp, label: "Progres" },
  { icon: Dumbbell, label: "Antrenamente" },
  { icon: Utensils, label: "Nutriție" },
  { icon: Calendar, label: "Programări" },
  { icon: CreditCard, label: "Plăți" },
  { icon: Bell, label: "Notificări" },
]

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
          <p className="text-sm font-medium text-primary uppercase tracking-wide mb-4">
            Platformă digitală
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground tracking-tight">
            Dashboard-ul tău de wellness
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Gestionează întreaga experiență STAI DREPT dintr-un singur loc. 
            Antrenamente, nutriție, progres și programări — toate la un click distanță.
          </p>
        </motion.div>

        {/* Feature pills */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {platformFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2 px-4 py-2 bg-card text-sm text-foreground rounded-full border border-border"
            >
              <feature.icon className="w-4 h-4 text-muted-foreground" />
              {feature.label}
            </div>
          ))}
        </motion.div>

        {/* Platform Mockup */}
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
              <div className="w-16" /> {/* Spacer for symmetry */}
            </div>

            {/* Dashboard Content */}
            <div className="p-6 lg:p-8">
              <div className="grid lg:grid-cols-5 gap-6">
                {/* Sidebar */}
                <div className="lg:col-span-1 space-y-1">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-sm">SD</span>
                    </div>
                    <div className="hidden lg:block">
                      <p className="font-semibold text-sm text-foreground">STAI DREPT</p>
                      <p className="text-xs text-muted-foreground">Ana Popescu</p>
                    </div>
                  </div>
                  {['Dashboard', 'Antrenamente', 'Nutriție', 'Recuperare', 'Progres', 'Setări'].map((item, i) => (
                    <div 
                      key={item} 
                      className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-default ${
                        i === 0 
                          ? 'bg-primary text-primary-foreground' 
                          : 'text-muted-foreground'
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* Main Content */}
                <div className="lg:col-span-4 space-y-6">
                  {/* Welcome Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Bună dimineața, Ana</h3>
                      <p className="text-sm text-muted-foreground">Ai 2 activități programate astăzi</p>
                    </div>
                    <Button>
                      Începe antrenamentul
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid sm:grid-cols-4 gap-4">
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-4 border border-primary/10">
                      <p className="text-xs text-muted-foreground mb-1">Scor postură</p>
                      <div className="flex items-baseline gap-1.5">
                        <p className="text-2xl font-bold text-foreground">87</p>
                        <span className="text-xs font-medium text-chart-3">+5</span>
                      </div>
                    </div>
                    <div className="bg-muted/30 rounded-xl p-4 border border-border">
                      <p className="text-xs text-muted-foreground mb-1">Ședințe luna aceasta</p>
                      <p className="text-2xl font-bold text-foreground">18</p>
                    </div>
                    <div className="bg-muted/30 rounded-xl p-4 border border-border">
                      <p className="text-xs text-muted-foreground mb-1">Mese înregistrate</p>
                      <p className="text-2xl font-bold text-foreground">42</p>
                    </div>
                    <div className="bg-muted/30 rounded-xl p-4 border border-border">
                      <p className="text-xs text-muted-foreground mb-1">Streak curent</p>
                      <p className="text-2xl font-bold text-foreground">12 zile</p>
                    </div>
                  </div>

                  {/* Progress Chart */}
                  <div className="bg-muted/20 rounded-xl p-5 border border-border">
                    <div className="flex items-center justify-between mb-5">
                      <div>
                        <h4 className="font-semibold text-foreground">Evoluție scor postural</h4>
                        <p className="text-xs text-muted-foreground">Ultimele 30 zile</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span className="text-xs text-muted-foreground">Scor</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-chart-2" />
                          <span className="text-xs text-muted-foreground">Țintă</span>
                        </div>
                      </div>
                    </div>
                    <div className="h-32 flex items-end gap-2">
                      {[45, 48, 52, 50, 58, 55, 62, 60, 68, 72, 75, 80, 78, 82, 87].map((height, i) => (
                        <div key={i} className="flex-1 flex flex-col gap-1">
                          <motion.div 
                            className={`rounded-t-sm ${i === 14 ? 'bg-primary' : 'bg-primary/30'}`}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${height}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Upcoming */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-card rounded-xl p-5 border border-border">
                      <h4 className="font-semibold text-foreground mb-4">Următoarea ședință</h4>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Dumbbell className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-foreground">Forță - Corp superior</p>
                          <p className="text-sm text-muted-foreground">Astăzi, 18:00 • 45 min</p>
                        </div>
                        <Button variant="outline" size="sm">Vezi</Button>
                      </div>
                    </div>
                    <div className="bg-card rounded-xl p-5 border border-border">
                      <h4 className="font-semibold text-foreground mb-4">Masa de astăzi</h4>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-chart-3/10 flex items-center justify-center">
                          <Utensils className="w-6 h-6 text-chart-3" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-foreground">Somon cu quinoa și legume</p>
                          <p className="text-sm text-muted-foreground">Ridicare: 12:30 • 580 kcal</p>
                        </div>
                        <Button variant="outline" size="sm">Detalii</Button>
                      </div>
                    </div>
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
