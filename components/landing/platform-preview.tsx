import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, LayoutDashboard, Dumbbell, Calendar, TrendingUp, CreditCard, Utensils } from "lucide-react"

const platformFeatures = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Dumbbell, label: "Workouts" },
  { icon: Calendar, label: "Schedule" },
  { icon: Utensils, label: "Meals" },
  { icon: TrendingUp, label: "Progress" },
  { icon: CreditCard, label: "Payments" },
]

export function PlatformPreview() {
  return (
    <section id="platform" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            <LayoutDashboard className="w-4 h-4 mr-2" />
            Digital Platform
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Everything you need, in one place
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Your personal wellness dashboard. Manage workouts, track nutrition, 
            view progress, and handle subscriptions — all seamlessly integrated.
          </p>
        </div>

        {/* Platform Feature Icons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {platformFeatures.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
              <feature.icon className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-foreground">{feature.label}</span>
            </div>
          ))}
        </div>

        {/* Platform Mockup */}
        <div className="relative max-w-5xl mx-auto">
          <Card className="overflow-hidden border-border shadow-2xl">
            <CardContent className="p-0">
              {/* Browser Header */}
              <div className="bg-muted px-4 py-3 border-b border-border flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/40" />
                  <div className="w-3 h-3 rounded-full bg-chart-4/40" />
                  <div className="w-3 h-3 rounded-full bg-accent/40" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-card rounded-md px-4 py-1.5 text-sm text-muted-foreground max-w-md mx-auto text-center">
                    app.staidrept.com/dashboard
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="bg-card p-6 lg:p-8">
                <div className="grid lg:grid-cols-4 gap-6">
                  {/* Sidebar */}
                  <div className="lg:col-span-1 space-y-2">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                        <span className="text-primary-foreground font-serif font-bold">SD</span>
                      </div>
                      <span className="font-semibold text-foreground">STAI DREPT</span>
                    </div>
                    {['Dashboard', 'Workouts', 'Nutrition', 'Recovery', 'Progress', 'Settings'].map((item, i) => (
                      <div 
                        key={item} 
                        className={`px-4 py-2 rounded-lg text-sm ${i === 0 ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:bg-muted'}`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* Main Content */}
                  <div className="lg:col-span-3 space-y-6">
                    {/* Welcome Header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">Welcome back, Alex</h3>
                        <p className="text-sm text-muted-foreground">Here&apos;s your wellness overview</p>
                      </div>
                      <Button size="sm">Start Today&apos;s Workout</Button>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="bg-muted/50 rounded-xl p-4">
                        <p className="text-sm text-muted-foreground mb-1">Posture Score</p>
                        <p className="text-2xl font-bold text-foreground">87<span className="text-sm font-normal text-accent ml-1">+5%</span></p>
                      </div>
                      <div className="bg-muted/50 rounded-xl p-4">
                        <p className="text-sm text-muted-foreground mb-1">Sessions This Month</p>
                        <p className="text-2xl font-bold text-foreground">18</p>
                      </div>
                      <div className="bg-muted/50 rounded-xl p-4">
                        <p className="text-sm text-muted-foreground mb-1">Meals Tracked</p>
                        <p className="text-2xl font-bold text-foreground">42</p>
                      </div>
                    </div>

                    {/* Progress Chart Placeholder */}
                    <div className="bg-muted/50 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-foreground">Progress Overview</h4>
                        <span className="text-sm text-muted-foreground">Last 30 days</span>
                      </div>
                      <div className="h-32 flex items-end gap-2">
                        {[40, 55, 45, 60, 50, 70, 65, 80, 75, 85, 80, 87].map((height, i) => (
                          <div key={i} className="flex-1 bg-accent/20 rounded-t-md relative" style={{ height: `${height}%` }}>
                            {i === 11 && (
                              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-semibold text-accent">87%</div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Upcoming */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-muted/50 rounded-xl p-4">
                        <h4 className="font-semibold text-foreground mb-3">Next Session</h4>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                            <Dumbbell className="w-5 h-5 text-accent" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">Upper Body Strength</p>
                            <p className="text-sm text-muted-foreground">Today, 6:00 PM</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-muted/50 rounded-xl p-4">
                        <h4 className="font-semibold text-foreground mb-3">Today&apos;s Meal</h4>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                            <Utensils className="w-5 h-5 text-accent" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">Grilled Salmon Bowl</p>
                            <p className="text-sm text-muted-foreground">Pickup at 12:30 PM</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Decorative gradient */}
          <div className="absolute -inset-4 -z-10 bg-accent/5 rounded-3xl blur-2xl" />
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="text-base px-8">
            Explore the Platform
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
