import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "./index";
import { ServiceCard } from "@/components/site/ServiceCard";
import { SERVICES } from "@/lib/content";
import { BUSINESS } from "@/lib/business";
import { MessageCircle, Phone } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing — Mobile Repair in Dombivli | AMS" },
      {
        name: "description",
        content:
          "Screen replacement, battery, charging port, water damage, iPhone diagnostics and more. Transparent pricing at Apna Mobile Store, Dombivli.",
      },
      { property: "og:title", content: "Services & Pricing — Apna Mobile Store" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const PRICING = [
  { model: "iPhone Screen Replacement", from: "₹1,499", eta: "30–60 min" },
  { model: "Samsung Screen Replacement", from: "₹1,299", eta: "45–90 min" },
  { model: "Android Battery Replacement", from: "₹699", eta: "30 min" },
  { model: "iPhone Battery Replacement", from: "₹1,199", eta: "45 min" },
  { model: "Charging Port Repair", from: "₹499", eta: "45 min" },
  { model: "Speaker / Mic Repair", from: "₹399", eta: "30 min" },
  { model: "Water Damage Recovery", from: "₹999", eta: "24–48 hrs" },
  { model: "Software Troubleshooting", from: "₹299", eta: "30–60 min" },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-hero py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-glow">
            Services
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Repairs for every phone, every problem.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Honest diagnosis, transparent prices, and same-day turnaround for most repairs.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      <section className="bg-gradient-soft py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Pricing"
            title="Transparent starting prices"
            subtitle="Final quote after free inspection. No hidden charges."
          />
          <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card">
            <table className="min-w-full text-sm">
              <thead className="bg-secondary text-secondary-foreground">
                <tr>
                  <th className="px-5 py-4 text-left font-semibold">Service</th>
                  <th className="px-5 py-4 text-left font-semibold">Starts From</th>
                  <th className="hidden px-5 py-4 text-left font-semibold sm:table-cell">
                    Turnaround
                  </th>
                </tr>
              </thead>
              <tbody>
                {PRICING.map((p, i) => (
                  <tr key={p.model} className={i % 2 ? "bg-accent/30" : ""}>
                    <td className="px-5 py-4 font-medium text-foreground">{p.model}</td>
                    <td className="px-5 py-4 font-bold text-primary">{p.from}</td>
                    <td className="hidden px-5 py-4 text-muted-foreground sm:table-cell">
                      {p.eta}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            * Actual pricing varies by model. Contact us for exact quote.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-secondary p-10 text-center text-secondary-foreground sm:p-14">
          <h2 className="text-3xl font-extrabold">Not sure what's wrong?</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/70">
            Get a free diagnosis — bring your device in or send us the details on WhatsApp.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={BUSINESS.telLink}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a
              href={BUSINESS.waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[oklch(0.62_0.17_152)] px-5 py-3 text-sm font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
