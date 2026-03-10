"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ReactNode } from "react"

interface HeroSectionProps {
  badge?: {
    icon: ReactNode
    text: string
  }
  title: string
  description: string
  primaryCTA?: {
    text: string
    onClick?: () => void
  }
  secondaryCTA?: {
    text: string
    onClick?: () => void
  }
  rightContent: ReactNode
}

export function HeroSection({
  badge,
  title,
  description,
  primaryCTA,
  secondaryCTA,
  rightContent,
}: HeroSectionProps) {
  return (
    <section className="pt-24 pb-12 lg:pt-32 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {badge && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10">
                {badge.icon}
                <span className="text-xs font-medium text-primary">{badge.text}</span>
              </div>
            )}
            
            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground text-balance">
                {title}
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                {description}
              </p>
            </div>

            {/* CTAs */}
            {(primaryCTA || secondaryCTA) && (
              <div className="flex flex-col sm:flex-row gap-3">
                {primaryCTA && (
                  <Button size="lg" className="text-base h-12 px-6" onClick={primaryCTA.onClick}>
                    {primaryCTA.text}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                )}
                {secondaryCTA && (
                  <Button size="lg" variant="outline" className="text-base h-12 px-6" onClick={secondaryCTA.onClick}>
                    {secondaryCTA.text}
                  </Button>
                )}
              </div>
            )}
          </motion.div>

          {/* Right Content */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {rightContent}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
