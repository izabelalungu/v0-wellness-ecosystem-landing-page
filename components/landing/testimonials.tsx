"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Maria Stoica",
    role: "Manager de birou",
    duration: "Client de 8 luni",
    content: "După ani de dureri de spate cauzate de munca la birou, programul de la STAI DREPT m-a ajutat să înțeleg și să corectez problemele mele de postură. Combinația de fizioterapie și antrenament a fost exact ce aveam nevoie.",
    rating: 5,
    improvement: "+42% scor postural",
  },
  {
    name: "Adrian Călinescu",
    role: "Programator",
    duration: "Client de 6 luni",
    content: "Evaluarea posturală AI mi-a arătat clar ce probleme am. Nu realizasem cât de mult îmi afectau obiceiurile zilnice coloana. Planul de recuperare și ședințele regulate au făcut o diferență vizibilă în doar 3 luni.",
    rating: 5,
    improvement: "Dureri eliminate",
  },
  {
    name: "Elena Tănase",
    role: "Antreprenor",
    duration: "Client de 1 an",
    content: "Apreciez abordarea integrată. Nutriția, antrenamentul și recuperarea funcționează împreună perfect. Platforma face totul simplu de urmărit, iar livrarea meselor îmi economisește timp prețios în fiecare zi.",
    rating: 5,
    improvement: "87/100 scor actual",
  },
  {
    name: "Radu Munteanu",
    role: "Consultant",
    duration: "Client de 4 luni",
    content: "Comoditatea de a avea totul într-un singur loc este excelentă. De la programarea ședințelor de kinetoterapie la urmărirea antrenamentelor și a meselor — totul este bine organizat și ușor de folosit.",
    rating: 5,
    improvement: "+35% mobilitate",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground tracking-tight">
            Experiențe reale
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Clienții noștri vorbesc despre progresul lor în îmbunătățirea 
            posturii și a sănătății generale.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-card border border-border rounded-2xl p-6 lg:p-8 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-muted-foreground/10" />
              
              {/* Rating and improvement */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                  {testimonial.improvement}
                </span>
              </div>
              
              {/* Quote */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                &quot;{testimonial.content}&quot;
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4 pt-5 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <span className="font-semibold text-foreground">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
                <span className="text-xs text-muted-foreground">{testimonial.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
