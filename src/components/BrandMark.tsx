import logo from "@/assets/sbc-us-llc-logo.png";

export function BrandMark() {
  return (
    <img
      src={logo}
      alt="SBC US LLC. Local connect. Global outlook."
      width={1080}
      height={472}
      className="h-16 w-auto md:h-20"
      decoding="async"
    />
  );
}
