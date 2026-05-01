import { createFileRoute, Link } from "@tanstack/react-router";
import { Leaf, Mountain, Shovel, Trash2, Scissors, Sprout, ArrowRight, Phone } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import mulchImg from "@/assets/service-mulch.jpg";
import gravelImg from "@/assets/service-gravel.jpg";
import cleanupImg from "@/assets/service-cleanup.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — JD's Exterior Services" },
      {
        name: "description",
        content:
          "Mulch installation, gravel installation, bush and plant removal, yard cleanups, bed edging, and basic planting. Free quotes.",
      },
      { property: "og:title", content: "Landscaping Services — JD's Exterior Services" },
      {
        property: "og:description",
        content: "Mulch, gravel, cleanups, edging, removal and planting — done clean.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Leaf,
    title: "Mulch Installation",
    img: mulchImg,
    desc: "Fresh hardwood, dyed black, brown or natural — your choice. We weed and prep beds first, lay mulch at the proper depth, and tidy every edge before we go.",
    bullets: ["Bed weeding & prep", "Hardwood, dyed or natural", "Even 2–3\" depth", "Clean haul-away"],
  },
  {
    icon: Mountain,
    title: "Gravel Installation",
    img: gravelImg,
    desc: "Driveway refreshes, walkways, French drains and decorative stone borders. Proper base prep, weed fabric and edging so it lasts.",
    bullets: ["Driveways & walkways", "Decorative stone beds", "Weed fabric & edging", "Multiple stone options"],
  },
  {
    icon: Shovel,
    title: "Bush & Plant Removal",
    img: null,
    desc: "Old, overgrown or dead shrubs pulled out roots and all. We can grind small stumps and leave the area ready to replant or mulch.",
    bullets: ["Full root removal", "Small stump grinding", "Site cleanup included"],
  },
  {
    icon: Trash2,
    title: "Yard Cleanups",
    img: cleanupImg,
    desc: "Spring, fall and one-off cleanups. Leaves, sticks, brush and storm debris — bagged, hauled and gone. Beds blown out and reset.",
    bullets: ["Leaf & debris removal", "Bed clean-out", "Brush hauling", "Spring & fall packages"],
  },
  {
    icon: Scissors,
    title: "Bed Edging",
    img: null,
    desc: "Hand-cut, knife-clean edges between beds and lawn — the single biggest upgrade most yards can get. Crisp lines, every time.",
    bullets: ["Hand-cut edges", "Refresh or new install", "Pairs with mulch"],
  },
  {
    icon: Sprout,
    title: "Basic Planting",
    img: null,
    desc: "Shrubs, perennials and small trees sourced and installed. We dig proper holes, amend soil, water in and mulch.",
    bullets: ["Shrubs & perennials", "Small trees", "Soil prep & mulch in"],
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Services
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl tracking-tight md:text-7xl">
            Everything your yard needs to look <em className="text-accent">sharp.</em>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Pick what you need — or call and we'll walk the property with you
            and put together a plan.
          </p>
        </div>
      </section>

      {/* SERVICE LIST */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="space-y-24">
          {services.map((s, i) => (
            <article
              key={s.title}
              className={`grid gap-10 md:grid-cols-2 md:items-center ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {s.img ? (
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={s.img}
                    alt={s.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-secondary">
                  <s.icon className="h-24 w-24 text-primary/40" strokeWidth={1} />
                </div>
              )}
              <div>
                <div className="flex items-center gap-3">
                  <s.icon className="h-5 w-5 text-accent" />
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Service 0{i + 1}
                  </p>
                </div>
                <h2 className="mt-3 font-serif text-4xl tracking-tight md:text-5xl">
                  {s.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
                <ul className="mt-6 grid gap-2 text-sm">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 rounded-2xl bg-primary p-10 text-primary-foreground md:p-16">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <h3 className="max-w-xl font-serif text-3xl tracking-tight md:text-4xl">
              Don't see what you need? Just ask.
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
        </div>
      </section>
    </SiteLayout>
  );
}
