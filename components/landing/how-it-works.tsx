import { Scan, FileText, Activity, BarChart3 } from "lucide-react"

const steps = [
  {
    icon: Scan,
    step: "01",
    title: "Evaluare",
    description: "Începe cu evaluarea posturală AI pentru a identifica nevoile tale specifice.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Plan personalizat",
    description: "Primești un program adaptat care combină fitness, recuperare și nutriție.",
  },
  {
    icon: Activity,
    step: "03",
    title: "Antrenament și recuperare",
    description: "Lucrezi cu specialiștii noștri în ședințe ghidate și sesiuni de recuperare.",
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Monitorizare progres",
    description: "Urmărești evoluția prin analize detaliate și evaluări periodice pe platformă.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            Cum funcționează
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Un proces simplu și structurat pentru îmbunătățirea posturii tale. 
            De la evaluare la monitorizarea rezultatelor.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-12 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px bg-border" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Step Circle */}
                <div className="relative z-10 inline-flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border mb-5 mx-auto">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                
                {/* Step Number */}
                <div className="text-xs font-bold text-primary mb-2">{step.step}</div>
                
                <h3 className="font-semibold text-lg mb-2 text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
