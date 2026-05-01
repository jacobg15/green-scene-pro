import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Handshake, ShieldCheck, Clock } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import heroImg from "@/assets/hero-landscaping.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — JD's Exterior Services" },
      {
        name: "description",
        content:
          "JD's Exterior Services is a locally owned landscaping company built on honest work, clean job sites, and reliable communication.",
      },
      { property: "og:title", content: "About JD's Exterior Services" },
      {
        property: "og:description",
        content: "Locally owned landscaping built on honest work and clean job sites.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Handshake, title: "Honest pricing", desc: "Fair quotes with no surprises and no high-pressure sales." },
  { icon: ShieldCheck, title: "Insured & reliable", desc: "We're insured, we show up when we say, and we finish the job." },
  { icon: Clock, title: "Respect for your time", desc: "Calls and texts get answered. Schedules get kept." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-5 md:py-32">
          <div className="md:col-span-3">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              About
            </p>
            <h1 className="mt-4 font-serif text-5xl tracking-tight md:text-7xl">
              A local landscaper who actually <em>cares</em> about your yard.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              JD's Exterior Services was started on a simple idea: do good work,
              treat people right, and don't cut corners. Every property gets
              the same attention, whether it's a few hours of cleanup or a
              full season of yard care.
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="overflow-hidden rounded-xl">
              <img
                src={heroImg}
                alt="Freshly mulched landscape with sharp bed edging"
                width={1920}
                height={1080}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-xl border border-border bg-card p-8">
              <v.icon className="h-8 w-8 text-accent" strokeWidth={1.5} />
              <h3 className="mt-5 font-serif text-2xl tracking-tight">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="rounded-2xl border border-border bg-card p-10 md:p-16">
          <p className="font-serif text-3xl leading-snug tracking-tight md:text-4xl">
            "We're not the biggest landscaping outfit in the area — and we
            don't try to be. We just want to be the one you call back."
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            — JD, Owner
          </p>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center">
          <h3 className="max-w-xl font-serif text-3xl tracking-tight md:text-4xl">
            Let's get your property looking right.
          </h3>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground"
            >
              Request a quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:8566267061"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3.5 text-sm font-medium"
            >
              <Phone className="h-4 w-4" /> 856-626-7061
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
