import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-3xl tracking-tight">JD's</span>
            <span className="text-xs font-medium uppercase tracking-[0.2em] opacity-70">
              Exterior Services
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed opacity-80">
            Honest, reliable landscaping and yard care. Locally owned and
            operated — we treat every property like our own.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-xl">Services</h4>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            <li>Mulch Installation</li>
            <li>Gravel Installation</li>
            <li>Bush & Plant Removal</li>
            <li>Yard Cleanups</li>
            <li>Bed Edging</li>
            <li>Basic Planting</li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl">Get a Free Quote</h4>
          <ul className="mt-4 space-y-3 text-sm opacity-90">
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0" />
              <a href="tel:8566267061" className="hover:underline">856-626-7061</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0" />
              <a href="mailto:quotes@jdsexteriorservices.com" className="hover:underline">
                quotes@jdsexteriorservices.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 shrink-0" />
              Serving the local area
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs opacity-70 md:flex-row">
          <p>© {new Date().getFullYear()} JD's Exterior Services. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/services" className="hover:underline">Services</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
