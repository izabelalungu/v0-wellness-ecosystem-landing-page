"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export function IntegratedEcosystemDifferentiation() {
  const points = [
    "Evaluare în centru + recomandare online"
  ]

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                Mai mult decât o sală.
                <br />
                Mai mult decât o clinică.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                STAI DREPT nu este nici o sală de fitness, nici o clinică izolată, nici o simplă aplicație. 
                Este un ecosistem integrat clinic-online unde fiecare componentă se conectează într-un sistem coerent.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-base text-muted-foreground font-medium">Cum funcționează diferit:</p>
              <ul className="space-y-3">
                {[
                  "Evaluare în centru fizic + monitorizare prin AI",
                  "Recomandări personalizate coordonate de o echipă multidisciplinară",
                  "Program de antrenament + recuperare + nutriție - toate legate",
                  "Progres măsurabil, actualizat zilnic în platformă",
                  "Support consistent din echipă pe baza datelor reale"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm text-muted-foreground italic">
              Rezultatul: fără drumuri inutile, fără recomandări contradictorii, 
              fără pauze în comunicare. Doar un sistem care funcționează pentru tine.
            </p>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Center circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center">
                  <span className="text-center text-xs font-bold text-primary">
                    STAI<br/>DREPT
                  </span>
                </div>
              </div>

              {/* Four pillars around */}
              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: "Antrenament\nPersonalizat", color: "primary" },
                  { label: "Recuperare\nPosturală", color: "chart-2" },
                  { label: "Nutriție\nAdaptată", color: "chart-3" },
                  { label: "Platformă\nAI", color: "primary" }
                ].map((pillar, i) => (
                  <motion.div
                    key={i}
                    className={`flex flex-col items-center gap-3 p-6 rounded-lg border bg-card`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <div
                      className={`w-3 h-3 rounded-full bg-${pillar.color}`}
                    />
                    <p className="text-xs font-semibold text-foreground text-center leading-tight">
                      {pillar.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }}>
                <line x1="50%" y1="48%" x2="25%" y2="30%" stroke="url(#gradient1)" strokeWidth="1" strokeDasharray="4" opacity="0.3" />
                <line x1="50%" y1="48%" x2="75%" y2="30%" stroke="url(#gradient1)" strokeWidth="1" strokeDasharray="4" opacity="0.3" />
                <line x1="50%" y1="48%" x2="25%" y2="70%" stroke="url(#gradient1)" strokeWidth="1" strokeDasharray="4" opacity="0.3" />
                <line x1="50%" y1="48%" x2="75%" y2="70%" stroke="url(#gradient1)" strokeWidth="1" strokeDasharray="4" opacity="0.3" />
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--color-primary)" />
                    <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
