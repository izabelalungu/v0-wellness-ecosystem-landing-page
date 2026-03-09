import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground">
          Ready to transform your posture?
        </h2>
        <p className="text-lg text-primary-foreground/80 leading-relaxed mb-10 max-w-2xl mx-auto">
          Begin your journey to better posture, reduced pain, and lasting wellness. 
          Start with a free AI evaluation or visit our center to experience the full ecosystem.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="text-base px-8">
            Start Free Evaluation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
            <MapPin className="w-5 h-5 mr-2" />
            Visit Our Center
          </Button>
        </div>

        <p className="mt-8 text-sm text-primary-foreground/60">
          No commitment required. See results in your first session.
        </p>
      </div>
    </section>
  )
}
