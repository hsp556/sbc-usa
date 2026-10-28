import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Award, Building2, FileText, Files, Globe2, Landmark, Map, Receipt, Shield, ShieldCheck,
  Briefcase, BadgeCheck, FileSpreadsheet, ScrollText, Calendar, CalendarDays, Wallet,
  ClipboardList, Scale, BookOpen, Users, BarChart3, Repeat, Search, Phone,
} from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { FaqList } from "@/components/FaqList";
import { serviceFaqs } from "@/data/service-faqs";
import { Reveal } from "@/components/Reveal";
import {
  ServiceHero, SectionHeading, FeatureCard, IconBadge, ServiceCTA, PillLabel,
} from "@/components/service/ServiceBits";
import heroImg from "@/assets/service-us-tax.jpg";
import { breadcrumbJsonLd, faqJsonLd, jsonLdScript, orgRef, seoMeta, SITE_URL } from "@/lib/seo";

const TITLE = "US Tax Services for Global Entities | SBC US LLC";
const DESC =
  "Federal, state and international US tax compliance for US-incorporated entities with overseas operations — including IRC §482 transfer pricing.";

export const Route = createFileRoute("/services/us-tax-services")({
  head: () => {
    const seo = seoMeta({
      title: TITLE,
      description: DESC,
      path: "/services/us-tax-services",
      image: `${SITE_URL}/og-image.jpg`,
      keywords:
        "US tax services, Form 1120, Form 5471, FATCA, FBAR, Section 482, transfer pricing, CFC, GILTI, state tax, federal tax",
    });
    return {
      ...seo,
      scripts: [
        jsonLdScript({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "US Tax Services for Global Entities",
          description: DESC,
          url: `${SITE_URL}/services/us-tax-services`,
          provider: orgRef,
          areaServed: ["United States", "India", "United Arab Emirates"],
        }),
        jsonLdScript(faqJsonLd(serviceFaqs["us-tax-services"])),
        jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "US Tax Services", path: "/services/us-tax-services" },
          ]),
        ),
      ],
    };
  },
  component: USTaxPage,
});

const tabs = [
  {
    key: "federal",
    label: "Federal Returns",
    icon: Landmark,
    items: [
      { icon: FileText, t: "C-Corporations", d: "Form 1120 + Schedule M-3" },
      { icon: Files, t: "S-Corporations", d: "Form 1120-S + K-1 Statements" },
      { icon: Briefcase, t: "Partnerships & LLCs", d: "Form 1065 + Partner K-1s" },
      { icon: Users, t: "Individual Returns", d: "Forms 1040, 1040NR, 1040-SR" },
      { icon: Building2, t: "Large Corps", d: "Schedule M-3 (assets ≥ $10M)" },
      { icon: Landmark, t: "Non-Profits", d: "Form 990 — all variants" },
    ],
  },
  {
    key: "payroll",
    label: "Payroll & Employment",
    icon: Wallet,
    items: [
      { icon: Calendar, t: "Quarterly Returns", d: "Form 941 — FICA + withholding" },
      { icon: CalendarDays, t: "Annual Returns", d: "Form 944 — small employers" },
      { icon: Wallet, t: "FUTA Reporting", d: "Form 940 — federal unemployment" },
      { icon: Receipt, t: "W-2 Preparation", d: "Annual wage & tax statements" },
      { icon: Scale, t: "Garnishment", d: "Wage garnishment management" },
      { icon: BadgeCheck, t: "New Hire Reporting", d: "Multi-state compliance" },
    ],
  },
  {
    key: "intl",
    label: "International",
    icon: Globe2,
    items: [
      { icon: Globe2, t: "Form 5471", d: "Info return for foreign corporations" },
      { icon: BarChart3, t: "Section 482", d: "Arm's length pricing documentation" },
      { icon: ShieldCheck, t: "FATCA / Form 8938", d: "Foreign financial assets" },
      { icon: Landmark, t: "FBAR / FinCEN 114", d: "Foreign bank accounts" },
      { icon: Repeat, t: "Withholding", d: "§1441 / 1442 / 1446 compliance" },
      { icon: ClipboardList, t: "FinCEN BOI", d: "Beneficial ownership reporting" },
    ],
  },
  {
    key: "state",
    label: "State (44 States)",
    icon: Map,
    items: [
      { icon: Map, t: "State Income Tax", d: "All 44 applicable states" },
      { icon: Receipt, t: "Franchise Tax", d: "Annual privilege tax filings" },
      { icon: ScrollText, t: "Annual Reports", d: "Secretary of State filings" },
      { icon: Calendar, t: "Quarterly Estimates", d: "Penalty avoidance filings" },
      { icon: Repeat, t: "Combined Reporting", d: "Multi-state operations" },
      { icon: BarChart3, t: "Sales & Use Tax", d: "Nexus determinations" },
    ],
  },
  {
    key: "cfc",
    label: "CFC & FATCA",
    icon: Shield,
    items: [
      { icon: FileText, t: "CFC Compliance", d: "Form 5471 — all categories" },
      { icon: BarChart3, t: "Subpart F Income", d: "Passive income reporting" },
      { icon: Globe2, t: "GILTI / NCTI", d: "Global intangible low-tax income" },
      { icon: BookOpen, t: "Schedule J", d: "Earnings & profits tracking" },
      { icon: Repeat, t: "Related-Party", d: "Schedule M intercompany" },
      { icon: Shield, t: "PFIC / Form 8621", d: "Foreign investment reporting" },
    ],
  },
];

const tpCards = [
  { icon: Scale, t: "§482 Documentation", d: "Contemporaneous arm's length pricing docs" },
  { icon: Search, t: "ALP Benchmarking", d: "CUP · RPM · CPM · TNMM · Profit Split" },
  { icon: ScrollText, t: "TP Policy Design", d: "Goods, services, IP licensing, loans" },
  { icon: Shield, t: "§6662 Penalty Protection", d: "20%–40% penalty shield" },
  { icon: BadgeCheck, t: "APA Support", d: "Advance Pricing Agreements with IRS" },
  { icon: ClipboardList, t: "Intercompany Disclosures", d: "§6038A / §6038C filings" },
];

const whyUs = [
  { icon: Landmark, t: "End-to-end federal, state & international compliance" },
  { icon: Globe2, t: "CFC, GILTI, FATCA & FBAR specialists" },
  { icon: Map, t: "44 US states covered" },
  { icon: Shield, t: "Section 482 TP documentation" },
  { icon: Phone, t: "IRS representation & notice handling" },
  { icon: Building2, t: "Foreign branch & subsidiary experts" },
];

function USTaxPage() {
  const [tab, setTab] = useState("federal");
  const active = tabs.find((t) => t.key === tab)!;

  return (
    <SiteShell>
      <ServiceHero
        pill="Federal · State · International · Transfer Pricing"
        title={
          <>
            US Tax Services for{" "}
            <span className="text-gradient-warm animate-gradient">Global Entities</span>
          </>
        }
        body="Comprehensive federal, state and international tax compliance for US-incorporated entities with overseas branches — including Transfer Pricing."
        primaryCta={{ label: "Schedule a Free Call", to: "/contact" }}
        secondaryCta={{ label: "Download Overview", to: "/contact" }}
        stats={[
          { v: "3", l: "Service Areas" },
          { v: "44", l: "States Covered" },
          { v: "20+", l: "Intl Forms Filed" },
          { v: "100%", l: "IRS Compliant" },
        ]}
        image={heroImg}
        imageAlt="Glass document folders and a copper pen on a black stone desk"
        badgeIcon={Award}
        badgeText="Recognised Corporate Tax Firm 2026"
      />

      {/* WHAT WE COVER — TABS */}
      <section className="bg-gradient-soft py-16 sm:py-20 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              pill="Services Covered"
              title="End-to-End US Tax Compliance"
              subtitle="Every entity, every form, every state — under one specialist roof."
            />
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-10 flex flex-wrap gap-2 rounded-2xl border border-border bg-card p-2 shadow-soft sm:gap-3 sm:p-3">
              {tabs.map(({ key, label, icon: Icon }) => {
                const isActive = tab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setTab(key)}
                    className={`group inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs font-semibold transition sm:text-sm ${
                      isActive
                        ? "bg-gradient-warm text-primary-foreground shadow-elevated"
                        : "text-foreground/70 hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{label}</span>
                    <span className="sm:hidden">{label.split(" ")[0]}</span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          <div key={active.key} className="mt-8 grid gap-4 animate-[fade-in_0.4s_ease-out] sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {active.items.map((it, i) => (
              <Reveal key={it.t} delay={i * 60}>
                <FeatureCard icon={it.icon} title={it.t} description={it.d} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFER PRICING SPOTLIGHT */}
      <section className="relative overflow-hidden bg-gradient-ink py-16 text-white sm:py-20 md:py-24">
        <div className="absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-primary/30 blur-3xl animate-blob" aria-hidden />
        <div className="container-page relative">
          <Reveal>
            <SectionHeading
              pill="IRC §482 Compliance"
              title="Transfer Pricing — Built Into Every Filing"
              subtitle="Documented arm's length pricing for every related-party transaction."
              onDark
            />
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-[2fr,1fr] lg:gap-12">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              {tpCards.map((c, i) => (
                <Reveal key={c.t} delay={i * 70}>
                  <FeatureCard icon={c.icon} title={c.t} description={c.d} onDark />
                </Reveal>
              ))}
            </div>
            <Reveal direction="right" delay={120}>
              <div className="rounded-3xl border border-primary/40 bg-primary/10 p-6 backdrop-blur sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Penalty Risk</p>
                <p className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
                  20%–40% of any IRS adjustment for inadequate TP documentation.
                </p>
                <div className="mt-8 space-y-3">
                  {[
                    "Intercompany Transaction",
                    "Arm's Length Test",
                    "§6662 Protection ✓",
                  ].map((step, i) => (
                    <div
                      key={step}
                      className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-warm text-xs text-primary-foreground">
                        {i + 1}
                      </span>
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-muted py-16 sm:py-20 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading title="Why SBC US LLC for US Tax?" align="center" />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map(({ icon: Icon, t }, i) => (
              <Reveal key={t} delay={i * 60}>
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft">
                  <IconBadge icon={Icon} />
                  <p className="text-sm font-medium leading-relaxed text-foreground sm:text-base">{t}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={400}>
            <div className="mt-10 flex justify-center">
              <Link to="/services" className="text-sm font-semibold text-primary hover:underline">
                ← Back to all services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <FaqList items={serviceFaqs["us-tax-services"]} title="US tax services: common questions" intro="" />

      <ServiceCTA
        title="Ready for Complete US Tax Compliance?"
        body="From federal returns to CFC reporting — one firm, complete coverage."
        ctaText="Schedule a Free Strategy Call"
      />
    </SiteShell>
  );
}
