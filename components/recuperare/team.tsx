"use client"

import { motion } from "framer-motion"
import { Award, Star } from "lucide-react"

const team = [
  {
    name: "Marian",
    role: "Kinetoterapeut Principal",
    description: "Specializat în recuperare funcțională și reabilitare post-traumatică. Coordonează programele de kinetoterapie.",
    featured: true
  },
  {
    name: "Radu",
    role: "Fizioterapeut",
    description: "Expert în terapii manuale și utilizarea echipamentelor de fizioterapie pentru reducerea durerii.",
    featured: true
  },
  {
    name: "Dr. Alexandru",
    role: "Medic Specialist",
    description: "Consultații medicale integrate, evaluări și recomandări personalizate pentru fiecare pacient.",
    featured: false
  },
  {
    name: "Ana",
    role: "Terapeut Masaj",
    description: "Tehnici specializate de masaj terapeutic pentru relaxare musculară și recuperare.",
    featured: false
  }
]

export function RecuperareTeam() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-chart-2/10 border border-chart-2/20 mb-6">
            <Award className="w-3.5 h-3.5 text-chart-2" />
            <span className="text-xs font-medium text-chart-2 uppercase tracking-wide">Echipa de specialiști</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Oameni reali în spatele promisiunii
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Procesul tău de recuperare este coordonat de specialiști cu experiență, 
            care urmăresc evoluția ta și oferă continuitate.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={i}
              className={`rounded-xl p-6 border transition-all ${
                member.featured 
                  ? "bg-chart-2/5 border-chart-2/20 shadow-md" 
                  : "bg-card border-border shadow-sm hover:shadow-md"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Avatar placeholder */}
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                member.featured ? "bg-chart-2/20" : "bg-muted"
              }`}>
                <span className="text-2xl font-bold text-chart-2">{member.name.charAt(0)}</span>
              </div>

              {member.featured && (
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-chart-2 text-chart-2" />
                  ))}
                </div>
              )}

              <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
              <p className="text-sm text-chart-2 font-medium mb-2">{member.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-muted-foreground mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Echipa completă lucrează coordonat pentru a-ți oferi cel mai bun traseu de recuperare.
        </motion.p>
      </div>
    </section>
  )
}
