import { cn } from "@/lib/utils";

export function Section({
  id,
  children,
  className,
  labelledBy,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn("container-page scroll-mt-20 py-16 sm:py-24", className)}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-eyebrow mb-4">{children}</p>;
}
