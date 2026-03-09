import { Button } from "@/components/ui/button"
import { ArrowRight, Scan, Clock, Zap, UserCheck } from "lucide-react"

const features = [
  {
    icon: Scan,
    title: "Analiză în timp real",
    description: "Tehnologie computer vision care analizează postura ta prin camera dispozitivului.",
  },
  {
    icon: Clock,
    title: "Rapid și accesibil",
    description: "Evaluare completă în mai puțin de 3 minute, fără programare prealabilă.",
  },
  {
    icon: Zap,
    title: "Rezultate instant",
    description: "Primești imediat detalii despre postura ta și zonele care necesită atenție.",
  },
  {
    icon: UserCheck,
    title: "Plan personalizat",
    description: "Recomandări adaptate nevoilor tale specifice pe baza evaluării.",
  },
]

export function AIPostureEvaluation() {
  return (
    <section id="evaluare" className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] max-w-md mx-auto">
              {/* Main Container */}
              <div className="absolute inset-0 bg-card rounded-lg border border-border overflow-hidden">
                {/* Header */}
                <div className="bg-muted/30 px-4 py-3 border-b border-border flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">Analiză posturală AI</span>
                  <span className="text-xs text-muted-foreground px-2 py-0.5 bg-muted rounded">Procesare...</span>
                </div>
                
                {/* Body Scan Visualization */}
                <div className="p-6 flex items-center justify-center h-[calc(100%-52px)]">
                  <div className="relative">
                    {/* Grid Lines */}
                    <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-30">
                      {Array.from({ length: 36 }).map((_, i) => (
                        <div key={i} className="border border-border/50" />
                      ))}
                    </div>
                    
                    {/* Body Outline */}
                    <svg viewBox="0 0 120 180" className="w-32 h-48 relative z-10">
                      {/* Body shape */}
                      <ellipse cx="60" cy="24" rx="16" ry="20" className="fill-muted/50 stroke-primary/60 stroke-1" />
                      <path d="M42 44 L42 90 Q42 100 52 100 L68 100 Q78 100 78 90 L78 44" className="fill-muted/50 stroke-primary/60 stroke-1" />
                      <rect x="28" y="48" width="14" height="38" rx="5" className="fill-muted/50 stroke-primary/60 stroke-1" />
                      <rect x="78" y="48" width="14" height="38" rx="5" className="fill-muted/50 stroke-primary/60 stroke-1" />
                      <rect x="42" y="98" width="14" height="45" rx="5" className="fill-muted/50 stroke-primary/60 stroke-1" />
                      <rect x="64" y="98" width="14" height="45" rx="5" className="fill-muted/50 stroke-primary/60 stroke-1" />
                      
                      {/* Spine Line */}
                      <path d="M60 42 Q58 65 60 95" className="fill-none stroke-primary stroke-2" strokeDasharray="4 3" />
                      
                      {/* Analysis Points */}
                      <circle cx="60" cy="24" r="4" className="fill-primary" />
                      <circle cx="60" cy="55" r="4" className="fill-primary" />
                      <circle cx="60" cy="80" r="4" className="fill-primary" />
                    </svg>

                    {/* Analysis Labels */}
                    <div className="absolute top-2 -right-16 bg-card rounded px-2 py-1 text-xs border border-border">
                      <span className="text-muted-foreground">Cap: </span>
                      <span className="text-primary font-medium">OK</span>
                    </div>
                    <div className="absolute top-14 -left-18 bg-card rounded px-2 py-1 text-xs border border-border">
                      <span className="text-muted-foreground">Umeri: </span>
                      <span className="font-medium text-foreground">-2°</span>
                    </div>
                    <div className="absolute bottom-12 -right-20 bg-card rounded px-2 py-1 text-xs border border-border">
                      <span className="text-muted-foreground">Coloană: </span>
                      <span className="font-medium text-foreground">Verificat</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <p className="text-sm font-medium text-primary uppercase tracking-wide">
              Tehnologie Computer Vision
            </p>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              Evaluare posturală prin inteligență artificială
            </h2>
            
            <p className="text-muted-foreground leading-relaxed">
              Sistemul nostru de computer vision analizează postura ta prin camera dispozitivului, 
              identificând dezechilibre, dezalinieri și zone care necesită atenție — 
              de acasă sau de oriunde te-ai afla.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 pt-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-md bg-muted flex items-center justify-center shrink-0">
                    <feature.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-0.5">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className="mt-4">
              Începe evaluarea gratuită
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
