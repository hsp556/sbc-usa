import { Link } from "@tanstack/react-router";
import { ArrowUpRight, FileText, Globe, Users, type LucideIcon } from "lucide-react";
import { services } from "@/data/services";

const stats: { icon: LucideIcon; value: string; label: string }[] = [
  { icon: Users, value: "350+", label: "Clients" },
  { icon: Users, value: "270+", label: "Professionals" },
  { icon: Globe, value: "3", label: "Countries" },
  { icon: FileText, value: "88", label: "Compliances" },
];

const shortLabels: Record<string, string> = {
  "us-tax-services": "US tax services",
  "business-restructuring": "Business restructuring",
  "gcc-india-setup": "GCC India setup",
  "us-cpa-outsourcing": "US CPA outsourcing",
  "bookkeeping-fpa": "Bookkeeping & FP&A",
  "transfer-pricing": "Transfer pricing",
};

export function HomeHero() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-7rem)] flex-col overflow-hidden bg-[#0c1424] text-white" aria-labelledby="home-hero-heading">
      <video
        className="absolute inset-0 h-full w-full object-cover object-center motion-reduce:hidden"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-skyline-poster.jpg"
        aria-hidden
      >
        <source src="/hero-skyline.mp4" type="video/mp4" />
      </video>
      <img
        src="/hero-skyline-poster.jpg"
        alt=""
        className="absolute inset-0 hidden h-full w-full object-cover object-center motion-reduce:block"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#070b14]/78 via-[#070b14]/46 to-[#070b14]/28" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#070b14]/35 to-transparent" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#070b14]/45 to-transparent" aria-hidden />

      <div className="container-page relative z-10 flex flex-1 flex-col justify-center py-10 sm:py-12 lg:py-14">
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-white sm:text-sm">
          <span className="h-px w-10 bg-primary" aria-hidden />
          Global expertise
          <span className="text-white/40" aria-hidden>|</span>
          Local insights
        </p>
        <h1 id="home-hero-heading" className="mt-5 max-w-6xl text-balance text-4xl font-bold leading-[1.02] tracking-tight drop-shadow-[0_2px_18px_rgba(0,0,0,0.65)] sm:text-5xl lg:text-6xl xl:text-[4.35rem]">
          Tax, finance and compliance
          <span className="mt-2 block">
            across the <span className="text-primary">US</span>, <span className="text-primary">India</span> and the{" "}
            <span className="text-primary">UAE</span>.
          </span>
        </h1>
        <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 sm:flex sm:flex-wrap sm:gap-x-12">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-3.5">
              <Icon className="h-7 w-7 text-white/85" strokeWidth={1.5} aria-hidden />
              <div>
                <dt className="text-3xl font-bold text-primary sm:text-4xl">{value}</dt>
                <dd className="text-sm text-white">{label}</dd>
              </div>
            </div>
          ))}
        </dl>

        <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:mt-16 lg:grid-cols-6">
          {services.map(({ slug, title, icon: Icon }) => (
            <li key={slug} className="min-w-0">
              <Link
                to="/services/$slug"
                params={{ slug }}
                aria-label={title}
                className="group flex h-full min-h-44 min-w-0 flex-col items-center justify-center rounded-2xl border border-white/15 bg-black/55 px-3 py-6 text-center shadow-soft backdrop-blur-md transition hover:-translate-y-1 hover:border-primary/60 hover:bg-black/70 sm:min-h-48 sm:px-4 sm:py-7"
              >
                <Icon className="h-8 w-8 shrink-0 text-primary" strokeWidth={1.75} />
                <span className="mt-4 w-full min-w-0 text-balance text-sm font-semibold leading-snug sm:text-base">{shortLabels[slug] ?? title}</span>
                <span className="mt-4 grid h-9 w-9 place-items-center rounded-full border border-primary/50 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
