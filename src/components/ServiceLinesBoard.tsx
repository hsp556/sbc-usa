import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";

const shortLabels: Record<string, string> = {
  "us-tax-services": "US tax services",
  "business-restructuring": "Business restructuring",
  "gcc-india-setup": "GCC India setup",
  "us-cpa-outsourcing": "US CPA outsourcing",
  "bookkeeping-fpa": "Bookkeeping & FP&A",
  "transfer-pricing": "Transfer pricing",
};

const hubs = ["USA", "India", "UAE"];

export function ServiceLinesBoard() {
  return (
    <div className="scene-3d">
      <div className="slab-3d relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-[oklch(0.17_0.04_255)] p-5 text-white shadow-elevated sm:p-6">
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/25 blur-3xl" aria-hidden />
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">US-incorporated entities</p>
        <p className="mt-1 font-display text-lg font-bold leading-tight">Six lines. Three countries.</p>

        <div className="relative mt-4">
          <div className="absolute left-[12%] right-[12%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-primary to-transparent" aria-hidden />
          <ol className="relative grid grid-cols-3 gap-2">
            {hubs.map((hub) => (
              <li key={hub} className="flex justify-center">
                <span className="rounded-full border border-primary/40 bg-[oklch(0.14_0.03_255)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                  {hub}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {services.map(({ slug, title, icon: Icon }) => (
            <li key={slug}>
              <Link
                to="/services/$slug"
                params={{ slug }}
                aria-label={title}
                className="group flex h-full items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 transition hover:-translate-y-0.5 hover:border-primary/50 hover:bg-white/10"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary">
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <span className="min-w-0 flex-1 text-sm font-semibold leading-tight">{shortLabels[slug] ?? title}</span>
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-white/40 transition group-hover:text-primary" strokeWidth={1.75} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
