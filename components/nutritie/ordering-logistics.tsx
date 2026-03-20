"use client"

import { motion } from "framer-motion"
import { Truck, MapPin, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function OrderingLogistics() {
  const options = [
    {
      icon: Truck,
      title: "Livrare Acasă",
      description: "Meniurile tale, livrate la ușă pe cronogram. Integral refrigerat, gata de consum.",
      benefits: ["Livrare rapidă", "Cronogram zilnic", "Ușor de plasat"]
    },
    {
      icon: MapPin,
      title: "Livrare Birou",
      description: "Echipa de nutriție merge la birou. Prânzul tău stă sub control nutritiv, chiar în agenție.",
      benefits: ["La birou, la oră fixă", "Comoditate maximă", "Consistență zilnică"]
    },
    {
      icon: Zap,
      title: "Pickup din Centru",
      description: "Vii și iei meniurile tale din centrul STAI DREPT. Mereu proaspete, mereu gata.",
      benefits: ["Control direct", "Consultație on-site", "Ajustări rapide"]
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-chart-3/10 border border-chart-3/20">
            <Truck className="w-3.5 h-3.5 text-chart-3" />
            <span className="text-xs font-medium text-chart-3 uppercase tracking-wide">Cum Funcționează</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Comandă și Primește. Simplu.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Alege cum vrei să primești meniurile. Noi ne adaptăm rutinei tale, nu invers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {options.map((option, i) => {
            const Icon = option.icon
            return (
              <motion.div
                key={i}
                className="bg-card border border-border rounded-xl p-8 hover:border-chart-3/40 transition-colors flex flex-col"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-lg bg-chart-3/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-chart-3" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{option.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 flex-grow">{option.description}</p>
                
                <div className="space-y-2 pt-4 border-t border-border">
                  {option.benefits.map((benefit, j) => (
                    <div key={j} className="flex items-center gap-2 text-xs">
                      <span className="w-1 h-1 rounded-full bg-chart-3" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Process Steps */}
        <motion.div
          className="bg-background border border-border rounded-xl p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-xl font-bold text-foreground mb-8 text-center">Cum Merge Procesul</h3>
          
          <div className="grid md:grid-cols-4 gap-6 md:gap-4">
            {[
              { step: "1", title: "Alegi Obiectiv", desc: "Slăbire, masă, menținere" },
              { step: "2", title: "Meniu Personalizat", desc: "Creat pt tine, în 24h" },
              { step: "3", title: "Primești Zilnic", desc: "Acasă, birou, sau pickup" },
              { step: "4", title: "Ajustezi", desc: "Feedback și fine-tuning" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-10 h-10 rounded-full bg-chart-3/10 border-2 border-chart-3 flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-chart-3">{item.step}</span>
                </div>
                <p className="font-semibold text-foreground text-sm mb-1">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Button size="lg" className="h-12 px-8 text-base">
            Comenzi Meniurile Tău
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
