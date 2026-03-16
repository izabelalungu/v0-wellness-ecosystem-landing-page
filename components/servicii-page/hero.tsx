"use client"

import { Sparkles, Dumbbell, Activity, UtensilsCrossed, Monitor } from "lucide-react"
import { PageHero } from "@/components/shared/page-hero"

function EcosystemVisual() {
  return (
    <div className="relative aspect-square max-w-lg mx-auto lg:max-w-none">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-3xl" />
      
      <div className="relative h-full bg-card rounded-3xl border border-border overflow-hidden shadow-lg p-8">
        {/* Gym element */}
        <div className="absolute top-8 left-8 w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center group hover:bg-primary/15 transition-colors">
          <Dumbbell className="w-8 h-8 text-primary" />
        </div>
        
        {/* Recovery element */}
        <div className="absolute top-8 right-8 w-20 h-20 bg-chart-2/10 rounded-xl flex items-center justify-center group hover:bg-chart-2/15 transition-colors">
          <Activity className="w-8 h-8 text-chart-2" />
        </div>
        
        {/* Nutrition element */}
        <div className="absolute bottom-8 left-8 w-20 h-20 bg-chart-3/10 rounded-xl flex items-center justify-center group hover:bg-chart-3/15 transition-colors">
          <UtensilsCrossed className="w-8 h-8 text-chart-3" />
        </div>
        
        {/* Platform element */}
        <div className="absolute bottom-8 right-8 w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center group hover:bg-primary/15 transition-colors">
          <Monitor className="w-8 h-8 text-primary" />
        </div>
        
        {/* Center connection visual */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center border-2 border-primary/20">
            <span className="text-sm font-bold text-primary text-center leading-tight">STAI<br/>DREPT</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ServiciiHero() {
  return (
    <PageHero
      ribbonIcon={Sparkles}
      ribbonText="Ecosistem integrat"
      ribbonColor="primary"
      title="Serviciile STAI DREPT"
      subtitle="Un ecosistem complet pentru sănătate care combină antrenament personalizat, recuperare posturală, nutriție echilibrată și monitorizare digitală."
      primaryButtonText="Începe evaluarea"
      secondaryButtonText="Vezi programele"
      sideContent={<EcosystemVisual />}
    />
  )
}
