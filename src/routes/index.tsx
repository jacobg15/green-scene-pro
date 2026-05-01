import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Check, Leaf, Shovel, Sprout, Trash2, Scissors, Mountain, Sparkles, Star } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import heroImg from "@/assets/hero-landscaping.jpg";
import mulchImg from "@/assets/service-mulch.jpg";
import gravelImg from "@/assets/service-gravel.jpg";
import cleanupImg from "@/assets/service-cleanup.jpg";
import removalImg from "@/assets/service-removal.jpg";
import edgingImg from "@/assets/service-edging.jpg";
import plantingImg from "@/assets/service-planting.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JD's Exterior Services — Mulch, Gravel & Yard Care" },
      {
        name: "description",
        content:
          "Professional mulch and gravel installation, bush removal, yard cleanups, bed edging and basic planting. Honest work, free quotes — call 856-626-7061.",
      },
      { property: "og:title", content: "JD's Exterior Services — Landscaping Done Right" },
      {
        property: "og:description",
        content: "Mulch, gravel, cleanups, edging and planting. Free quotes — call 856-626-7061.",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Leaf, title: "Mulch Installation", desc: "Fresh hardwood, dyed or natural — beds prepped, weeded and topped clean.", img: mulchImg },
  { icon: Mountain, title: "Gravel Installation", desc: "Driveways, walkways and decorative borders with crisp edging.", img: gravelImg },
  { icon: Shovel, title: "Bush & Plant Removal", desc: "Old shrubs, stumps and overgrown plantings cleared down to bare soil.", img: removalImg },
  { icon: Trash2, title: "Yard Cleanups", desc: "Spring, fall and storm cleanups — leaves, debris and brush hauled away.", img: cleanupImg },
  { icon: Scissors, title: "Bed Edging", desc: "Hand-cut, knife-clean edges that make every bed look professional.", img: edgingImg },
  { icon: Sprout, title: "Basic Planting", desc: "Shrubs, perennials and small trees installed and mulched in.", img: plantingImg },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Manicured landscaping with fresh mulch and clean bed edging"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-primary/20" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-28 md:py-40">
          <div className="max-w-2xl text-primary-foreground">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Free Custom Quotes · Locally Owned
            </p>
            <h1 className="font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">
              Landscaping done the <em className="text-accent">right</em> way.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
              Mulch, gravel, cleanups, edging and planting. Honest pricing,
              clean work, and a yard you'll actually be proud of.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground shadow-lg shadow-accent/20 transition-transform hover:scale-[1.02]"
              >
                Get your free custom quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:8566267061"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/5 px-6 py-3.5 text-sm font-medium text-primary-foreground backdrop-blur transition-colors hover:bg-primary-foreground/15"
              >
                <Phone className="h-4 w-4" />
                856-626-7061
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 md:grid-cols-4">
          {[
            "Free, no-pressure quotes",
            "Fully insured & reliable",
            "Clean job sites, every time",
            "Locally owned and operated",
          ].map((t) => (
            <div key={t} className="flex items-center gap-3 text-sm text-foreground/80">
              <Check className="h-5 w-5 shrink-0 text-accent" />
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              What we do
            </p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight md:text-5xl">
              Straightforward services, <em>finished properly.</em>
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
          >
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-xl"
            >
              {s.img ? (
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="flex aspect-[4/3] items-center justify-center bg-secondary">
                  <s.icon className="h-16 w-16 text-primary/40" strokeWidth={1.2} />
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3">
                  <s.icon className="h-5 w-5 text-accent" />
                  <h3 className="font-serif text-2xl tracking-tight">{s.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* STATEMENT */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Why JD's
            </p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight md:text-5xl">
              We show up, do the work, and leave the place better than we found it.
            </h2>
          </div>
          <div className="space-y-6 text-primary-foreground/85">
            <p className="text-lg leading-relaxed">
              No salespeople. No upsells. Just a straightforward landscaper
              who answers the phone and finishes the job.
            </p>
            <p className="leading-relaxed">
              Whether it's a few yards of mulch or a full property cleanup,
              you get the same care, the same crisp edges, and the same
              haul-away-everything-when-we-leave standard.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all"
            >
              More about JD's <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-2xl border border-border bg-secondary p-10 md:p-16">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
                Ready for a sharper looking yard?
              </h2>
              <p className="mt-3 text-muted-foreground">
                Tell us what you need — we'll come take a look and give you
                an honest quote, free of charge.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Get a free quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:8566267061"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-medium text-foreground hover:bg-secondary"
              >
                <Phone className="h-4 w-4" /> 856-626-7061
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
