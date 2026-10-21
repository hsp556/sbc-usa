// Centralized SEO helpers for SBCLLC USA

export const SITE_URL = "https://www.sbcusllc.com";
export const SITE_NAME = "SBCLLC USA";
export const SITE_SLOGAN = "Local connect. Global outlook.";
export const LOGO_URL = `${SITE_URL}/sbc-logo.png`;
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const CONTACT_EMAIL = "info@sbcusllc.com";
export const CONTACT_PHONE = "+1-210-859-3259";

export type SeoInput = {
  title: string;
  description: string;
  path: string; // e.g. "/about"
  image?: string;
  type?: "website" | "article" | "profile";
  keywords?: string;
};

export function seoMeta({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  keywords,
}: SeoInput) {
  const url = `${SITE_URL}${path}`;
  const meta = [
    { title },
    { name: "description", content: description },
    ...(keywords ? [{ name: "keywords", content: keywords }] : []),
    { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
    { name: "googlebot", content: "index, follow" },

    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:type", content: type },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: "en_US" },
    { property: "og:image", content: image },
    { property: "og:image:alt", content: title },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];

  const links = [
    { rel: "canonical", href: url },
    { rel: "alternate", hrefLang: "en", href: url },
    { rel: "alternate", hrefLang: "x-default", href: url },
  ];

  return { meta, links };
}

export function jsonLdScript(data: unknown) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(data),
  };
}

export const firmFaqs = [
  {
    q: "What does SBCLLC USA do?",
    a: "SBCLLC USA provides tax, finance and compliance for businesses across the United States, India and the UAE. The work covers US tax filings, transfer pricing, bookkeeping and FP&A, audit support, India GCC setup, business restructuring, and back-office support for US CPA firms.",
  },
  {
    q: "Where does SBCLLC USA operate?",
    a: "SBCLLC USA operates in three countries: the United States, India and the United Arab Emirates, including Dubai. Teams handle US–India corridor compliance and cross-border filings from that footprint.",
  },
  {
    q: "How large is SBCLLC USA?",
    a: "SBCLLC USA has 270+ professionals and serves 350+ multinational clients. The firm handles 88 global applicable compliances for groups with US and India operations.",
  },
  {
    q: "Is SBCLLC USA part of a professional network?",
    a: "Yes. SBCLLC USA is an independent member firm of Kreston.",
  },
  {
    q: "How do I contact SBCLLC USA?",
    a: "Email info@sbcusllc.com or call +1 (210) 859-3259. A senior advisor replies within 24 hours on business days. Office hours are Monday to Friday, 9:00 AM to 6:30 PM IST.",
  },
] as const;

export function faqJsonLd(items: readonly { q: string; a: string }[] = firmFaqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: "SBCLLC USA",
  legalName: "SBCLLC USA",
  alternateName: ["SBCLLC", "SBC LLC USA", "SBC"],
  slogan: SITE_SLOGAN,
  url: SITE_URL,
  logo: LOGO_URL,
  image: DEFAULT_OG_IMAGE,
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONE,
  description:
    "SBCLLC USA provides tax, finance and compliance for businesses across the United States, India and the UAE. The firm has 270+ professionals, serves 350+ multinational clients, and is an independent member of Kreston.",
  foundingDate: "2017",
  knowsAbout: [
    "US federal and state tax",
    "Transfer pricing",
    "Bookkeeping and FP&A",
    "US CPA firm outsourcing",
    "India GCC setup",
    "Business restructuring",
  ],
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United Arab Emirates" },
  ],
  memberOf: {
    "@type": "Organization",
    name: "Kreston",
    url: "https://www.kreston.com",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: CONTACT_PHONE,
      contactType: "customer service",
      email: CONTACT_EMAIL,
      areaServed: ["US", "IN", "AE"],
      availableLanguage: ["English"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:30",
      },
    },
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_SLOGAN,
  inLanguage: "en",
  publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL, logo: LOGO_URL },
};

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}
