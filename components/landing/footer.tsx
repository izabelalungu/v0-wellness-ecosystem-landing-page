import Link from "next/link"
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react"

const footerLinks = {
  servicii: [
    { label: "Gym Program", href: "#" },
    { label: "Recuperare Posturală", href: "#" },
    { label: "Nutriție", href: "#" },
    { label: "Platformă Digitală", href: "#" },
    { label: "Evaluare AI", href: "#" },
  ],
  companie: [
    { label: "Despre noi", href: "#" },
    { label: "Echipa", href: "#" },
    { label: "Cariere", href: "#" },
    { label: "Contact", href: "#" },
  ],
  resurse: [
    { label: "Blog", href: "#" },
    { label: "Întrebări frecvente", href: "#faq" },
    { label: "Suport", href: "#" },
    { label: "Politica de confidențialitate", href: "#" },
    { label: "Termeni și condiții", href: "#" },
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">SD</span>
              </div>
              <span className="font-semibold text-lg tracking-tight text-foreground">
                STAI DREPT
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-xs">
              Ecosistem integrat de wellness pentru îmbunătățirea posturii și a sănătății. 
              Antrenament, recuperare, nutriție și tehnologie — într-un singur loc.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-md bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Servicii */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Servicii</h4>
            <ul className="space-y-2.5">
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
            <h4 className="font-semibold text-foreground mb-4 text-sm">Companie</h4>
            <ul className="space-y-2.5">
              {footerLinks.companie.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resurse */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Resurse</h4>
            <ul className="space-y-2.5">
              {footerLinks.resurse.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} STAI DREPT. Toate drepturile rezervate.
          </p>
          <div className="flex gap-5 text-xs text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">Confidențialitate</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Termeni</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
