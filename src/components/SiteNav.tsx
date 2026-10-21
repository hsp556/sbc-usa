import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";

const links = [
  { to: "/", label: "Home", exact: true },
  { to: "/services", label: "Services", exact: false },
  { to: "/about", label: "About", exact: false },
  { to: "/contact", label: "Contact", exact: false },
] as const;

const linkClass = "text-lg font-semibold leading-none text-foreground/80 transition hover:text-primary md:text-xl";

function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setDark(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex h-11 items-center gap-2 rounded-full border border-border px-3 text-sm font-semibold text-foreground"
    >
      {dark ? <Sun className="h-4 w-4" strokeWidth={1.75} /> : <Moon className="h-4 w-4" strokeWidth={1.75} />}
      <span>{dark ? "Light" : "Dark"}</span>
    </button>
  );
}

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
      className={`sticky top-0 z-50 border-b border-border bg-background text-foreground ${
        scrolled ? "shadow-soft" : ""
      }`}
    >
      <div className="container-page flex h-28 items-center gap-8">
        <Link to="/" className="flex shrink-0 items-center rounded-xl bg-white px-2 py-1" aria-label="SBC US LLC home">
          <BrandMark />
        </Link>

        <nav className="ml-auto hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={linkClass}
              activeProps={{ className: "text-lg font-semibold leading-none text-primary md:text-xl" }}
              activeOptions={{ exact: l.exact }}
            >
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
          <Link
            to="/contact"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-gradient-warm px-5 text-sm font-semibold text-primary-foreground"
          >
            Talk to an expert
            <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-2 md:hidden">
          <ThemeToggle />
        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" strokeWidth={1.75} /> : <Menu className="h-5 w-5" strokeWidth={1.75} />}
        </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-lg font-semibold text-foreground/80 hover:bg-muted"
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
