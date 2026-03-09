import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Scan, Clock, Zap, UserCheck } from "lucide-react"

const features = [
  {
    icon: Scan,
    title: "Real-Time Analysis",
    description: "Advanced computer vision technology analyzes your posture in real-time through your camera.",
  },
  {
    icon: Clock,
    title: "Quick & Accessible",
    description: "Complete your assessment in under 3 minutes from anywhere, no appointment needed.",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "Receive detailed insights about your posture immediately after the scan.",
  },
  {
    icon: UserCheck,
    title: "Personalized Plan",
    description: "Get a customized recovery and improvement plan based on your specific needs.",
  },
]

export function AIPostureEvaluation() {
  return (
    <section id="ai-evaluation" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] max-w-lg mx-auto">
              {/* Main Container */}
              <div className="absolute inset-0 bg-card rounded-3xl border border-border shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-primary/5 px-6 py-4 border-b border-border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                    <span className="text-sm font-medium text-foreground">AI Posture Analysis</span>
                  </div>
                  <Badge variant="secondary">Processing...</Badge>
                </div>
                
                {/* Body Scan Visualization */}
                <div className="p-6 flex items-center justify-center h-[calc(100%-60px)]">
                  <div className="relative">
                    {/* Grid Lines */}
                    <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div key={i} className="border border-border/20" />
                      ))}
                    </div>
                    
                    {/* Body Outline */}
                    <svg viewBox="0 0 120 200" className="w-36 h-60 relative z-10">
                      {/* Body shape */}
                      <ellipse cx="60" cy="28" rx="20" ry="24" className="fill-accent/20 stroke-accent stroke-2" />
                      <path d="M40 52 L40 100 Q40 110 50 110 L70 110 Q80 110 80 100 L80 52" className="fill-accent/10 stroke-accent stroke-2" />
                      <rect x="25" y="55" width="15" height="45" rx="6" className="fill-accent/10 stroke-accent stroke-2" />
                      <rect x="80" y="55" width="15" height="45" rx="6" className="fill-accent/10 stroke-accent stroke-2" />
                      <rect x="40" y="108" width="15" height="55" rx="6" className="fill-accent/10 stroke-accent stroke-2" />
                      <rect x="65" y="108" width="15" height="55" rx="6" className="fill-accent/10 stroke-accent stroke-2" />
                      
                      {/* Spine Line */}
                      <path d="M60 48 Q58 80 62 110" className="fill-none stroke-accent stroke-2" strokeDasharray="4 4" />
                      
                      {/* Analysis Points */}
                      <circle cx="60" cy="28" r="5" className="fill-accent" />
                      <circle cx="60" cy="60" r="5" className="fill-accent" />
                      <circle cx="60" cy="95" r="5" className="fill-accent" />
                    </svg>

                    {/* Analysis Labels */}
                    <div className="absolute top-4 -right-20 bg-card/90 backdrop-blur rounded-lg px-3 py-2 text-xs border border-border shadow-lg">
                      <span className="text-muted-foreground">Head: </span>
                      <span className="text-accent font-semibold">Aligned</span>
                    </div>
                    <div className="absolute top-20 -left-24 bg-card/90 backdrop-blur rounded-lg px-3 py-2 text-xs border border-border shadow-lg">
                      <span className="text-muted-foreground">Shoulders: </span>
                      <span className="font-semibold text-foreground">-2°</span>
                    </div>
                    <div className="absolute bottom-16 -right-24 bg-card/90 backdrop-blur rounded-lg px-3 py-2 text-xs border border-border shadow-lg">
                      <span className="text-muted-foreground">Spine: </span>
                      <span className="font-semibold text-foreground">Monitor</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 inset-0 bg-accent/5 rounded-3xl transform rotate-3" />
              <div className="absolute -z-20 inset-0 bg-accent/3 rounded-3xl transform -rotate-3" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <Badge variant="secondary" className="px-4 py-2">
              <Scan className="w-4 h-4 mr-2" />
              Computer Vision Technology
            </Badge>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              AI-powered posture evaluation in minutes
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our advanced computer vision system analyzes your posture through your device camera, 
              identifying imbalances, misalignments, and areas that need attention — all from the 
              comfort of your home.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className="text-base px-8">
              Start Free Evaluation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
