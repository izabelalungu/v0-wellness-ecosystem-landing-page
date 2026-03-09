import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Maria S.",
    role: "Office Worker",
    content: "After years of chronic back pain from sitting at a desk, STAI DREPT helped me understand my posture issues and gave me the tools to fix them. The combination of physiotherapy and the workout program has been transformative.",
    rating: 5,
    initials: "MS",
  },
  {
    name: "Adrian C.",
    role: "Software Developer",
    content: "The AI posture evaluation was eye-opening. I had no idea how much my daily habits were affecting my spine. The personalized recovery plan and weekly sessions have made a noticeable difference in just two months.",
    rating: 5,
    initials: "AC",
  },
  {
    name: "Elena T.",
    role: "Marketing Manager",
    content: "What I love most is the integrated approach. Nutrition, fitness, and recovery all work together. The platform makes it easy to track everything, and the meal delivery saves me so much time.",
    rating: 5,
    initials: "ET",
  },
  {
    name: "Radu M.",
    role: "Entrepreneur",
    content: "The convenience of having everything in one ecosystem is unmatched. From booking my physiotherapy sessions to tracking my workouts and meals — it all syncs perfectly. Highly recommend to anyone serious about their health.",
    rating: 5,
    initials: "RM",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Real transformations, real results
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Join thousands of members who have improved their posture, 
            eliminated pain, and transformed their wellbeing with STAI DREPT.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 lg:p-8">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  &quot;{testimonial.content}&quot;
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="font-semibold text-accent">{testimonial.initials}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
