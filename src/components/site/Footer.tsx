import { Link } from "@tanstack/react-router";
import { Instagram, Phone, MapPin, Globe, Smartphone } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
              <Smartphone className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="text-lg font-bold">Apna Mobile Store</span>
          </div>
          <p className="mt-4 text-sm text-white/70">
            Fast, reliable and affordable mobile repair services in Dombivli. Trusted by hundreds of
            local customers.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["/", "Home"],
              ["/about", "About"],
              ["/services", "Services"],
              ["/reviews", "Reviews"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-white/80 transition-colors hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" />
              <span>{BUSINESS.addressLines.join(", ")}</span>
            </li>
            <li>
              <a href={BUSINESS.telLink} className="flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4 text-primary-glow" /> {BUSINESS.phone}
              </a>
            </li>
            <li>
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                <Instagram className="h-4 w-4 text-primary-glow" /> @apnamobilestore.in
              </a>
            </li>
            <li>
              <a href={BUSINESS.website} className="flex items-center gap-2 hover:text-white">
                <Globe className="h-4 w-4 text-primary-glow" /> apnamobilestore.in
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60">Hours</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {BUSINESS.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-3">
                <span>{h.day}</span>
                <span className="text-white/60">{h.time}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 rounded-lg bg-white/5 px-3 py-2 text-xs text-white/70">
            Emergency repairs available — call anytime.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-white/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© {year} Apna Mobile Store. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
