import { ChartLine, Globe2, Scale, type LucideIcon } from "lucide-react";

const floats: { icon: LucideIcon; title: string; detail: string; pos: string; anim: string }[] = [
  { icon: Scale, title: "US Tax", detail: "Federal & state", pos: "left-[3%] top-[8%]", anim: "animate-float-a" },
  { icon: Globe2, title: "Cross-border", detail: "US · UAE · India", pos: "right-[3%] top-[20%]", anim: "animate-float-b" },
  { icon: ChartLine, title: "FP&A", detail: "Monthly clarity", pos: "bottom-[8%] left-[12%]", anim: "animate-float-c" },
];

export function HeroStage({ src }: { src: string }) {
  return (
    <div className="scene-3d relative mx-auto w-full max-w-xl lg:max-w-none">
      <div className="pointer-events-none absolute -left-8 -top-8 hidden h-20 w-20 lg:block" aria-hidden>
        <div className="glass-cube">
          <span className="f" />
          <span className="b" />
          <span className="r" />
          <span className="l" />
          <span className="u" />
          <span className="d" />
        </div>
      </div>

      <div className="slab-3d relative">
        <div className="relative overflow-hidden rounded-[1.85rem] border border-white/20 shadow-elevated">
          <img
            src={src}
            alt="Amber glass prisms floating in a navy tower lobby at dusk"
            width={1600}
            height={900}
            fetchPriority="high"
            decoding="async"
            className="aspect-[16/11] w-full object-cover sm:aspect-[16/10]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.03_255/0.35)] via-transparent to-transparent" />
          <div className="pointer-events-none absolute inset-0 slab-sheen" aria-hidden />
        </div>
      </div>

      <ul className="mt-4 grid grid-cols-3 gap-2 md:hidden">
        {floats.map(({ icon: Icon, title, detail }) => (
          <li key={title} className="glass-card rounded-2xl px-2.5 py-3 text-center">
            <Icon className="mx-auto h-4 w-4 text-secondary" strokeWidth={1.75} />
            <p className="mt-1.5 text-[11px] font-semibold text-white">{title}</p>
            <p className="text-[10px] text-white/65">{detail}</p>
          </li>
        ))}
      </ul>

      <ul className="pointer-events-none absolute inset-0 hidden md:block">
        {floats.map(({ icon: Icon, title, detail, pos, anim }) => (
          <li key={title} className={`glass-card absolute flex items-center gap-3 rounded-2xl px-3.5 py-3 ${pos} ${anim}`}>
            <span className="icon-gem icon-gem-sm">
              <Icon strokeWidth={1.75} />
            </span>
            <span>
              <span className="block text-sm font-semibold text-white">{title}</span>
              <span className="block text-[11px] text-white/70">{detail}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
