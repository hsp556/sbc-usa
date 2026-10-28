import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock3, Globe, Mail, MapPin, Phone, Send } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { Reveal } from "@/components/Reveal";
import { CoverageMap } from "@/components/CoverageMap";
import { breadcrumbJsonLd, jsonLdScript, seoMeta, SITE_URL } from "@/lib/seo";
import { services } from "@/data/services";

const CONTACT_TITLE = "Contact SBC US LLC | Tax & Advisory Experts";
const CONTACT_DESC =
  "Talk to an SBC US LLC senior advisor about US tax, transfer pricing, audit, FP&A or CPA outsourcing. We respond within 24 hours.";

export const Route = createFileRoute("/contact")({
  head: () => {
    const seo = seoMeta({
      title: CONTACT_TITLE,
      description: CONTACT_DESC,
      path: "/contact",
      keywords: "Contact SBC US LLC, business consulting contact, tax advisor India UAE USA",
    });
    return {
      ...seo,
      scripts: [
        jsonLdScript({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: CONTACT_TITLE,
          url: `${SITE_URL}/contact`,
          description: CONTACT_DESC,
          mainEntity: {
            "@type": "Organization",
            name: "SBC US LLC",
            url: SITE_URL,
            email: "info@sbcusllc.com",
            telephone: "+1-210-859-3259",
            areaServed: ["United States", "India", "United Arab Emirates"],
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "18:30",
              },
            ],
          },
        }),
        jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ),
      ],
    };
  },
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <SiteShell>
      <section className="relative isolate overflow-hidden bg-hero-ink text-white">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[oklch(0.08_0.03_255)] via-[oklch(0.11_0.03_255)] to-[oklch(0.16_0.04_255)]" aria-hidden />
        <div className="container-page grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:py-20">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Contact us</span>
            <h1 className="mt-4 max-w-xl text-4xl font-bold leading-[1.05] sm:text-5xl">Let's talk about your next move.</h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Tell us a bit about your business and goals. A senior advisor will get back to you within 24 hours.
            </p>
            <div className="mt-8">
              <CoverageMap onDark />
            </div>
          </Reveal>
          <Reveal direction="right" delay={120}>
            <aside className="rounded-3xl border border-white/15 bg-[oklch(0.11_0.03_255/0.82)] p-6 shadow-elevated backdrop-blur-md sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Reach a senior advisor</p>
              <ul className="mt-5 space-y-4">
                <ContactFact icon={Mail} label="Email" value="info@sbcusllc.com" />
                <ContactFact icon={Phone} label="Phone" value="+1 (210) 859-3259" />
                <ContactFact icon={Globe} label="Web" value="www.sbcusllc.com" />
                <ContactFact icon={MapPin} label="Where we work" value="USA · Dubai · India" />
                <ContactFact icon={Clock3} label="Office hours" value="Mon – Fri · 9:00 AM – 6:30 PM IST" />
              </ul>
              <p className="mt-5 rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-white/85">
                We reply within 24 hours on tax, transfer pricing, audit, FP&A and CPA outsourcing.
              </p>
            </aside>
          </Reveal>
        </div>
      </section>

      <Reveal as="section" className="py-14 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
          <Reveal direction="left">
            <h2 id="contact-form-heading" className="text-2xl font-bold sm:text-3xl">Send us a message</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="mt-6 rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="name" required />
                <Field label="Work email" name="email" type="email" required />
                <Field label="Company" name="company" />
                <Field label="Phone" name="phone" type="tel" />
              </div>
              <div className="mt-5">
                <label htmlFor="service" className="text-sm font-medium">Which service are you interested in?<span className="text-primary"> *</span></label>
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                >
                  <option value="" disabled>Select a service…</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.slug}>{s.title}</option>
                  ))}
                  <option value="other">Other / Not sure yet</option>
                </select>
              </div>
              <div className="mt-5">
                <label htmlFor="message" className="text-sm font-medium">Additional details <span className="text-muted-foreground">(optional)</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Anything specific we should know?"
                />
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-gradient-to-br from-[oklch(0.97_0.02_250)] via-card to-[oklch(0.88_0.07_250)] px-6 py-3 text-sm font-semibold text-foreground shadow-soft transition hover:-translate-y-0.5 hover:shadow-elevated active:scale-[0.98] sm:w-auto"
              >
                <Send className="h-4 w-4" /> Send message
              </button>
              {sent && (
                <p className="mt-4 animate-in fade-in text-sm text-primary">Thanks — we received your message and will reply shortly.</p>
              )}
            </form>
          </Reveal>

          <Reveal direction="right" delay={150}>
            <h2 className="text-2xl font-bold sm:text-3xl">Reach us directly</h2>
            <aside className="mt-6 space-y-4">
              <InfoCard icon={Mail} title="Email" value="info@sbcusllc.com" />
              <InfoCard icon={Globe} title="Web" value="www.sbcusllc.com" />
              <InfoCard icon={Phone} title="Phone" value="+1 (210) 859-3259" />
              <InfoCard icon={MapPin} title="Headquarters" value="USA · DUBAI · INDIA" />
              <div className="rounded-2xl bg-gradient-ink p-6 text-ink-foreground">
                <h3 className="text-lg font-semibold">Office hours</h3>
                <p className="mt-2 text-sm text-white/75">Mon – Fri · 9:00 AM – 6:30 PM IST</p>
              </div>
            </aside>
          </Reveal>
        </div>
      </Reveal>
    </SiteShell>
  );
}

function ContactFact({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
  value: string;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/10 text-secondary">
        <Icon className="h-4 w-4" strokeWidth={1.75} />
      </span>
      <span>
        <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55">{label}</span>
        <span className="mt-0.5 block text-sm font-medium text-white">{value}</span>
      </span>
    </li>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">{label}{required && <span className="text-primary"> *</span>}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}

function InfoCard({ icon: Icon, title, value }: { icon: React.ComponentType<{ className?: string }>; title: string; value: string }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-gradient-to-br from-[oklch(0.97_0.02_250)] via-card to-[oklch(0.93_0.05_250)] p-5">
      <span className="icon-gem icon-gem-sm"><Icon strokeWidth={1.75} /></span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</p>
        <p className="mt-1 text-sm font-medium text-foreground">{value}</p>
      </div>
    </div>
  );
}
