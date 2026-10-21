import { Building2, Landmark, MapPin } from "lucide-react";

const hubs = [
  { icon: Landmark, place: "United States", detail: "Tax, audit and advisory for US entities" },
  { icon: Building2, place: "Dubai", detail: "Coverage with the USA and India teams" },
  { icon: MapPin, place: "India", detail: "GCC setup, bookkeeping and delivery" },
];

export function CoverageMap({ onDark = false }: { onDark?: boolean }) {
  return (
    <div className={onDark ? "text-white" : "text-foreground"}>
      <div className="relative">
        <div className="absolute left-[16%] right-[16%] top-6 hidden h-px bg-gradient-to-r from-transparent via-primary to-transparent sm:block" aria-hidden />
        <ol className="grid gap-4 sm:grid-cols-3">
          {hubs.map(({ icon: Icon, place, detail }, i) => (
            <li key={place} className="relative flex flex-col items-center text-center">
              <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full border border-primary/40 bg-[oklch(0.16_0.03_255)] text-primary shadow-soft">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">0{i + 1}</span>
              <p className="mt-1 text-base font-semibold">{place}</p>
              <p className={`mt-1 max-w-[16rem] text-sm ${onDark ? "text-white/70" : "text-muted-foreground"}`}>{detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
