import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, Shield, Activity } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Wellness Ecosystem
            </Badge>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance text-foreground">
              Stand tall.{" "}
              <span className="text-accent">Move better.</span>{" "}
              Live stronger.
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              STAI DREPT is an integrated wellness ecosystem that combines expert-led fitness training, postural recovery, personalized nutrition, and AI-powered assessments — all in one seamless experience.
            </p>

            {/* Trust Chips */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-full text-sm text-secondary-foreground">
                <Shield className="w-4 h-4 text-accent" />
                Expert-Led Programs
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-full text-sm text-secondary-foreground">
                <Activity className="w-4 h-4 text-accent" />
                Personalized Plans
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-full text-sm text-secondary-foreground">
                <Sparkles className="w-4 h-4 text-accent" />
                AI-Enhanced
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base px-8">
                Start Posture Evaluation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8">
                Explore Services
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Visual */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main Visual Container */}
              <div className="absolute inset-0 bg-card rounded-3xl border border-border shadow-xl overflow-hidden">
                {/* Posture Scan UI Mockup */}
                <div className="absolute inset-4 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                      <span className="text-xs font-medium text-muted-foreground">Live Analysis</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">AI Posture Scan</Badge>
                  </div>
                  
                  {/* Body Silhouette Area */}
                  <div className="flex-1 relative bg-muted/50 rounded-2xl flex items-center justify-center">
                    <div className="relative">
                      {/* Stylized body outline */}
                      <svg viewBox="0 0 100 200" className="w-32 h-64 text-foreground/20">
                        <ellipse cx="50" cy="25" rx="18" ry="22" fill="currentColor" />
                        <rect x="35" y="45" width="30" height="50" rx="10" fill="currentColor" />
                        <rect x="25" y="50" width="12" height="40" rx="5" fill="currentColor" />
                        <rect x="63" y="50" width="12" height="40" rx="5" fill="currentColor" />
                        <rect x="35" y="92" width="12" height="50" rx="5" fill="currentColor" />
                        <rect x="53" y="92" width="12" height="50" rx="5" fill="currentColor" />
                      </svg>
                      
                      {/* Analysis Points */}
                      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-accent bg-background animate-pulse" />
                      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-accent bg-background animate-pulse" style={{ animationDelay: '0.3s' }} />
                      <div className="absolute top-36 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-accent bg-background animate-pulse" style={{ animationDelay: '0.6s' }} />
                    </div>
                  </div>
                  
                  {/* Bottom Stats */}
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="bg-muted/50 rounded-xl p-3 text-center">
                      <p className="text-xs text-muted-foreground">Alignment</p>
                      <p className="text-lg font-bold text-foreground">87%</p>
                    </div>
                    <div className="bg-muted/50 rounded-xl p-3 text-center">
                      <p className="text-xs text-muted-foreground">Balance</p>
                      <p className="text-lg font-bold text-foreground">92%</p>
                    </div>
                    <div className="bg-muted/50 rounded-xl p-3 text-center">
                      <p className="text-xs text-muted-foreground">Posture</p>
                      <p className="text-lg font-bold text-accent">Good</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-8 top-1/4 bg-card rounded-xl p-4 shadow-lg border border-border hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Activity className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Weekly Progress</p>
                    <p className="font-semibold text-foreground">+15% Improvement</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/4 bg-card rounded-xl p-4 shadow-lg border border-border hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Sessions Completed</p>
                    <p className="font-semibold text-foreground">24 this month</p>
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
