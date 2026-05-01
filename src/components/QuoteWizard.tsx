import { useMemo, useState } from "react";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Phone,
  MessageSquare,
  Mail,
  Leaf,
  Mountain,
  Shovel,
  Trash2,
  Scissors,
  Sprout,
  CalendarDays,
  MapPin,
  User,
} from "lucide-react";

const PHONE_RAW = "8566267061";
const PHONE_DISPLAY = "856-626-7061";

const SERVICE_OPTIONS = [
  { id: "mulch", label: "Mulch Installation", icon: Leaf },
  { id: "gravel", label: "Gravel Installation", icon: Mountain },
  { id: "removal", label: "Bush / Plant Removal", icon: Shovel },
  { id: "cleanup", label: "Yard Cleanup", icon: Trash2 },
  { id: "edging", label: "Bed Edging", icon: Scissors },
  { id: "planting", label: "Basic Planting", icon: Sprout },
] as const;

const TIME_WINDOWS = ["Morning", "Afternoon", "Anytime — JD picks"];
const URGENCY = ["Within 1 week", "Within 2 weeks", "This month", "Just exploring"];

type FormData = {
  services: string[];
  notes: string;
  preferredDate: string;
  alternateDate: string;
  timeWindow: string;
  urgency: string;
  name: string;
  phone: string;
  email: string;
  address: string;
};

const STEPS = ["Services", "Schedule", "Contact", "Review"] as const;

export function QuoteWizard() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState<FormData>({
    services: [],
    notes: "",
    preferredDate: "",
    alternateDate: "",
    timeWindow: "Anytime — JD picks",
    urgency: "Within 2 weeks",
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) =>
    setData((d) => ({ ...d, [key]: value }));

  const toggleService = (id: string) =>
    setData((d) => ({
      ...d,
      services: d.services.includes(id)
        ? d.services.filter((s) => s !== id)
        : [...d.services, id],
    }));

  const stepValid = (() => {
    if (step === 0) return data.services.length > 0;
    if (step === 1) return data.preferredDate !== "";
    if (step === 2)
      return data.name.trim() !== "" && data.phone.trim() !== "" && data.address.trim() !== "";
    return true;
  })();

  const summaryText = useMemo(() => {
    const svcLabels = data.services
      .map((id) => SERVICE_OPTIONS.find((s) => s.id === id)?.label)
      .filter(Boolean)
      .join(", ");
    return [
      `New quote request for JD's Exterior Services`,
      ``,
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      data.email ? `Email: ${data.email}` : null,
      `Address: ${data.address}`,
      ``,
      `Services: ${svcLabels}`,
      `Preferred date: ${data.preferredDate}${data.alternateDate ? ` (alt: ${data.alternateDate})` : ""}`,
      `Time: ${data.timeWindow}`,
      `Timeline: ${data.urgency}`,
      data.notes ? `` : null,
      data.notes ? `Notes: ${data.notes}` : null,
    ]
      .filter((l) => l !== null)
      .join("\n");
  }, [data]);

  const smsHref = `sms:${PHONE_RAW}?&body=${encodeURIComponent(summaryText)}`;
  const mailHref = `mailto:quotes@jdsexteriorservices.com?subject=${encodeURIComponent(
    "New Free Quote Request"
  )}&body=${encodeURIComponent(summaryText)}`;

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-card p-10 text-center md:p-14">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/15">
          <Check className="h-7 w-7 text-accent" />
        </div>
        <h3 className="mt-6 font-serif text-3xl tracking-tight">Quote sent to JD</h3>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          Your details are on the way. JD will reach back out shortly to
          confirm the date and walk through next steps.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={`tel:${PHONE_RAW}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
          >
            <Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}
          </a>
          <button
            onClick={() => {
              setSubmitted(false);
              setStep(0);
              setData({
                services: [],
                notes: "",
                preferredDate: "",
                alternateDate: "",
                timeWindow: "Anytime — JD picks",
                urgency: "Within 2 weeks",
                name: "",
                phone: "",
                email: "",
                address: "",
              });
            }}
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-secondary"
          >
            Start another quote
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      {/* Header strip */}
      <div className="border-b border-border bg-secondary/60 px-6 py-5 md:px-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Free custom quote
            </p>
            <h2 className="mt-1 font-serif text-2xl tracking-tight md:text-3xl">
              {STEPS[step]}
            </h2>
          </div>
          <p className="text-xs font-medium text-muted-foreground">
            Step {step + 1} of {STEPS.length}
          </p>
        </div>

        {/* Progress */}
        <div className="mt-5 flex gap-2">
          {STEPS.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                i <= step ? "bg-primary" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="px-6 py-8 md:px-10 md:py-10">
        {step === 0 && (
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Pick everything you'd like a quote for. Choose as many as you need.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {SERVICE_OPTIONS.map((s) => {
                const active = data.services.includes(s.id);
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => toggleService(s.id)}
                    className={`group flex items-center gap-4 rounded-xl border p-4 text-left transition-all ${
                      active
                        ? "border-primary bg-primary/5 shadow-sm"
                        : "border-border bg-background hover:border-primary/40"
                    }`}
                  >
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${
                        active ? "bg-primary text-primary-foreground" : "bg-secondary text-primary"
                      }`}
                    >
                      <s.icon className="h-5 w-5" />
                    </span>
                    <span className="flex-1 font-medium">{s.label}</span>
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                        active
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border"
                      }`}
                    >
                      {active && <Check className="h-3 w-3" strokeWidth={3} />}
                    </span>
                  </button>
                );
              })}
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">
                Anything else? <span className="text-muted-foreground font-normal">(optional)</span>
              </label>
              <textarea
                value={data.notes}
                onChange={(e) => update("notes", e.target.value)}
                rows={3}
                placeholder="Approx. size, condition, any specifics…"
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-6">
            <p className="text-muted-foreground">
              When would you like the work done? Pick a preferred date — JD will
              confirm exact timing when he reaches out.
            </p>

            <div className="grid gap-5 md:grid-cols-2">
              <Field
                icon={CalendarDays}
                label="Preferred date"
                required
                type="date"
                min={today}
                value={data.preferredDate}
                onChange={(v) => update("preferredDate", v)}
              />
              <Field
                icon={CalendarDays}
                label="Backup date (optional)"
                type="date"
                min={today}
                value={data.alternateDate}
                onChange={(v) => update("alternateDate", v)}
              />
            </div>

            <div>
              <p className="mb-2 text-sm font-medium">Time of day</p>
              <div className="flex flex-wrap gap-2">
                {TIME_WINDOWS.map((t) => (
                  <Chip
                    key={t}
                    active={data.timeWindow === t}
                    onClick={() => update("timeWindow", t)}
                  >
                    {t}
                  </Chip>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm font-medium">How soon?</p>
              <div className="flex flex-wrap gap-2">
                {URGENCY.map((t) => (
                  <Chip
                    key={t}
                    active={data.urgency === t}
                    onClick={() => update("urgency", t)}
                  >
                    {t}
                  </Chip>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-5">
            <p className="text-muted-foreground">
              How can JD reach you, and where is the property?
            </p>
            <div className="grid gap-5 md:grid-cols-2">
              <Field
                icon={User}
                label="Full name"
                required
                value={data.name}
                onChange={(v) => update("name", v)}
                placeholder="Jane Doe"
              />
              <Field
                icon={Phone}
                label="Phone"
                required
                type="tel"
                value={data.phone}
                onChange={(v) => update("phone", v)}
                placeholder="(555) 123-4567"
              />
            </div>
            <Field
              icon={Mail}
              label="Email (optional)"
              type="email"
              value={data.email}
              onChange={(v) => update("email", v)}
              placeholder="you@example.com"
            />
            <Field
              icon={MapPin}
              label="Property address"
              required
              value={data.address}
              onChange={(v) => update("address", v)}
              placeholder="123 Main St, Town, NJ"
            />
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Quick look at your request. Send it over and JD will be in touch.
            </p>

            <div className="space-y-4 rounded-xl border border-border bg-secondary/40 p-6">
              <Row label="Services">
                {data.services
                  .map((id) => SERVICE_OPTIONS.find((s) => s.id === id)?.label)
                  .filter(Boolean)
                  .join(", ") || "—"}
              </Row>
              {data.notes && <Row label="Notes">{data.notes}</Row>}
              <Row label="Preferred date">
                {data.preferredDate}
                {data.alternateDate && ` (alt: ${data.alternateDate})`}
              </Row>
              <Row label="Time">{data.timeWindow}</Row>
              <Row label="Timeline">{data.urgency}</Row>
              <Row label="Name">{data.name}</Row>
              <Row label="Phone">{data.phone}</Row>
              {data.email && <Row label="Email">{data.email}</Row>}
              <Row label="Address">{data.address}</Row>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <a
                href={smsHref}
                onClick={() => setTimeout(() => setSubmitted(true), 400)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                <MessageSquare className="h-4 w-4" />
                Text quote to JD
              </a>
              <a
                href={mailHref}
                onClick={() => setTimeout(() => setSubmitted(true), 400)}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-4 text-sm font-medium hover:bg-secondary"
              >
                <Mail className="h-4 w-4" />
                Email quote
              </a>
            </div>
            <p className="text-center text-xs text-muted-foreground">
              Prefer to talk? Call{" "}
              <a href={`tel:${PHONE_RAW}`} className="font-medium text-primary underline">
                {PHONE_DISPLAY}
              </a>
            </p>
          </div>
        )}
      </div>

      {/* Footer nav */}
      <div className="flex items-center justify-between border-t border-border bg-secondary/40 px-6 py-4 md:px-10">
        <button
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground disabled:opacity-40"
        >
          <ChevronLeft className="h-4 w-4" /> Back
        </button>
        {step < STEPS.length - 1 ? (
          <button
            onClick={() => stepValid && setStep((s) => s + 1)}
            disabled={!stepValid}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-40"
          >
            Continue <ChevronRight className="h-4 w-4" />
          </button>
        ) : (
          <span className="text-xs text-muted-foreground">
            Pick a send method above ↑
          </span>
        )}
      </div>
    </div>
  );
}

/* ---------- helpers ---------- */

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false,
  placeholder,
  min,
  icon: Icon,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  min?: string;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium">
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      <div className="relative">
        {Icon && (
          <Icon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          placeholder={placeholder}
          min={min}
          className={`w-full rounded-md border border-input bg-background py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring ${
            Icon ? "pl-10 pr-4" : "px-4"
          }`}
        />
      </div>
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-background hover:border-primary/40"
      }`}
    >
      {children}
    </button>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-3 gap-4 text-sm">
      <dt className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
        {label}
      </dt>
      <dd className="col-span-2 text-foreground">{children}</dd>
    </div>
  );
}
