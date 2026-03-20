"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "Trebuie să am experiență anterioară pentru a mă înscrie?",
    a: "Nu. Prima vizită include o evaluare inițială și orientare ghidată. Antrenorul îți va explica spațiul și îți va recomanda un plan de start potrivit nivelului tău.",
  },
  {
    q: "Sauna este disponibilă cu toate abonamentele?",
    a: "Da. Sauna este inclusă în toate abonamentele, indiferent de planul ales. Nu este un serviciu extra — face parte din experiența completă STAI DREPT.",
  },
  {
    q: "Pot să vin fără antrenor personal?",
    a: "Absolut. Abonamentul de Acces Liber îți permite să te antrenezi independent oricând. Antrenorul personal este o opțiune, nu o obligație.",
  },
  {
    q: "Există și opțiuni pentru antrenament online sau de acasă?",
    a: "Da. Prin platforma STAI DREPT ai acces la programe pe care le poți urma și acasă, conectate la același sistem de monitorizare. Sală sau acasă — progresul se înregistrează la fel.",
  },
  {
    q: "Cum funcționează conexiunea cu recuperarea și nutriția?",
    a: "Dacă ești înscris la un pachet ecosistem, antrenorul tău coordonează cu recuperatorul și nutritionistul. Progresul din sală influențează planul de nutriție și viceversa.",
  },
  {
    q: "Care sunt programul de funcționare și adresa?",
    a: "Suntem în Râmnicu Vâlcea. Programul exact și adresa le găsești în secțiunea de contact sau ne poți contacta direct pentru detalii actualizate.",
  },
]

export function FitnessFAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-xs font-medium text-primary uppercase tracking-wide">Întrebări frecvente</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
            Tot ce trebuie să știi înainte să vii.
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="border border-border rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-muted/30 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-medium text-foreground text-sm">{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
