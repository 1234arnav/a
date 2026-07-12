import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone,
  MessageCircle,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Clock,
  Wallet,
  Award,
  Users,
  Zap,
  Search,
  BadgeCheck,
  Star,
} from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { SERVICES, BRANDS, TESTIMONIALS, PROCESS, FAQS } from "@/lib/content";
import { ServiceCard } from "@/components/site/ServiceCard";
import { TestimonialCard } from "@/components/site/TestimonialCard";
import { StarRating } from "@/components/site/StarRating";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Apna Mobile Store — Mobile Repair Shop in Dombivli, Nilaje" },
      {
        name: "description",
        content:
          "Trusted mobile repair shop near Lodha Casa Rio, Dombivli. Screen, battery, iPhone & Samsung repairs with same-day service and warranty.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const WHY_US = [
  { icon: Award, title: "Expert Technicians", desc: "Years of hands-on repair experience across every major brand." },
  { icon: BadgeCheck, title: "Genuine Quality Parts", desc: "OEM-grade components tested for durability and safety." },
  { icon: Zap, title: "Same-Day Repairs", desc: "Most fixes ready within 30–90 minutes while you wait." },
  { icon: Wallet, title: "Affordable Pricing", desc: "Transparent quotes with no hidden charges — ever." },
  { icon: ShieldCheck, title: "Warranty on Repairs", desc: "Every repair backed by an in-store service warranty." },
  { icon: Users, title: "Trusted by Hundreds", desc: "163+ verified 5-star reviews from local customers." },
  { icon: Clock, title: "Fast Service", desc: "Walk-in friendly. Quick diagnostics, faster turnaround." },
  { icon: Search, title: "Honest Diagnosis", desc: "Free inspection — we only fix what really needs fixing." },
];

function HomePage() {
  return (
    <>
      {/* Emergency banner */}
      <div className="bg-secondary text-secondary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center text-xs sm:text-sm">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-[oklch(0.72_0.20_35)]" />
          <span>
            <strong className="font-semibold">Emergency Repair Available</strong> — call{" "}
            <a href={BUSINESS.telLink} className="underline underline-offset-4">
              {BUSINESS.phone}
            </a>
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero text-white">
        <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-primary-glow/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-primary/40 blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-16 sm:px-6 md:pt-24 lg:grid-cols-2 lg:px-8 lg:pb-28">
          <div className="animate-fade-in-up relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
              <ShieldCheck className="h-3.5 w-3.5" /> Trusted since day one · Dombivli
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Fast, Reliable & Affordable{" "}
              <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
                Mobile Repair Services
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              We specialize in smartphone repairs, mobile accessories, diagnostics and expert
              solutions for iPhone, Samsung, OnePlus, Vivo, Oppo, Xiaomi, Realme and more.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={BUSINESS.telLink}
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-secondary shadow-glow transition-transform hover:scale-[1.03]"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a
                href={BUSINESS.waLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[oklch(0.62_0.17_152)] px-5 py-3 text-sm font-semibold text-white shadow-elegant transition-transform hover:scale-[1.03]"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
              <a
                href={BUSINESS.mapsLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                <MapPin className="h-4 w-4" /> Get Directions
              </a>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-white/15 pt-6 text-center">
              <div>
                <div className="text-2xl font-bold sm:text-3xl">4.8★</div>
                <div className="text-xs text-white/70">163 Reviews</div>
              </div>
              <div>
                <div className="text-2xl font-bold sm:text-3xl">30min</div>
                <div className="text-xs text-white/70">Avg. Repair</div>
              </div>
              <div>
                <div className="text-2xl font-bold sm:text-3xl">10+</div>
                <div className="text-xs text-white/70">Brands</div>
              </div>
            </div>
          </div>

          {/* Visual card */}
          <div className="relative z-10 flex items-center justify-center">
            <div className="animate-float relative w-full max-w-md rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-[oklch(0.72_0.19_142)]" />
                  <span className="text-xs font-medium text-white/80">Open Now</span>
                </div>
                <span className="text-xs text-white/60">Nilaje, Dombivli</span>
              </div>
              <div className="mt-5 rounded-2xl bg-white/10 p-5">
                <p className="text-xs uppercase tracking-widest text-white/60">Popular repair</p>
                <p className="mt-1 text-2xl font-bold">iPhone Screen Replacement</p>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <p className="text-[11px] text-white/60">Starting from</p>
                    <p className="text-3xl font-extrabold">₹1,499</p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-secondary">
                    30–60 min
                  </span>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                {["Warranty", "OEM Parts", "Free Diag."].map((t) => (
                  <div key={t} className="rounded-xl bg-white/5 py-3 text-xs font-medium">
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Services"
          title="Everything your phone needs, under one roof"
          subtitle="From cracked screens to complex diagnostics — we handle every repair with care, precision and honest pricing."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-secondary-foreground transition-transform hover:scale-[1.03]"
          >
            See pricing & full service list <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-gradient-soft py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why Choose AMS"
            title="The most trusted mobile repair partner in Dombivli"
            subtitle="What sets us apart from every other repair shop nearby."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_US.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                    <Icon className="h-5 w-5" strokeWidth={2.3} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold">{f.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How It Works"
          title="Your repair in 4 simple steps"
          subtitle="Straightforward, transparent and quick."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <div key={p.step} className="relative rounded-2xl border border-border bg-card p-6">
              <span className="text-xs font-semibold tracking-widest text-primary">
                STEP {p.step}
              </span>
              <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>
              {i < PROCESS.length - 1 && (
                <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-primary lg:block" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Brands */}
      <section className="bg-secondary py-16 text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-glow">
              Brands We Repair
            </p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              Every major brand. Every model.
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {BRANDS.map((b) => (
              <div
                key={b}
                className="rounded-xl border border-white/10 bg-white/5 py-4 text-center text-sm font-semibold backdrop-blur transition-colors hover:bg-white/10"
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Customer Reviews"
          title="Rated 4.8/5 by 163+ happy customers"
          subtitle="Real stories from real people in Dombivli, Nilaje and Kalyan."
        />
        <div className="mt-6 flex items-center justify-center gap-3">
          <StarRating value={5} size={22} />
          <span className="text-sm font-medium text-muted-foreground">
            Based on <strong className="text-foreground">163 Google Reviews</strong>
          </span>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/reviews"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
          >
            Read all reviews <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gradient-soft py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Answers to common questions"
            subtitle="Still curious? Send us a WhatsApp — we reply quickly."
          />
          <div className="mt-10 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
            {FAQS.map((f) => (
              <details key={f.q} className="group p-5 open:bg-accent/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-foreground sm:text-base">{f.q}</span>
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 text-white sm:p-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary-glow/30 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1.5fr_auto] lg:items-center">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-white/70">
                <Star className="h-4 w-4 fill-amber-300 text-amber-300" /> 4.8/5 from 163 reviews
              </div>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Broken phone? Bring it in today.
              </h2>
              <p className="mt-3 max-w-2xl text-white/80">
                Free diagnosis. Honest pricing. Warranty on every repair. Visit our Lodha Casa Rio
                shop or send us a WhatsApp now.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={BUSINESS.telLink}
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-secondary"
              >
                <Phone className="h-4 w-4" /> {BUSINESS.phone}
              </a>
              <a
                href={BUSINESS.waLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[oklch(0.62_0.17_152)] px-5 py-3 text-sm font-semibold text-white"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
      )}
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-base text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
