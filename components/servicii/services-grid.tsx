"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Dumbbell, Activity, UtensilsCrossed, Monitor, MapPin, Globe } from "lucide-react"
import { motion } from "framer-motion"
import { SectionHeader } from "@/components/shared/section-header"
import { FeatureGrid, FeatureCard } from "@/components/shared/feature-grid"

const services = [
  {
    icon: <Dumbbell className="w-7 h-7 text-primary" />,
    title: "Gym Program",
    description: "Antrenamente personalizate pentru forță, mobilitate și corectarea posturii sub îndrumarea specialiștilor.",
    features: ["Antrenament personal", "Sesiuni grup mic", "Evaluări periodice", "Acces sală"],
    type: "onsite",
  },
  {
    icon: <Activity className="w-7 h-7 text-chart-2" />,
    title: "Recuperare Posturală",
    description: "Program complet: fizioterapie, kinetoterapie și masaj terapeutic pentru dezechilibre și durere.",
    features: ["Fizioterapie", "Kinetoterapie", "Masaj terapeutic", "Saună"],
    type: "onsite",
  },
  {
    icon: <UtensilsCrossed className="w-7 h-7 text-chart-3" />,
    title: "Nutriție",
    description: "Mese proaspete și echilibrate preparate zilnic. Planuri adaptate obiectivelor tale cu flexibilitate maximă.",
    features: ["Mese zilnice", "Plan personalizat", "Livrare disponibilă", "Monitorizare macros"],
    type: "hybrid",
  },
  {
    icon: <Monitor className="w-7 h-7 text-primary" />,
    title: "Platformă Digitală",
    description: "Dashboard personal pentru gestionarea completă: progres, antrenamente, mese, programări și plăți.",
    features: ["Urmărire progres", "Bibliotecă exerciții", "Planificare mese", "Gestionare cont"],
    type: "online",
  },
]

export function ServiciiGrid() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Serviciile ecosistemului STAI DREPT"
          description="Fiecare serviciu poate fi utilizat independent sau în combinație cu celelalte pentru o experiență completă de wellness."
        />

        <FeatureGrid columns={2}>
          {services.map((service, index) => (
            <FeatureCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              tags={service.features}
              delay={index}
            >
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-1.5">
                  {service.type === "onsite" && (
                    <>
                      <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                      <span className="text-xs font-medium text-muted-foreground">Onsite</span>
                    </>
                  )}
                  {service.type === "online" && (
                    <>
                      <Globe className="w-3.5 h-3.5 text-muted-foreground" />
                      <span className="text-xs font-medium text-muted-foreground">Online</span>
                    </>
                  )}
                  {service.type === "hybrid" && (
                    <>
                      <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                      <span className="text-xs font-medium text-muted-foreground">/</span>
                      <Globe className="w-3.5 h-3.5 text-muted-foreground" />
                      <span className="text-xs font-medium text-muted-foreground">Hybrid</span>
                    </>
                  )}
                </div>
                <Button variant="ghost" size="sm" className="h-auto p-0 text-foreground hover:text-primary">
                  Detalii
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </FeatureCard>
          ))}
        </FeatureGrid>
      </div>
    </section>
  )
}
