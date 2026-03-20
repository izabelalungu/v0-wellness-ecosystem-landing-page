"use client"

import { motion } from "framer-motion"
import { Leaf, Sparkles, Shield } from "lucide-react"

export function IngredientsQuality() {
  const qualities = [
    {
      icon: Leaf,
      title: "Ingrediente Atent Alese",
      description: "Surse verificate, provenință cunoscută, calitate constantă. Nicio compromis între gust și nutriție."
    },
    {
      icon: Sparkles,
      title: "Prospețime Garantată",
      description: "Preparate zilnic. Transport imediat. Mânâncă la vârful calității, nu după zile în frigider."
    },
    {
      icon: Shield,
      title: "Standard Ridicat de Igienă",
      description: "Preparare în spații certificate, cu protocoale de control calitate și igienă aprobate."
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-chart-3/10 border border-chart-3/20">
            <Leaf className="w-3.5 h-3.5 text-chart-3" />
            <span className="text-xs font-medium text-chart-3 uppercase tracking-wide">Calitate Premium</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Ingrediente Alese, Standard Ridicat
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nu este vorba de etichete pitorești. E vorba de decizia deliberată ca fiecare ingredientă să conteze.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {qualities.map((quality, i) => {
            const Icon = quality.icon
            return (
              <motion.div
                key={i}
                className="bg-card border border-border rounded-xl p-8 hover:border-chart-3/40 transition-colors"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-lg bg-chart-3/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-chart-3" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{quality.title}</h3>
                <p className="text-sm text-muted-foreground">{quality.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Trust Statement */}
        <motion.div
          className="bg-background border border-border rounded-xl p-8 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-muted-foreground">
            <span className="font-semibold text-foreground">Diferența STAI DREPT:</span> Mâncare care susține obiectivele tale, pregătită cu grijă, din ingrediente care merită atenția.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
