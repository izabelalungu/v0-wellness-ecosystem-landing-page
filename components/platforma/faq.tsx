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
    question: "Ce includ în platforma digitală?",
    answer: "Platforma STAI DREPT include dashboard personal, urmărirea scorului postural și progresului, bibliotecă completă de exerciții, planificator de mese, calendar ședințe, gestionare abonamente și plăți, notificări personalizate și rapoarte lunare detaliate.",
  },
  {
    question: "Pot folosi platforma și dacă nu merg la centru?",
    answer: "Da, absolut. Platforma oferă acces complet la programe digitale de antrenament, evaluare AI, gestionare nutriție și urmărire progres. Poți folosi serviciile 100% online și beneficiezi de toate funcționalitățile platformei.",
  },
  {
    question: "Cum sincronizează platforma serviciile onsite cu cele online?",
    answer: "Toate serviciile sunt conectate la un profil unic. Când faci o ședință de fizioterapie la centru, se înregistrează în platformă. Când finalizezi un antrenament digital, progresul se actualizează. Totul este sincronizat în timp real.",
  },
  {
    question: "Pot vedea progresul în timp real?",
    answer: "Da. Platforma afișează scorul postural, metrici de performanță, aderență la program și progres pe termen lung. Ai rapoarte săptămânale și lunare care arată evoluția detaliată în fiecare categorie.",
  },
  {
    question: "Cum funcționează evaluarea AI din platformă?",
    answer: "Poți efectua evaluări posturale oricând direct din platformă. Pur și simplu folosești camera dispozitivului, AI-ul analizează postura în 17 puncte, și primești rezultate imediate. Fiecare evaluare se salvează și se compară cu anteriorele.",
  },
  {
    question: "Pot gestiona mesele și plățile din platformă?",
    answer: "Da. Platforma include un meniu de mese care se actualizează săptămânal, poți comanda pentru zile specifice, alege livrare sau ridicare, și gestiona plăți și abonamente direct din dashboard.",
  },
]

export function PlatformaFAQ() {
  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-left max-w-2xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground tracking-tight">
            Întrebări frecvente despre platformă
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Răspunsuri la întrebările comune despre utilizarea și funcționalitățile platformei STAI DREPT.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/20 transition-colors"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
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
