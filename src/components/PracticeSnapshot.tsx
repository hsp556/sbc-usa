import { Link } from "@tanstack/react-router";
import { services } from "@/data/services";

const facts = [
  { v: "350+", l: "Clients" },
  { v: "270+", l: "Professionals" },
  { v: "3", l: "Countries" },
  { v: "88", l: "Compliances" },
];

const labels: Record<string, string> = {
  "us-tax-services": "US tax services",
  "business-restructuring": "Business restructuring",
  "gcc-india-setup": "GCC India setup",
  "us-cpa-outsourcing": "US CPA outsourcing",
  "bookkeeping-fpa": "Bookkeeping & FP&A",
  "transfer-pricing": "Transfer pricing",
};

export function PracticeSnapshot() {
  return (
    <aside className="rounded-3xl border border-white/15 bg-[oklch(0.11_0.03_255/0.82)] p-5 text-white shadow-elevated backdrop-blur-md sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">The practice</p>
      <h2 className="mt-2 text-2xl font-bold leading-tight">Tax, finance and compliance across the US, India and the UAE.</h2>
      <dl className="mt-5 grid grid-cols-4 gap-2">
        {facts.map((f) => (
          <div key={f.l} className="rounded-xl border border-white/10 bg-white/5 px-2 py-3 text-center">
            <dt className="text-lg font-bold text-primary sm:text-xl">{f.v}</dt>
            <dd className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-white/65">{f.l}</dd>
          </div>
        ))}
      </dl>
      <ul className="mt-4 divide-y divide-white/10">
        {services.map(({ slug, icon: Icon, title }) => (
          <li key={slug}>
            <Link
              to="/services/$slug"
              params={{ slug }}
              className="flex items-center gap-3 py-2.5 text-sm font-medium text-white/90 transition hover:text-primary"
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/10 text-secondary">
                <Icon className="h-4 w-4" strokeWidth={1.75} />
              </span>
              <span>{labels[slug] ?? title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
