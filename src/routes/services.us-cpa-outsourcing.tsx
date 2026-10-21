import { createFileRoute } from "@tanstack/react-router";
import {
  Award, Search, Shield, TrendingUp, Leaf, BookOpen, BarChart3,
  FileText, ClipboardCheck, Building2, AlertTriangle,
  Map, FlaskConical, BadgeCheck, Wrench, Users, Trees,
  Landmark, ArrowRight, CheckCircle2, Star,
} from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { Reveal } from "@/components/Reveal";
import {
  ServiceHero, SectionHeading, FeatureCard, IconBadge, ServiceCTA,
} from "@/components/service/ServiceBits";
import heroImg from "@/assets/service-cpa.jpg";
import { breadcrumbJsonLd, jsonLdScript, seoMeta, SITE_NAME, SITE_URL } from "@/lib/seo";

const TITLE = "Outsourcing for US CPA Firms | SBCLLC USA";
const DESC =
  "Audit, ICFR, IPO readiness, ESG, bookkeeping & FP&A outsourcing for US CPA firms — Big-4 quality at scale.";

export const Route = createFileRoute("/services/us-cpa-outsourcing")({
  head: () => {
    const seo = seoMeta({
      title: TITLE,
      description: DESC,
      path: "/services/us-cpa-outsourcing",
      keywords: "CPA outsourcing, audit support, ICFR, SOX 404, IPO readiness, ESG, fractional CFO",
    });
    return {
      ...seo,
      scripts: [
        jsonLdScript({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Outsourcing for US CPA Firms",
          description: DESC,
          url: `${SITE_URL}/services/us-cpa-outsourcing`,
          provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
        }),
        jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "US CPA Outsourcing", path: "/services/us-cpa-outsourcing" },
          ]),
        ),
      ],
    };
  },
  component: CPAPage,
});

const portfolio = [
  { icon: Search, t: "Audit Support", tag: "GAAS-Compliant Assurance", d: "Audit schedules, PBC management, work paper prep, and forensic investigations — done to GAAS standards." },
  { icon: Shield, t: "ICFR", tag: "SOX 302 & 404 Compliance", d: "Control design, walkthrough testing, gap analysis, and SOX remediation across COSO and PCAOB frameworks." },
  { icon: TrendingUp, t: "IPO Readiness", tag: "SEC S-1 & Capital Markets", d: "Financial restatements, SEC filing support, ICFR build-out, and investor-grade reporting for pre-IPO companies." },
  { icon: Leaf, t: "ESG Reporting", tag: "Environmental · Social · Governance", d: "Audit-ready ESG disclosure frameworks — carbon footprint, DEI, board governance, and TCFD climate risk." },
  { icon: BookOpen, t: "Bookkeeping", tag: "Foundation to Fractional CFO", d: "From basic bookkeeping to cloud ERP migration — 5 service tiers scaling with your CPA firm's needs." },
  { icon: BarChart3, t: "FP&A & Advisory", tag: "Strategic Financial Leadership", d: "Fractional CFO, rolling forecasts, M&A due diligence, and regulatory reporting for complex clients." },
];

const audit = [
  { n: "1", t: "External Audit Coordination", d: "Liaison, PBC lists, fieldwork coordination, auditor responses" },
  { n: "2", t: "Work Paper Preparation", d: "Audit-ready workpapers, trial balances, reconciliations" },
  { n: "3", t: "Audit-Ready Financials", d: "GAAP financials with footnotes for boards, investors, due diligence" },
  { n: "4", t: "Forensic & Investigations", d: "Fraud, litigation support, whistleblower claims, expert testimony" },
];

const icfrFrameworks = ["SOX §302 — CEO/CFO Certifications", "SOX §404 — Management Assessment", "COSO — Risk & Monitoring", "PCAOB — Auditor Standards"];
const icfrCards = [
  { icon: Map, t: "Control Design & Documentation", d: "COSO-aligned framework, risk-to-control mapping" },
  { icon: FlaskConical, t: "Control Testing & Assessment", d: "Walkthrough testing, gap analysis, deficiency identification" },
  { icon: BadgeCheck, t: "SOX Compliance Support", d: "§302 and §404, management assessment, auditor coordination" },
  { icon: Wrench, t: "Remediation & Optimization", d: "Corrective actions, streamlined control environments" },
];

const ipoSteps = [
  { n: "01", t: "Financial Restatement" },
  { n: "02", t: "SEC Filing Support" },
  { n: "03", t: "ICFR Build-Out" },
  { n: "04", t: "Investor-Grade Reporting" },
  { n: "05", t: "Transaction Advisory" },
];

const esg = [
  {
    letter: "E", name: "Environmental", icon: Trees, color: "from-emerald-500/20 to-emerald-500/5", bullets: [
      "Carbon footprint & GHG reporting", "Climate risk disclosure (TCFD)", "Energy usage & emissions tracking",
      "Scope 1, 2 & 3 reporting", "Environmental impact assessments",
    ],
  },
  {
    letter: "S", name: "Social", icon: Users, color: "from-sky-500/20 to-sky-500/5", bullets: [
      "Workforce diversity metrics", "Supply chain due diligence", "Community & human rights reporting",
      "Employee safety & wellness KPIs", "DEI disclosure frameworks",
    ],
  },
  {
    letter: "G", name: "Governance", icon: Landmark, color: "from-orange-500/25 to-orange-500/5", bullets: [
      "Board composition reporting", "Executive pay transparency", "Anti-corruption compliance",
      "Shareholder engagement metrics", "Ethics & whistleblower programs",
    ],
  },
];

const tiers = [
  { n: "1", t: "Basic", f: ["Bookkeeping", "Bank reconciliations", "Monthly close"] },
  { n: "2", t: "Enhanced", f: ["+ Payroll", "+ AR/AP", "+ Sales tax"] },
  { n: "3", t: "Strategic", f: ["+ KPI dashboards", "+ Variance reports", "+ Quarterly review"], popular: true },
  { n: "4", t: "Technology", f: ["+ Cloud ERP", "+ Automations", "+ Integrations"] },
  { n: "5", t: "Compliance", f: ["+ Audit prep", "+ Internal controls", "+ Investor pkgs"] },
];

const whyUs = [
  "Big-4 quality at competitive pricing",
  "Senior specialists across all six service lines",
  "GAAS · SOX · COSO · PCAOB fluency",
  "Tech-enabled workflows & TaxMate automation",
  "Dedicated client manager — no offshoring handoffs",
];

const getStarted = [
  { n: "1", t: "Assess capabilities & pain points" },
  { n: "2", t: "Review package options" },
  { n: "3", t: "Request detailed proposal" },
  { n: "4", t: "Implement with transition plan" },
];

function CPAPage() {
  return (
    <SiteShell>
      <ServiceHero
        pill="Audit · ICFR · IPO · ESG · Bookkeeping · FP&A"
        title={
          <>
            Outsourcing for{" "}
            <span className="text-gradient-warm animate-gradient">US CPA Firms</span>
          </>
        }
        body="Expert expansion solutions for growing US CPA firms — from audit support and SOX to fractional CFO services."
        primaryCta={{ label: "Schedule a Free Call", to: "/contact" }}
        secondaryCta={{ label: "View Services", to: "/services" }}
        stats={[
          { v: "60–70%", l: "Cost Reduction" },
          { v: "60–80%", l: "Process Automation" },
          { v: "100%", l: "GAAS Compliant" },
          { v: "6", l: "Service Lines" },
        ]}
        image={heroImg}
        imageAlt="A quiet accounting studio with walnut desks and morning light"
        badgeIcon={Star}
        badgeText="Recommended Firm 2026"
      />

      <section className="bg-gradient-soft py-16 sm:py-20 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading pill="What We Offer" title="Our Services Portfolio" />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((p, i) => (
              <Reveal key={p.t} delay={i * 70}>
                <article className="group h-full rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated">
                  <IconBadge icon={p.icon} size="lg" />
                  <h3 className="mt-5 text-lg font-semibold">{p.t}</h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-primary/80">{p.tag}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition group-hover:gap-2">
                    Read about {p.t} <ArrowRight className="h-4 w-4" />
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-ink py-16 text-white sm:py-20 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              title="Audit Support"
              subtitle="GAAS-Compliant Assurance — for investors, lenders, and regulators."
              onDark
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {audit.map((a, i) => (
              <Reveal key={a.n} delay={i * 80}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <span className="text-3xl font-bold text-gradient-warm">{a.n}</span>
                  <h3 className="mt-3 text-lg font-semibold text-white">{a.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{a.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              title="ICFR Support"
              subtitle="Strengthening internal controls across SOX, COSO, and PCAOB frameworks."
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-8 flex flex-wrap gap-2">
              {icfrFrameworks.map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-xs font-semibold text-primary"
                >
                  {f}
                </span>
              ))}
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {icfrCards.map((c, i) => (
              <Reveal key={c.t} delay={i * 80}>
                <FeatureCard icon={c.icon} title={c.t} description={c.d} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 sm:py-20 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading title="IPO Readiness" align="center" />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {ipoSteps.map((s, i) => (
              <Reveal key={s.n} delay={i * 70}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <span className="text-2xl font-bold text-gradient-warm">{s.n}</span>
                  <p className="mt-3 text-sm font-semibold">{s.t}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              title="ESG Reporting"
              subtitle="SEC-driven ESG disclosures are becoming mandatory. We build credible, audit-ready frameworks."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {esg.map((c, i) => (
              <Reveal key={c.letter} delay={i * 100}>
                <article className={`h-full rounded-3xl border border-border bg-gradient-to-br ${c.color} p-7`}>
                  <div className="flex items-center gap-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-card text-3xl font-bold text-foreground shadow-soft">
                      {c.letter}
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{c.letter}</p>
                      <h3 className="text-xl font-semibold">{c.name}</h3>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-2">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm">
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

      <section className="bg-muted py-16 sm:py-20 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              title="Five Service Tiers — Foundation to Strategic CFO"
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {tiers.map((t, i) => (
              <Reveal key={t.n} delay={i * 70}>
                <div
                  className={`relative h-full rounded-2xl border bg-card p-6 transition hover:-translate-y-1 ${
                    t.popular ? "border-primary shadow-elevated lg:-translate-y-2" : "border-border shadow-soft"
                  }`}
                  style={{ marginTop: `${i * 6}px` }}
                >
                  {t.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-warm px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-elevated">
                      Most Popular
                    </span>
                  )}
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-warm text-sm font-bold text-primary-foreground">
                    {t.n}
                  </span>
                  <h3 className="mt-3 text-base font-semibold">Tier {t.n} · {t.t}</h3>
                  <ul className="mt-3 space-y-1.5">
                    {t.f.map((f) => (
                      <li key={f} className="text-xs text-muted-foreground">{f}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <h3 className="text-2xl font-bold sm:text-3xl">Why choose us</h3>
            <ul className="mt-6 space-y-3">
              {whyUs.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-warm text-primary-foreground">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <h3 className="text-2xl font-bold sm:text-3xl">Get started</h3>
            <ol className="mt-6 space-y-3">
              {getStarted.map((s) => (
                <li key={s.n} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-warm text-sm font-bold text-primary-foreground">
                    {s.n}
                  </span>
                  <span className="pt-1 text-sm font-medium">{s.t}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <ServiceCTA
        title="Ready to Scale Your US CPA Firm Globally?"
        body="Scalable Audit, Tax & Bookkeeping Support for Growth-Focused CPA Firms"
        ctaText="Schedule a Free Strategy Call"
      />
    </SiteShell>
  );
}
