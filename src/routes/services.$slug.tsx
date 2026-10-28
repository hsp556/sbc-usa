import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { Reveal } from "@/components/Reveal";
import { getService, services, type Service } from "@/data/services";
import { breadcrumbJsonLd, jsonLdScript, orgRef, seoMeta, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const svc = getService(params.slug);
    if (!svc) {
      return { meta: [{ title: "Service — SBC US LLC" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${svc.title} | SBC US LLC`;
    const description = svc.short;
    const seo = seoMeta({
      title,
      description,
      path: `/services/${svc.slug}`,
      keywords: `${svc.title}, ${svc.tagline}, SBC US LLC, US tax, advisory, India UAE USA`,
    });
    return {
      ...seo,
      scripts: [
        jsonLdScript({
          "@context": "https://schema.org",
          "@type": "Service",
          name: svc.title,
          serviceType: svc.tagline,
          description: svc.hero,
          url: `${SITE_URL}/services/${svc.slug}`,
          provider: orgRef,
          areaServed: ["United States", "India", "United Arab Emirates"],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: svc.title,
            itemListElement: svc.sections.map((sec) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: sec.title, description: sec.body },
            })),
          },
        }),
        jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: svc.title, path: `/services/${svc.slug}` },
          ]),
        ),
      ],
    };
  },
  loader: ({ params }): { svc: Service } => {
    const svc = getService(params.slug);
    if (!svc) throw notFound();
    return { svc };
  },
  notFoundComponent: () => (
    <SiteShell>
      <div className="container-page py-24 text-center">
        <h1 className="text-3xl font-bold">Service not found</h1>
        <Link to="/services" className="mt-6 inline-flex items-center gap-2 text-primary hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to services
        </Link>
      </div>
    </SiteShell>
  ),
  errorComponent: ({ error }) => (
    <SiteShell>
      <div className="container-page py-24 text-center">
        <h1 className="text-2xl font-semibold">Couldn't load this service</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
      </div>
    </SiteShell>
  ),
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { svc } = Route.useLoaderData() as { svc: Service };
  const Icon = svc.icon;
  const others = services.filter((s) => s.slug !== svc.slug).slice(0, 3);

  return (
    <SiteShell>
      <section className="bg-gradient-soft py-14 sm:py-20">
        <div className="container-page">
          <Link to="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
            <ArrowLeft className="h-4 w-4" /> All services
          </Link>
          <div className="mt-6 grid gap-8 sm:mt-8 md:grid-cols-[auto,1fr] md:items-start md:gap-10">
            <Reveal direction="scale">
              <span className="icon-gem">
                <Icon strokeWidth={1.75} />
              </span>
            </Reveal>
            <Reveal direction="up" delay={120}>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">{svc.tagline}</span>
              <h1 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">{svc.title}</h1>
              <p className="mt-4 max-w-3xl text-base text-muted-foreground sm:mt-5 sm:text-lg">{svc.hero}</p>
              <dl className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4">
                {svc.highlights.map((h, i) => (
                  <Reveal key={h.label} direction="up" delay={200 + i * 80}>
                    <div className="rounded-2xl border border-border bg-card p-5 transition hover:border-primary/40 hover:shadow-soft">
                      <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{h.label}</dt>
                      <dd className="mt-2 text-2xl font-bold text-foreground">{h.value}</dd>
                    </div>
                  </Reveal>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container-page grid gap-5 sm:gap-6 md:grid-cols-2">
          {svc.sections.map((sec, i) => (
            <Reveal key={sec.title} direction="up" delay={i * 80}>
              <article className="h-full rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated sm:p-7">
                <h2 className="text-lg font-semibold sm:text-xl">{sec.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{sec.body}</p>
                {sec.bullets && (
                  <ul className="mt-4 space-y-2">
                    {sec.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-14 sm:pb-20">
        <div className="container-page">
          <Reveal direction="scale">
            <div className="rounded-3xl bg-gradient-ink p-8 text-ink-foreground sm:p-10 md:p-14">
              <div className="grid gap-6 md:grid-cols-2 md:items-center">
                <div>
                  <h2 className="text-2xl font-bold md:text-3xl">Talk to a {svc.title.split(" ")[0]} specialist.</h2>
                  <p className="mt-3 text-sm text-white/75 sm:text-base">We respond within 24 hours with a tailored scope of work.</p>
                </div>
                <div className="md:justify-self-end">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elevated transition hover:opacity-95 active:scale-[0.98]"
                  >
                    Book a consultation <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="container-page">
          <Reveal>
            <h2 className="text-2xl font-bold">Other services</h2>
          </Reveal>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {others.map((o, i) => {
              const OIcon = o.icon;
              return (
                <Reveal key={o.slug} direction="up" delay={i * 80}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: o.slug }}
                    className="group block h-full rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated active:scale-[0.99]"
                  >
                    <span className="icon-gem icon-gem-sm">
                      <OIcon strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold">{o.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{o.short}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition group-hover:gap-2">
                      Read about {o.title} <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
