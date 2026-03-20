"use client"

import { Dumbbell, MapPin } from "lucide-react"
import { PageHero } from "@/components/shared/page-hero"

function GymVisual() {
  return (
    <div className="relative aspect-[4/3] max-w-lg mx-auto lg:max-w-none">
      <div className="relative h-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />
        {/* Stats overlay */}
        <div className="relative z-10 grid grid-cols-2 gap-4 p-8 w-full">
          {[
            { label: "Spațiu aerisit", value: "350 mp" },
            { label: "Echipamente", value: "Premium" },
            { label: "Antrenori", value: "Certificați" },
            { label: "Saună", value: "Inclusă" },
          ].map((item, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <p className="text-white/60 text-xs mb-1">{item.label}</p>
              <p className="text-white font-bold text-lg">{item.value}</p>
            </div>
          ))}
        </div>
        {/* Dumbbell icon center */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <Dumbbell className="w-64 h-64 text-white" />
        </div>
      </div>
    </div>
  )
}

export function FitnessHero() {
  return (
    <PageHero
      ribbonIcon={Dumbbell}
      ribbonText="Sală premium · Râmnicu Vâlcea"
      ribbonColor="primary"
      title="Antrenează-te Serios."
      titleHighlight="Într-un Spațiu la Înălțimea Obiectivelor Tale."
      subtitle="350 mp de echipamente premium, antrenori certificați și saună inclusă. Vino să descoperi cea mai performantă sală din județul Vâlcea — parte din ecosistemul integrat STAI DREPT."
      primaryButtonText="Programează o Vizită"
      primaryButtonIcon={MapPin}
      secondaryButtonText="Alege Abonamentul"
      sideContent={<GymVisual />}
    />
  )
}
