import { ArrowLeftRight, ChartLine, Handshake, Landmark, Scale, Workflow, type LucideIcon } from "lucide-react";

export type ServiceDetailSection = {
  title: string;
  body: string;
  bullets?: string[];
};

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  short: string; // shown on home/services list
  icon: LucideIcon;
  hero: string; // 1–2 sentences for the detail hero
  highlights: { label: string; value: string }[];
  sections: ServiceDetailSection[];
};

export const services: Service[] = [
  {
    slug: "us-tax-services",
    title: "US Tax Services for Global Entities",
    tagline: "Federal · State · International · Transfer Pricing",
    short: "Comprehensive federal, state and international tax compliance for US-incorporated entities with overseas branches.",
    icon: Scale,
    hero: "End-to-end US tax compliance for companies with cross-border operations — across 3 service areas, 44 states, and 20+ international forms.",
    highlights: [
      { label: "Service areas", value: "3" },
      { label: "States covered", value: "44" },
      { label: "Int'l forms filed", value: "20+" },
    ],
    sections: [
      {
        title: "Federal tax compliance — income returns",
        body: "Preparation and filing for every entity structure under US federal law.",
        bullets: [
          "Form 1120 — C-Corporation income tax with all schedules and Schedule M-3",
          "Form 1120-S — S-Corporation pass-through with K-1 statements",
          "Form 1065 — Partnership and Multi-Member LLC returns with K-1 prep",
          "Forms 1040, 1040NR, 1040-SR for individuals",
        ],
      },
      {
        title: "Employment taxes & payroll compliance",
        body: "Full-cycle payroll tax management — quarterly, annual and ongoing deposit obligations.",
        bullets: [
          "Form 941 quarterly and Form 944 annual employment tax returns",
          "Form 940 federal unemployment (FUTA) reporting",
          "FICA deposits, federal withholding and W-2 preparation",
          "New hire reporting and garnishment administration",
        ],
      },
      {
        title: "Specialized federal filings",
        body: "Special entity types, excise obligations and IRS representation.",
        bullets: [
          "Form 990 for tax-exempt organizations and Form 1041 for trusts and estates",
          "Form 720 federal excise tax",
          "Forms 1042 / 1042-S withholding on payments to foreign persons",
          "FinCEN BOI (Beneficial Ownership Information) filings",
        ],
      },
      {
        title: "State tax compliance — 44 states",
        body: "All aspects of state-level tax obligations across varying jurisdictions.",
        bullets: [
          "State income tax, franchise tax and annual reports",
          "Quarterly estimated taxes and sales & use tax",
          "Combined / consolidated multi-state reporting and nexus determinations",
        ],
      },
      {
        title: "International tax & Section 482",
        body: "Cross-border transactions, foreign person payments and beneficial ownership reporting.",
        bullets: [
          "Form 5471 with Schedule M intercompany transactions",
          "Section 482 arm's length pricing for related-party transactions",
          "§§1441/1442 withholding and §1446 partnership withholding",
          "FATCA & FBAR reporting coordinated with federal returns",
        ],
      },
    ],
  },
  {
    slug: "business-restructuring",
    title: "Business Restructuring for US Companies",
    tagline: "Cross-border advisory · Global tax efficiency · TP · Tech-enabled finance",
    short: "Aligning corporate structure, intercompany arrangements and finance operations to maximize tax efficiency across borders.",
    icon: Workflow,
    hero: "For US-based companies with global ambitions — restructuring holdings, intercompany flows and operations to unlock tax efficiency and deal readiness.",
    highlights: [
      { label: "Continents served", value: "3" },
      { label: "Cross-border engagements", value: "100+" },
      { label: "Multi-timezone support", value: "24/7" },
    ],
    sections: [
      {
        title: "Why US companies restructure",
        body: "Holding structures built for US operations become inefficient when layered with foreign subsidiaries. Cross-border profit repatriation and royalty payments generate withholding leakage without proper planning, and intercompany transactions without arm's length pricing expose groups to dual-audit risk.",
      },
      {
        title: "Global tax efficiency",
        body: "Reduce worldwide tax rate by aligning entity structure with jurisdiction-level incentives — UAE's 0–9% CT, India's treaty network, and US GILTI/FDII planning.",
      },
      {
        title: "Transfer pricing compliance",
        body: "Properly documented arm's length pricing for services, IP licensing, loans and product sales — non-negotiable for cross-border companies.",
      },
      {
        title: "Profit repatriation & cash flow",
        body: "Minimize withholding tax leakage and comply with US Subpart F / GILTI rules so offshore profits efficiently reach the US parent.",
      },
      {
        title: "M&A and investment readiness",
        body: "A clean, well-documented structure with audited books across entities materially impacts deal valuation and closing speed.",
      },
      {
        title: "Operational simplification",
        body: "Consolidate entities, harmonize year-ends, unify chart of accounts, and deploy a single cloud ERP across geographies.",
      },
    ],
  },
  {
    slug: "gcc-india-setup",
    title: "Set Up Your GCC in India",
    tagline: "End-to-end advisory · Bookkeeping · FP&A · Finance operations",
    short: "Your trusted partner from strategy to execution — guiding US enterprises through every step of their India GCC journey.",
    icon: Landmark,
    hero: "India is the undisputed global hub for Global Capability Centers. We take you from vision to fully operational GCC in 6 structured phases.",
    highlights: [
      { label: "GCCs in India", value: "2,000+" },
      { label: "People employed", value: "2 Mn+" },
      { label: "Market by 2030", value: "$100B+" },
    ],
    sections: [
      {
        title: "Why India for your GCC",
        body: "Massive English-speaking talent pool, 60–70% lower operating costs vs. the US, FDI-friendly policies, SEZ and R&D incentives, IST time-zone advantage, and Grade-A office space in Hyderabad, Bengaluru, Pune and Chennai.",
      },
      {
        title: "01 · Vision & strategy",
        body: "Define GCC objectives and operating model. Choose structure: WOS / Branch / LLP / JV.",
      },
      {
        title: "02 · Legal entity setup",
        body: "RBI/FEMA filings, incorporation and SEZ / STPI registration where applicable.",
      },
      {
        title: "03 · Location & real estate",
        body: "Office space identification, lease negotiation and city analysis across India's top GCC hubs.",
      },
      {
        title: "04 · Talent & HR",
        body: "Workforce planning, target headcount, and end-to-end people operations setup.",
      },
      {
        title: "05 · Finance & compliance",
        body: "All statutory registrations (PF, GST, PT, IEC), accounting setup and ongoing compliance.",
      },
      {
        title: "06 · Operations & ERP",
        body: "IT infrastructure, workplace setup and unified cloud ERP across geographies.",
      },
    ],
  },
  {
    slug: "us-cpa-outsourcing",
    title: "Outsourcing for US CPA Firms",
    tagline: "Audit · ICFR · IPO readiness · ESG · Bookkeeping · FP&A",
    short: "Expert expansion solutions for growing US CPA firms — from audit support and SOX to fractional CFO services.",
    icon: Handshake,
    hero: "A complete extension of your CPA practice — assurance, internal controls, capital markets readiness and advisory delivered at Big-4 quality.",
    highlights: [
      { label: "Service lines", value: "6" },
      { label: "Frameworks", value: "GAAS · SOX · COSO · PCAOB" },
      { label: "Coverage", value: "End-to-end" },
    ],
    sections: [
      {
        title: "Audit support",
        body: "GAAS-compliant assurance and external audit coordination.",
        bullets: [
          "Liaison with external auditors, PBC list management and fieldwork coordination",
          "Audit-ready work papers, trial balances and reconciliations",
          "GAAP-compliant financial statements with footnotes",
          "Forensic accounting and litigation support",
        ],
      },
      {
        title: "ICFR — internal controls over financial reporting",
        body: "Strengthening controls across SOX §302, §404, COSO and PCAOB frameworks — control design, documentation, risk mapping and monitoring.",
      },
      {
        title: "IPO readiness",
        body: "SEC S-1 preparation and capital-markets readiness, from financial statement remediation to disclosure drafting and auditor coordination.",
      },
      {
        title: "ESG reporting",
        body: "Environmental, Social and Governance reporting aligned with leading frameworks for investors, regulators and stakeholders.",
      },
      {
        title: "Bookkeeping foundation",
        body: "Day-one accuracy with full-cycle bookkeeping, reconciliations and monthly close.",
      },
      {
        title: "FP&A & advisory — fractional CFO",
        body: "Strategic financial leadership: budgeting, forecasting, KPI dashboards and quarterly business reviews.",
      },
    ],
  },
  {
    slug: "bookkeeping-fpa",
    title: "Bookkeeping & FP&A for US SMEs",
    tagline: "Bookkeeping · FP&A · Audit support",
    short: "Clarity, control and confidence for US small and mid-sized businesses — without the cost of a full-time finance team.",
    icon: ChartLine,
    hero: "Professional bookkeeping, FP&A and audit support that transform financial chaos into a competitive advantage.",
    highlights: [
      { label: "SME failures from cash-flow gaps", value: "82%" },
      { label: "SMEs without in-house FP&A", value: "60%" },
      { label: "Faster growth with structured FP&A", value: "3×" },
    ],
    sections: [
      {
        title: "Bookkeeping & core accounting",
        body: "Foundation accuracy for informed decisions.",
        bullets: [
          "Daily transaction processing and proper classification",
          "Monthly bank and credit card reconciliation",
          "AR & AP management to protect cash flow",
          "Payroll, W-2 / 1099 processing and 401(k) admin",
          "Monthly P&L, Balance Sheet and Cash Flow on accrual basis",
          "Fixed asset register and depreciation per US GAAP",
        ],
      },
      {
        title: "Financial Planning & Analysis (FP&A)",
        body: "Turning numbers into decisions that drive growth.",
        bullets: [
          "P&L analysis with margin and driver insights",
          "Budget vs. actual reporting with variance commentary",
          "Rolling 13-week cash forecasts and scenario modeling",
          "KPI dashboards — CAC, LTV, gross margin, EBITDA",
          "Annual budgeting and quarterly business reviews",
        ],
      },
      {
        title: "Audit support & compliance assurance",
        body: "Meet lender, investor and regulatory expectations with audit-ready records, schedules and documentation.",
      },
    ],
  },
  {
    slug: "transfer-pricing",
    title: "Transfer Pricing — US Practice",
    tagline: "IRC §482 · BEPS advisory · Three-tier documentation · APA / MAP",
    short: "IRC §482 compliance, BEPS advisory and dispute resolution for US-incorporated entities with overseas operations.",
    icon: ArrowLeftRight,
    hero: "We assist US-incorporated entities with overseas operations on IRC §482 compliance, anchored by the arm's length standard — Big-4 quality at competitive cost.",
    highlights: [
      { label: "Professionals", value: "270+" },
      { label: "Countries", value: "US · India · UAE" },
      { label: "Network", value: "Kreston" },
    ],
    sections: [
      {
        title: "01 · Structuring & benchmarking",
        body: "FAR analysis and method selection under the §482 Best Method Rule (Treas. Reg. §1.482-1(c)).",
      },
      {
        title: "02 · Policy setting",
        body: "Group TP policy for goods (§1.482-3), services (§1.482-9), IP (§1.482-4) and financial transactions (§1.482-2).",
      },
      {
        title: "03 · Implementation & monitoring",
        body: "Operationalising TP policies, monitoring prices and managing year-end adjustments.",
      },
      {
        title: "04 · Adjustments & compliance",
        body: "True-ups, secondary adjustments under §1.482-1(g) and Form 5471 / 5472 disclosures.",
      },
      {
        title: "05 · Three-tier documentation",
        body: "Local File (§6662), Master File and CbCR (Form 8975) — §6662 penalty protection for US MNE groups with revenue ≥ $850M.",
      },
      {
        title: "06 · Audits & dispute resolution",
        body: "IRS examination support, APA (Rev. Proc. 2015-41), MAP (Rev. Proc. 2006-54) and US Tax Court litigation support.",
      },
      {
        title: "Method coverage",
        body: "CUP / CUT, RPM, Cost Plus, CPM (≡ OECD TNMM), PSM and Income Method / Unspecified — selecting the most reliable arm's length result for each transaction.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
