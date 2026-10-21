import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, ChartLine, Cog, FileText, Globe2, Shield, Sparkles, Users } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { Reveal } from "@/components/Reveal";
import { PracticeSnapshot } from "@/components/PracticeSnapshot";
import { PhotoSlab } from "@/components/PhotoSlab";
import { services } from "@/data/services";
import { FaqList } from "@/components/FaqList";
import { breadcrumbJsonLd, faqJsonLd, jsonLdScript, seoMeta, SITE_NAME, SITE_URL } from "@/lib/seo";
import heroGlobe from "@/assets/hero-globe.jpg";
import aboutImg from "@/assets/about-team.jpg";

const HOME_TITLE = "SBCLLC USA | Global Tax, Audit & Advisory Consulting";
const HOME_DESC =
  "SBCLLC USA offers US tax, audit, transfer pricing, FP&A and CPA outsourcing for businesses across India, UAE and the USA.";

export const Route = createFileRoute("/")({
  head: () => {
    const seo = seoMeta({
      title: HOME_TITLE,
      description: HOME_DESC,
      path: "/",
      keywords:
        "SBCLLC USA, US tax services, transfer pricing, CPA outsourcing, bookkeeping, FP&A, GCC India setup, business restructuring, audit, advisory, India, UAE, USA",
    });
    return {
      ...seo,
      scripts: [
        jsonLdScript({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: SITE_NAME,
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
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-hero-ink text-white">
        <div className="absolute inset-0 -z-20" aria-hidden>
          <img
            src={heroGlobe}
            alt=""
            className="h-full w-full object-cover object-[70%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.08_0.03_255/0.94)] via-[oklch(0.10_0.03_255/0.82)] to-[oklch(0.10_0.03_255/0.45)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.03_255/0.7)] via-transparent to-[oklch(0.08_0.03_255/0.35)]" />
        </div>

        <div className="container-page relative grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-20">
          <div className="max-w-xl">
            <Reveal direction="up">
              <span className="inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                <Sparkles className="h-3.5 w-3.5" strokeWidth={1.75} /> Local connect. Global outlook.
              </span>
            </Reveal>
            <Reveal direction="up" delay={120}>
              <h1 className="mt-4 text-[2.6rem] font-bold leading-[1.02] tracking-tight text-white sm:text-5xl md:text-[4.1rem]">
                Strategy for growth.
                <span className="mt-1 block text-primary">Built to last.</span>
              </h1>
              <span className="mt-6 block h-1 w-16 rounded-full bg-primary" />
            </Reveal>
            <Reveal direction="up" delay={220}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                Tax, finance and compliance for businesses across the US, India and the UAE.
                One firm for entity work, filings, books, FP&A and audit support.
              </p>
            </Reveal>
            <Reveal direction="up" delay={300}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:opacity-95"
                >
                  Explore services
                  <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/70"
                >
                  Book a consultation
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal direction="right" delay={160}>
            <PracticeSnapshot />
          </Reveal>
        </div>
      </section>

      <Reveal as="section" className="py-16 sm:py-20">
        <div className="container-page">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">How we help</span>
            <h2 className="mt-3 max-w-2xl text-2xl font-bold sm:text-3xl md:text-4xl">One firm for the work that crosses the US, India and the UAE.</h2>
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
                  className="group flex h-full gap-4 rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated"
                >
                  <span className="icon-gem icon-gem-sm shrink-0">
                    <Icon strokeWidth={1.75} />
                  </span>
                  <span>
                    <span className="block text-lg font-semibold">{title}</span>
                    <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">{body}</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      {/* SERVICES */}
      <Reveal as="section" className="bg-gradient-soft py-16 sm:py-20 md:py-24">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end md:gap-6">
              <div className="max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">What we do</span>
                <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-5xl">A full spectrum of advisory expertise.</h2>
                <p className="mt-4 text-sm text-muted-foreground sm:text-base">
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
                  className="group relative block h-full overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-[oklch(0.97_0.02_250)] via-card to-[oklch(0.93_0.05_250)] p-6 shadow-soft transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated active:scale-[0.99] sm:p-7"
                >
                  <span className="icon-gem">
                    <Icon strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold sm:text-xl">{title}</h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-[oklch(0.45_0.15_255)]">{tagline}</p>
                  
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
      <Reveal as="section" className="py-16 sm:py-20 md:py-24">
        <div className="container-page grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <Reveal direction="left" className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-warm opacity-25 blur-2xl animate-blob" aria-hidden />
            <PhotoSlab src={aboutImg} alt="SBCLLC USA advisors reviewing plans above a city skyline" width={1280} height={960} />
          </Reveal>
          <Reveal direction="right" delay={120}>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Who we are</span>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-5xl">A consulting firm built on knowledge & trust.</h2>
            <p className="mt-5 text-sm text-muted-foreground sm:text-base">
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
                <li key={t} className="flex items-center gap-3 rounded-xl border border-border bg-gradient-to-br from-[oklch(0.97_0.02_250)] via-card to-[oklch(0.93_0.05_250)] p-4 transition hover:border-primary/40 hover:shadow-soft">
                  <span className="icon-gem icon-gem-sm"><Icon strokeWidth={1.75} /></span>
                  <span className="text-sm font-medium">{t}</span>
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
      <Reveal as="section" className="pb-16 sm:pb-20 md:pb-24">
        <div className="container-page">
          <Reveal direction="scale">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-ink p-8 text-ink-foreground sm:p-10 md:p-16">
              <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/40 blur-3xl animate-blob" aria-hidden />
              <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-secondary/30 blur-3xl animate-blob" style={{ animationDelay: "3s" }} aria-hidden />
              <div className="relative grid gap-6 md:grid-cols-2 md:items-center md:gap-8">
                <div>
                  <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Let's build your next chapter of growth.</h2>
                  <p className="mt-4 text-sm text-white/75 sm:text-base">
                    Talk to our specialists about tax, advisory, valuations or transformation. We respond within 24 hours.
                  </p>
                </div>
                <div className="flex md:justify-end">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-blue px-7 py-3.5 text-sm font-semibold text-brand-blue-foreground shadow-elevated transition hover:opacity-95 active:scale-[0.98]"
                  >
                    Schedule a meeting <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Reveal>
    </SiteShell>
  );
}
