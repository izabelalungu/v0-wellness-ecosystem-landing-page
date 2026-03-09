import { Button } from "@/components/ui/button"
import { ArrowRight, Dumbbell, Utensils } from "lucide-react"

export function PlatformPreview() {
  return (
    <section id="platforma" className="py-16 lg:py-24 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wide mb-3">
            Platformă digitală
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            Tot ce ai nevoie, într-un singur loc
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Dashboard-ul tău personal de wellness. Gestionează antrenamente, 
            urmărește progresul, planifică mesele și administrează abonamentele.
          </p>
        </div>

        {/* Feature tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {['Dashboard', 'Antrenamente', 'Nutriție', 'Progres', 'Programări', 'Plăți'].map((feature, index) => (
            <span 
              key={index} 
              className="px-3 py-1.5 bg-card text-sm text-foreground rounded-md border border-border"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Platform Mockup */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            {/* Browser Header */}
            <div className="bg-muted/50 px-4 py-2.5 border-b border-border flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-background rounded px-3 py-1 text-xs text-muted-foreground max-w-xs mx-auto text-center border border-border">
                  app.staidrept.com/dashboard
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-5 lg:p-6">
              <div className="grid lg:grid-cols-4 gap-5">
                {/* Sidebar */}
                <div className="lg:col-span-1 space-y-1.5">
                  <div className="flex items-center gap-2.5 mb-5">
                    <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-xs">SD</span>
                    </div>
                    <span className="font-semibold text-sm text-foreground">STAI DREPT</span>
                  </div>
                  {['Dashboard', 'Antrenamente', 'Nutriție', 'Recuperare', 'Progres', 'Setări'].map((item, i) => (
                    <div 
                      key={item} 
                      className={`px-3 py-2 rounded text-xs ${i === 0 ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* Main Content */}
                <div className="lg:col-span-3 space-y-5">
                  {/* Welcome Header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Bine ai venit, Ana</h3>
                      <p className="text-xs text-muted-foreground">Iată progresul tău de astăzi</p>
                    </div>
                    <Button size="sm">Începe antrenamentul</Button>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="bg-muted/30 rounded-lg p-4 border border-border">
                      <p className="text-xs text-muted-foreground mb-1">Scor postură</p>
                      <p className="text-xl font-bold text-foreground">87<span className="text-xs font-normal text-primary ml-1">+5%</span></p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4 border border-border">
                      <p className="text-xs text-muted-foreground mb-1">Ședințe luna aceasta</p>
                      <p className="text-xl font-bold text-foreground">18</p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4 border border-border">
                      <p className="text-xs text-muted-foreground mb-1">Mese înregistrate</p>
                      <p className="text-xl font-bold text-foreground">42</p>
                    </div>
                  </div>

                  {/* Progress Chart */}
                  <div className="bg-muted/30 rounded-lg p-5 border border-border">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-medium text-sm text-foreground">Evoluție postură</h4>
                      <span className="text-xs text-muted-foreground">Ultimele 30 zile</span>
                    </div>
                    <div className="h-24 flex items-end gap-1.5">
                      {[40, 55, 45, 60, 50, 70, 65, 80, 75, 85, 80, 87].map((height, i) => (
                        <div 
                          key={i} 
                          className={`flex-1 rounded-t ${i === 11 ? 'bg-primary' : 'bg-primary/20'}`} 
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Upcoming */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-muted/30 rounded-lg p-4 border border-border">
                      <h4 className="font-medium text-sm text-foreground mb-3">Următoarea ședință</h4>
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-md bg-muted flex items-center justify-center">
                          <Dumbbell className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-sm text-foreground">Forță - Corp superior</p>
                          <p className="text-xs text-muted-foreground">Astăzi, 18:00</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4 border border-border">
                      <h4 className="font-medium text-sm text-foreground mb-3">Masa de astăzi</h4>
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-md bg-muted flex items-center justify-center">
                          <Utensils className="w-4 h-4 text-chart-3" />
                        </div>
                        <div>
                          <p className="font-medium text-sm text-foreground">Somon la grătar cu legume</p>
                          <p className="text-xs text-muted-foreground">Ridicare: 12:30</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg">
            Explorează platforma
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
