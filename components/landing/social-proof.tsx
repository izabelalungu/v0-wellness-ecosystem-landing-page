import { Users, Award, MapPin, Laptop } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "2,500+",
    label: "Active Members",
  },
  {
    icon: Award,
    value: "15+",
    label: "Expert Specialists",
  },
  {
    icon: MapPin,
    value: "Onsite",
    label: "& Online Access",
  },
  {
    icon: Laptop,
    value: "24/7",
    label: "Platform Access",
  },
]

export function SocialProof() {
  return (
    <section className="py-12 border-y border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 mb-4">
                <stat.icon className="w-6 h-6 text-accent" />
              </div>
              <p className="text-2xl lg:text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
