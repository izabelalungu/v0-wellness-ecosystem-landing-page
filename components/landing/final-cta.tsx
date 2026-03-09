import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-16 lg:py-24 bg-foreground text-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Pregătit să îți îmbunătățești postura?
        </h2>
        <p className="text-background/70 leading-relaxed mb-8 max-w-xl mx-auto">
          Începe cu o evaluare posturală gratuită sau vizitează centrul nostru 
          pentru a descoperi întregul ecosistem de wellness.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="lg" variant="secondary">
            Începe evaluarea gratuită
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-background/20 text-background hover:bg-background/10 hover:text-background"
          >
            <MapPin className="w-4 h-4 mr-2" />
            Vizitează centrul
          </Button>
        </div>

        <p className="mt-6 text-xs text-background/50">
          Fără obligații. Vezi rezultate de la prima ședință.
        </p>
      </div>
    </section>
  )
}
