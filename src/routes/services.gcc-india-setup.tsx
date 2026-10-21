import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck, Code, DollarSign, Landmark, Clock, Building2, BadgeCheck,
  Compass, FileText, MapPin, Users, BarChart3, Workflow,
  Receipt, Scale, Briefcase, Globe2, HardHat,
  Zap, TrendingUp, Wallet, BookOpen, CheckCircle2, Award,
} from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { Reveal } from "@/components/Reveal";
import {
  ServiceHero, SectionHeading, FeatureCard, IconBadge, ServiceCTA,
} from "@/components/service/ServiceBits";
import heroImg from "@/assets/service-gcc.jpg";
import { breadcrumbJsonLd, jsonLdScript, seoMeta, SITE_NAME, SITE_URL } from "@/lib/seo";

const TITLE = "Set Up Your GCC in India | SBCLLC USA";
const DESC =
  "End-to-end GCC setup in India for US enterprises — strategy, entity, real estate, talent, finance and operations.";

export const Route = createFileRoute("/services/gcc-india-setup")({
  head: () => {
    const seo = seoMeta({
      title: TITLE,
      description: DESC,
      path: "/services/gcc-india-setup",
      keywords:
        "GCC India, Global Capability Center, India entity setup, Hyderabad GCC, Bengaluru GCC, FEMA, RBI, transfer pricing India",
    });
    return {
      ...seo,
      scripts: [
        jsonLdScript({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "GCC India Setup",
          description: DESC,
          url: `${SITE_URL}/services/gcc-india-setup`,
          provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
        }),
        jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "GCC India Setup", path: "/services/gcc-india-setup" },
          ]),
        ),
      ],
    };
  },
  component: GCCPage,
});

const whyIndia = [
  { icon: Code, t: "Massive Talent Pool", d: "Millions of engineering & business graduates annually. English-speaking, top-tier professionals." },
  { icon: DollarSign, t: "Cost Competitiveness", d: "60–70% lower operating costs vs the US. Lowest office rentals in APAC." },
  { icon: Landmark, t: "Government Incentives", d: "FDI-friendly policies, SEZs, R&D tax incentives, state-level grants." },
  { icon: Clock, t: "Time-Zone Advantage", d: "IST (UTC+5:30) enables near 24/7 operations for US businesses." },
  { icon: Building2, t: "Real Estate Value", d: "Grade-A offices in Hyderabad, Bengaluru & Pune at world-class prices." },
  { icon: BadgeCheck, t: "Proven Track Record", d: "2,000+ GCCs operational — Fortune 500s to mid-market leaders." },
];

const phases = [
  {
    n: "01", t: "Vision & Strategy", icon: Compass,
    bullets: ["Define GCC objectives & operating model", "Location analysis: Hyderabad, Bengaluru, Pune, Chennai", "Workforce planning & target headcount"],
  },
  {
    n: "02", t: "Legal Entity Setup", icon: FileText,
    bullets: ["Choose structure: WOS / Branch / LLP / JV", "RBI/FEMA filings & incorporation", "All statutory registrations (PF, GST, PT, IEC)"],
  },
  {
    n: "03", t: "Location & Real Estate", icon: MapPin,
    bullets: ["Office space identification & lease negotiation", "SEZ / STPI registration (optional)", "IT infrastructure & workplace setup"],
  },
  {
    n: "04", t: "Talent & HR", icon: Users,
    bullets: ["Recruitment strategy & sourcing", "HR policies, payroll & benefits setup", "POSH compliance & onboarding"],
  },
  {
    n: "05", t: "Finance & Compliance", icon: BarChart3,
    bullets: ["Virtual CFO / bookkeeping onboarding", "Transfer pricing & intercompany setup", "Monthly compliance calendar activation"],
  },
  {
    n: "06", t: "Operations & Scale", icon: Workflow,
    bullets: ["Process SOPs & knowledge transfer", "KPI dashboards & reporting cadence", "Continuous innovation & growth planning"],
  },
];

const finTiers = [
  { icon: BookOpen, t: "Core Accounting", d: "Bookkeeping · Payroll · AR/AP · Monthly financials", w: 100 },
  { icon: TrendingUp, t: "FP&A", d: "P&L analysis · Budget variance · KPI dashboards", w: 90 },
  { icon: Wallet, t: "Cash Management", d: "Liquidity planning · Working capital optimization", w: 80 },
  { icon: BarChart3, t: "Systems & Tech", d: "Automation · ERP setup · Real-time reporting", w: 70 },
  { icon: Zap, t: "Fractional CFO", d: "Strategic advisory · Investor reporting · M&A support", w: 60 },
];

const compliance = [
  { icon: Landmark, t: "Direct Tax", b: ["Corporate tax", "Advance tax", "TDS", "Tax audit"] },
  { icon: Receipt, t: "GST", b: ["Monthly returns", "Input tax credit", "SOFTEX", "Annual GST"] },
  { icon: Scale, t: "Transfer Pricing", b: ["Intl txn docs", "Form 3CEB", "APA", "CbCR"] },
  { icon: Briefcase, t: "Company Secretarial", b: ["Board minutes", "MCA/ROC", "AGM", "Registers"] },
  { icon: Globe2, t: "FEMA & RBI", b: ["FDI compliance", "ECB filings", "APR/FLA", "FCGPR"] },
  { icon: HardHat, t: "Labour & Employment", b: ["PF/ESI/LWF", "Professional tax", "POSH", "Contract labor"] },
];

const partners = [
  { icon: Globe2, t: "US-India Bridge Expertise", d: "US GAAP + local India knowledge in one team" },
  { icon: Zap, t: "Speed to Operations", d: "Entity incorporated in 45 days. Full team in 6 months." },
  { icon: Workflow, t: "One Integrated Team", d: "Legal, accounting, HR — no handoffs. 70% less coordination." },
  { icon: BarChart3, t: "Finance-First Approach", d: "Bookkeeping, FP&A, VCFO, TP — your GCC's financial backbone." },
  { icon: ShieldCheck, t: "Zero Compliance Penalties", d: "FEMA, GST, TP, labor law — clean record across all engagements." },
  { icon: TrendingUp, t: "Scalable Partnership", d: "From 50 to 5,000 people — we scale every step with you." },
];

function GCCPage() {
  return (
    <SiteShell>
      <ServiceHero
        pill="End-to-End Advisory · Bookkeeping · FP&A · Operations"
        title={
          <>
            Set Up Your{" "}
            <span className="text-gradient-warm animate-gradient">GCC in India</span>
          </>
        }
        body="Your trusted partner from strategy to execution — guiding US enterprises through every step of their India GCC journey."
        primaryCta={{ label: "Start Your GCC Journey", to: "/contact" }}
        stats={[
          { v: "2,000+", l: "GCCs in India" },
          { v: "$100B+", l: "Market by 2030" },
          { v: "60–70%", l: "Cost Reduction" },
          { v: "<6 mo", l: "Time to Ops" },
        ]}
        image={heroImg}
        imageAlt="A sunlit architectural model of glass campus pavilions"
        badgeIcon={ShieldCheck}
        badgeText="Zero Penalties — All GCC Engagements"
      />

      {/* WHY INDIA */}
      <section className="bg-muted py-16 sm:py-20 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              pill="Why India"
              title="The world's most preferred destination for GCCs"
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyIndia.map((c, i) => (
              <Reveal key={c.t} delay={i * 70}>
                <FeatureCard icon={c.icon} title={c.t} description={c.d} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6-PHASE FRAMEWORK */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              title="How we set up your GCC"
              subtitle="From strategy to full operations — six structured phases."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {phases.map((p, i) => (
              <Reveal key={p.n} delay={i * 80}>
                <article className="h-full rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-warm text-sm font-bold text-primary-foreground">
                      {p.n}
                    </span>
                    <IconBadge icon={p.icon} size="sm" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{p.t}</h3>
                  <ul className="mt-3 space-y-2">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-foreground/75">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINANCE OPS PYRAMID */}
      <section className="relative overflow-hidden bg-gradient-ink py-16 text-white sm:py-20 md:py-24">
        <div className="container-page relative">
          <Reveal>
            <SectionHeading
              title="Finance Operations for Your GCC"
              subtitle="A 5-tier framework that scales with your GCC."
              onDark
              align="center"
            />
          </Reveal>
          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {finTiers.map((t, i) => (
              <Reveal key={t.t} delay={i * 80}>
                <div className="flex w-full items-center gap-4 rounded-2xl border border-white/15 bg-gradient-warm/90 p-4 shadow-elevated transition hover:-translate-y-0.5 hover:border-white/30">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white">
                    <t.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-white sm:text-base">Tier {i + 1} · {t.t}</p>
                    <p className="text-xs text-white/85">{t.d}</p>
                  </div>
                  <span className="hidden shrink-0 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/90 sm:inline-flex">
                    0{i + 1}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE MAP */}
      <section className="bg-muted py-16 sm:py-20 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              pill="Compliance & Legal"
              title="We handle India's regulatory complexity"
              subtitle="One partner, full coverage — across 6 regulatory areas."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {compliance.map((c, i) => (
              <Reveal key={c.t} delay={i * 60}>
                <article className="h-full rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft">
                  <IconBadge icon={c.icon} />
                  <h3 className="mt-4 text-base font-semibold">{c.t}</h3>
                  <ul className="mt-3 grid grid-cols-2 gap-1.5">
                    {c.b.map((b) => (
                      <li key={b} className="text-xs text-muted-foreground">• {b}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container-page">
          <Reveal direction="scale">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-warm p-8 text-white shadow-elevated sm:p-12 md:p-16">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/15 blur-3xl animate-blob" aria-hidden />
              <div className="relative grid gap-10 lg:grid-cols-[1fr,1.2fr] lg:gap-14">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/85">Case Study</span>
                  <h3 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">
                    US MedTech Corporation — GCC in Hyderabad
                  </h3>
                  <p className="mt-2 text-sm text-white/85">Healthcare Technology · Hyderabad, India</p>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    {[
                      { v: "$73Mn", l: "Total Investment" },
                      { v: "350+", l: "Headcount" },
                      { v: "<6 mo", l: "To Operations" },
                      { v: "60–70%", l: "Cost Reduction" },
                    ].map((s) => (
                      <div key={s.l} className="rounded-2xl border border-white/25 bg-white/10 p-4 backdrop-blur">
                        <p className="text-2xl font-bold text-white sm:text-3xl">{s.v}</p>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/85">{s.l}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "WOS incorporated + 12 RBI/FEMA registrations in 45 days",
                    "Grade-A HITEC City office with SEZ benefits secured",
                    "350+ engineers & analysts onboarded in 5 months",
                    "Full bookkeeping, payroll, TDS, GST from day one",
                    "Revenue cycle management fully migrated",
                    "Ongoing VCFO, KPI dashboards & TP documentation",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-3 rounded-xl bg-white/10 p-3 text-sm font-medium backdrop-blur">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-white" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="bg-muted py-16 sm:py-20 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading title="Why partner with SBCLLC USA?" align="center" />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((p, i) => (
              <Reveal key={p.t} delay={i * 70}>
                <div className="relative h-full rounded-2xl border border-border bg-card p-6 pt-7 transition hover:-translate-y-1 hover:shadow-elevated">
                  <div className="absolute inset-x-6 top-0 h-1 rounded-b-full bg-gradient-warm" aria-hidden />
                  <IconBadge icon={p.icon} />
                  <h3 className="mt-4 text-base font-semibold">{p.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA
        variant="ink"
        title="Ready to Build Your India GCC?"
        body="Start with a complimentary 30-minute strategy session. We'll walk you through a custom India GCC roadmap for your business."
        ctaText="Schedule a Free Strategy Call"
      />
    </SiteShell>
  );
}
