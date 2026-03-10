"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface FeatureGridProps {
  columns?: 2 | 3 | 4
  children: ReactNode
}

export function FeatureGrid({ columns = 3, children }: FeatureGridProps) {
  const gridClass = {
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
  }[columns]

  return (
    <div className={`grid sm:grid-cols-2 ${gridClass} gap-6`}>
      {children}
    </div>
  )
}

interface FeatureCardProps {
  icon?: ReactNode
  title: string
  description: string
  tags?: string[]
  children?: ReactNode
  delay?: number
}

export function FeatureCard({
  icon,
  title,
  description,
  tags,
  children,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      className="group bg-card border border-border rounded-2xl p-6 lg:p-8 flex flex-col h-full transition-all duration-300 hover:border-primary/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay * 0.1 }}
    >
      {icon && (
        <div className="mb-5">
          {icon}
        </div>
      )}
      
      <h3 className="text-lg font-bold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-5 flex-grow">{description}</p>
      
      {tags && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span key={i} className="px-3 py-1.5 bg-muted text-muted-foreground text-xs rounded-lg">
              {tag}
            </span>
          ))}
        </div>
      )}
      
      {children}
    </motion.div>
  )
}
