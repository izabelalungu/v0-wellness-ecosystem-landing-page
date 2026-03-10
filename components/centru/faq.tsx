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
    question: "Unde este localizat centrul STAI DREPT?",
    answer: "Centrul se află în București, sector 1. Locația exactă și detaliile de acces sunt disponibile la contact sau pe platformă."
  },
  {
    question: "Care este programul de funcționare?",
    answer: "Centrul este deschis Luni-Vineri: 06:00-21:00, Sâmbătă: 08:00-18:00. Duminică și sărbători este închis."
  },
  {
    question: "Trebuie programare pentru a merge la sală?",
    answer: "Pentru antrenamente ghidate și sesiuni 1-la-1 da. Pentru utilizarea sălii în general în anumite ore poți intra liber dacă ai abonament. Recomandăm să verifici calendarul pentru cel mai bun timing."
  },
  {
    question: "Pot combina antrenamentul cu fizioterapia?",
    answer: "Absolut, și chiar o recomandăm. Antrenamentul și recuperarea merg mână în mână. Specialistul tău va coordona programul pentru o eficiență maximă."
  },
  {
    question: "Cum se leagă centrul de platformă digitală?",
    answer: "Totul este conectat. Când faci o ședință la centru, se înregistrează în platformă. Progresul, evaluările și recomandările sunt sincronizate în timp real."
  },
  {
    question: "Sunt principiiant în fitness. Pot merge la centru?",
    answer: "Da, perfect. Echipa noastră este experteîn lucrul cu persoane de toate nivelurile. Începem de la o evaluare și construim programul tău pas cu pas."
  },
]

export function CentruFAQ() {
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
            Întrebări frecvente despre centru
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Răspunsuri la întrebările comune despre Centrul STAI DREPT.
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
