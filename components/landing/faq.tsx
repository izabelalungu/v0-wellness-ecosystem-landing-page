import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is STAI DREPT?",
    answer: "STAI DREPT is an integrated wellness ecosystem that combines fitness training, postural recovery, nutrition services, and a digital platform. We offer both onsite and online services, including AI-powered posture evaluations, personalized workout programs, physiotherapy, nutritional meals, and a comprehensive dashboard to track your progress.",
  },
  {
    question: "Is STAI DREPT available online or only onsite?",
    answer: "Both! We offer a full onsite experience at our wellness center, including gym access, physiotherapy sessions, massage, and meal pickup. We also provide comprehensive online services including AI posture evaluation, digital workout programs, nutrition planning, and full platform access for tracking and management.",
  },
  {
    question: "Who is STAI DREPT for?",
    answer: "Our services are designed for adults experiencing posture issues, chronic back or neck pain, those with sedentary lifestyles, office workers, and anyone interested in improving their overall wellness, fitness, and body alignment. Whether you're recovering from injury or looking to optimize your health, our programs adapt to your needs.",
  },
  {
    question: "How does the AI posture evaluation work?",
    answer: "Our AI posture evaluation uses advanced computer vision technology to analyze your posture through your device camera. The assessment takes under 3 minutes and provides detailed insights about your alignment, potential imbalances, and areas that need attention. Based on the results, you receive a personalized improvement plan.",
  },
  {
    question: "How does the nutrition program work?",
    answer: "Our nutrition program provides fresh, balanced meals prepared by nutrition experts. You can choose from flexible scheduling options, with meals available for delivery or onsite pickup. Monthly menus are designed to support your wellness goals, with options to accommodate dietary preferences and requirements.",
  },
  {
    question: "What does the digital platform include?",
    answer: "The STAI DREPT platform is your personal wellness dashboard. It includes workout tracking, subscription management, meal planning and ordering, progress charts and analytics, session scheduling, payment management, and access to your personalized programs. Everything syncs together for a seamless experience.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Everything you need to know about STAI DREPT and our services.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-lg transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
