import { Scan, FileText, Activity, BarChart3 } from "lucide-react"

const steps = [
  {
    icon: Scan,
    step: "01",
    title: "Evaluate",
    description: "Start with our AI posture evaluation to identify your unique needs and areas for improvement.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Get Your Plan",
    description: "Receive a personalized program combining fitness, recovery, and nutrition based on your assessment.",
  },
  {
    icon: Activity,
    step: "03",
    title: "Train & Recover",
    description: "Work with our experts through guided workouts, recovery sessions, and balanced nutrition.",
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Track Progress",
    description: "Monitor your transformation journey with detailed analytics and regular check-ins on the platform.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Your journey to better posture
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A simple, structured approach to lasting transformation. 
            From initial assessment to ongoing progress tracking.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-border" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Step Circle */}
                <div className="relative z-10 inline-flex items-center justify-center w-20 h-20 rounded-full bg-card border-2 border-border mb-6 mx-auto group hover:border-accent transition-colors duration-300">
                  <step.icon className="w-8 h-8 text-accent" />
                </div>
                
                {/* Step Number */}
                <div className="text-xs font-bold text-accent mb-2">{step.step}</div>
                
                <h3 className="font-semibold text-xl mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
