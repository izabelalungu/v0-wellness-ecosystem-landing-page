"use client"

import { motion } from "framer-motion"
import { Truck, MapPin } from "lucide-react"

export function NutrieDeliveryOptions() {
  const options = [
    {
      icon: Truck,
      title: "Livrare",
      description: "Mesele sunt livrate direct la domiciliu, calde și proaspete, la ora stabilită"
    },
    {
      icon: MapPin,
      title: "Ridicare din centru",
      description: "Poți ridica mesele direct din centrul STAI DREPT la orice oră convenabilă"
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground tracking-tight">
            Livrare sau ridicare din centru
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Alege modul de primire care ți se potrivește cel mai bine.
          </p>
        </motion.div>

        {/* Options Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {options.map((option, index) => (
            <motion.div
              key={index}
              className="bg-background rounded-xl p-8 border border-border"
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-16 h-16 rounded-full bg-chart-3/10 flex items-center justify-center mb-6">
                <option.icon className="w-8 h-8 text-chart-3" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{option.title}</h3>
              <p className="text-lg text-muted-foreground">{option.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
