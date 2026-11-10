import { Eyebrow } from "@/components/ui/Section";

export function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="container-page pb-4 pt-28 sm:pb-8 sm:pt-36">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="max-w-3xl text-balance font-serif text-[2.5rem] leading-[1.08] tracking-[-0.02em] text-foreground sm:text-6xl">
        {title}
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground-muted sm:text-lg">{lede}</p>
    </header>
  );
}
