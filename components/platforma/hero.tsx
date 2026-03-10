"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function PlatformaHero() {
  return (
    <section className="pt-24 pb-12 lg:pt-32 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground text-balance">
                Platforma ta de wellness,
                <br />
                <span className="text-primary">într-un singur loc</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Dashboard integrat pentru gestionarea completă a experienței STAI DREPT. 
                Antrenamente, progres, nutriție, programări și plăți — toate în platformă.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="text-base h-12 px-6">
                Explorează platforma
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-base h-12 px-6">
                Începe evaluarea AI
              </Button>
            </div>

            {/* Key features */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: "Dashboard Personal", value: "100% Customizat" },
                { label: "Urmărire Progres", value: "Real-time" },
                { label: "Integrare Completă", value: "Cu serviciile STAI DREPT" },
                { label: "Disponibil", value: "iOS, Android, Web" }
              ].map((feature, index) => (
                <div key={index} className="text-sm">
                  <div className="font-semibold text-foreground">{feature.label}</div>
                  <div className="text-muted-foreground">{feature.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Platform Preview */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative aspect-[4/3] max-w-lg mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-2xl" />
              
              <div className="relative h-full bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
                <div className="px-4 py-3 border-b border-border flex items-center justify-between bg-muted/30">
                  <span className="text-xs font-medium text-muted-foreground">Dashboard STAI DREPT</span>
                  <div className="flex gap-1">
                    {[1, 2, 3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-muted" />)}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  {/* Score Card */}
                  <div className="bg-primary/5 border border-primary/10 rounded-lg p-4">
                    <div className="text-xs font-medium text-muted-foreground mb-2">Scor Postural</div>
                    <div className="text-3xl font-bold text-primary">8.5/10</div>
                    <div className="text-xs text-muted-foreground mt-1">+0.5 față de ultima evaluare</div>
                  </div>

                  {/* Progress Bars */}
                  <div className="space-y-3">
                    {[
                      { label: "Mobilitate", value: 75 },
                      { label: "Forță", value: 82 },
                      { label: "Echilibru", value: 68 }
                    ].map((item, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="font-medium text-foreground">{item.label}</span>
                          <span className="text-primary font-medium">{item.value}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary" 
                            style={{ width: `${item.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2 pt-2">
                    <button className="flex-1 px-3 py-2 bg-primary text-primary-foreground rounded-lg text-xs font-medium">
                      Antrenament
                    </button>
                    <button className="flex-1 px-3 py-2 bg-muted text-foreground rounded-lg text-xs font-medium">
                      Mese
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
