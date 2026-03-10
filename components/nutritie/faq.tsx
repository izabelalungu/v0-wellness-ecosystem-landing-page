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
    question: "Cum aleg mesele care vreau?",
    answer: "Intri în platformă, selectezi zilele pentru care vrei mese, alegi din meniu ce mese dorești (mic dejun, prânz, cină, desert), și confirmi comanda. E simplu și rapid."
  },
  {
    question: "Există opțiuni de livrare?",
    answer: "Da, oferim livrare gratuit la domiciliu pentru comenzi în zona București. Alternatively, poți ridica de la Centrul STAI DREPT la ora fixă."
  },
  {
    question: "Cât de flexibil este programul?",
    answer: "Foarte flexibil. Poți comanda pentru orice zile, orice mese, în orice combinație. Nu ești obligat să iei un pachet fix. Schimbi oricând ce dorești."
  },
  {
    question: "Cum urmăresc macronutrienții?",
    answer: "Fiecare masă are informații complete de nutriție. In platformă, poți vedea breakdown-ul pentru fiecare masă: proteine, carbohidrați, grăsimi, calorii."
  },
  {
    question: "Pot cere mese personalizate?",
    answer: "Da, dacă ai restricții alimentare sau preferințe speciale, comunicăm cu echipa nutriție care va adapta meniurile pentru tine."
  },
  {
    question: "Cum se integrează nutriția cu antrenamentele?",
    answer: "Platforma sincronizează nutriția cu progresul tău din gym și recuperare. Dacă antrenezi mai mult, recomandări de nutriție se ajustează în consecință."
  },
]

export function NutrieFAQ() {
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
            Întrebări frecvente despre nutriție
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Răspunsuri la întrebările comune despre programul de nutriție STAI DREPT.
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
