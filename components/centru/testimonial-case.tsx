"use client"

import { motion } from "framer-motion"
import { Quote, ArrowRight, Activity, Briefcase, Heart, Dumbbell, Users } from "lucide-react"
import Link from "next/link"

const audienceLogos = [
  { icon: Heart, label: "Dureri de spate" },
  { icon: Briefcase, label: "Sedentarism" },
  { icon: Dumbbell, label: "Sportivi" },
  { icon: Activity, label: "Recuperare" },
  { icon: Users, label: "Corporate" },
]

export function CentruTestimonialCase() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main testimonial */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          {/* Left - Image placeholder */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-[4/3] max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-br from-chart-2/10 to-chart-2/5 rounded-3xl" />
              <div className="relative h-full bg-gradient-to-br from-muted to-muted/50 rounded-3xl border border-border overflow-hidden flex items-center justify-center">
                {/* Logo placeholder */}
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-foreground rounded-2xl flex items-center justify-center mb-4">
                    <span className="text-background font-bold text-3xl">SD</span>
                  </div>
                  <p className="text-muted-foreground text-sm">Centrul STAI DREPT</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Testimonial */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Quote className="w-10 h-10 text-chart-2/30" />
            
            <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed">
              Am început să merg la Centrul STAI DREPT după ani de dureri de spate cauzate de munca sedentară. 
              În doar 3 luni, cu ajutorul echipei și al programului personalizat, am reușit să elimin durerile 
              și să-mi îmbunătățesc semnificativ postura. Combinația de antrenament, fizioterapie și 
              monitorizare în platformă a făcut toată diferența.
            </blockquote>

            <div className="pt-4">
              <p className="font-bold text-foreground">Ana Ionescu</p>
              <p className="text-sm text-muted-foreground">Manager Marketing, București</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom logos/audiences row */}
        <motion.div
          className="border-t border-border pt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Audience chips */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-3">
              {audienceLogos.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-1.5 bg-card border border-border rounded-full"
                >
                  <item.icon className="w-3.5 h-3.5 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>

            {/* CTA link */}
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 text-sm font-medium text-chart-2 hover:text-chart-2/80 transition-colors"
            >
              Programează o vizită
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
