import { CheckCircle2 } from "lucide-react"

const benefits = [
  {
    title: "Improved Posture",
    description: "Correct alignment issues and develop proper posture habits that last a lifetime.",
  },
  {
    title: "Reduced Pain",
    description: "Eliminate chronic back, neck, and joint pain through targeted recovery programs.",
  },
  {
    title: "Better Movement",
    description: "Enhance mobility, flexibility, and overall movement quality in your daily life.",
  },
  {
    title: "Increased Confidence",
    description: "Stand taller and feel more confident with improved body awareness and alignment.",
  },
  {
    title: "Recovery Support",
    description: "Access professional support for injury recovery and performance optimization.",
  },
  {
    title: "Measurable Progress",
    description: "Track your transformation with data-driven insights and regular assessments.",
  },
]

export function Benefits() {
  return (
    <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Transform your body, transform your life
          </h2>
          <p className="text-lg text-primary-foreground/80 leading-relaxed">
            Experience lasting improvements in posture, mobility, and overall wellbeing 
            with our comprehensive approach to wellness.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex items-start gap-4 p-6 rounded-2xl bg-primary-foreground/5 backdrop-blur border border-primary-foreground/10"
            >
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">{benefit.title}</h3>
                <p className="text-primary-foreground/70 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
