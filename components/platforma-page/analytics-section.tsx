"use client"

import { motion } from "framer-motion"
import { Zap, Shield, Check } from "lucide-react"

// Task Performance Dashboard Preview
function PerformanceDashboard() {
  const tasks = [
    { name: "Evaluare Posturală", status: "Completat", date: "28 Feb 2024", type: "done" },
    { name: "Antrenament Forță", status: "În curs", date: "25 Tasks", type: "progress" },
    { name: "Plan Nutriție", status: "42 Mese", date: "8 Tasks", type: "info" },
    { name: "Recuperare", status: "3 Ședințe", date: "0 Tasks", type: "done" },
  ]

  return (
    <div className="bg-white rounded-2xl border border-border shadow-xl overflow-hidden">
      <div className="p-6 border-b border-border">
        <h4 className="font-semibold text-foreground">Performanță Progres</h4>
        <p className="text-xs text-muted-foreground mt-1">Ultimele 7 zile</p>
      </div>

      <div className="p-6">
        {/* Mini stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-muted/30 rounded-lg p-3">
            <p className="text-xs text-muted-foreground">Media Ședințe</p>
            <p className="text-xl font-bold text-foreground">4.2</p>
            <p className="text-xs text-chart-3">+12% vs. săpt. anterioară</p>
          </div>
          <div className="bg-muted/30 rounded-lg p-3">
            <p className="text-xs text-muted-foreground">Scor Postural</p>
            <p className="text-xl font-bold text-foreground">87</p>
            <p className="text-xs text-chart-3">+5 puncte</p>
          </div>
        </div>

        {/* Task list */}
        <div className="space-y-3">
          {tasks.map((task, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  task.type === "done" ? "bg-chart-3/10" : task.type === "progress" ? "bg-primary/10" : "bg-chart-2/10"
                }`}>
                  <Check className={`w-4 h-4 ${
                    task.type === "done" ? "text-chart-3" : task.type === "progress" ? "text-primary" : "text-chart-2"
                  }`} />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{task.name}</p>
                  <p className="text-xs text-muted-foreground">{task.status}</p>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">{task.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function PlatformaAnalyticsSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-xs font-medium text-primary uppercase tracking-wide">Vizibilitate completă</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
              Vizualizează, organizează și prioritizează tot progresul tău
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Adună toate informațiile despre antrenamente, recuperare și nutriție într-un singur loc. 
              Integrare completă cu toate serviciile STAI DREPT pentru a-ți maximiza rezultatele.
            </p>

            {/* Benefit blocks */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Rapid și aliniat</h4>
                  <p className="text-sm text-muted-foreground">
                    Acces instant la toate datele și progresul tău în timp real.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Colaborare sigură</h4>
                  <p className="text-sm text-muted-foreground">
                    Datele tale sunt securizate și accesibile doar echipei tale.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <PerformanceDashboard />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
