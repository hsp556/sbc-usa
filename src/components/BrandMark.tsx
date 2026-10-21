import logoInk from "@/assets/sbc-logo-ink.png";
import logoWhite from "@/assets/sbc-logo-white.png";

export function BrandMark({ tone = "ink" }: { tone?: "ink" | "light" }) {
  const src = tone === "light" ? logoWhite : logoInk;
  return (
    <img
      src={src}
      alt="SBC. Local connect. Global outlook."
      width={919}
      height={319}
      className="h-12 w-auto md:h-14"
      decoding="async"
    />
  );
}
