import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Ce este STAI DREPT?",
    answer: "STAI DREPT este un ecosistem integrat de wellness care combină antrenament în sală, recuperare posturală (fizioterapie, kinetoterapie, masaj), nutriție și o platformă digitală pentru gestionarea progresului. Oferim și evaluare posturală online prin inteligență artificială.",
  },
  {
    question: "Serviciile sunt disponibile doar la centru sau și online?",
    answer: "Ambele. La centru oferim acces la sală, ședințe de fizioterapie, masaj, saună și ridicare mese. Online ai acces la evaluarea posturală AI, programe de antrenament digitale, planificare nutrițională și întreaga platformă pentru monitorizarea progresului.",
  },
  {
    question: "Pentru cine sunt potrivite serviciile?",
    answer: "Serviciile noastre sunt destinate adulților cu probleme de postură, dureri cronice de spate sau gât, persoanelor cu stil de viață sedentar, angajaților de birou și oricui dorește să-și îmbunătățească postura și starea de sănătate generală.",
  },
  {
    question: "Cum funcționează evaluarea posturală AI?",
    answer: "Evaluarea folosește tehnologie de computer vision pentru a analiza postura ta prin camera dispozitivului. Durează mai puțin de 3 minute și oferă informații detaliate despre alinierea corpului, dezechilibre și zone care necesită atenție, plus recomandări personalizate.",
  },
  {
    question: "Cum funcționează programul de nutriție?",
    answer: "Oferim mese proaspete și echilibrate preparate de specialiști. Poți alege între livrare la domiciliu sau ridicare de la centru. Meniurile sunt adaptate obiectivelor tale de wellness și pot respecta diverse restricții sau preferințe alimentare.",
  },
  {
    question: "Ce include platforma digitală?",
    answer: "Platforma STAI DREPT este dashboard-ul tău personal de wellness. Include urmărirea antrenamentelor, gestionarea abonamentelor, planificarea și comanda meselor, grafice de progres, programarea ședințelor, administrarea plăților și acces la programele tale personalizate.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-16 lg:py-24 bg-muted/20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            Întrebări frecvente
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Informații utile despre STAI DREPT și serviciile noastre.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-5 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary hover:no-underline py-5 text-sm">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 text-sm leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
