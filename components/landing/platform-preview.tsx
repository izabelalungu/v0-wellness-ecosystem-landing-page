"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Dumbbell, Utensils } from "lucide-react"
import { motion } from "framer-motion"

const barData = [42, 45, 48, 46, 52, 50, 56, 54, 60, 63, 66, 70, 68, 73, 78, 75, 80, 77, 82, 79, 83, 81, 85, 83, 87, 84, 88, 86, 89, 87]
const targetPct = 91

const navItems = ["Dashboard", "Antrenamente", "Nutriție", "Recuperare", "Progres", "Setări"]

export function PlatformPreview() {
  return (
    <section id="platforma" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
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

        {/* Browser mockup */}
        <motion.div
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-2xl">

            {/* Browser chrome */}
            <div className="bg-[#f5f5f5] px-4 py-3 border-b border-border flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#d9d9d9]" />
                <div className="w-3 h-3 rounded-full bg-[#d9d9d9]" />
                <div className="w-3 h-3 rounded-full bg-[#d9d9d9]" />
              </div>
              <div className="flex-1 max-w-xs mx-auto">
                <div className="bg-white rounded-md px-4 py-1 text-xs text-muted-foreground text-center border border-border">
                  app.staidrept.com/dashboard
                </div>
              </div>
              <div className="w-16" />
            </div>

            {/* App body */}
            <div className="flex min-h-[540px] bg-[#fafafa]">

              {/* Sidebar */}
              <aside className="w-44 shrink-0 bg-white border-r border-border flex flex-col py-6 px-4 gap-1">
                {/* Logo */}
                <div className="flex items-center gap-3 mb-7 px-1">
                  <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shrink-0">
                    <span className="text-primary-foreground font-bold text-sm">SD</span>
                  </div>
                  <div>
                    <p className="font-bold text-xs text-foreground leading-none">STAI DREPT</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">Ana Popescu</p>
                  </div>
                </div>

                {/* Nav */}
                {navItems.map((item) => (
                  <div
                    key={item}
                    className={`px-3 py-2 rounded-lg text-sm font-medium cursor-default select-none ${
                      item === "Dashboard"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </aside>

              {/* Main content */}
              <main className="flex-1 p-6 space-y-5 overflow-hidden">

                {/* Top bar */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Bună dimineața, Ana</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">Ai 2 activități programate astăzi</p>
                  </div>
                  <Button size="sm" className="shrink-0 bg-primary hover:bg-primary/90 text-primary-foreground h-9 px-4 text-xs">
                    Începe antrenamentul
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Button>
                </div>

                {/* Stat cards */}
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { label: "Scor postură", value: "87", suffix: "+5", highlight: true },
                    { label: "Ședințe luna aceasta", value: "18", suffix: null, highlight: false },
                    { label: "Mese înregistrate", value: "42", suffix: null, highlight: false },
                    { label: "Streak curent", value: "12 zile", suffix: null, highlight: false },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white rounded-xl border border-border p-4"
                    >
                      <p className="text-[10px] text-muted-foreground mb-2">{stat.label}</p>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xl font-bold text-foreground">{stat.value}</span>
                        {stat.suffix && (
                          <span className="text-xs font-semibold text-primary">{stat.suffix}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart card */}
                <div className="bg-white rounded-xl border border-border p-5">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <h4 className="font-semibold text-sm text-foreground">Evoluție scor postural</h4>
                      <p className="text-[10px] text-primary mt-0.5">Ultimele 30 zile</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-[10px] text-muted-foreground">Scor</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-chart-2" />
                        <span className="text-[10px] text-muted-foreground">Țintă</span>
                      </div>
                    </div>
                  </div>

                  {/* Bar chart with dashed target line */}
                  <div className="relative h-36 mt-4">
                    {/* Dashed target line */}
                    <div
                      className="absolute left-0 right-0 border-t-2 border-dashed border-chart-2 pointer-events-none"
                      style={{ bottom: `${targetPct}%` }}
                    />

                    {/* Bars */}
                    <div className="absolute inset-0 flex items-end gap-[3px]">
                      {barData.map((val, i) => {
                        const isLast = i === barData.length - 1
                        return (
                          <motion.div
                            key={i}
                            className={`flex-1 rounded-t-sm ${isLast ? "bg-primary" : "bg-primary/25"}`}
                            initial={{ scaleY: 0, originY: 1 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.02 }}
                            style={{ height: `${val}%` }}
                          />
                        )
                      })}
                    </div>
                  </div>
                </div>

                {/* Bottom two cards */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Next session */}
                  <div className="bg-white rounded-xl border border-border p-4">
                    <p className="text-xs font-semibold text-foreground mb-3">Următoarea ședință</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Dumbbell className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-foreground truncate">Forță - Corp superior</p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">Astăzi, 18:00 · 45 min</p>
                      </div>
                      <Button variant="outline" size="sm" className="h-7 px-3 text-xs shrink-0">
                        Vezi
                      </Button>
                    </div>
                  </div>

                  {/* Today's meal */}
                  <div className="bg-white rounded-xl border border-border p-4">
                    <p className="text-xs font-semibold text-foreground mb-3">Masa de astăzi</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-chart-3/15 flex items-center justify-center shrink-0">
                        <Utensils className="w-5 h-5 text-chart-3" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-foreground truncate">Somon cu quinoa și legume</p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">Ridicare: 12:30 · 580 kcal</p>
                      </div>
                      <Button variant="outline" size="sm" className="h-7 px-3 text-xs shrink-0">
                        Detalii
                      </Button>
                    </div>
                  </div>
                </div>

              </main>
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

