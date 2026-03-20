"use client"

import { Dumbbell, Utensils, Monitor } from "lucide-react"
import { PageHero } from "@/components/shared/page-hero"

// Mini dashboard preview component
function DashboardPreview() {
  return (
    <div className="bg-white rounded-2xl border border-border shadow-2xl overflow-hidden">
      {/* Browser chrome */}
      <div className="bg-[#f5f5f5] px-4 py-3 border-b border-border flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#d9d9d9]" />
          <div className="w-3 h-3 rounded-full bg-[#d9d9d9]" />
          <div className="w-3 h-3 rounded-full bg-[#d9d9d9]" />
        </div>
        <div className="flex-1 max-w-xs mx-auto">
          <div className="bg-white rounded-md px-4 py-1 text-xs text-muted-foreground text-center border border-border">
            app.staidrept.com/dashboard
          </div>
        </div>
      </div>

      {/* Dashboard content */}
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-foreground text-sm">Bună dimineața, Ana</p>
            <p className="text-xs text-muted-foreground">2 activități programate</p>
          </div>
          <div className="bg-primary text-primary-foreground text-xs px-3 py-1.5 rounded-lg">
            Începe antrenamentul
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-4 gap-2">
          {[
            { label: "Scor postură", value: "87", suffix: "+5" },
            { label: "Ședințe", value: "18" },
            { label: "Mese", value: "42" },
            { label: "Streak", value: "12 zile" },
          ].map((stat, i) => (
            <div key={i} className="bg-muted/30 rounded-lg p-2">
              <p className="text-[8px] text-muted-foreground">{stat.label}</p>
              <p className="text-sm font-bold text-foreground">
                {stat.value}
                {stat.suffix && <span className="text-primary text-[10px] ml-1">{stat.suffix}</span>}
              </p>
            </div>
          ))}
        </div>

        {/* Mini chart */}
        <div className="bg-muted/20 rounded-lg p-3">
          <p className="text-xs font-medium text-foreground mb-2">Evoluție scor</p>
          <div className="flex items-end gap-1 h-12">
            {[40, 45, 50, 48, 55, 60, 58, 65, 70, 75, 72, 80, 85, 87].map((h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-t ${i === 13 ? "bg-primary" : "bg-primary/25"}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        {/* Bottom cards */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white border border-border rounded-lg p-2">
            <p className="text-[10px] font-medium text-foreground mb-1">Următoarea ședință</p>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center">
                <Dumbbell className="w-3 h-3 text-primary" />
              </div>
              <div>
                <p className="text-[9px] font-medium text-foreground">Corp superior</p>
                <p className="text-[8px] text-muted-foreground">18:00 · 45 min</p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-border rounded-lg p-2">
            <p className="text-[10px] font-medium text-foreground mb-1">Masa de astăzi</p>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-chart-3/10 flex items-center justify-center">
                <Utensils className="w-3 h-3 text-chart-3" />
              </div>
              <div>
                <p className="text-[9px] font-medium text-foreground">Somon cu quinoa</p>
                <p className="text-[8px] text-muted-foreground">12:30 · 580 kcal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function PlatformaProductHero() {
  return (
    <PageHero
      ribbonIcon={Monitor}
      ribbonText="Platformă digitală"
      ribbonColor="primary"
      title="Antrenament Personalizat cu AI. Control Total. Progres Măsurabil."
      subtitle="Platformă care se adaptează ție, nu invers. Primești un program construit pe baza evaluării tale, îți urmărești progresul în timp real și gestionezi totul dintr-un singur loc—de acasă, de la birou sau din vacanță."
      primaryButtonText="Accesează Platforma"
      sideContent={<DashboardPreview />}
      reversed
    />
  )
}
