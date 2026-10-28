import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, ChartLine, Cog, FileText, Globe2, Shield, Users } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { Reveal } from "@/components/Reveal";
import { PhotoSlab } from "@/components/PhotoSlab";
import { HomeHero } from "@/components/HomeHero";
import { services } from "@/data/services";
import { FaqList } from "@/components/FaqList";
import { BRAND_ALIASES, breadcrumbJsonLd, faqJsonLd, jsonLdScript, ORG_ID, seoMeta, SITE_URL } from "@/lib/seo";
import aboutImg from "@/assets/about-team.jpg";

const HOME_TITLE = "SBC US LLC | SBC USA, SBC US & SBCLLC USA — Tax & Advisory";
// Kept under ~160 chars so it isn't truncated in results; the full BRAND_DESCRIPTION stays in JSON-LD.
const HOME_DESC =
  "SBC US LLC (also SBC USA, SBCLLC USA) provides tax, transfer pricing, CPA outsourcing and compliance across the US, India and the UAE. Kreston member.";

export const Route = createFileRoute("/")({
  head: () => {
    const seo = seoMeta({
      title: HOME_TITLE,
      description: HOME_DESC,
      path: "/",
      keywords:
        "US tax services, transfer pricing, CPA outsourcing, bookkeeping, FP&A, GCC India setup, business restructuring, audit, advisory, India, UAE, USA",
    });
    return {
      ...seo,
      scripts: [
        jsonLdScript({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": ORG_ID,
          name: "SBC US LLC",
          alternateName: [...BRAND_ALIASES],
          url: SITE_URL,
          image: `${SITE_URL}/og-image.jpg`,
          telephone: "+1-210-859-3259",
          email: "info@sbcusllc.com",
          priceRange: "$$",
          areaServed: ["United States", "India", "United Arab Emirates"],
          serviceType: services.map((s) => s.title),
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "18:30",
            },
          ],
        }),
        jsonLdScript(breadcrumbJsonLd([{ name: "Home", path: "/" }])),
        jsonLdScript(faqJsonLd()),
      ],
    };
  },
  component: HomePage,
});

function HomePage() {
  return (
    <SiteShell>
      <HomeHero />

      <Reveal as="section" className="night-stage overflow-hidden py-16 sm:py-20">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-blob" aria-hidden />
        <div className="pointer-events-none absolute inset-0 hero-grid opacity-40" aria-hidden />
        <div className="container-page relative">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">How we help</span>
            <h2 className="mt-3 max-w-2xl text-2xl font-bold text-white sm:text-3xl md:text-4xl">One firm for the work that crosses the US, India and the UAE.</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {[
              {
                icon: FileText,
                slug: "us-tax-services",
                title: "US–India corridor compliance",
                body: "Entity, tax and filings for groups with US and India operations. 88 global applicable compliances handled by one firm.",
              },
              {
                icon: Users,
                slug: "gcc-india-setup",
                title: "India GCC, built and run",
                body: "Workspace, talent, entity and finance, end to end.",
              },
              {
                icon: ChartLine,
                slug: "bookkeeping-fpa",
                title: "Books, FP&A and audit support",
                body: "From clean books to board-ready numbers.",
              },
              {
                icon: Cog,
                slug: "us-cpa-outsourcing",
                title: "Back office for US CPA firms",
                body: "An India team that works to your standards.",
              },
            ].map(({ icon: Icon, slug, title, body }, i) => (
              <Reveal key={title} direction="up" delay={i * 70}>
                <Link
                  to="/services/$slug"
                  params={{ slug }}
                  className="night-card group flex h-full gap-4 rounded-2xl p-6 transition hover:-translate-y-1"
                >
                  <span className="icon-gem icon-gem-sm shrink-0">
                    <Icon strokeWidth={1.75} />
                  </span>
                  <span>
                    <span className="block text-lg font-semibold text-white">{title}</span>
                    <span className="mt-2 block text-sm leading-relaxed text-white/70">{body}</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      {/* SERVICES */}
      <Reveal as="section" className="night-stage-deep overflow-hidden py-16 sm:py-20 md:py-24">
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-primary/25 blur-3xl animate-blob" aria-hidden />
        <div className="container-page relative">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end md:gap-6">
              <div className="max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">What we do</span>
                <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl md:text-5xl">A full spectrum of advisory expertise.</h2>
                <p className="mt-4 text-sm text-white/70 sm:text-base">
                  From taxation and assurance to valuations, M&A and Virtual CFO — one partner, end-to-end.
                </p>
              </div>
              <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                View all services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 md:mt-12">
            {services.map(({ slug, icon: Icon, title, tagline }, i) => (
              <Reveal key={slug} direction="up" delay={i * 80}>
                <Link
                  to="/services/$slug"
                  params={{ slug }}
                  aria-label={`Explore ${title} services`}
                  className="night-card group relative block h-full overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1 active:scale-[0.99] sm:p-7"
                >
                  <span className="icon-gem">
                    <Icon strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-white sm:text-xl">{title}</h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-primary">{tagline}</p>
                  
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition group-hover:gap-2">
                    Explore {title} <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ABOUT TEASER */}
      <Reveal as="section" className="night-stage overflow-hidden py-16 sm:py-20 md:py-24">
        <div className="pointer-events-none absolute inset-0 hero-grid opacity-25" aria-hidden />
        <div className="container-page relative grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <Reveal direction="left" className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-warm opacity-25 blur-2xl animate-blob" aria-hidden />
            <PhotoSlab src={aboutImg} alt="SBC US LLC advisors reviewing plans above a city skyline" width={1280} height={960} />
          </Reveal>
          <Reveal direction="right" delay={120}>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Who we are</span>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl md:text-5xl">A consulting firm built on knowledge & trust.</h2>
            <p className="mt-5 text-sm text-white/70 sm:text-base">
              We help businesses solve their hardest finance and taxation challenges — from MSMEs to
              large corporations. Our sharp analytical skills and deep industry experience give clients
              clarity, not just answers.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4">
              {[
                { icon: Users, t: "270+ professionals" },
                { icon: Globe2, t: "India · UAE · USA" },
                { icon: Award, t: "Kreston member firm" },
                { icon: Shield, t: "Trusted advisors" },
              ].map(({ icon: Icon, t }) => (
                <li key={t} className="night-card flex items-center gap-3 rounded-xl p-4 transition">
                  <span className="icon-gem icon-gem-sm"><Icon strokeWidth={1.75} /></span>
                  <span className="text-sm font-medium text-white">{t}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              Learn about us <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </Reveal>

      <FaqList />

      {/* CTA */}
      <Reveal as="section" className="night-stage-deep overflow-hidden py-16 sm:py-20 md:py-24">
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/45 blur-3xl animate-blob" aria-hidden />
        <div className="pointer-events-none absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-secondary/25 blur-3xl animate-blob" style={{ animationDelay: "3s" }} aria-hidden />
        <div className="container-page relative">
          <Reveal direction="scale">
            <div className="grid gap-6 md:grid-cols-2 md:items-center md:gap-8">
              <div>
                <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">Let's build your next chapter of growth.</h2>
                <p className="mt-4 text-sm text-white/75 sm:text-base">
                  Talk to our specialists about tax, advisory, valuations or transformation. We respond within 24 hours.
                </p>
              </div>
              <div className="flex md:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elevated transition hover:opacity-95 active:scale-[0.98]"
                >
                  Schedule a meeting <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Reveal>
    </SiteShell>
  );
}
