import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Dumbbell, Activity, UtensilsCrossed, Monitor } from "lucide-react"

const services = [
  {
    icon: Dumbbell,
    title: "Gym Program",
    description: "Personal training, guided workouts, and personalized fitness plans designed to build strength, improve mobility, and achieve your physical goals.",
    features: ["1-on-1 Personal Training", "Group Sessions", "Custom Workout Plans", "Gym Access"],
    cta: "Explore Gym Programs",
  },
  {
    icon: Activity,
    title: "Postural Recovery",
    description: "Comprehensive recovery services including physiotherapy, kinesiotherapy, massage therapy, and sauna sessions to restore your body's natural alignment.",
    features: ["Physiotherapy", "Kinesiotherapy", "Therapeutic Massage", "Recovery Plans"],
    cta: "Learn About Recovery",
  },
  {
    icon: UtensilsCrossed,
    title: "Nutrition Program",
    description: "Fresh, balanced meals prepared by nutrition experts. Flexible scheduling with delivery or onsite pickup to fuel your transformation journey.",
    features: ["Fresh Daily Meals", "Personalized Plans", "Flexible Scheduling", "Delivery Available"],
    cta: "View Meal Plans",
  },
  {
    icon: Monitor,
    title: "Digital Platform",
    description: "Your personal wellness dashboard. Track workouts, manage subscriptions, view progress charts, and access your programs anytime, anywhere.",
    features: ["Progress Tracking", "Workout Library", "Meal Planning", "Payment Management"],
    cta: "Access Platform",
  },
]

export function ServicesOverview() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Services designed for your transformation
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Each service works together to create a complete wellness experience. 
            Choose one or combine them all for maximum results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border bg-card overflow-hidden group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-accent group-hover:text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-2xl mb-3 text-card-foreground">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex} 
                          className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <Button variant="ghost" className="group/btn p-0 h-auto text-foreground hover:text-accent hover:bg-transparent">
                      {service.cta}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
