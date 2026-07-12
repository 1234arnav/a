import { TESTIMONIALS } from "@/lib/content";
import { StarRating } from "./StarRating";
import { Quote } from "lucide-react";

export function TestimonialCard({
  t,
}: {
  t: (typeof TESTIMONIALS)[number];
}) {
  const initials = t.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <Quote className="h-6 w-6 text-primary/40" />
      <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground">"{t.text}"</p>
      <div className="mt-5 flex items-center gap-3">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-primary text-sm font-bold text-primary-foreground">
          {initials}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">{t.name}</p>
          <p className="truncate text-xs text-muted-foreground">{t.role}</p>
        </div>
        <div className="ml-auto">
          <StarRating value={t.rating} />
        </div>
      </div>
    </div>
  );
}
