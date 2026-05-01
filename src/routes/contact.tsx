import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Check } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — JD's Exterior Services" },
      {
        name: "description",
        content:
          "Request a free landscaping quote from JD's Exterior Services. Call 856-626-7061 or send a message.",
      },
      { property: "og:title", content: "Contact JD's Exterior Services" },
      { property: "og:description", content: "Free quotes — call 856-626-7061 or send a message." },
    ],
  }),
  component: ContactPage,
});

const services = [
  "Mulch Installation",
  "Gravel Installation",
  "Bush & Plant Removal",
  "Yard Cleanups",
  "Bed Edging",
  "Basic Planting",
  "Other / Not Sure",
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteLayout>
      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Get in touch
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl tracking-tight md:text-7xl">
            Free quotes. Honest answers. <em className="text-accent">Call anytime.</em>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* INFO */}
          <aside className="space-y-8 lg:col-span-2">
            <div>
              <h2 className="font-serif text-3xl tracking-tight">Reach JD directly</h2>
              <p className="mt-3 text-muted-foreground">
                The fastest way to get a quote is a call or text. Otherwise
                drop a message and we'll get back to you the same day.
              </p>
            </div>

            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <span className="rounded-full bg-secondary p-3">
                  <Phone className="h-5 w-5 text-primary" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Call or text</p>
                  <a href="tel:8566267061" className="font-serif text-2xl tracking-tight hover:text-primary">
                    856-626-7061
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="rounded-full bg-secondary p-3">
                  <Mail className="h-5 w-5 text-primary" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</p>
                  <a
                    href="mailto:quotes@jdsexteriorservices.com"
                    className="text-base hover:text-primary"
                  >
                    quotes@jdsexteriorservices.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="rounded-full bg-secondary p-3">
                  <MapPin className="h-5 w-5 text-primary" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Service area</p>
                  <p>Local & surrounding neighborhoods</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="rounded-full bg-secondary p-3">
                  <Clock className="h-5 w-5 text-primary" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Hours</p>
                  <p>Mon–Sat · 7am – 7pm</p>
                </div>
              </li>
            </ul>
          </aside>

          {/* FORM */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
              {submitted ? (
                <div className="flex flex-col items-center py-16 text-center">
                  <div className="rounded-full bg-accent/15 p-4">
                    <Check className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="mt-6 font-serif text-3xl tracking-tight">Got it — thanks!</h3>
                  <p className="mt-3 max-w-sm text-muted-foreground">
                    Your message is in. JD will reach out shortly. Need it
                    faster? Call <a href="tel:8566267061" className="text-primary underline">856-626-7061</a>.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-5"
                >
                  <h2 className="font-serif text-3xl tracking-tight">Request a free quote</h2>
                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Name" name="name" required />
                    <Field label="Phone" name="phone" type="tel" required />
                  </div>
                  <Field label="Email" name="email" type="email" />
                  <Field label="Property address" name="address" />

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">
                      What do you need?
                    </label>
                    <select
                      name="service"
                      required
                      className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Choose a service…</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">
                      Tell us about the job
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Approx. size, timing, anything we should know…"
                      className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Send request
                  </button>
                  <p className="text-center text-xs text-muted-foreground">
                    No spam. We'll only use this to get back to you.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-foreground">
        {label}{required && <span className="text-accent"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
