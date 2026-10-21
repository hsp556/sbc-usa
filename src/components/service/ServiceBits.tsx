import { Link } from "@tanstack/react-router";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import type { ReactNode } from "react";

export function PillLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-primary sm:text-[11px]">
      {children}
    </span>
  );
}

export function PillLabelOnDark({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur sm:text-[11px]">
      {children}
    </span>
  );
}

export function StatBox({ v, l, dark = false }: { v: string; l: string; dark?: boolean }) {
  return (
    <div
      className={`rounded-2xl border p-4 sm:p-5 ${
        dark
          ? "border-white/15 bg-white/5 backdrop-blur"
          : "border-border bg-card shadow-soft"
      }`}
    >
      <div className={`text-2xl font-bold tracking-tight sm:text-3xl ${dark ? "text-white" : ""}`}>
        <span className="text-gradient-warm">{v}</span>
      </div>
      <div
        className={`mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] sm:text-[11px] ${
          dark ? "text-white/70" : "text-muted-foreground"
        }`}
      >
        {l}
      </div>
    </div>
  );
}

export function IconBadge({ icon: Icon, size = "md" }: { icon: LucideIcon; size?: "sm" | "md" | "lg" }) {
  const sizeCls = size === "lg" ? "" : size === "sm" ? "icon-gem-sm" : "";
  return (
    <span className={`icon-gem shrink-0 ${sizeCls}`}>
      <Icon strokeWidth={1.75} />
    </span>
  );
}

export function ServiceCTA({
  eyebrow,
  title,
  body,
  ctaText = "Schedule a Free Strategy Call",
  variant = "warm",
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  ctaText?: string;
  variant?: "warm" | "ink";
}) {
  const isWarm = variant === "warm";
  return (
    <section className="px-4 pb-16 sm:px-6 sm:pb-20 md:pb-24">
      <div className="container-page">
        <Reveal direction="scale">
          <div
            className={`relative overflow-hidden rounded-3xl p-8 sm:p-10 md:p-16 ${
              isWarm ? "bg-gradient-warm" : "bg-gradient-ink"
            }`}
          >
            <div
              className="absolute -right-24 -top-24 h-80 w-80 rounded-full blur-3xl animate-blob"
              style={{ background: isWarm ? "rgba(255,255,255,0.25)" : "rgba(255,180,80,0.25)" }}
              aria-hidden
            />
            <div
              className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full blur-3xl animate-blob"
              style={{ background: isWarm ? "rgba(255,255,255,0.18)" : "rgba(255,140,60,0.20)", animationDelay: "3s" }}
              aria-hidden
            />
            <div className="relative grid gap-6 md:grid-cols-2 md:items-center md:gap-10">
              <div>
                {eyebrow && (
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 sm:text-xs">
                    {eyebrow}
                  </span>
                )}
                <h2 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
                  {title}
                </h2>
                {body && <p className="mt-4 max-w-xl text-sm text-white/85 sm:text-base">{body}</p>}
              </div>
              <div className="md:justify-self-end">
                <Link
                  to="/contact"
                  className={`btn-glow inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold shadow-elevated transition active:scale-[0.98] ${
                    isWarm ? "bg-white text-primary hover:opacity-95" : "bg-gradient-warm text-primary-foreground"
                  }`}
                >
                  {ctaText} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ServiceHero({
  pill,
  title,
  body,
  primaryCta,
  secondaryCta,
  stats,
  image,
  imageAlt,
  badgeIcon: BadgeIcon,
  badgeText,
}: {
  pill: string;
  title: ReactNode;
  body: string;
  primaryCta: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  stats: { v: string; l: string }[];
  image: string;
  imageAlt: string;
  badgeIcon?: LucideIcon;
  badgeText?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-hero-ink">
      <div className="absolute inset-0 -z-10 hero-grid animate-grid-drift opacity-30" aria-hidden />
      <div className="absolute -top-40 -left-32 -z-10 h-[460px] w-[460px] rounded-full bg-[oklch(0.55_0.16_45/0.30)] blur-3xl animate-orb-1" aria-hidden />
      <div className="absolute -bottom-40 -right-24 -z-10 h-[520px] w-[520px] rounded-full bg-[oklch(0.45_0.14_255/0.40)] blur-3xl animate-orb-2" aria-hidden />

      <div className="container-page relative py-14 sm:py-20 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="text-white">
            <Reveal>
              <PillLabelOnDark>{pill}</PillLabelOnDark>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-[3.5rem]">
                {title}
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">{body}</p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  to={primaryCta.to}
                  className="btn-glow group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elevated"
                >
                  {primaryCta.label}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </Link>
                {secondaryCta && (
                  <Link
                    to={secondaryCta.to}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10"
                  >
                    {secondaryCta.label}
                  </Link>
                )}
              </div>
            </Reveal>
            <Reveal delay={340}>
              <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                {stats.map((s) => (
                  <StatBox key={s.l} v={s.v} l={s.l} dark />
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal direction="right" delay={140}>
            <div className="scene-3d relative">
              <div className="slab-3d relative">
                <div className="relative overflow-hidden rounded-[1.75rem] border border-white/20 shadow-elevated">
                  <img
                    src={image}
                    alt={imageAlt}
                    width={1600}
                    height={1200}
                    fetchPriority="high"
                    decoding="async"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[oklch(0.16_0.03_255/0.35)] via-transparent to-[oklch(0.72_0.14_55/0.18)]" />
                  <div className="pointer-events-none absolute inset-0 slab-sheen" aria-hidden />
                </div>
                {BadgeIcon && badgeText && (
                  <div className="absolute -bottom-4 left-4 z-10 flex items-center gap-3 rounded-2xl border border-white/40 bg-white/95 px-4 py-3 shadow-elevated backdrop-blur sm:px-5 sm:py-3.5">
                    <span className="icon-gem icon-gem-sm">
                      <BadgeIcon strokeWidth={1.75} />
                    </span>
                    <span className="text-xs font-semibold text-foreground sm:text-sm">{badgeText}</span>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  pill,
  title,
  subtitle,
  align = "left",
  onDark = false,
}: {
  pill?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  onDark?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {pill && (
        <div className={align === "center" ? "flex justify-center" : ""}>
          {onDark ? <PillLabelOnDark>{pill}</PillLabelOnDark> : <PillLabel>{pill}</PillLabel>}
        </div>
      )}
      <h2
        className={`mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl ${
          onDark ? "text-white" : ""
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg ${onDark ? "text-white/75" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  onDark = false,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  onDark?: boolean;
}) {
  return (
    <article
      className={`group h-full rounded-2xl border p-5 transition hover:-translate-y-1 sm:p-6 ${
        onDark
          ? "border-white/10 bg-white/5 backdrop-blur hover:border-primary/50"
          : "border-border bg-card hover:border-primary/40 hover:shadow-elevated"
      }`}
    >
      <IconBadge icon={Icon} />
      <h3 className={`mt-4 text-base font-semibold sm:text-lg ${onDark ? "text-white" : ""}`}>{title}</h3>
      <p className={`mt-2 text-sm leading-relaxed ${onDark ? "text-white/70" : "text-muted-foreground"}`}>
        {description}
      </p>
    </article>
  );
}
