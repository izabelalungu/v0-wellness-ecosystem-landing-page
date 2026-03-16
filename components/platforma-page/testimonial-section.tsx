"use client"

import { motion } from "framer-motion"
import { Quote, ArrowRight } from "lucide-react"
import Link from "next/link"

export function PlatformaTestimonialSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative blurred background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-chart-2/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Header */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30">
              <span className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-xs font-medium text-primary uppercase tracking-wide">Testimoniale</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Nu ne crede pe cuvânt,<br />
              <span className="text-white/60">vezi ce spun utilizatorii</span>
            </h2>

            <p className="text-white/60 leading-relaxed">
              Mii de utilizatori folosesc platforma STAI DREPT pentru a-și îmbunătăți postura și starea de bine.
            </p>
          </motion.div>

          {/* Right - Testimonial Card */}
          <motion.div
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Quote className="w-10 h-10 text-primary mb-6" />

            <blockquote className="text-lg leading-relaxed text-white/90 mb-8">
              Am testat și încercat multe aplicații de fitness și management al sănătății. 
              Platforma STAI DREPT este cu adevărat diferită. E ușor de folosit, 
              are funcționalități puternice și îți oferă vizibilitate completă asupra progresului. 
              Este un instrument foarte valoros pentru oricine vrea să-și îmbunătățească postura.
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold">AM</span>
              </div>
              <div>
                <p className="font-semibold text-white">Andreea Munteanu</p>
                <p className="text-sm text-white/60">Utilizator STAI DREPT, București</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Link */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Vezi toate testimonialele
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
