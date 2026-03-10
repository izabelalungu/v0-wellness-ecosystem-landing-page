"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface SectionHeaderProps {
  pretitle?: string
  title: string
  description?: string
  align?: "left" | "center"
}

export function SectionHeader({
  pretitle,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <motion.div 
      className={`${align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"} mb-16`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {pretitle && (
        <p className="text-sm font-medium text-primary uppercase tracking-wide mb-4">
          {pretitle}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 tracking-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}
