"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, User, Star, Award } from "lucide-react"

const trainers = [
  {
    name: "Dima",
    role: "Antrenor Personal Senior",
    description: "Specializat în antrenament de forță, recompoziție corporală și ghidaj pentru începători și intermediari. Dima construiește programe care se adaptează, nu care se repetă.",
    specialties: ["Forță și condiționare", "Recompoziție corporală", "Antrenament funcțional"],
    featured: true,
  },
  {
    name: "Echipa STAI DREPT",
    role: "Antrenori Certificați",
    description: "Fiecare antrenor din echipă este integrat în ecosistemul STAI DREPT. Coordonează cu nutritionistul și recuperatorul pentru un program complet.",
    specialties: ["Cardio și rezistență", "Mobilitate și flexibilitate", "Antrenament de grup"],
    featured: false,
  },
]

export function FitnessTrainers() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <Award className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium text-primary uppercase tracking-wide">Echipa de antrenori</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Nu ești ignorat. Ești ghidat de oameni care știu ce fac.
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Diferența dintre o sală și un sistem de antrenament este echipa. La STAI DREPT, antrenorii nu sunt prezențe decorative — sunt parte activă din procesul tău de progres.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {trainers.map((trainer, i) => (
            <motion.div
              key={i}
              className={`rounded-xl border p-8 ${trainer.featured ? "bg-card border-primary/30 shadow-sm" : "bg-card border-border"}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${trainer.featured ? "bg-primary/10" : "bg-muted"}`}>
                  <User className={`w-7 h-7 ${trainer.featured ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-lg text-foreground">{trainer.name}</h3>
                    {trainer.featured && (
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                        ))}
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-primary font-medium">{trainer.role}</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{trainer.description}</p>

              <div className="space-y-2 pt-4 border-t border-border">
                <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-3">Specializări</p>
                {trainer.specialties.map((s, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {s}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Button size="lg" variant="outline" className="h-12 px-8">
            Vorbește cu un antrenor
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
