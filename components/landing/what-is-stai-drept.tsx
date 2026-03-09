import { Card, CardContent } from "@/components/ui/card"
import { Dumbbell, Stethoscope, Salad, LayoutDashboard } from "lucide-react"

const pillars = [
  {
    icon: Dumbbell,
    title: "Fitness Training",
    description: "Personalized workout programs designed by certified trainers to build strength, mobility, and endurance.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Stethoscope,
    title: "Postural Recovery",
    description: "Physiotherapy, kinesiotherapy, and targeted treatments to correct posture and eliminate chronic pain.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Salad,
    title: "Nutrition",
    description: "Fresh, balanced meals with flexible scheduling and personalized meal plans delivered to your door.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: LayoutDashboard,
    title: "Digital Platform",
    description: "Track your progress, manage subscriptions, access workouts, and monitor your transformation journey.",
    color: "bg-accent/10 text-accent",
  },
]

export function WhatIsStaiDrept() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            One ecosystem for complete wellness
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            STAI DREPT brings together everything you need to transform your posture, health, and lifestyle. 
            From expert-led training to AI-powered assessments, experience an integrated approach to wellness 
            that adapts to your unique needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow duration-300 group">
              <CardContent className="p-6">
                <div className={`w-14 h-14 rounded-2xl ${pillar.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <pillar.icon className="w-7 h-7" />
                </div>
                <h3 className="font-semibold text-xl mb-3 text-card-foreground">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
