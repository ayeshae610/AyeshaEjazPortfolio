import { techBannerItems } from "../data/site";

export default function TechBanner() {
  const items = [...techBannerItems, ...techBannerItems];
  return (
    <section className="relative overflow-hidden border-y border-border/50 bg-surface/40 py-10">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent"
      />
      <div className="flex w-max marquee gap-12 whitespace-nowrap">
        {items.map((t, i) => (
          <span
            key={i}
            className="font-display text-2xl font-medium tracking-tight text-ink/70 md:text-3xl"
          >
            {t}
            <span className="ml-12 inline-block h-1.5 w-1.5 translate-y-[-6px] rounded-full bg-highlight/70 align-middle" />
          </span>
        ))}
      </div>
    </section>
  );
}
