"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    text: "Am venit fără nicio experiență și în primele 10 minute știam deja cum funcționează tot spațiul. Antrenorii sunt disponibili, nu decorativi.",
    name: "Andrei M.",
    context: "Membru activ, 8 luni",
  },
  {
    text: "Sauna după antrenament a devenit parte din rutina mea. Nu mă mai gândesc la altă sală. Totul e bine pus la punct.",
    name: "Raluca D.",
    context: "Membră de 1 an",
  },
  {
    text: "Am 54 de ani și prima oară nu m-am simțit depășit de un spațiu de fitness. Echipa știe să lucreze cu orice nivel.",
    name: "Ioan P.",
    context: "Membru activ, 6 luni",
  },
]

export function FitnessTestimonials() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <Quote className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-primary uppercase tracking-wide">Ce spun membrii</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Experiența reală, nefiltată.</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-background border border-border rounded-xl p-6 flex flex-col gap-4"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{`"${t.text}"`}</p>
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.context}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
