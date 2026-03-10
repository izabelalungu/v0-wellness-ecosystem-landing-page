"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface StepProps {
  number: number
  title: string
  description: string
  icon?: ReactNode
  delay?: number
}

export function Step({ number, title, description, icon, delay = 0 }: StepProps) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay * 0.1 }}
    >
      <div className="flex gap-6">
        {/* Number Circle */}
        <div className="shrink-0">
          <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
            {number}
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-grow pt-2">
          <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

interface StepsSectionProps {
  steps: StepProps[]
  vertical?: boolean
}

export function StepsSection({ steps, vertical = true }: StepsSectionProps) {
  return (
    <div className={vertical ? "space-y-8" : "grid sm:grid-cols-2 lg:grid-cols-4 gap-6"}>
      {steps.map((step, i) => (
        <Step key={i} {...step} delay={i} />
      ))}
    </div>
  )
}
