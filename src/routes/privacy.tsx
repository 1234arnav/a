import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Apna Mobile Store" },
      { name: "description", content: "Privacy policy for Apna Mobile Store customers." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: () => (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-extrabold sm:text-4xl">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        This page is maintained by Apna Mobile Store to answer common privacy questions.
      </p>
      <div className="prose prose-neutral mt-8 max-w-none text-sm leading-relaxed text-foreground">
        <p>
          Apna Mobile Store (AMS) respects your privacy. We collect only the information you
          provide when you contact us, book an appointment or bring in a device for repair — such
          as your name, phone number and device details.
        </p>
        <h2 className="mt-6 text-lg font-semibold">How we use your information</h2>
        <p>
          Your information is used only to communicate about your repair, appointment or query.
          We do not sell or share your personal details with third parties.
        </p>
        <h2 className="mt-6 text-lg font-semibold">Device data</h2>
        <p>
          When you hand over a device for repair, we access it only to diagnose and fix the
          reported issue. We recommend backing up your data before any repair.
        </p>
        <h2 className="mt-6 text-lg font-semibold">Contact</h2>
        <p>
          For any privacy-related questions, please call us at 7977263807 or visit our shop in
          Nilaje, Dombivli.
        </p>
      </div>
    </div>
  ),
});
