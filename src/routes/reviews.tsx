import { createFileRoute } from "@tanstack/react-router";
import { TestimonialCard } from "@/components/site/TestimonialCard";
import { StarRating } from "@/components/site/StarRating";
import { TESTIMONIALS } from "@/lib/content";
import { BUSINESS } from "@/lib/business";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews — 4.8★ Rated Mobile Repair | AMS Dombivli" },
      {
        name: "description",
        content:
          "See what 163+ customers say about Apna Mobile Store — Dombivli's most trusted mobile repair shop. Rated 4.8/5 on Google.",
      },
      { property: "og:title", content: "Customer Reviews — Apna Mobile Store" },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <section className="bg-gradient-hero py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-glow">
            Customer Reviews
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Loved by Dombivli. Trusted since day one.
          </h1>
          <div className="mt-6 flex flex-col items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-5xl font-extrabold">{BUSINESS.rating}</span>
              <div>
                <StarRating value={5} size={20} />
                <p className="text-xs text-white/70">Based on {BUSINESS.reviewCount} Google Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </section>
    </>
  );
}
