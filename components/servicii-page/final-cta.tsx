"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export function FinalCTAServiceii() {
  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 tracking-tight">
            Incepe evaluarea posturala
          </h2>
          
          <p className="text-lg mb-8 opacity-90 leading-relaxed max-w-2xl">
            Descopera cum poti imbunatati postura, sanatatea si performanta prin sistemul STAI DREPT.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="secondary" className="text-base h-12 px-6">
              Fa evaluarea online
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base h-12 px-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Viziteaza centrul STAI DREPT
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
