"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Ce servicii sunt incluse în recuperare?",
    answer: "Pachetul complet include fizioterapie, kinetoterapie, masaj terapeutic și acces la saună. De asemenea, ai posibilitatea de consultații cu doctorul din centru, fără programări externe."
  },
  {
    question: "Am nevoie de trimitere de la medic?",
    answer: "Nu neapărat. Poți veni direct pentru o evaluare inițială, iar dacă este necesar, doctorul nostru poate face recomandările potrivite. Traseul este complet integrat."
  },
  {
    question: "Cât durează o ședință de recuperare?",
    answer: "Durata variază în funcție de tipul intervenției. O ședință de kinetoterapie durează aproximativ 45-60 de minute, iar fizioterapia poate varia între 30-45 de minute."
  },
  {
    question: "Este recuperarea potrivită și pentru mine dacă nu sunt sportiv?",
    answer: "Absolut. Metodele noastre sunt validate în sport, dar le adaptăm pentru orice persoană. Indiferent dacă ai dureri de birou sau te recuperezi după o accidentare, procesul este personalizat."
  },
  {
    question: "Cum funcționează programările?",
    answer: "Poți programa direct din platformă sau prin telefon. Toate ședințele sunt coordonate astfel încât să nu pierzi timp între intervențiile necesare."
  },
  {
    question: "Recuperarea face parte din ecosistemul STAI DREPT?",
    answer: "Da. Recuperarea se integrează natural cu fitness-ul, nutriția și platforma digitală. Dacă ai nevoie de un traseu complet, totul funcționează coordonat, fără efort suplimentar din partea ta."
  }
]

export function RecuperareFAQ() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-chart-2/10 border border-chart-2/20 mb-6">
            <span className="w-2 h-2 bg-chart-2 rounded-full" />
            <span className="text-xs font-medium text-chart-2 uppercase tracking-wide">Întrebări frecvente</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Răspunsuri la întrebările tale
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-background border border-border rounded-xl px-6 data-[state=open]:border-chart-2/30"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
