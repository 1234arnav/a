import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, MessageCircle, MapPin, Instagram, Globe, Mail, Send } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Apna Mobile Store, Lodha Casa Rio, Dombivli" },
      {
        name: "description",
        content:
          "Contact Apna Mobile Store — Shop No. 14, Om Residency, Lodha Casa Rio Gold Road, Nilaje, Dombivli. Call 7977263807 or WhatsApp for repairs.",
      },
      { property: "og:title", content: "Contact Apna Mobile Store" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="bg-gradient-hero py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-glow">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Let's fix your phone today.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Call, WhatsApp or visit our Lodha Casa Rio shop. We're here to help.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact info */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-bold">Reach us directly</h2>

              <div className="mt-6 space-y-4">
                <InfoRow icon={<MapPin className="h-4 w-4" />} label="Address">
                  {BUSINESS.addressLines.map((l) => (
                    <div key={l}>{l}</div>
                  ))}
                </InfoRow>
                <InfoRow icon={<Phone className="h-4 w-4" />} label="Phone">
                  <a href={BUSINESS.telLink} className="text-primary hover:underline">
                    {BUSINESS.phone}
                  </a>
                </InfoRow>
                <InfoRow icon={<Instagram className="h-4 w-4" />} label="Instagram">
                  <a
                    href={BUSINESS.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline"
                  >
                    @apnamobilestore.in
                  </a>
                </InfoRow>
                <InfoRow icon={<Globe className="h-4 w-4" />} label="Website">
                  <a href={BUSINESS.website} className="text-primary hover:underline">
                    apnamobilestore.in
                  </a>
                </InfoRow>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <a
                  href={BUSINESS.telLink}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
                >
                  <Phone className="h-4 w-4" /> Call
                </a>
                <a
                  href={BUSINESS.waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[oklch(0.62_0.17_152)] px-4 py-2.5 text-sm font-semibold text-white"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
                <a
                  href={BUSINESS.mapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-accent"
                >
                  <MapPin className="h-4 w-4" /> Directions
                </a>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-sm">
              <iframe
                title="Apna Mobile Store location"
                src={BUSINESS.mapsEmbed}
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-bold">Book an appointment</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Fill in your details and we'll confirm on WhatsApp shortly.
              </p>

              {sent ? (
                <div className="mt-8 rounded-xl bg-[oklch(0.62_0.17_152)]/10 p-6 text-center">
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[oklch(0.62_0.17_152)] text-white">
                    <Send className="h-5 w-5" />
                  </div>
                  <p className="mt-3 font-semibold">Request received!</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    We'll contact you shortly. For urgent repairs please call{" "}
                    <a href={BUSINESS.telLink} className="text-primary underline">
                      {BUSINESS.phone}
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="mt-6 grid gap-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Full Name" required>
                      <input
                        required
                        className="input"
                        placeholder="Your name"
                        type="text"
                      />
                    </Field>
                    <Field label="Phone" required>
                      <input
                        required
                        className="input"
                        placeholder="10-digit number"
                        type="tel"
                        inputMode="tel"
                      />
                    </Field>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Device Model">
                      <input
                        className="input"
                        placeholder="e.g. iPhone 13, Galaxy S22"
                        type="text"
                      />
                    </Field>
                    <Field label="Preferred Service">
                      <select className="input" defaultValue="">
                        <option value="" disabled>Choose service…</option>
                        <option>Screen Replacement</option>
                        <option>Battery Replacement</option>
                        <option>Charging Port Repair</option>
                        <option>Water Damage</option>
                        <option>Diagnostics</option>
                        <option>Software Issue</option>
                        <option>Other</option>
                      </select>
                    </Field>
                  </div>
                  <Field label="Describe the issue">
                    <textarea
                      rows={4}
                      className="input"
                      placeholder="Tell us what's wrong with your device…"
                    />
                  </Field>

                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02]"
                  >
                    <Send className="h-4 w-4" /> Send Request
                  </button>
                </form>
              )}
            </div>

            {/* Newsletter */}
            <div className="mt-6 rounded-2xl border border-border bg-gradient-soft p-6">
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-semibold">Get repair tips & offers</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Occasional emails — no spam, unsubscribe anytime.
                  </p>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="mt-3 flex flex-col gap-2 sm:flex-row"
                  >
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="input flex-1"
                    />
                    <button className="inline-flex items-center justify-center rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-secondary-foreground">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid var(--color-border);
          background: var(--color-background);
          padding: 0.75rem 1rem;
          font-size: 0.9rem;
          color: var(--color-foreground);
          transition: border-color .15s, box-shadow .15s;
        }
        .input:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px oklch(0.52 0.22 262 / 0.15);
        }
      `}</style>
    </>
  );
}

function InfoRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <div className="mt-0.5 text-sm text-foreground">{children}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label} {required && <span className="text-destructive">*</span>}
      </span>
      {children}
    </label>
  );
}
