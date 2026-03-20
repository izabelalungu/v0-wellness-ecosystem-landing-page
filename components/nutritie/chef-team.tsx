"use client"

import { motion } from "framer-motion"
import { Chef, Users2, Award } from "lucide-react"

export function ChefNutritionistTeam() {
  const teamMembers = [
    {
      role: "Chef Specialist",
      title: "Execuție Culinar Premium",
      description: "Gustul și varietatea nu sunt negociate. Fiecare meniu este pregătit de bucătari cu experiență în nutriție aplicată.",
      icon: Chef,
      benefits: ["Tehnici culinare rafinate", "Ingrediente selectate", "Prezentare atractivă"]
    },
    {
      role: "Nutritionist",
      title: "Strategie Nutrițională",
      description: "Logica din spatele fiecărui plan: macronutrienți calculați, timing-ul alimentelor, și susținere pentru rezultatele tale.",
      icon: Award,
      benefits: ["Planuri personalizate", "Ajustări periodice", "Suport constant"]
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-chart-3/10 border border-chart-3/20">
            <Users2 className="w-3.5 h-3.5 text-chart-3" />
            <span className="text-xs font-medium text-chart-3 uppercase tracking-wide">Echipa Dedicată</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Chef + Nutritionist = Rezultat Premium
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nu doar o strategie nutrițională. Nu doar mâncare bună. Sunt ambele, muncind împreună pentru meniurile tale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {teamMembers.map((member, i) => {
            const Icon = member.icon
            return (
              <motion.div
                key={i}
                className="bg-card border border-border rounded-xl p-8 hover:border-chart-3/40 transition-colors"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-lg bg-chart-3/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-chart-3" />
                </div>
                <h3 className="text-sm font-semibold text-chart-3 uppercase tracking-wide mb-1">{member.role}</h3>
                <h4 className="text-xl font-bold text-foreground mb-3">{member.title}</h4>
                <p className="text-sm text-muted-foreground mb-6">{member.description}</p>
                
                <div className="space-y-2 pt-4 border-t border-border">
                  {member.benefits.map((benefit, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-chart-3" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Integration Message */}
        <motion.div
          className="bg-gradient-to-r from-chart-3/5 to-transparent rounded-xl p-6 border border-chart-3/20"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-center text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Coordonare activă:</span> Chef și nutritionist comunicează asupra fiecărui plan, asigurând că meniurile sunt atât delicioase cât și perfect align-ate cu obiectivele tale.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
