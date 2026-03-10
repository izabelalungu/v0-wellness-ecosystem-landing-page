"use client"

import { motion } from "framer-motion"

export function NutrieAbout() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                Despre Programul de Nutriție
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Programul de nutriție STAI DREPT oferă mese sănătoase și echilibrate pregătite pentru a susține antrenamentul, recuperarea și un stil de viață activ.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Alegi zilele și mesele</h3>
                <p className="text-muted-foreground">Selectezi zilele din lună în care vrei să primești mese: fiecare zi, doar weekenduri, sau orice alt pattern care ți se potrivește.</p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Livrare sau ridicare</h3>
                <p className="text-muted-foreground">Primești mesele la domiciliu prin livrare gratuită sau le poți ridica direct din centrul STAI DREPT, oricare ți se potrivește mai bine.</p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Monitorizare simplă</h3>
                <p className="text-muted-foreground">Toate planurile și progresul pot fi urmărite direct în platforma digitală STAI DREPT pentru maximum de control și transparență.</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-2xl bg-gradient-to-br from-chart-3/5 to-chart-3/10 border border-chart-3/20 flex items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIEwgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] bg-repeat" />
            </div>
            <div className="relative text-center">
              <div className="text-6xl mb-4">🥗</div>
              <p className="text-lg font-semibold text-chart-3">Mese proaspete zilnic</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
