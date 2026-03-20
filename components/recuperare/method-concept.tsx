"use client"

import { motion } from "framer-motion"
import { Sparkles, BookOpen, Award } from "lucide-react"

export function RecuperareMethodConcept() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-chart-2/10 border border-chart-2/20">
              <Sparkles className="w-3.5 h-3.5 text-chart-2" />
              <span className="text-xs font-medium text-chart-2 uppercase tracking-wide">Metoda STAI DREPT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              O filozofie coerentă, 
              <span className="text-chart-2"> nu o combinație aleatorie de proceduri</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Conceptul STAI DREPT nu a apărut peste noapte. Este rezultatul a peste 15 ani de experiență 
              în pregătire fizică și recuperare, inspirat de metoda Gilles Cometti dezvoltată în Franța 
              pentru sportul de performanță.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Această abordare integrează evaluarea posturală, antrenamentul funcțional și recuperarea 
              într-un sistem unitar. Nu primești tratamente izolate, ci un traseu construit pe înțelegerea 
              completă a corpului tău și a obiectivelor tale.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-chart-2/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-chart-2" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Metodă validată</p>
                  <p className="text-xs text-muted-foreground">Inspirată din pregătirea sportivilor de elită</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-chart-2/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-chart-2" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Experiență reală</p>
                  <p className="text-xs text-muted-foreground">15+ ani în pregătire și recuperare</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-chart-2/5 to-chart-2/10 rounded-2xl p-8 lg:p-10">
              <div className="space-y-6">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Inspirat de</p>
                  <p className="text-2xl font-bold text-foreground">Metoda Gilles Cometti</p>
                  <p className="text-sm text-chart-2">Franța | Pregătire sportivă de elită</p>
                </div>
                
                <div className="h-px bg-border" />
                
                <div className="space-y-4">
                  {[
                    "Evaluare posturală completă",
                    "Antrenament funcțional integrat",
                    "Recuperare coordonată",
                    "Monitorizare continuă"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-chart-2/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-chart-2">{i + 1}</span>
                      </div>
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
