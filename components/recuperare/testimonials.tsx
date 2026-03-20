"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    quote: "Am venit cu dureri de spate care nu dispăreau de luni de zile. După 8 ședințe, diferența e enormă. Marian știe exact ce face.",
    name: "Alexandru M.",
    context: "Dureri lombare cronice",
    rating: 5
  },
  {
    quote: "Ce mi-a plăcut cel mai mult e că totul se întâmplă într-un singur loc. Doctor, fizioterapie, kinetoterapie — fără alergătură.",
    name: "Maria P.",
    context: "Recuperare post-accidentare",
    rating: 5
  },
  {
    quote: "Am încercat multe variante înainte. Aici am simțit pentru prima dată că cineva înțelege problema și are un plan clar.",
    name: "Andrei S.",
    context: "Probleme posturale",
    rating: 5
  }
]

export function RecuperareTestimonials() {
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
            <Quote className="w-3.5 h-3.5 text-chart-2" />
            <span className="text-xs font-medium text-chart-2 uppercase tracking-wide">Testimoniale</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ce spun cei care au trecut prin proces
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              className="bg-card rounded-xl p-6 border border-border shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(item.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-chart-2 text-chart-2" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 italic">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-foreground">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.context}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
