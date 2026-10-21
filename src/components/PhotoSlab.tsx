export function PhotoSlab({
  src,
  alt,
  width = 1600,
  height = 1000,
  priority = false,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
}) {
  return (
    <div className="scene-3d">
      <div className="slab-3d relative">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/25 shadow-elevated">
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            fetchPriority={priority ? "high" : "auto"}
            decoding="async"
            className="aspect-[16/10] w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[oklch(0.16_0.04_255/0.22)] via-transparent to-[oklch(0.78_0.14_70/0.16)]" />
          <div className="pointer-events-none absolute inset-0 slab-sheen" aria-hidden />
        </div>
      </div>
    </div>
  );
}
