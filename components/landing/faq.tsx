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
    question: "Ce este STAI DREPT și cum funcționează?",
    answer: "STAI DREPT este un ecosistem integrat de wellness care combină antrenament personalizat în sală, recuperare posturală (fizioterapie, kinetoterapie, masaj), nutriție și o platformă digitală pentru gestionarea progresului. Toate serviciile lucrează împreună pentru rezultate durabile și măsurabile.",
  },
  {
    question: "Serviciile sunt disponibile doar la centru sau și online?",
    answer: "Ambele. La centru beneficiezi de acces la sală, ședințe de fizioterapie și kinetoterapie, masaj, saună și ridicare mese. Online ai acces la evaluarea posturală AI, programe de antrenament digitale, planificare nutrițională și întreaga platformă pentru monitorizarea progresului în timp real.",
  },
  {
    question: "Pentru cine sunt potrivite serviciile STAI DREPT?",
    answer: "Serviciile noastre sunt destinate adulților cu probleme de postură, dureri cronice de spate sau gât, persoanelor cu stil de viață sedentar, angajaților de birou și oricui dorește să-și îmbunătățească postura și starea de sănătate generală. Nu este nevoie de experiență anterioară în fitness.",
  },
  {
    question: "Cum funcționează evaluarea posturală AI?",
    answer: "Evaluarea folosește tehnologie de computer vision pentru a analiza postura ta prin camera dispozitivului. Durează mai puțin de 3 minute și oferă informații detaliate despre alinierea corpului în 17 puncte cheie, identifică dezechilibre și zone care necesită atenție, plus oferă recomandări personalizate pentru program.",
  },
  {
    question: "Cum funcționează programul de nutriție?",
    answer: "Oferim mese proaspete și echilibrate preparate zilnic de specialiști în nutriție. Poți alege între livrare la domiciliu sau ridicare de la centru. Meniurile sunt adaptate obiectivelor tale de wellness și pot respecta diverse restricții sau preferințe alimentare. Urmărești macronutrienții direct în platformă.",
  },
  {
    question: "Ce include platforma digitală?",
    answer: "Platforma STAI DREPT este dashboard-ul tău personal de wellness. Include urmărirea scorului postural și a progresului, biblioteca de exerciții, gestionarea antrenamentelor, planificarea și comanda meselor, programarea ședințelor, administrarea plăților și abonamentelor, plus notificări și rapoarte personalizate.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground tracking-tight">
            Întrebări frecvente
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Răspunsuri la cele mai comune întrebări despre STAI DREPT și serviciile noastre.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
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

        <motion.p 
          className="text-center text-sm text-muted-foreground mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Ai alte întrebări? {" "}
          <a href="#" className="text-primary hover:underline">Contactează-ne</a>
        </motion.p>
      </div>
    </section>
  )
}
