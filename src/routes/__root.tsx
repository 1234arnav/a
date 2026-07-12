import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-elegant transition-transform hover:scale-105"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "Apna Mobile Store — Mobile Repair Shop in Dombivli, Nilaje",
      },
      {
        name: "description",
        content:
          "Trusted mobile repair shop near Lodha Casa Rio, Dombivli. Screen, battery, iPhone & Samsung repairs with same-day service and warranty.",
      },
      { name: "author", content: "Apna Mobile Store" },
      {
        name: "keywords",
        content:
          "Mobile Repair Shop in Dombivli, Mobile Repair Near Lodha Casa Rio, iPhone Repair Dombivli, Screen Replacement Dombivli, Battery Replacement Dombivli, Smartphone Repair Kalyan, Mobile Repair Nilaje, Charging Port Repair Dombivli, Best Mobile Repair Shop Near Me",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Apna Mobile Store" },
      { property: "og:title", content: "Apna Mobile Store — Mobile Repair Shop in Dombivli, Nilaje" },
      {
        property: "og:description",
        content:
          "Trusted mobile repair shop near Lodha Casa Rio, Dombivli. Screen, battery, iPhone & Samsung repairs with same-day service and warranty.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#2563eb" },
      { name: "twitter:title", content: "Apna Mobile Store — Mobile Repair Shop in Dombivli, Nilaje" },
      { name: "twitter:description", content: "Trusted mobile repair shop near Lodha Casa Rio, Dombivli. Screen, battery, iPhone & Samsung repairs with same-day service and warranty." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8b0b6b84-4cb0-4c7b-ac82-bd0a59ab3a89/id-preview-3792299c--9dcab483-b6ed-4df7-9e9e-2ef24ffbbbfd.lovable.app-1783824817786.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8b0b6b84-4cb0-4c7b-ac82-bd0a59ab3a89/id-preview-3792299c--9dcab483-b6ed-4df7-9e9e-2ef24ffbbbfd.lovable.app-1783824817786.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Apna Mobile Store",
          image: "https://apnamobilestore.in/og.jpg",
          telephone: "+91-7977263807",
          url: "https://apnamobilestore.in",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Shop No. 14, Om Residency, Lodha Casa Rio Gold Road, Near Lodha Elite",
            addressLocality: "Nilaje, Dombivli, Kalyan",
            addressRegion: "Maharashtra",
            postalCode: "421204",
            addressCountry: "IN",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "163",
          },
          openingHours: ["Mo-Sa 10:00-21:30", "Su 11:00-20:00"],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </QueryClientProvider>
  );
}
