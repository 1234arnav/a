import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "./index";
import { ShieldCheck, Users, Award, MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Apna Mobile Store, Dombivli" },
      {
        name: "description",
        content:
          "Apna Mobile Store (AMS) is a trusted mobile repair shop in Lodha Casa Rio, Nilaje, Dombivli offering fast, affordable and warranty-backed repairs.",
      },
      { property: "og:title", content: "About Apna Mobile Store" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-gradient-hero py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-glow">
            About AMS
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Your neighborhood mobile repair experts.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Trusted, transparent and always affordable — that's what we're built on.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="prose prose-neutral max-w-none">
          <p className="text-lg leading-relaxed text-foreground">
            <strong>Apna Mobile Store (AMS)</strong> is a trusted mobile repair shop located in{" "}
            <strong>Lodha Casa Rio, Nilaje, Dombivli</strong>. We provide quick, affordable and
            professional repair services using quality parts and experienced technicians. Customer
            satisfaction and transparent pricing are our top priorities.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            From cracked iPhone screens to complex Samsung motherboard repairs, our team has fixed
            thousands of devices for residents across Dombivli, Nilaje and Kalyan. We treat every
            phone like it's our own — because we know how important it is to you.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {[
            {
              icon: ShieldCheck,
              title: "Warranty-Backed",
              desc: "Every repair comes with a written service warranty for your peace of mind.",
            },
            {
              icon: Award,
              title: "Certified Technicians",
              desc: "Trained experts with real experience on iPhone, Samsung and Android brands.",
            },
            {
              icon: Users,
              title: "Community First",
              desc: "Hundreds of happy customers from Lodha Casa Rio, Elite and nearby societies.",
            },
            {
              icon: MapPin,
              title: "Easy to Reach",
              desc: "Prime location on Casa Rio Gold Road, just minutes from Lodha Elite.",
            },
          ].map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
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
      </section>

      <section className="bg-gradient-soft py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeader eyebrow="Visit Us" title="Business Hours" />
          <div className="mx-auto mt-8 max-w-md overflow-hidden rounded-2xl border border-border bg-card">
            {BUSINESS.hours.map((h, i) => (
              <div
                key={h.day}
                className={`flex justify-between px-5 py-4 text-sm ${
                  i !== BUSINESS.hours.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <span className="font-medium">{h.day}</span>
                <span className="text-muted-foreground">{h.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
