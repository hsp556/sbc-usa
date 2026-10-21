export type TeamSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  photo: string;
  email: string;
  phone: string;
  experience?: string;
  company: string;
  practiceAreas: string;
  summary: string;
  sections: TeamSection[];
};

export const team: TeamMember[] = [
  {
    slug: "mithilesh",
    name: "CA Mithilesh Sai Sannareddy",
    role: "Founder and CEO",
    photo: "/team/mithilesh.jpg",
    email: "mithilesh@sbcllp.in",
    phone: "+91 95531 11131",
    experience: "16+ years",
    company: "SBC",
    practiceAreas: "Global Transfer Pricing, International Taxation, Litigation Business Advisory",
    summary:
      "Founder and CEO. Transfer pricing, international tax, regulatory advisory and litigation, with 16+ years of experience.",
    sections: [
      {
        title: "Profile",
        paragraphs: [
          "Mithilesh has over 15 years of management and consultancy experience in assisting clients on Taxation, Transfer Pricing, Regulatory matters, Advisory and Litigation. Mithilesh’s expertise and experience include Transfer Pricing — Advisory, Documentation, Representation, filing Advance Pricing Agreements (APA — Bilateral and Unilateral) applications and related assignments, Global Transfer Pricing Review for MNEs, planning and implementation of BEPS three-tier documentation, international tax inbound and outbound advisory, advisory in Indian taxation, international tax and the Double Taxation Avoidance Agreement (DTAA) for the US, UK and Singapore, advising clients on managing their tax structures including outbound investments, evaluation of alternative cross-border operating structures for MNEs, transaction tax and corporate tax advisory for clients in technology, pharma, construction and real estate in relation to tax, FEMA, SEBI and stamp duty regulations, tax due diligence for listed and unlisted clients, and liaising with statutory authorities, bankers, lawyers and company secretaries.",
          "Mithilesh has represented more than 50 tribunal appeals before Hyderabad ITAT and made more than 100 CIT(A) and DRP filings and representations. Mithilesh is a Chartered Accountant and a lawyer by profession. He also holds a certification in International Taxation and Forensic Audit. He is a key resource person of SICASA for International Taxation and Transfer Pricing matters.",
        ],
      },
      {
        title: "Strengths and locations",
        bullets: [
          "SBC is a tax boutique and consulting firm based in Hyderabad, with a pan-India presence and overseas presence in the US and the UAE. The firm is 250+ people strong, and Mithilesh has been a driving force for its management and administration.",
          "SBC has strong credentials across 350+ multinational clients and is recognized for cross-border taxation and litigation support. Mithilesh’s experience has contributed to that work.",
        ],
      },
      {
        title: "Professional affiliations",
        bullets: [
          "Ex-Big 4, with experience focused on transfer pricing and international taxation.",
          "Resource person and speaker for SICASA and the ICAI Committee on International Taxation and Transfer Pricing.",
          "Co-opted member of the Committee on International Taxation of ICAI.",
        ],
      },
      {
        title: "Recognition and achievements",
        bullets: [
          "Times 40 under 40 — Brightest Young Entrepreneur Award, 2022.",
          "TEDx Mumbai speaker, 2022.",
          "SBC has been featured for its services in Forbes, Business Standard, Consultants Review and Silicon India.",
        ],
      },
      {
        title: "Education",
        bullets: ["Chartered Accountant, ICAI", "FCA, LLB, PGDBM"],
      },
    ],
  },
  {
    slug: "ravi-kiran-vadlamani",
    name: "CA Ravi Kiran Vadlamani",
    role: "Partner",
    photo: "/team/ravi-kiran.jpg",
    email: "raviv@sbcllp.in",
    phone: "+91 70755 65121",
    experience: "25+ years",
    company: "SBC",
    practiceAreas: "Audit and Assurance, and Outsourcing",
    summary:
      "Partner for audit, assurance and outsourcing, with 25+ years of experience including nearly 13 years with Big 4 firms.",
    sections: [
      {
        title: "Profile",
        paragraphs: [
          "Ravi has over 25 years of experience, including nearly 13 years with Big 4 firms, specializing in public accounting, assurance and advisory for multinational SEC-registered foreign private issuers. As leader of Audit, Assurance and Outsourcing, he focuses on accounting standards implementation, ICFR (COSO framework), financial statement preparation and periodic report assistance.",
          "Ravi previously worked at Deloitte LLP in London, where he was part of Global IFRS and Offerings Services (GIOS), contributing to international clients’ public and non-public offerings in the US and advising on IFRS adoption. With expertise in US GAAP, IFRS and SEC regulations, he has led training and technical accounting projects, including US IPOs and secondary offerings. His audit experience covers PCAOB standards, US GAAS and Indian GAAS. He has served in London, New York and Shanghai.",
          "Before his London secondment, he was a Senior Manager with GIOS in Hyderabad, overseeing the Health Sciences and Government vertical at the external audit practice for US engagement teams. Ravi joined Deloitte & Touche in 2005, after more than five years in the Assurance practice at Lovelock & Lewes, a PricewaterhouseCoopers member firm, supporting the Global Capital Markets Group.",
          "Ravi is a Chartered Accountant (1999) and a Cost and Management Accountant (1997) from India, and passed the Certified Public Accountant exam from the Colorado State Board of Accountancy, USA, in 2006.",
        ],
      },
    ],
  },
  {
    slug: "raja-vure",
    name: "CA Raja Vure",
    role: "Partner",
    photo: "/team/raja-vure.jpg",
    email: "rajavure@sbcllp.in",
    phone: "+91 92810 54062",
    experience: "18+ years",
    company: "SBC",
    practiceAreas: "Practice Management",
    summary:
      "Partner. A Chartered Accountant with 18 years across finance, corporate legal, and domestic and international taxation.",
    sections: [
      {
        title: "Profile",
        paragraphs: [
          "Raja Vure is a Chartered Accountant with 18 years of professional experience. His work covers finance, corporate legal, and domestic and international taxation, including direct, indirect and international tax, financial planning and implementation, corporate structuring, inbound and outbound structuring, compliance management, cross-border transactions, and SEZ advisory and implementation.",
          "He worked with KPMG, where he built experience in direct and international tax advisory and litigation. At Lakshmikumaran & Sridharan and BDO he worked on corporate legal and taxation matters, including regulatory compliance and tax structuring, and advised multinational corporations on complex tax issues. In a start-up professional services organisation he contributed to growth and business strategy.",
          "Raja’s experience in finance and taxation has made him a trusted advisor for high-profile clients. His work on corporate structuring, cross-border transactions, SEZ advisory, tax advisory and M&A advisory is aimed at solutions that fit the client.",
        ],
      },
    ],
  },
  {
    slug: "balakrishnam-voruganti",
    name: "CA Balakrishnam Voruganti",
    role: "Partner",
    photo: "/team/balakrishnam.jpg",
    email: "balakrishnam@sbcllp.in",
    phone: "+91 96180 42747",
    company: "SBC",
    practiceAreas: "Outsourcing and Compliances",
    summary:
      "Partner for outsourcing and compliances, with over 13 years across audit, taxation, shared services and finance leadership.",
    sections: [
      {
        title: "Profile",
        paragraphs: [
          "Balakrishnam has over 13 years of experience assisting clients with auditing, taxation, shared service center setup, outsourcing, business analysis, system study and setup, management reporting, financial reporting, accounting systems and procedures, and business redesign aligned to internal controls.",
          "He was previously with a Big 4 firm in audit, handling statutory audits, tax audits and inventory audits. He also has industry experience as country head of a multinational, leading the finance team on day-to-day activity and business decisions, running a shared service center, and working with stakeholders.",
          "Balakrishnam is a Chartered Accountant, holds an MBA, a Diploma in Information Systems Audit (DISA), and a B.Com.",
        ],
      },
    ],
  },
];

export const getTeamMember = (slug: string) => team.find((member) => member.slug === slug);
