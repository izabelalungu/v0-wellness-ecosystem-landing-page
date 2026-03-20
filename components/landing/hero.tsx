"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
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
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium text-primary">Evaluare posturală prin AI</span>
            </div>
            
            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground text-balance">
                Scapă de dureri.
                <br />
                <span className="text-primary">Stai drept.</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                STAI DREPT este un sistem integrat care combină antrenament personalizat, 
                recuperare posturală, nutriție și AI. Fără drumuri inutile. Doar progres măsurabil.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="text-base h-12 px-6">
                Fă testul postural gratuit
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-base h-12 px-6">
                Descoperă serviciile
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-2">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center">
                      <span className="text-[10px] font-medium text-muted-foreground">{String.fromCharCode(64 + i)}</span>
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">2.500+</span> utilizatori activi
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - AI Posture Scan Visual */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative aspect-[4/3] max-w-lg mx-auto lg:max-w-none">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-2xl" />
              
              {/* Main Visual Container */}
              <div className="relative h-full bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
                {/* Header Bar */}
                <div className="px-4 py-3 border-b border-border flex items-center justify-between bg-muted/30">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-medium text-foreground">Analiză posturală AI</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] text-muted-foreground px-2 py-0.5 bg-muted rounded-full">Live</span>
                  </div>
                </div>
                
                {/* Scan Area */}
                <div className="relative p-6 flex items-center justify-center min-h-[280px] lg:min-h-[320px] bg-gradient-to-b from-muted/10 to-transparent">
                  {/* Camera Frame */}
                  <div className="absolute inset-6 border-2 border-dashed border-border/50 rounded-lg">
                    {/* Corner indicators */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-primary -translate-x-0.5 -translate-y-0.5" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-primary translate-x-0.5 -translate-y-0.5" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-primary -translate-x-0.5 translate-y-0.5" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-primary translate-x-0.5 translate-y-0.5" />
                  </div>
                  
                  {/* Skeleton Visualization */}
                  <div className="relative z-10">
                    <svg viewBox="0 0 140 200" className="w-32 h-48 lg:w-40 lg:h-56">
                      {/* Body silhouette */}
                      <ellipse cx="70" cy="28" rx="18" ry="22" className="fill-muted/60 stroke-none" />
                      <path d="M48 50 L48 100 Q48 112 60 112 L80 112 Q92 112 92 100 L92 50" className="fill-muted/60 stroke-none" />
                      <rect x="32" y="54" width="16" height="44" rx="6" className="fill-muted/60" />
                      <rect x="92" y="54" width="16" height="44" rx="6" className="fill-muted/60" />
                      <rect x="48" y="110" width="16" height="52" rx="6" className="fill-muted/60" />
                      <rect x="76" y="110" width="16" height="52" rx="6" className="fill-muted/60" />
                      
                      {/* Spine alignment line */}
                      <motion.path 
                        d="M70 48 Q68 75 70 108" 
                        className="fill-none stroke-primary stroke-[2.5]" 
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                      
                      {/* Keypoints */}
                      <motion.circle 
                        cx="70" cy="28" r="5" 
                        className="fill-primary"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.8 }}
                      />
                      <motion.circle 
                        cx="70" cy="60" r="5" 
                        className="fill-primary"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1 }}
                      />
                      <motion.circle 
                        cx="70" cy="95" r="5" 
                        className="fill-primary"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.2 }}
                      />
                      
                      {/* Shoulder points */}
                      <motion.circle 
                        cx="40" cy="58" r="4" 
                        className="fill-chart-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.1 }}
                      />
                      <motion.circle 
                        cx="100" cy="56" r="4" 
                        className="fill-chart-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.1 }}
                      />
                      
                      {/* Shoulder line */}
                      <motion.line 
                        x1="40" y1="58" x2="100" y2="56" 
                        className="stroke-chart-2 stroke-[1.5]" 
                        strokeDasharray="4 3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                      />
                    </svg>

                    {/* Floating Analysis Labels */}
                    <motion.div 
                      className="absolute -top-2 -right-28 lg:-right-32"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.4 }}
                    >
                      <div className="bg-card rounded-lg px-3 py-2 border border-border shadow-sm">
                        <p className="text-[10px] text-muted-foreground mb-0.5">Cap</p>
                        <p className="text-xs font-semibold text-chart-3">Aliniat corect</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute top-14 -left-28 lg:-left-32"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.6 }}
                    >
                      <div className="bg-card rounded-lg px-3 py-2 border border-border shadow-sm">
                        <p className="text-[10px] text-muted-foreground mb-0.5">Umeri</p>
                        <p className="text-xs font-semibold text-amber-600">Dezaliniere -2°</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute bottom-4 -right-28 lg:-right-32"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.8 }}
                    >
                      <div className="bg-card rounded-lg px-3 py-2 border border-border shadow-sm">
                        <p className="text-[10px] text-muted-foreground mb-0.5">Coloană</p>
                        <p className="text-xs font-semibold text-primary">Monitorizare activă</p>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Scan line animation */}
                  <motion.div 
                    className="absolute left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
                    initial={{ top: "15%" }}
                    animate={{ top: "85%" }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                
                {/* Bottom Status */}
                <div className="px-4 py-3 border-t border-border bg-muted/20 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-chart-3" />
                      <span className="text-[10px] text-muted-foreground">17 puncte detectate</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-[10px] text-muted-foreground">Procesare în curs</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-medium text-foreground">87% acuratețe</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
