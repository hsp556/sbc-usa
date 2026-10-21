import { createFileRoute } from "@tanstack/react-router";
import {
  Award, AlertTriangle, FileText, ClipboardList, Search, BookOpen, FileSignature,
  ScrollText, Globe2, Handshake, Scale, Shield, Eye,
  Cpu, HeartPulse, DollarSign, Factory, Building2, ShoppingBag,
  Zap, ShieldCheck, Network, CheckCircle2, Trophy,
} from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { Reveal } from "@/components/Reveal";
import {
  ServiceHero, SectionHeading, FeatureCard, IconBadge, ServiceCTA,
} from "@/components/service/ServiceBits";
import heroImg from "@/assets/service-tp.jpg";
import { breadcrumbJsonLd, jsonLdScript, seoMeta, SITE_NAME, SITE_URL } from "@/lib/seo";

const TITLE = "Transfer Pricing — US Practice | SBCLLC USA";
const DESC =
  "IRC §482 compliance, BEPS advisory and dispute resolution for US-incorporated entities with overseas operations.";

export const Route = createFileRoute("/services/transfer-pricing")({
  head: () => {
    const seo = seoMeta({
      title: TITLE,
      description: DESC,
      path: "/services/transfer-pricing",
      keywords:
        "Transfer pricing, IRC 482, BEPS, OECD, three-tier documentation, Local File, Master File, CbCR, APA, MAP",
    });
    return {
      ...seo,
      scripts: [
        jsonLdScript({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Transfer Pricing — US Practice",
          description: DESC,
          url: `${SITE_URL}/services/transfer-pricing`,
          provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
        }),
        jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Transfer Pricing", path: "/services/transfer-pricing" },
          ]),
        ),
      ],
    };
  },
  component: TPPage,
});

const risks = [
  { t: "Dual Audit Exposure", d: "Prices not at arm's length attract simultaneous IRS and foreign tax authority scrutiny — amplifying adjustment risk." },
  { t: "GILTI & Subpart F Impact", d: "Inadequately priced IP licensing and service arrangements directly increase GILTI exposure and Subpart F inclusions." },
  { t: "20%–40% Penalty Risk", d: "Without contemporaneous §6662 documentation, IRS adjustments carry a 20% penalty — rising to 40% for gross misstatements." },
];

const services = [
  { icon: FileText, t: "§482 Documentation", d: "Contemporaneous arm's length pricing docs for all intercompany transactions" },
  { icon: ClipboardList, t: "TP Policy Design", d: "Policies for goods, services, IP licensing, loans, cost-sharing — OECD-aligned" },
  { icon: Search, t: "ALP Benchmarking", d: "CUP · RPM · CPM · TNMM · Profit Split — statistically supported analysis" },
  { icon: BookOpen, t: "Three-Tier OECD Docs", d: "Local File · Master File · Country-by-Country Report (CbCR)" },
  { icon: FileSignature, t: "Intercompany Agreements", d: "Legally enforceable agreements for services, IP, loans, distribution" },
  { icon: ScrollText, t: "Form 5471 Schedule M", d: "Annual intercompany transaction disclosure — sales, loans, services, IP" },
  { icon: Globe2, t: "BEPS Advisory", d: "Pillar Two readiness, substance requirements, global minimum tax alignment" },
  { icon: Handshake, t: "APA Support", d: "Advance Pricing Agreements — unilateral and bilateral IRS certainty" },
  { icon: Scale, t: "MAP Proceedings", d: "Mutual Agreement Procedure — eliminate double taxation from TP adjustments" },
  { icon: Shield, t: "§6662 Penalty Protection", d: "Contemporaneous documentation — 20%–40% penalty shield" },
  { icon: Eye, t: "IRS Audit Defense", d: "Audit workpapers, economic analysis responses, Tax Court litigation support" },
  { icon: ClipboardList, t: "Related-Party Disclosures", d: "§6038A / §6038C — full disclosure in US federal returns" },
];

const tiers = [
  { icon: FileText, t: "Local File", d: "Transaction-level analysis and benchmarking for the local entity", w: 100, op: 1 },
  { icon: Building2, t: "Master File", d: "Group-wide MNE overview: global operations, TP policies, value chain", w: 80, op: 0.75 },
  { icon: Globe2, t: "Country-by-Country Report (CbCR)", d: "Jurisdiction-level data: revenue, profit, taxes, employees", w: 60, op: 0.55 },
];

const industries = [
  { icon: Cpu, t: "Technology & Software" },
  { icon: HeartPulse, t: "Healthcare & MedTech" },
  { icon: DollarSign, t: "Financial Services" },
  { icon: Factory, t: "Manufacturing & Distribution" },
  { icon: Building2, t: "Professional Services (GCCs)" },
  { icon: ShoppingBag, t: "Retail & E-Commerce" },
];

const why = [
  { icon: Trophy, t: "Recognized Expertise", d: "Notable TP Firm 2024 & 2026. Notable Practitioner 2026." },
  { icon: Globe2, t: "US-OECD Dual Fluency", d: "IRC §482 and OECD standards in every engagement — simultaneously." },
  { icon: Network, t: "Integrated Tax & Finance", d: "TP positions consistent across GILTI/FDII filings, CFC compliance, bookkeeping." },
  { icon: Zap, t: "TaxMate Technology", d: "Proprietary automation for TP disclosures, checklists & audit workpapers." },
  { icon: ShieldCheck, t: "Audit-Ready from Day One", d: "Every engagement documented as if an IRS exam is imminent." },
];

function TPPage() {
  return (
    <SiteShell>
      <ServiceHero
        pill="IRC §482 · BEPS · Three-Tier Docs · APA / MAP"
        title={
          <>
            Transfer Pricing —{" "}
            <span className="text-gradient-warm animate-gradient">US Practice</span>
          </>
        }
        body="IRC §482 compliance, BEPS advisory and dispute resolution for US-incorporated entities with overseas operations."
        primaryCta={{ label: "Schedule TP Assessment", to: "/contact" }}
        secondaryCta={{ label: "Download TP Guide", to: "/contact" }}
        stats={[
          { v: "35+", l: "Tax Treaties Navigated" },
          { v: "20–40%", l: "Penalty Without Docs" },
          { v: "2×", l: "Notable TP Firm 2024/26" },
          { v: "12", l: "Specialist Services" },
        ]}
        image={heroImg}
        imageAlt="A brass balance scale between two glass nodes on navy"
        badgeIcon={Award}
        badgeText="Notable Transfer Pricing Firm 2026"
      />

      {/* RISK */}
      <section className="bg-muted py-16 sm:py-20 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              title="The Transfer Pricing Challenge"
              subtitle="Related-party transactions are among the highest-risk areas of US international tax."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {risks.map((r, i) => (
              <Reveal key={r.t} delay={i * 80}>
                <article className="h-full rounded-2xl border border-destructive/20 bg-card p-6 shadow-soft">
                  <div className="inline-flex rounded-xl bg-destructive/10 p-2.5 text-destructive">
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{r.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES — 12 */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading pill="12 Specialist Services" title="Our Transfer Pricing Services" />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {services.map((s, i) => (
              <Reveal key={s.t} delay={i * 50}>
                <FeatureCard icon={s.icon} title={s.t} description={s.d} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* THREE-TIER DOCS PYRAMID */}
      <section className="relative overflow-hidden bg-gradient-ink py-16 text-white sm:py-20 md:py-24">
        <div className="absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-primary/30 blur-3xl animate-blob" aria-hidden />
        <div className="container-page relative">
          <Reveal>
            <SectionHeading
              title="OECD Three-Tier Documentation"
              subtitle="BEPS Action 13 — the global standard for TP compliance."
              onDark
              align="center"
            />
          </Reveal>
          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {tiers.map((t, i) => (
              <Reveal key={t.t} delay={i * 100}>
                <div
                  className="mx-auto flex items-center gap-4 rounded-2xl border border-white/15 bg-gradient-warm p-5 shadow-elevated"
                  style={{ width: `${t.w}%`, opacity: t.op }}
                >
                  <div className="rounded-xl bg-white/15 p-2.5 text-white">
                    <t.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-white sm:text-base">{t.t}</p>
                    <p className="text-xs text-white/85">{t.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* APA & MAP */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading pill="APA · MAP" title="Dispute Prevention & Resolution" />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal direction="left">
              <article className="h-full rounded-3xl border-2 border-primary/40 bg-card p-7 shadow-elevated sm:p-9">
                <IconBadge icon={Handshake} size="lg" />
                <h3 className="mt-5 text-2xl font-bold">Advance Pricing Agreement (APA)</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Obtain prospective IRS certainty on the correct TP method for specific transactions — before they're challenged.
                </p>
                <ul className="mt-6 space-y-2.5">
                  {["Eliminates penalties on covered transactions", "Unilateral & bilateral options", "Reduces long-term audit risk"].map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
            <Reveal direction="right" delay={120}>
              <article className="h-full rounded-3xl border-2 border-foreground/15 bg-muted p-7 sm:p-9">
                <IconBadge icon={Scale} size="lg" />
                <h3 className="mt-5 text-2xl font-bold">Mutual Agreement Procedure (MAP)</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Resolve double taxation arising from foreign authority TP adjustments through US treaty competent authority coordination.
                </p>
                <ul className="mt-6 space-y-2.5">
                  {["Eliminates double-tax impact", "Treaty-based resolution", "IRS + foreign CA coordination"].map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-muted py-16 sm:py-20 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading title="Industries we serve" align="center" />
          </Reveal>
          <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
            {industries.map((i) => (
              <div
                key={i.t}
                className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold shadow-soft transition hover:-translate-y-0.5 hover:border-primary/40"
              >
                <i.icon className="h-4 w-4 text-primary" />
                {i.t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading title="Why SBCLLC USA Transfer Pricing?" align="center" />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {why.map((w, i) => (
              <Reveal key={w.t} delay={i * 70}>
                <FeatureCard icon={w.icon} title={w.t} description={w.d} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA
        variant="ink"
        title="Protect your intercompany transactions from day one."
        body="Whether you're establishing your first intercompany arrangement, preparing for an IRS examination, or seeking APA certainty — SBCLLC USA has you covered."
        ctaText="Schedule a Free TP Assessment"
      />
    </SiteShell>
  );
}
