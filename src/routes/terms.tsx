import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Apna Mobile Store" },
      { name: "description", content: "Terms & conditions for services at Apna Mobile Store." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-extrabold sm:text-4xl">Terms & Conditions</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated recently.</p>
      <div className="prose prose-neutral mt-8 max-w-none text-sm leading-relaxed text-foreground">
        <h2 className="text-lg font-semibold">Repair services</h2>
        <p>
          All repairs are carried out with reasonable care and skill. Estimated turnaround times
          are indicative and may vary based on parts availability and issue complexity.
        </p>
        <h2 className="mt-6 text-lg font-semibold">Warranty</h2>
        <p>
          Warranty is offered on the specific repair or part replaced, for the period stated at
          the time of billing. Physical damage, water damage or tampering after repair voids the
          warranty.
        </p>
        <h2 className="mt-6 text-lg font-semibold">Data & backups</h2>
        <p>
          Please back up your data before handing over any device. Apna Mobile Store is not
          responsible for data loss during repair.
        </p>
        <h2 className="mt-6 text-lg font-semibold">Payments</h2>
        <p>
          Payment is due on collection of the device. Prices are inclusive of applicable taxes
          unless otherwise stated.
        </p>
        <h2 className="mt-6 text-lg font-semibold">Contact</h2>
        <p>Call 7977263807 or visit our Nilaje, Dombivli store for any queries.</p>
      </div>
    </div>
  ),
});
