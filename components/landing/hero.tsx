import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-sm font-medium text-primary uppercase tracking-wide">
              Clinică de recuperare posturală
            </p>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance text-foreground">
              Postură corectă.{" "}
              <span className="text-primary">Mișcare mai bună.</span>{" "}
              Viață fără durere.
            </h1>
            
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-lg">
              STAI DREPT este un ecosistem integrat de wellness care combină 
              antrenament personalizat, recuperare posturală, nutriție echilibrată 
              și evaluare posturală prin inteligență artificială.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button size="lg" className="text-base">
                Începe evaluarea posturală
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                Descoperă serviciile
              </Button>
            </div>
          </div>

          {/* Right Content - Posture Analysis Visual */}
          <div className="relative">
            <div className="relative aspect-[4/3] max-w-md mx-auto lg:max-w-none">
              {/* Main Visual Container */}
              <div className="absolute inset-0 bg-card rounded-lg border border-border overflow-hidden">
                {/* Header */}
                <div className="px-4 py-3 border-b border-border flex items-center justify-between bg-muted/30">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-xs font-medium text-foreground">Evaluare posturală AI</span>
                  </div>
                  <span className="text-xs text-muted-foreground">Analiză în timp real</span>
                </div>
                
                {/* Body Analysis Area */}
                <div className="p-6 flex items-center justify-center h-[calc(100%-52px)] bg-muted/10">
                  <div className="relative">
                    {/* Spine alignment visualization */}
                    <svg viewBox="0 0 120 180" className="w-28 h-44 lg:w-36 lg:h-56">
                      {/* Body outline */}
                      <ellipse cx="60" cy="24" rx="16" ry="20" className="fill-muted stroke-border stroke-1" />
                      <path d="M42 44 L42 95 Q42 105 52 105 L68 105 Q78 105 78 95 L78 44" className="fill-muted stroke-border stroke-1" />
                      <rect x="28" y="48" width="14" height="42" rx="5" className="fill-muted stroke-border stroke-1" />
                      <rect x="78" y="48" width="14" height="42" rx="5" className="fill-muted stroke-border stroke-1" />
                      <rect x="42" y="103" width="14" height="48" rx="5" className="fill-muted stroke-border stroke-1" />
                      <rect x="64" y="103" width="14" height="48" rx="5" className="fill-muted stroke-border stroke-1" />
                      
                      {/* Spine line */}
                      <path d="M60 42 Q58 70 60 100" className="fill-none stroke-primary stroke-2" strokeDasharray="4 2" />
                      
                      {/* Analysis markers */}
                      <circle cx="60" cy="24" r="4" className="fill-primary" />
                      <circle cx="60" cy="55" r="4" className="fill-primary" />
                      <circle cx="60" cy="85" r="4" className="fill-primary" />
                    </svg>

                    {/* Analysis labels */}
                    <div className="absolute top-2 -right-20 bg-card rounded px-2 py-1 text-xs border border-border">
                      <span className="text-muted-foreground">Cap: </span>
                      <span className="text-foreground font-medium">Aliniat</span>
                    </div>
                    <div className="absolute top-14 -left-24 bg-card rounded px-2 py-1 text-xs border border-border">
                      <span className="text-muted-foreground">Umeri: </span>
                      <span className="text-foreground font-medium">-2°</span>
                    </div>
                    <div className="absolute bottom-10 -right-24 bg-card rounded px-2 py-1 text-xs border border-border">
                      <span className="text-muted-foreground">Coloană: </span>
                      <span className="text-foreground font-medium">Monitorizat</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
