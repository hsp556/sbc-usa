import { createFileRoute } from "@tanstack/react-router";
import { Award, Globe2, Heart, Sparkles, Target, Users } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { Reveal } from "@/components/Reveal";
import { PhotoSlab } from "@/components/PhotoSlab";
import { breadcrumbJsonLd, jsonLdScript, seoMeta, SITE_URL } from "@/lib/seo";
import aboutImg from "@/assets/about-team.jpg";

const ABOUT_TITLE = "About SBCLLC USA | Consulting Across India, UAE & USA";
const ABOUT_DESC =
  "Learn about SBCLLC USA — 270+ professionals across the US, India and the UAE, and an independent member firm of Kreston.";

export const Route = createFileRoute("/about")({
  head: () => {
    const seo = seoMeta({
      title: ABOUT_TITLE,
      description: ABOUT_DESC,
      path: "/about",
      keywords: "About SBCLLC USA, consulting firm India UAE USA, tax advisory, audit firm, business consultants",
    });
    return {
      ...seo,
      scripts: [
        jsonLdScript({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: ABOUT_TITLE,
          description: ABOUT_DESC,
          url: `${SITE_URL}/about`,
        }),
        jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ),
      ],
    };
  },
  component: AboutPage,
});

const values = [
  { icon: Target, t: "Outcome focused", d: "We measure success by the value we create for our clients." },
  { icon: Heart, t: "Integrity first", d: "Honest counsel, transparent process, lasting trust." },
  { icon: Sparkles, t: "Innovation", d: "Modern tools, automation and continuous improvement." },
  { icon: Users, t: "People centric", d: "Our experts are our biggest asset and your biggest advantage." },
];

const milestones = [
  { y: "2017", t: "Founded with a clear vision for the next decade." },
  { y: "2019", t: "Crossed 75 professionals and expanded into back-office services." },
  { y: "2021", t: "Established global presence across the US, UK, Japan and Singapore." },
  { y: "2023", t: "Subsidiary launched in UAE; supporting 100+ groups on corporate tax." },
  { y: "Today", t: "270+ professionals, 350+ multinational clients, and an independent member firm of Kreston." },
];

function AboutPage() {
  return (
    <SiteShell>
      <Reveal as="section" className="bg-gradient-soft py-14 sm:py-20">
        <div className="container-page grid gap-10 md:grid-cols-2 md:items-center md:gap-12">
          <Reveal direction="left">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">About SBCLLC USA</span>
            <h1 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">Built on knowledge. Driven by strategy. Designed for growth.</h1>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">
              We handle tax, finance and compliance for businesses across the US, India and the UAE.
              SBCLLC USA is an independent member firm of Kreston.
            </p>
          </Reveal>
          <Reveal direction="right" delay={150}>
            <PhotoSlab src={aboutImg} alt="SBCLLC USA advisors reviewing plans above a city skyline" width={1280} height={960} />
          </Reveal>
        </div>
      </Reveal>

      <Reveal as="section" className="py-14 sm:py-20">
        <div className="container-page">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">What we stand for</span>
              <h2 id="values-heading" className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">Our values</h2>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {values.map(({ icon: Icon, t, d }, i) => (
              <Reveal key={t} direction="up" delay={i * 80}>
                <div className="group h-full rounded-2xl border border-border bg-gradient-to-br from-[oklch(0.97_0.02_250)] via-card to-[oklch(0.93_0.05_250)] p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated">
                  <span className="icon-gem"><Icon strokeWidth={1.75} /></span>
                  <h3 className="mt-4 text-lg font-semibold">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="bg-gradient-soft py-14 sm:py-20">
        <div className="container-page">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Our journey</span>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">Milestones that shaped who we are.</h2>
            </div>
          </Reveal>
          <ol className="mt-10 grid gap-5 sm:gap-6 md:mt-12 md:grid-cols-5">
            {milestones.map((m, i) => (
              <Reveal key={m.y} direction="up" delay={i * 80} as="li" className="relative rounded-2xl border border-border bg-gradient-to-br from-[oklch(0.97_0.02_250)] via-card to-[oklch(0.93_0.05_250)] p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft">
                <div className="text-2xl font-bold text-gradient-warm">{m.y}</div>
                <p className="mt-2 text-sm text-muted-foreground">{m.t}</p>
                <span className="absolute right-4 top-4 text-xs font-semibold text-muted-foreground/60">{String(i + 1).padStart(2, "0")}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </Reveal>

      <Reveal as="section" className="py-14 sm:py-20">
        <div className="container-page grid gap-5 sm:grid-cols-3 sm:gap-6">
          {[
            { icon: Users, n: "270+", l: "Professionals" },
            { icon: Globe2, n: "3", l: "Countries: US, India, UAE" },
            { icon: Award, n: "350+", l: "Multinational clients" },
          ].map(({ icon: Icon, n, l }, i) => (
            <Reveal key={l} direction="scale" delay={i * 100}>
              <div className="rounded-2xl bg-gradient-ink p-7 text-ink-foreground sm:p-8">
                <Icon className="h-6 w-6 text-secondary" />
                <div className="mt-3 text-3xl font-bold sm:text-4xl">{n}</div>
                <div className="mt-1 text-sm text-white/70">{l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </SiteShell>
  );
}
