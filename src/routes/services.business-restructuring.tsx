import { createFileRoute } from "@tanstack/react-router";
import {
  Award, Globe2, Scale, BarChart3, Briefcase, Building2, Cpu, FileText, ShieldCheck,
  TrendingUp, Layers, GitBranch, Cloud, Workflow, Zap, CreditCard, Database,
  CheckCircle2, X,
} from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { Reveal } from "@/components/Reveal";
import {
  ServiceHero, SectionHeading, FeatureCard, IconBadge, ServiceCTA, PillLabel,
} from "@/components/service/ServiceBits";
import heroImg from "@/assets/service-restructuring.jpg";
import { breadcrumbJsonLd, jsonLdScript, seoMeta, SITE_NAME, SITE_URL } from "@/lib/seo";

const TITLE = "Business Restructuring for US Companies | SBCLLC USA";
const DESC =
  "Cross-border advisory, transfer pricing, multi-entity bookkeeping and ERP for US companies with global operations.";

export const Route = createFileRoute("/services/business-restructuring")({
  head: () => {
    const seo = seoMeta({
      title: TITLE,
      description: DESC,
      path: "/services/business-restructuring",
      keywords:
        "Business restructuring, cross-border tax, GILTI, FDII, BEAT, transfer pricing, multi-entity bookkeeping, NetSuite, ERP",
    });
    return {
      ...seo,
      scripts: [
        jsonLdScript({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Business Restructuring for US Companies",
          description: DESC,
          url: `${SITE_URL}/services/business-restructuring`,
          provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
        }),
        jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Business Restructuring", path: "/services/business-restructuring" },
          ]),
        ),
      ],
    };
  },
  component: RestructuringPage,
});

const painPoints = [
  {
    t: "Subsidiary Profits Stuck?",
    d: "Inefficient holding structures block dividend repatriation and create withholding tax leakage.",
  },
  {
    t: "Intercompany Not Arm's Length?",
    d: "Related-party transactions without TP documentation expose you to dual IRS + foreign tax audits.",
  },
  {
    t: "Paying Tax Multiple Places?",
    d: "Overlapping US and foreign tax obligations cost money that treaty relief can recover.",
  },
];

const drivers = [
  { n: "01", t: "Global Tax Efficiency", d: "UAE 0–9% CT, India treaty network, GILTI/FDII planning" },
  { n: "02", t: "Transfer Pricing Compliance", d: "Arm's length pricing for services, IP, loans, sales" },
  { n: "03", t: "Profit Repatriation", d: "Minimize withholding, comply with Subpart F / GILTI" },
  { n: "04", t: "M&A Readiness", d: "Clean structure = better valuation and faster closing" },
  { n: "05", t: "Operational Simplification", d: "Consolidate entities, harmonize ERP, unify accounts" },
];

const pillars = [
  {
    icon: Globe2, t: "Cross-Border Tax Advisory",
    bullets: [
      "US federal & state returns",
      "GILTI / FDII / BEAT analysis",
      "Double tax treaty application",
      "Foreign tax credit optimization",
      "PE risk assessment",
    ],
  },
  {
    icon: Scale, t: "Transfer Pricing",
    bullets: [
      "TP policy design",
      "Benchmarking (CUP, TNMM)",
      "IRC §482 documentation",
      "OECD Local/Master File & CbCR",
      "APA support",
    ],
  },
  {
    icon: BarChart3, t: "Multi-Entity Bookkeeping",
    bullets: [
      "US GAAP + IFRS / local GAAP",
      "Multi-currency consolidation",
      "FATCA & FBAR compliance",
      "Intercompany reconciliation",
      "Investor-ready financials",
    ],
  },
  {
    icon: Cpu, t: "Technology & Finance Systems",
    bullets: [
      "ERP: NetSuite / Xero / QBO",
      "Multi-entity cloud configuration",
      "Automated workflows",
      "Power BI / Tableau dashboards",
      "Tax tool integration",
    ],
  },
];

const phases = [
  { n: "1", t: "Discovery & Diagnostic", d: "Entity mapping · Structure review · TP assessment · ERP audit" },
  { n: "2", t: "Strategy & Design", d: "Optimal holding structure · Treaty applications · TP pricing · Tech roadmap" },
  { n: "3", t: "Implementation", d: "Entity transfers · IRS form filings · Agreements · ERP migration" },
  { n: "4", t: "Compliance & Docs", d: "TP documentation · Consolidated financials · Audit workpapers" },
  { n: "5", t: "Annual Monitoring", d: "TP policy refresh · GILTI/FDII recalculation · FTC optimization" },
];

const deliverables = [
  ["US & Foreign Tax Returns Package", "TP Documentation (IRC §482)", "Intercompany Agreement Suite"],
  ["Local File / Master File / CbCR", "Consolidated Group Financials", "ERP Implementation & Migration"],
  ["GILTI / FDII / BEAT Planning Memo", "Executive KPI Dashboard", "IRS Audit Defence Workpapers"],
];

const tech = [
  { icon: Cloud, t: "Cloud ERP", d: "NetSuite / Xero / QBO — multi-entity, multi-currency" },
  { icon: BarChart3, t: "Executive Dashboards", d: "Power BI / Tableau — real-time group-wide views" },
  { icon: Zap, t: "TaxMate (Proprietary)", d: "Automates TP disclosures & audit workpapers" },
  { icon: CreditCard, t: "AP / Expense Automation", d: "Bill.com / Ramp — 60–80% manual reduction" },
  { icon: Database, t: "ERP-to-Tax Integration", d: "Direct data flows, compressed month-end close" },
];

function RestructuringPage() {
  return (
    <SiteShell>
      <ServiceHero
        pill="Cross-Border · Global Tax · TP · Tech-Enabled Finance"
        title={
          <>
            Business Restructuring for{" "}
            <span className="text-gradient-warm animate-gradient">US Companies</span>
          </>
        }
        body="Aligning corporate structure, intercompany arrangements and finance operations to maximize tax efficiency across borders."
        primaryCta={{ label: "Schedule a Discovery Call", to: "/contact" }}
        stats={[
          { v: "3", l: "Continents Served" },
          { v: "100+", l: "Cross-Border Engagements" },
          { v: "35+", l: "Tax Treaties Navigated" },
          { v: "60–70%", l: "Cost Savings vs In-House" },
        ]}
        image={heroImg}
        imageAlt="Brushed metal blocks reassembled into a tower"
        badgeIcon={Award}
        badgeText="100+ Cross-Border Engagements"
      />

      {/* CHALLENGE */}
      <section className="bg-muted py-16 sm:py-20 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading pill="The Challenge" title="Why US Companies Restructure" />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {painPoints.map((p, i) => (
              <Reveal key={p.t} delay={i * 80}>
                <div className="h-full rounded-2xl border border-destructive/15 bg-card p-6 shadow-soft">
                  <div className="inline-flex rounded-xl bg-destructive/10 p-2.5 text-destructive">
                    <X className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{p.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {drivers.map((d, i) => (
              <Reveal key={d.n} delay={i * 70}>
                <div className="h-full rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated">
                  <span className="text-2xl font-bold text-gradient-warm">{d.n}</span>
                  <h4 className="mt-3 text-base font-semibold leading-tight">{d.t}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{d.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading title="Four Service Pillars" subtitle="One integrated team, one accountable partner." />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 md:gap-6">
            {pillars.map((p, i) => (
              <Reveal key={p.t} delay={i * 100}>
                <article
                  className={`h-full rounded-3xl border p-7 transition hover:-translate-y-1 hover:shadow-elevated sm:p-8 ${
                    i % 2 === 0 ? "border-border bg-card" : "border-primary/15 bg-muted"
                  }`}
                >
                  <IconBadge icon={p.icon} size="lg" />
                  <h3 className="mt-5 text-xl font-semibold sm:text-2xl">{p.t}</h3>
                  <ul className="mt-5 space-y-2.5">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-foreground/80">
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

      {/* 5-PHASE PROCESS */}
      <section className="relative overflow-hidden bg-gradient-ink py-16 text-white sm:py-20 md:py-24">
        <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-primary/25 blur-3xl animate-blob" aria-hidden />
        <div className="container-page relative">
          <Reveal>
            <SectionHeading title="Our 5-Phase Engagement Process" onDark align="center" />
          </Reveal>
          <div className="relative mt-14">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent lg:block" aria-hidden />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {phases.map((p, i) => (
                <Reveal key={p.n} delay={i * 80}>
                  <div className="relative text-center">
                    <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-warm text-lg font-bold text-primary-foreground shadow-elevated">
                      {p.n}
                    </div>
                    <h3 className="mt-5 text-base font-semibold text-white">{p.t}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/70">{p.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="bg-muted py-16 sm:py-20 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading title="What You Receive" pill="Key Deliverables" />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {deliverables.map((col, i) => (
              <Reveal key={i} delay={i * 100}>
                <ul className="space-y-3 rounded-2xl border border-border bg-card p-6 shadow-soft">
                  {col.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm font-medium">
                      <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-warm text-primary-foreground">
                        <CheckCircle2 className="h-3 w-3" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TECH ECOSYSTEM */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading title="Technology Ecosystem" pill="Tech Stack" />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {tech.map((t, i) => (
              <Reveal key={t.t} delay={i * 70}>
                <FeatureCard icon={t.icon} title={t.t} description={t.d} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA
        eyebrow="Three Steps"
        title="Let's Talk About Your Global Structure"
        body="30-min discovery call → Share entity structure → Receive a tailored proposal."
        ctaText="Schedule a Free Strategy Call"
      />
    </SiteShell>
  );
}
