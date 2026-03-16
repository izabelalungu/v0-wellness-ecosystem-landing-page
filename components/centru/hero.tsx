"use client"

import { MapPin, Dumbbell, Activity, Heart } from "lucide-react"
import { PageHero } from "@/components/shared/page-hero"

function CenterVisual() {
  return (
    <div className="relative aspect-[4/3] max-w-lg mx-auto lg:max-w-none">
      <div className="absolute inset-0 bg-gradient-to-br from-chart-2/5 to-chart-2/5 rounded-2xl" />
      
      <div className="relative h-full bg-gradient-to-br from-muted to-muted/50 rounded-2xl border border-border overflow-hidden shadow-sm flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="flex justify-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <Dumbbell className="w-7 h-7 text-primary" />
            </div>
            <div className="w-14 h-14 rounded-xl bg-chart-2/10 flex items-center justify-center">
              <Activity className="w-7 h-7 text-chart-2" />
            </div>
            <div className="w-14 h-14 rounded-xl bg-chart-3/10 flex items-center justify-center">
              <Heart className="w-7 h-7 text-chart-3" />
            </div>
          </div>
          <div>
            <p className="text-foreground font-semibold">Spațiu Premium</p>
            <p className="text-sm text-muted-foreground">Gym | Recuperare | Wellness</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function CenterInfo() {
  return (
    <>
      <p><span className="font-semibold text-foreground">Locație:</span> București, sector 1 (detalii la contact)</p>
      <p><span className="font-semibold text-foreground">Program:</span> Luni-Vineri: 06:00-21:00, Sâmbătă: 08:00-18:00</p>
      <p><span className="font-semibold text-foreground">Contact:</span> +40 (XXX) XXX XXXX</p>
    </>
  )
}

export function CentruHero() {
  return (
    <PageHero
      ribbonText="Centru fizic"
      ribbonColor="chart-2"
      title="Centrul STAI DREPT."
      titleHighlight="Mișcare, recuperare și wellness"
      subtitle="Un spațiu premium dedicat posturii, mișcării și recuperării. Cu specialiști, echipamente moderne și o abordare integrată."
      primaryButtonText="Programează o vizită"
      primaryButtonIcon={MapPin}
      secondaryButtonText="Descoperă serviciile onsite"
      sideContent={<CenterVisual />}
      additionalInfo={<CenterInfo />}
    />
  )
}
