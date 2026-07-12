import type { Service } from "@/lib/content";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-40 bg-gradient-primary opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-20" />
      <div className="relative">
        <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-gradient-primary group-hover:text-primary-foreground">
          <Icon className="h-6 w-6" strokeWidth={2.2} />
        </div>
        <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
        {service.priceFrom && (
          <p className="mt-4 text-xs font-medium uppercase tracking-wider text-primary">
            From {service.priceFrom}
          </p>
        )}
      </div>
    </div>
  );
}
