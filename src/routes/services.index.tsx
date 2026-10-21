import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { Reveal } from "@/components/Reveal";
import { PhotoSlab } from "@/components/PhotoSlab";
import { services } from "@/data/services";
import { breadcrumbJsonLd, jsonLdScript, seoMeta, SITE_URL } from "@/lib/seo";
import heroServices from "@/assets/hero-services.jpg";

const SERVICES_TITLE = "Services | Tax, Transfer Pricing & CPA Outsourcing — SBCLLC USA";
const SERVICES_DESC =
  "Explore SBCLLC USA services: US federal & state tax, business restructuring, GCC India setup, US CPA outsourcing, bookkeeping & FP&A, and transfer pricing.";

export const Route = createFileRoute("/services/")({
  head: () => {
    const seo = seoMeta({
      title: SERVICES_TITLE,
      description: SERVICES_DESC,
      path: "/services",
      keywords:
        "US tax services, transfer pricing, CPA outsourcing, bookkeeping, FP&A, GCC India setup, business restructuring, Form 1120, Form 5471",
    });
    return {
      ...seo,
      scripts: [
        jsonLdScript({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${SITE_URL}/services/${s.slug}`,
            name: s.title,
          })),
        }),
        jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ),
      ],
    };
  },
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteShell>
      <section className="bg-gradient-soft py-14 sm:py-20">
        <div className="container-page grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Our services</span>
            <h1 className="mt-3 max-w-3xl text-3xl font-bold sm:text-4xl md:text-5xl">Specialist advisory for US-incorporated entities with global operations.</h1>
            <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Six focused service lines — delivered by senior specialists across India, UAE and the USA.
            </p>
          </Reveal>
          <Reveal direction="right" delay={120}>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-warm opacity-25 blur-2xl" aria-hidden />
              <PhotoSlab
                src={heroServices}
                alt="Glass blocks, a brass scale and copper ring on a navy field"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal as="section" className="py-14 sm:py-20">
        <div className="container-page">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Browse our service lines</span>
              <h2 id="service-lines-heading" className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">Specialist practices, delivered end-to-end.</h2>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {services.map(({ slug, title, tagline, icon: Icon }, i) => (
              <Reveal key={slug} direction="up" delay={i * 80}>
                <Link
                  to="/services/$slug"
                  params={{ slug }}
                  aria-label={`Explore ${title} services`}
                  className="group relative block h-full overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-[oklch(0.97_0.02_250)] via-card to-[oklch(0.93_0.05_250)] p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated active:scale-[0.99] sm:p-7"
                >
                  <span className="icon-gem">
                    <Icon strokeWidth={1.75} />
                  </span>
                  <h3 className="relative mt-5 text-lg font-bold sm:text-xl">{title}</h3>
                  <p className="relative mt-1 text-xs font-bold uppercase tracking-wider text-[oklch(0.45_0.15_255)]">{tagline}</p>
                  <span className="relative mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary transition group-hover:gap-2">
                    Explore {title} <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </SiteShell>
  );
}
