// Per-service Q&A shown on each service page (<FaqList />) and emitted as FAQPage JSON-LD.
// Every fact here is restated from that service's page or its entry in services.ts —
// keep them in sync when page content changes, and don't add claims that aren't on the page.

export type Faq = { q: string; a: string };

export const serviceFaqs: Record<string, Faq[]> = {
  "us-tax-services": [
    {
      q: "Which US federal tax returns does SBC US LLC prepare?",
      a: "SBC US LLC prepares federal returns for every entity structure: Form 1120 with Schedule M-3 for C-Corporations, Form 1120-S with K-1 statements for S-Corporations, Form 1065 with partner K-1s for partnerships and LLCs, and Forms 1040, 1040NR and 1040-SR for individuals. It also files Form 990 for non-profits, Form 1041 for trusts and estates, and Form 720 federal excise tax.",
    },
    {
      q: "Does SBC US LLC file Form 5471, FBAR and FATCA reports?",
      a: "Yes. SBC US LLC files Form 5471 information returns for foreign corporations, including Schedule M intercompany transactions, plus FATCA reporting on Form 8938 and FBAR reporting on FinCEN 114, coordinated with the federal return. International work also covers §1441, §1442 and §1446 withholding, Forms 1042 / 1042-S for payments to foreign persons, and FinCEN BOI beneficial ownership reporting.",
    },
    {
      q: "How many US states does SBC US LLC cover for state tax compliance?",
      a: "SBC US LLC handles state tax compliance across 44 states. Coverage includes state income tax, franchise tax, Secretary of State annual reports, quarterly estimated taxes, sales & use tax with nexus determinations, and combined or consolidated reporting for companies with multi-state operations.",
    },
    {
      q: "Does SBC US LLC handle CFC, GILTI and Subpart F reporting?",
      a: "Yes. SBC US LLC's CFC compliance work covers Form 5471 across all categories, Subpart F passive income reporting, GILTI / NCTI (global intangible low-tax income), Schedule J earnings & profits tracking, Schedule M related-party intercompany reporting, and PFIC reporting on Form 8621, for US-incorporated entities with foreign branches and subsidiaries.",
    },
    {
      q: "Is transfer pricing included in SBC US LLC's US tax services?",
      a: "Yes. SBC US LLC builds IRC §482 transfer pricing into its US tax filings, with documented arm's length pricing for every related-party transaction. Support includes contemporaneous §482 documentation, benchmarking (CUP, RPM, CPM, TNMM, Profit Split), TP policy design, Advance Pricing Agreement support with the IRS, §6038A / §6038C disclosures and §6662 penalty protection.",
    },
  ],
  "business-restructuring": [
    {
      q: "Why do US companies restructure their international operations?",
      a: "US companies restructure when holding structures built for US operations become inefficient once foreign subsidiaries are added. SBC US LLC addresses three problems: structures that block dividend repatriation and create withholding tax leakage, intercompany transactions without transfer pricing documentation that expose the group to dual IRS and foreign tax audits, and overlapping US and foreign tax obligations that treaty relief can recover.",
    },
    {
      q: "What does SBC US LLC's business restructuring service include?",
      a: "SBC US LLC delivers restructuring through four service pillars: cross-border tax advisory (GILTI / FDII / BEAT analysis, double tax treaty application, foreign tax credit optimization, PE risk assessment), transfer pricing (TP policy design, IRC §482 documentation, OECD Local/Master File & CbCR, APA support), multi-entity bookkeeping (US GAAP plus IFRS / local GAAP, multi-currency consolidation), and technology & finance systems (NetSuite, Xero or QBO ERP).",
    },
    {
      q: "How does a business restructuring engagement with SBC US LLC work?",
      a: "SBC US LLC runs restructuring in five phases. Discovery & Diagnostic maps entities and reviews structure, TP and ERP. Strategy & Design sets the holding structure, treaty applications, TP pricing and tech roadmap. Implementation covers entity transfers, IRS form filings, agreements and ERP migration. Compliance & Docs produces TP documentation, consolidated financials and audit workpapers. Annual Monitoring refreshes TP policy and recalculates GILTI/FDII.",
    },
    {
      q: "What deliverables does a restructuring engagement produce?",
      a: "Key deliverables from an SBC US LLC restructuring engagement include a US & foreign tax returns package, TP documentation under IRC §482, an intercompany agreement suite, Local File / Master File / CbCR, consolidated group financials, ERP implementation & migration, a GILTI / FDII / BEAT planning memo, an executive KPI dashboard, and IRS audit defence workpapers.",
    },
    {
      q: "How can restructuring improve a US group's global tax efficiency?",
      a: "Restructuring can reduce a group's worldwide tax rate by aligning entity structure with jurisdiction-level incentives. SBC US LLC's planning considers the UAE's 0–9% corporate tax, India's treaty network and US GILTI / FDII planning, and aims to minimize withholding tax leakage while complying with Subpart F / GILTI rules so offshore profits efficiently reach the US parent.",
    },
  ],
  "gcc-india-setup": [
    {
      q: "What does SBC US LLC's GCC setup service in India include?",
      a: "SBC US LLC sets up Global Capability Centers in India for US enterprises in six phases: vision & strategy, legal entity setup, location & real estate, talent & HR, finance & compliance, and operations & scale. The work runs from defining GCC objectives and operating model, through location analysis across Hyderabad, Bengaluru, Pune and Chennai, to recruitment, payroll, process SOPs and KPI dashboards.",
    },
    {
      q: "Which legal structures can a US company use for a GCC in India?",
      a: "SBC US LLC helps US enterprises choose a WOS, branch, LLP or JV structure for their India GCC. Legal entity setup then covers RBI/FEMA filings and incorporation, all statutory registrations (PF, GST, PT and IEC), and optional SEZ / STPI registration, with transfer pricing and intercompany setup handled as part of finance & compliance.",
    },
    {
      q: "How long does it take to set up a GCC in India with SBC US LLC?",
      a: "SBC US LLC's stated pace is entity incorporation in 45 days and a full team in 6 months. For a US MedTech corporation's GCC in Hyderabad, SBC US LLC incorporated a WOS with 12 RBI/FEMA registrations in 45 days, onboarded 350+ engineers & analysts in 5 months, and reached operations in under 6 months.",
    },
    {
      q: "Which Indian compliance areas does SBC US LLC handle for a GCC?",
      a: "SBC US LLC covers six Indian regulatory areas for a GCC: direct tax (corporate tax, advance tax, TDS, tax audit), GST (monthly returns, input tax credit, SOFTEX), transfer pricing (Form 3CEB, APA, CbCR), company secretarial (board minutes, MCA/ROC, AGM), FEMA & RBI (FDI compliance, ECB filings, APR/FLA, FCGPR), and labour & employment (PF/ESI/LWF, professional tax, POSH).",
    },
    {
      q: "What finance operations does SBC US LLC run for an India GCC?",
      a: "SBC US LLC uses a five-tier finance framework that scales with the GCC: core accounting (bookkeeping, payroll, AR/AP, monthly financials), FP&A (P&L analysis, budget variance, KPI dashboards), cash management (liquidity planning, working capital optimization), systems & tech (automation, ERP setup, real-time reporting) and fractional CFO (strategic advisory, investor reporting, M&A support), combining US GAAP and local India knowledge.",
    },
  ],
  "us-cpa-outsourcing": [
    {
      q: "What can a US CPA firm outsource to SBC US LLC?",
      a: "US CPA firms can outsource six service lines to SBC US LLC: audit support to GAAS standards, ICFR and SOX 302 & 404 compliance, IPO readiness including SEC S-1 support, ESG reporting, bookkeeping from basic tiers to cloud ERP migration, and FP&A & advisory including fractional CFO services. Clients work with a dedicated client manager, with no offshoring handoffs.",
    },
    {
      q: "What audit support does SBC US LLC provide to CPA firms?",
      a: "SBC US LLC provides GAAS-compliant audit support in four areas: external audit coordination (auditor liaison, PBC lists, fieldwork, auditor responses); audit-ready work papers, trial balances and reconciliations; GAAP financial statements with footnotes for boards, investors and due diligence; and forensic investigations covering fraud, litigation support, whistleblower claims and expert testimony.",
    },
    {
      q: "Does SBC US LLC help with SOX 404 and ICFR compliance?",
      a: "Yes. SBC US LLC supports internal controls over financial reporting across SOX §302 and §404, COSO and PCAOB frameworks. Work covers COSO-aligned control design and risk-to-control mapping, walkthrough testing, gap analysis and deficiency identification, management assessment and auditor coordination, and remediation through corrective actions and streamlined control environments.",
    },
    {
      q: "How does SBC US LLC support IPO readiness?",
      a: "SBC US LLC supports pre-IPO companies in five steps: financial restatement, SEC filing support including S-1 preparation, ICFR build-out, investor-grade reporting, and transaction advisory. The work spans financial statement remediation, disclosure drafting and auditor coordination, giving US CPA firms capital-markets readiness support for their clients.",
    },
    {
      q: "What ESG reporting does SBC US LLC offer?",
      a: "SBC US LLC builds audit-ready ESG disclosure frameworks. Environmental reporting covers carbon footprint and GHG reporting, Scope 1, 2 & 3 reporting and TCFD climate risk disclosure. Social reporting covers workforce diversity, supply chain due diligence and DEI disclosure. Governance reporting covers board composition, executive pay transparency, anti-corruption compliance and ethics & whistleblower programs.",
    },
  ],
  "bookkeeping-fpa": [
    {
      q: "What bookkeeping services does SBC US LLC provide for US small businesses?",
      a: "SBC US LLC provides bookkeeping for US small and mid-sized businesses covering daily transaction processing, monthly bank and credit card reconciliation, AR & AP management, payroll with federal/state filings, W-2 / 1099 processing and 401(k) contributions, fixed asset registers with US GAAP depreciation, and monthly P&L, Balance Sheet and Cash Flow statements on an accrual basis.",
    },
    {
      q: "What FP&A services does SBC US LLC offer SMEs?",
      a: "SBC US LLC's FP&A service turns numbers into decisions for US SMEs. It includes P&L analysis with margin and revenue-driver insights, monthly budget vs. actual variance reports with management commentary, 13-week rolling cash flow forecasts and scenario modeling, KPI dashboards tracking CAC, LTV, gross margin and EBITDA, annual budgeting, and quarterly business reviews.",
    },
    {
      q: "Does SBC US LLC help SMEs prepare for audits and lender reporting?",
      a: "Yes. SBC US LLC's audit support for SMEs covers audit preparation (schedules, PBC lists, auditor coordination), lender reporting including bank covenant certificates and SBA reporting, CPA-ready review and compilation statements, remediation of management letter findings, internal controls gap identification, and investor-grade monthly or quarterly financials with footnotes and MD&A.",
    },
    {
      q: "Which bookkeeping and FP&A package fits my business?",
      a: "SBC US LLC offers three customizable packages. Essentials, for startups and sole proprietors, covers monthly bookkeeping, reconciliations, basic financials, payroll and AR/AP tracking. Growth, for growing SMEs of $1M–$10M, adds budget vs. actual reporting, KPI dashboards, cash flow forecasting and quarterly reviews. Scale, for established businesses of $10M+, adds strategic planning, audit coordination, lender/investor reporting and internal controls review.",
    },
    {
      q: "How does SBC US LLC onboard a new bookkeeping client?",
      a: "SBC US LLC onboards new clients in four steps: a 30-minute discovery call to review fit and needs, a scope and proposal stage with a tailored package and pricing, clean-up and setup covering data migration and control build, then go-live with monthly close and dashboards. The firm works in QuickBooks, Xero and NetSuite with businesses of $500K–$50M.",
    },
  ],
  "transfer-pricing": [
    {
      q: "What transfer pricing services does SBC US LLC offer?",
      a: "SBC US LLC offers 12 transfer pricing services for US-incorporated entities with overseas operations: IRC §482 documentation, TP policy design, arm's length benchmarking, OECD three-tier documentation, intercompany agreements, Form 5471 Schedule M disclosures, BEPS advisory including Pillar Two readiness, APA support, MAP proceedings, §6662 penalty protection, IRS audit defense, and §6038A / §6038C related-party disclosures.",
    },
    {
      q: "What does OECD three-tier transfer pricing documentation include?",
      a: "OECD three-tier documentation under BEPS Action 13 has three parts. The Local File gives transaction-level analysis and benchmarking for the local entity. The Master File gives a group-wide overview of global operations, TP policies and value chain. The Country-by-Country Report (CbCR, Form 8975) gives jurisdiction-level revenue, profit, taxes and employees. SBC US LLC prepares all three.",
    },
    {
      q: "What are the penalties for inadequate transfer pricing documentation?",
      a: "Without contemporaneous §6662 documentation, IRS transfer pricing adjustments carry a 20% penalty, rising to 40% for gross misstatements. Prices not at arm's length can also attract simultaneous IRS and foreign tax authority scrutiny. SBC US LLC prepares contemporaneous documentation for all intercompany transactions to serve as a §6662 penalty shield.",
    },
    {
      q: "What is the difference between an APA and a MAP in transfer pricing?",
      a: "An Advance Pricing Agreement (APA) gives prospective IRS certainty on the correct transfer pricing method for specific transactions before they are challenged, in unilateral or bilateral form. A Mutual Agreement Procedure (MAP) resolves double taxation from foreign authority TP adjustments through US treaty competent authority coordination. SBC US LLC supports both, under Rev. Proc. 2015-41 and Rev. Proc. 2006-54 respectively.",
    },
    {
      q: "Which transfer pricing methods does SBC US LLC use?",
      a: "SBC US LLC selects transfer pricing methods under the §482 Best Method Rule (Treas. Reg. §1.482-1(c)) following a FAR analysis. Coverage includes CUP / CUT, RPM, Cost Plus, CPM (equivalent to OECD TNMM), PSM and the Income Method / Unspecified methods, selecting the most reliable arm's length result for each transaction.",
    },
  ],
};
