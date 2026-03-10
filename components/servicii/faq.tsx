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
    question: "Pot folosi un singur serviciu sau trebuie să mă abonez la toate?",
    answer: "Poți alege să folosești orice serviciu independent. Avantajul STAI DREPT este că serviciile sunt integrate și lucreaza mai bine împreună, dar nu ești obligat să le folosești pe toate de la început. Poți construi programul tău pe măsură ce avansezi.",
  },
  {
    question: "Care este diferența dintre serviciile online și cele onsite?",
    answer: "Serviciile onsite (gym, fizioterapie, masaj, saună) se desfășoară la centrul nostru fizic. Serviciile online (platformă, evaluare AI, antrenamente digitale) sunt accesibile de acasă, oricând. Putem combina ambele pentru o experiență completă.",
  },
  {
    question: "Pentru cine sunt ideale serviciile STAI DREPT?",
    answer: "Serviciile sunt potrivite pentru adulți cu probleme de postură, dureri cronice de spate, persoane sedentare, angajații de birou, sportivi în recuperare și oricine dorește să-și îmbunătățească starea de sănătate generală. Nu necesită experiență anterioară în fitness.",
  },
  {
    question: "Cum sunt personalizate serviciile?",
    answer: "Fiecare program se construiește pe baza evaluării inițiale AI, consultației cu specialistul și obiectivelor tale. Platformă digitală se adaptează continuu pe baza progresului tău și feedback-ului primit.",
  },
  {
    question: "Cum funcționează integrarea serviciilor?",
    answer: "Antrenamentele din gym sunt complementate de recuperare și masaj. Nutriția sprijină recuperarea și performanța. Platforma digitală urmărește totul și oferă recomandări bazate pe progres. Rezultatul: un ecosistem coerent care muncește pentru tine.",
  },
  {
    question: "Pot schimba serviciile în funcție de nevoile mele?",
    answer: "Da, absolut. Serviciile sunt flexibile și pot fi ajustate oricând. Ai flexibility de a crește sau micșora abonamentele, de a adăuga sau elimina servicii în funcție de progres și obiectivele tale.",
  },
]

export function ServiciiFAQ() {
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
            Întrebări frecvente despre servicii
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Răspunsuri la întrebările frecvente despre modul de funcționare al serviciilor STAI DREPT.
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
