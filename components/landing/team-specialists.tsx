"use client"

import { motion } from "framer-motion"
import { Users, Award, Target } from "lucide-react"

export function TeamAndSpecialists() {
  const specialists = [
    {
      role: "Fiziolog",
      expertise: "Evaluare și monitorizare performanță"
    },
    {
      role: "Fizioterapeut",
      expertise: "Recuperare și corecție posturală"
    },
    {
      role: "Nutritionist",
      expertise: "Planuri alimentare personalizate"
    },
    {
      role: "Antrenor Personal",
      expertise: "Programare și adaptare antrenamente"
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Echipa multidisciplinară STAI DREPT
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nu doar acces la servicii. Ai o echipă reală de specialiști care se cunoaște, comunică 
            și coordonează progresul tău cu precizie.
          </p>
        </motion.div>

        {/* Specialists Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {specialists.map((specialist, i) => (
            <motion.div
              key={i}
              className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary/30 transition-colors"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{specialist.role}</h3>
              <p className="text-sm text-muted-foreground">{specialist.expertise}</p>
            </motion.div>
          ))}
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Award,
              title: "Certificări & Experiență",
              description: "Toți membrii echipei au acreditări internaționale și minimum 8 ani de experiență"
            },
            {
              icon: Target,
              title: "Coordonare Activă",
              description: "Ședință săptămânală de echipă în care se discută progresul fiecărui client"
            },
            {
              icon: Users,
              title: "Relație Directă",
              description: "Ai acces direct la specialiștii tăi și răspunsuri în maxim 24 ore"
            }
          ].map((benefit, i) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={i}
                className="bg-background border border-border rounded-lg p-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <Icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
