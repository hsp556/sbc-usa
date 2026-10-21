import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";

const links = [
  { to: "/", label: "Home", exact: true },
  { to: "/services", label: "Services", exact: false },
  { to: "/about", label: "About", exact: false },
  { to: "/contact", label: "Contact", exact: false },
] as const;

const linkClass = "text-base font-semibold leading-none text-white/90 transition hover:text-primary";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/10 bg-[oklch(0.12_0.02_255)] text-white ${
        scrolled ? "shadow-[0_12px_40px_-24px_oklch(0_0_0/0.8)]" : ""
      }`}
    >
      <div className="container-page flex h-[5.5rem] items-center gap-8">
        <Link to="/" className="flex shrink-0 items-center" aria-label="SBCLLC USA home">
          <BrandMark tone="light" />
        </Link>

        <nav className="ml-auto hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={linkClass}
              activeProps={{ className: "text-base font-semibold leading-none text-primary" }}
              activeOptions={{ exact: l.exact }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-gradient-warm px-5 text-sm font-semibold text-primary-foreground"
          >
            Talk to an expert
            <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
          </Link>
        </nav>

        <button
          className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" strokeWidth={1.75} /> : <Menu className="h-5 w-5" strokeWidth={1.75} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[oklch(0.12_0.02_255)] md:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-semibold text-white/90 hover:bg-white/5"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Talk to an expert <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
