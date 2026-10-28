import { Link } from "@tanstack/react-router";
import { Globe, Mail, Phone, MapPin } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";

export function SiteFooter() {
  return (
    <footer className="bg-gradient-ink text-ink-foreground">
      <div className="container-page grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="inline-block rounded-xl bg-white px-3 py-2" aria-label="SBC US LLC home">
            <BrandMark />
          </Link>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
            SBC US LLC, also known as SBC USA, SBC US, SBCLLC US and SBCLLC USA.
            Local connect. Global outlook. Tax, finance and compliance across the US, India and the UAE.
            An independent member firm of Kreston.
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">Explore</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/services" className="hover:text-secondary">Services</Link></li>
            <li><Link to="/about" className="hover:text-secondary">About</Link></li>
            <li><Link to="/contact" className="hover:text-secondary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">Reach us</h4>
          <ul className="space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-secondary" strokeWidth={1.75} /> USA · DUBAI · INDIA</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-secondary" strokeWidth={1.75} /> info@sbcusllc.com</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-secondary" strokeWidth={1.75} /> +1 (210) 859-3259</li>
            <li className="flex items-center gap-2"><Globe className="h-4 w-4 text-secondary" strokeWidth={1.75} /> www.sbcusllc.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/55 md:flex-row">
          <span>© {new Date().getFullYear()} SBC US LLC. All rights reserved.</span>
          <span>Local connect. Global outlook.</span>
        </div>
      </div>
    </footer>
  );
}
