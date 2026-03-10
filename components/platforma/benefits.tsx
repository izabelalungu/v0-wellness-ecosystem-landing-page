"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export function PlatformaBenefits() {
  const benefits = [
    { title: "Totul în un singur loc", description: "Nu mai trebuie să jonglezi cu aplicații multiple. Platforma este hub-ul tău de wellness." },
    { title: "Claritate și control", description: "Știi exact ce faci, cum progresezi și ce urmează. Transparență completă." },
    { title: "Acces rapid la progres", description: "Rapoarte în timp real, statistici și grafice care îți arată evoluția zi de zi." },
    { title: "Continuitate online-onsite", description: "Programele tale de la centru se sincronizează cu platforma. Totul este conectat." },
    { title: "Recomandări personalizate", description: "AI-ul recomandă antrenamente, mese și pauze de recuperare bazate pe profilul tău." },
    { title: "Motivare constantă", description: "Notificări, provocări și feedback care te ajută să rămâi constant și motivat." }
  ]

  return (
    <section id="platform-benefits" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground tracking-tight">
            Beneficiile utilizării platformei
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Platforma STAI DREPT îți face viața mai ușoară și experiența de wellness mai eficientă.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 lg:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <h3 className="font-bold text-lg text-foreground">{benefit.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
