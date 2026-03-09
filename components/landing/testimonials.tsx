import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Maria S.",
    role: "Manager de birou",
    content: "După ani de dureri de spate cauzate de munca la birou, programul de la STAI DREPT m-a ajutat să înțeleg problemele mele de postură și să le corectez. Combinația de fizioterapie și antrenament a fost exact ce aveam nevoie.",
    initials: "MS",
  },
  {
    name: "Adrian C.",
    role: "Programator",
    content: "Evaluarea posturală AI mi-a arătat clar ce probleme am. Nu realizasem cât de mult îmi afectau obiceiurile zilnice coloana vertebrală. Planul de recuperare și ședințele regulate au făcut o diferență vizibilă.",
    initials: "AC",
  },
  {
    name: "Elena T.",
    role: "Antreprenor",
    content: "Apreciez abordarea integrată. Nutriția, antrenamentul și recuperarea funcționează împreună. Platforma face totul simplu de urmărit, iar livrarea meselor îmi economisește timp prețios.",
    initials: "ET",
  },
  {
    name: "Radu M.",
    role: "Consultant",
    content: "Comoditatea de a avea totul într-un singur loc este excelentă. De la programarea ședințelor de kinetoterapie la urmărirea antrenamentelor și a meselor — totul este bine organizat.",
    initials: "RM",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            Experiențe reale
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Pacienții noștri vorbesc despre progresul lor în îmbunătățirea 
            posturii și a sănătății generale.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-lg p-6"
            >
              {/* Rating */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                &quot;{testimonial.content}&quot;
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <span className="font-medium text-sm text-foreground">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
