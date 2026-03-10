"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Scan, Clock, Zap, UserCheck, Camera, Smartphone } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Camera,
    title: "Computer Vision",
    description: "Tehnologie avansată de recunoaștere a punctelor cheie din corp pentru analiză precisă.",
  },
  {
    icon: Clock,
    title: "Sub 3 minute",
    description: "Evaluare completă rapidă, fără a fi nevoie de programare sau deplasare.",
  },
  {
    icon: Zap,
    title: "Rezultate instant",
    description: "Raport detaliat cu zonele problematice și recomandări personalizate imediate.",
  },
  {
    icon: UserCheck,
    title: "Plan pe măsură",
    description: "Program de corectare adaptat specific profilului tău postural.",
  },
]

const analysisPoints = [
  { label: "Alinierea capului", status: "optimal", color: "bg-chart-3" },
  { label: "Simetria umerilor", status: "atenție", color: "bg-amber-500" },
  { label: "Curbura coloanei", status: "monitorizat", color: "bg-primary" },
  { label: "Echilibrul bazinului", status: "optimal", color: "bg-chart-3" },
]

export function AIPostureEvaluation() {
  return (
    <section id="evaluare" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6">
            <Scan className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-primary">Tehnologie proprietară</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground tracking-tight">
            Evaluare posturală prin
            <span className="text-primary"> inteligență artificială</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Sistemul nostru de computer vision analizează postura ta prin camera dispozitivului, 
            identificând dezechilibre și oferind recomandări personalizate — de oriunde te-ai afla.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Interactive Demo Visual */}
          <motion.div 
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative">
              {/* Main Analysis Card */}
              <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
                {/* Header */}
                <div className="bg-muted/30 px-5 py-4 border-b border-border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Smartphone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-foreground">Evaluare posturală</p>
                      <p className="text-xs text-muted-foreground">Analiză completă în 17 puncte</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-chart-3/10 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-chart-3 animate-pulse" />
                    <span className="text-[10px] font-medium text-chart-3">Activ</span>
                  </div>
                </div>
                
                {/* Analysis Results */}
                <div className="p-5 space-y-4">
                  {/* Overall Score */}
                  <div className="bg-muted/30 rounded-xl p-4 border border-border">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-sm font-medium text-foreground">Scor postural general</p>
                      <span className="text-2xl font-bold text-foreground">78<span className="text-sm font-normal text-muted-foreground">/100</span></span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-primary to-chart-3 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "78%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Nivel moderat - recomandăm program de corectare</p>
                  </div>
                  
                  {/* Analysis Points */}
                  <div className="space-y-2.5">
                    {analysisPoints.map((point, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center justify-between py-2.5 px-3 bg-muted/20 rounded-lg"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${point.color}`} />
                          <span className="text-sm text-foreground">{point.label}</span>
                        </div>
                        <span className="text-xs font-medium text-muted-foreground capitalize">{point.status}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <Button className="w-full" size="lg">
                    Vezi raportul complet
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                className="absolute -bottom-4 -right-4 lg:-right-8 bg-card rounded-xl px-4 py-3 border border-border shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Timp procesare</p>
                    <p className="font-semibold text-foreground">2.3 secunde</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div 
            className="order-1 lg:order-2 space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">
                Cum funcționează evaluarea AI?
              </h3>
              
              <div className="space-y-5">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/20 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <Button size="lg" className="h-12 px-6">
                Începe evaluarea gratuită
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <p className="text-xs text-muted-foreground mt-3">
                Fără cont necesar. Rezultate în mai puțin de 3 minute.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
