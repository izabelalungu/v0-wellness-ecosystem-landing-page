import Link from "next/link"
import { Instagram, Facebook, Linkedin, Youtube, MapPin, Phone, Mail } from "lucide-react"

const footerLinks = {
  servicii: [
    { label: "Gym Program", href: "#servicii" },
    { label: "Recuperare Posturală", href: "#servicii" },
    { label: "Nutriție", href: "#servicii" },
    { label: "Platformă Digitală", href: "#platforma" },
    { label: "Evaluare AI", href: "#evaluare" },
  ],
  companie: [
    { label: "Despre noi", href: "#despre" },
    { label: "Echipa", href: "#" },
    { label: "Cariere", href: "#" },
    { label: "Contact", href: "#" },
  ],
  legal: [
    { label: "Politica de confidențialitate", href: "#" },
    { label: "Termeni și condiții", href: "#" },
    { label: "Politica cookies", href: "#" },
    { label: "GDPR", href: "#" },
  ],
}

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16 grid md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">SD</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-foreground">
                STAI DREPT
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-xs">
              Ecosistem integrat de wellness pentru îmbunătățirea posturii și a sănătății. 
              Antrenament, recuperare, nutriție și tehnologie AI — într-un singur loc.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2.5">
              <a href="#" className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <MapPin className="w-4 h-4" />
                <span>Str. Exemplu nr. 123, București</span>
              </a>
              <a href="tel:+40700000000" className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4" />
                <span>+40 700 000 000</span>
              </a>
              <a href="mailto:contact@staidrept.com" className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" />
                <span>contact@staidrept.com</span>
              </a>
            </div>
          </div>

          {/* Servicii */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Servicii</h4>
            <ul className="space-y-3">
              {footerLinks.servicii.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Companie */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Companie</h4>
            <ul className="space-y-3">
              {footerLinks.companie.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Social</h4>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} STAI DREPT. Toate drepturile rezervate.
          </p>
          <p className="text-xs text-muted-foreground">
            Dezvoltat cu grijă pentru sănătatea ta.
          </p>
        </div>
      </div>
    </footer>
  )
}
