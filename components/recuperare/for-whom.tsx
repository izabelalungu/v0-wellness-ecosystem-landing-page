"use client"

import { motion } from "framer-motion"
import { UserCheck, Activity, Zap, Users, Heart } from "lucide-react"

const profiles = [
  {
    icon: UserCheck,
    title: "Ai dureri cronice sau recurente",
    description: "Dureri de spate, cervicale, lombalgii sau tensiuni care nu dispar de la sine. Vrei o soluție reală, nu doar tratamente temporare."
  },
  {
    icon: Activity,
    title: "Ai probleme posturale",
    description: "Stai mult la birou, ai umerii căzuți sau simți că postura ta afectează cum te miști și cum te simți în corp."
  },
  {
    icon: Zap,
    title: "Te recuperezi după o accidentare",
    description: "Ai trecut printr-o suprasolicitare, entorsă sau accident și vrei să revii în formă sigur, fără să riști recidive."
  },
  {
    icon: Users,
    title: "Ești sportiv și vrei performanță",
    description: "Antrenezi intens și ai nevoie de recuperare profesionistă care să susțină progresul, nu să-l încetinească."
  },
  {
    icon: Heart,
    title: "Vrei prevenție și îngrijire coordonată",
    description: "Nu ai o problemă acută, dar simți că ai nevoie de o evaluare profesionistă și de un plan coerent pentru sănătatea ta."
  }
]

export function RecuperareForWhom() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-chart-2/10 border border-chart-2/20 mb-6">
            <span className="w-2 h-2 bg-chart-2 rounded-full" />
            <span className="text-xs font-medium text-chart-2 uppercase tracking-wide">Pentru cine este</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Recuperarea nu e doar pentru sportivi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Serviciul nostru se adresează oricui simte că are nevoie de o soluție coordonată și profesionistă. 
            Te regăsești în unul dintre profilurile de mai jos?
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile, i) => (
            <motion.div
              key={i}
              className="bg-background rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-chart-2/10 flex items-center justify-center mb-4">
                <profile.icon className="w-6 h-6 text-chart-2" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{profile.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{profile.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
