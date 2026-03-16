"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

interface PageHeroProps {
  // Ribbon/Badge
  ribbonIcon?: LucideIcon
  ribbonText: string
  ribbonColor?: "primary" | "chart-2" | "chart-3"
  
  // Content
  title: string
  titleHighlight?: string
  subtitle: string
  
  // Primary CTA
  primaryButtonText: string
  primaryButtonHref?: string
  primaryButtonIcon?: LucideIcon
  
  // Secondary CTA
  secondaryButtonText?: string
  secondaryButtonHref?: string
  
  // Side content (right by default, left if reversed)
  sideContent?: ReactNode
  
  // Additional info below CTAs
  additionalInfo?: ReactNode
  
  // Layout options
  reversed?: boolean
}

const colorMap = {
  primary: {
    bg: "bg-primary/10",
    border: "border-primary/20",
    text: "text-primary",
    dot: "bg-primary",
    button: "bg-primary hover:bg-primary/90 text-primary-foreground",
  },
  "chart-2": {
    bg: "bg-chart-2/10",
    border: "border-chart-2/20",
    text: "text-chart-2",
    dot: "bg-chart-2",
    button: "bg-chart-2 hover:bg-chart-2/90 text-white",
  },
  "chart-3": {
    bg: "bg-chart-3/10",
    border: "border-chart-3/20",
    text: "text-chart-3",
    dot: "bg-chart-3",
    button: "bg-chart-3 hover:bg-chart-3/90 text-white",
  },
}

export function PageHero({
  ribbonIcon: RibbonIcon,
  ribbonText,
  ribbonColor = "primary",
  title,
  titleHighlight,
  subtitle,
  primaryButtonText,
  primaryButtonHref = "#",
  primaryButtonIcon: PrimaryButtonIcon,
  secondaryButtonText,
  secondaryButtonHref = "#",
  sideContent,
  additionalInfo,
  reversed = false,
}: PageHeroProps) {
  const colors = colorMap[ribbonColor]

  const contentSection = (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Ribbon/Badge */}
      <div
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${colors.bg} border ${colors.border}`}
      >
        {RibbonIcon ? (
          <RibbonIcon className={`w-3.5 h-3.5 ${colors.text}`} />
        ) : (
          <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
        )}
        <span className={`text-xs font-medium ${colors.text} uppercase tracking-wide`}>
          {ribbonText}
        </span>
      </div>

      {/* Title and Subtitle */}
      <div className="space-y-5">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground text-balance">
          {title}
          {titleHighlight && (
            <>
              <br />
              <span className={colors.text}>{titleHighlight}</span>
            </>
          )}
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
          {subtitle}
        </p>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          size="lg"
          className={`text-base h-12 px-6 ${colors.button}`}
          asChild={primaryButtonHref !== "#"}
        >
          {primaryButtonHref !== "#" ? (
            <a href={primaryButtonHref}>
              {PrimaryButtonIcon && <PrimaryButtonIcon className="w-4 h-4 mr-2" />}
              {primaryButtonText}
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          ) : (
            <span>
              {PrimaryButtonIcon && <PrimaryButtonIcon className="w-4 h-4 mr-2" />}
              {primaryButtonText}
              <ArrowRight className="w-4 h-4 ml-2" />
            </span>
          )}
        </Button>

        {secondaryButtonText && (
          <Button
            size="lg"
            variant="outline"
            className="text-base h-12 px-6"
            asChild={secondaryButtonHref !== "#"}
          >
            {secondaryButtonHref !== "#" ? (
              <a href={secondaryButtonHref}>{secondaryButtonText}</a>
            ) : (
              <span>{secondaryButtonText}</span>
            )}
          </Button>
        )}
      </div>

      {/* Additional Info */}
      {additionalInfo && (
        <div className="text-sm text-muted-foreground space-y-2">
          {additionalInfo}
        </div>
      )}
    </motion.div>
  )

  const sideSection = sideContent && (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {sideContent}
    </motion.div>
  )

  return (
    <section className="pt-24 pb-12 lg:pt-32 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {reversed ? (
            <>
              <div className="order-2 lg:order-1">{sideSection}</div>
              <div className="order-1 lg:order-2">{contentSection}</div>
            </>
          ) : (
            <>
              {contentSection}
              {sideSection}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
