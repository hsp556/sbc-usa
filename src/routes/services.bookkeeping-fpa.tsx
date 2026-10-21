import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  TrendingUp, BookOpen, Shield, CreditCard, RefreshCw, FileText, Users, BarChart3,
  Building2, ClipboardCheck, Banknote, Calendar, PieChart, Calculator,
  FolderOpen, FileCheck, Wrench, Lock, CheckCircle2, Star, Zap, Briefcase, Cpu, Clock,
  ArrowRight, FileBarChart, Wallet,
} from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { Reveal } from "@/components/Reveal";
import {
  ServiceHero, SectionHeading, FeatureCard, IconBadge, ServiceCTA,
} from "@/components/service/ServiceBits";
import heroImg from "@/assets/service-bookkeeping.jpg";
import { Link } from "@tanstack/react-router";
import { breadcrumbJsonLd, jsonLdScript, seoMeta, SITE_NAME, SITE_URL } from "@/lib/seo";

const TITLE = "Bookkeeping & FP&A for US SMEs | SBCLLC USA";
const DESC =
  "Bookkeeping, FP&A and audit support for US small and mid-sized businesses — without the cost of a full-time finance team.";

export const Route = createFileRoute("/services/bookkeeping-fpa")({
  head: () => {
    const seo = seoMeta({
      title: TITLE,
      description: DESC,
      path: "/services/bookkeeping-fpa",
      keywords: "Bookkeeping, FP&A, US SME, QuickBooks, Xero, NetSuite, fractional CFO, audit support",
    });
    return {
      ...seo,
      scripts: [
        jsonLdScript({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Bookkeeping & FP&A for US SMEs",
          description: DESC,
          url: `${SITE_URL}/services/bookkeeping-fpa`,
          provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
        }),
        jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Bookkeeping & FP&A", path: "/services/bookkeeping-fpa" },
          ]),
        ),
      ],
    };
  },
  component: BookkeepingPage,
});

const tabs = [
  {
    key: "book",
    label: "Bookkeeping & Accounting",
    icon: BookOpen,
    sub: "Foundation accuracy for informed decisions",
    items: [
      { icon: CreditCard, t: "Transaction Processing", d: "Daily recording of sales, expenses, bank & card activity" },
      { icon: RefreshCw, t: "Bank Reconciliation", d: "Monthly account reconciliation — discrepancies resolved promptly" },
      { icon: FileText, t: "AR & AP Management", d: "Invoicing, collections, vendor bills, payment scheduling" },
      { icon: Users, t: "Payroll Management", d: "Federal/state payroll filings, W-2/1099, 401(k) contributions" },
      { icon: BarChart3, t: "Monthly Financials", d: "P&L, Balance Sheet, Cash Flow — accrual basis with prior-period comparison" },
      { icon: Building2, t: "Fixed Asset Accounting", d: "Asset register, depreciation schedules, US GAAP disposal tracking" },
    ],
  },
  {
    key: "fpa",
    label: "Financial Planning & Analysis",
    icon: TrendingUp,
    sub: "Turning numbers into decisions that drive growth",
    items: [
      { icon: PieChart, t: "P&L Analysis", d: "Vertical & horizontal analysis, revenue drivers, margin insights" },
      { icon: ClipboardCheck, t: "Budget vs. Actual", d: "Monthly variance reports, red-flag alerts, management commentary" },
      { icon: Banknote, t: "Cash Flow Forecasting", d: "13-week rolling forecasts, annual projections, capital modeling" },
      { icon: BarChart3, t: "KPI Dashboards", d: "CAC, LTV, Gross Margin, EBITDA — real-time visual trackers" },
      { icon: Calendar, t: "Annual Budgeting", d: "Strategic budgets, rolling forecast updates, multi-year planning" },
      { icon: Calculator, t: "Quarterly Reviews", d: "Management meetings, tax estimates, strategic performance review" },
    ],
  },
  {
    key: "audit",
    label: "Audit Support",
    icon: Shield,
    sub: "Meeting lender, investor & regulatory expectations — stress-free",
    items: [
      { icon: FolderOpen, t: "Audit Preparation", d: "Schedules, PBC lists, auditor coordination" },
      { icon: Banknote, t: "Lender Reporting", d: "Bank covenant certificates, SBA reporting, regulatory submissions" },
      { icon: FileCheck, t: "Review & Compilation", d: "CPA-ready statements for lending, insurance, or licensing" },
      { icon: Wrench, t: "Audit Remediation", d: "Corrective actions from management letters and audit adjustments" },
      { icon: Lock, t: "Internal Controls", d: "Gap identification, control documentation, remediation recommendations" },
      { icon: FileBarChart, t: "Investor-Grade Packages", d: "Monthly/quarterly financials with footnotes and MD&A" },
    ],
  },
];

const packages = [
  {
    name: "Essentials",
    aud: "Startups & Sole Proprietors",
    features: ["Monthly bookkeeping", "Bank reconciliations", "Basic P&L & Balance Sheet", "Payroll processing", "AR/AP tracking"],
  },
  {
    name: "Growth",
    aud: "Growing SMEs $1M–$10M",
    popular: true,
    features: ["All Essentials", "Budget vs. actual reporting", "KPI dashboards", "Cash flow forecasting", "Quarterly business review"],
  },
  {
    name: "Scale",
    aud: "Established $10M+",
    features: ["All Growth", "Annual strategic planning", "Audit prep & coordination", "Lender/investor reporting", "Internal controls review"],
  },
];

const why = [
  { icon: BookOpen, t: "US GAAP Expertise", d: "Deep knowledge of US accounting standards, IRS, and state compliance" },
  { icon: Briefcase, t: "SME-Focused", d: "Businesses $500K–$50M — your needs are our core business" },
  { icon: Cpu, t: "Tech-Enabled", d: "QuickBooks · Xero · NetSuite + real-time dashboards" },
  { icon: RefreshCw, t: "Scalable & Flexible", d: "Start with bookkeeping → add FP&A → add audit. No rip-and-replace." },
];

const onboarding = [
  { n: "01", t: "Discovery Call", d: "30-min fit & needs review" },
  { n: "02", t: "Scope & Proposal", d: "Tailored package & pricing" },
  { n: "03", t: "Clean-Up & Setup", d: "Data migration & control build" },
  { n: "04", t: "Go Live & Report", d: "Monthly close & dashboards" },
];

function BookkeepingPage() {
  const [tab, setTab] = useState("book");
  const active = tabs.find((t) => t.key === tab)!;

  return (
    <SiteShell>
      <ServiceHero
        pill="Bookkeeping · FP&A · Audit Support"
        title={
          <>
            Bookkeeping & FP&A for{" "}
            <span className="text-gradient-warm animate-gradient">US SMEs</span>
          </>
        }
        body="Clarity, control and confidence for US small and mid-sized businesses — without the cost of a full-time finance team."
        primaryCta={{ label: "Get Started Today", to: "/contact" }}
        secondaryCta={{ label: "View Packages", to: "/contact" }}
        stats={[
          { v: "82%", l: "SME failures from cash flow" },
          { v: "60%", l: "Lack in-house FP&A" },
          { v: "$50K+", l: "Avg IRS penalty cost" },
          { v: "3×", l: "Faster growth w/ FP&A" },
        ]}
        image={heroImg}
        imageAlt="A cream ledger, glass abacus and copper chart on a stone desk"
        badgeIcon={Zap}
        badgeText="3× Faster Growth with Structured FP&A"
      />

      {/* 3 PILLARS TABS */}
      <section className="bg-gradient-soft py-16 sm:py-20 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading pill="3 Service Areas" title="What We Deliver" />
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-10 grid gap-2 rounded-2xl border border-border bg-card p-2 shadow-soft sm:grid-cols-3 sm:gap-3 sm:p-3">
              {tabs.map(({ key, label, icon: Icon }) => {
                const isActive = tab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setTab(key)}
                    className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-xs font-semibold transition sm:text-sm ${
                      isActive
                        ? "bg-gradient-warm text-primary-foreground shadow-elevated"
                        : "text-foreground/70 hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </button>
                );
              })}
            </div>
          </Reveal>

          <div key={active.key} className="mt-8 animate-[fade-in_0.4s_ease-out]">
            <p className="text-sm font-semibold text-primary">{active.sub}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {active.items.map((it, i) => (
                <Reveal key={it.t} delay={i * 60}>
                  <FeatureCard icon={it.icon} title={it.t} description={it.d} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              title="Choose the right package for your stage"
              subtitle="All packages fully customizable — mix and match services to fit your needs."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {packages.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <article
                  className={`relative h-full rounded-3xl border bg-card p-7 transition hover:-translate-y-1 hover:shadow-elevated sm:p-8 ${
                    p.popular ? "border-primary shadow-elevated md:-translate-y-3" : "border-border shadow-soft"
                  }`}
                >
                  {p.popular && (
                    <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-gradient-warm px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-elevated">
                      <Star className="h-3 w-3" /> Most Popular
                    </span>
                  )}
                  <h3 className="text-2xl font-bold">{p.name}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{p.aud}</p>
                  <ul className="mt-6 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
                      p.popular
                        ? "bg-gradient-warm text-primary-foreground shadow-soft hover:opacity-95"
                        : "border border-border bg-background hover:border-primary hover:text-primary"
                    }`}
                  >
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SBC */}
      <section className="bg-muted py-16 sm:py-20 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading title="Why SBCLLC USA Advisory?" align="center" />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((w, i) => (
              <Reveal key={w.t} delay={i * 80}>
                <FeatureCard icon={w.icon} title={w.t} description={w.d} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ONBOARDING STEPPER */}
      <section className="bg-gradient-ink py-16 text-white sm:py-20 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading title="How we onboard you" align="center" onDark />
          </Reveal>
          <div className="relative mt-14">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent lg:block" aria-hidden />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {onboarding.map((s, i) => (
                <Reveal key={s.n} delay={i * 80}>
                  <div className="text-center">
                    <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-warm text-base font-bold text-primary-foreground shadow-elevated">
                      {s.n}
                    </div>
                    <h3 className="mt-5 text-base font-semibold text-white">{s.t}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/70">{s.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceCTA
        title="Ready to elevate your financial operations?"
        body="Let's build the financial infrastructure your SME deserves."
        ctaText="Schedule a Free Strategy Call"
      />
    </SiteShell>
  );
}
