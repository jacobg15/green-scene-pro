import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { QuoteWizard } from "@/components/QuoteWizard";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Free Custom Quote — JD's Exterior Services" },
      {
        name: "description",
        content:
          "Get a free, no-obligation custom landscaping quote in under a minute. Pick services, choose a date, and JD will text you back. Call 856-626-7061.",
      },
      { property: "og:title", content: "Free Custom Quote — JD's Exterior Services" },
      {
        property: "og:description",
        content: "Free quote in under a minute — pick services, pick a date, JD texts you back.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            100% Free · No obligation
          </p>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">
            Get your free <em className="text-accent">custom quote.</em>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-primary-foreground/85">
            Tell JD what you need and when you need it. He'll text you back
            with a fair, honest price — usually the same day.
          </p>
        </div>
      </section>

      {/* WIZARD + SIDE INFO */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-5">
          <aside className="space-y-8 lg:col-span-2">
            <div>
              <h2 className="font-serif text-3xl tracking-tight">How it works</h2>
              <ol className="mt-5 space-y-5">
                {[
                  ["Tell us what you need", "Pick the services you'd like priced."],
                  ["Pick a date", "Choose when you'd like the work done."],
                  ["Share your contact info", "Name, number, and the property address."],
                  ["JD texts you back", "You'll get a fair quote, usually same-day."],
                ].map(([title, desc], i) => (
                  <li key={title} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-medium">{title}</p>
                      <p className="mt-0.5 text-sm text-muted-foreground">{desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-xl border border-border bg-secondary/60 p-6">
              <ShieldCheck className="h-6 w-6 text-accent" />
              <p className="mt-3 font-medium">No pressure, no spam.</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Quotes are free and there's zero obligation. We don't share
                your info with anyone.
              </p>
            </div>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Prefer to call?
                  </p>
                  <a href="tel:8566267061" className="font-serif text-xl tracking-tight">
                    856-626-7061
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Email
                  </p>
                  <a
                    href="mailto:quotes@jdsexteriorservices.com"
                    className="hover:text-primary"
                  >
                    quotes@jdsexteriorservices.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Hours
                  </p>
                  <p>Mon–Sat · 7am – 7pm</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Service area
                  </p>
                  <p>Local & surrounding neighborhoods</p>
                </div>
              </li>
            </ul>
          </aside>

          <div className="lg:col-span-3">
            <QuoteWizard />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
