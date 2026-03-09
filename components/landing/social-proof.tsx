const stats = [
  {
    value: "2.500+",
    label: "Pacienți activi",
  },
  {
    value: "15+",
    label: "Specialiști",
  },
  {
    value: "96%",
    label: "Rată de satisfacție",
  },
  {
    value: "24/7",
    label: "Acces platformă",
  },
]

export function SocialProof() {
  return (
    <section className="py-10 border-y border-border bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl lg:text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
