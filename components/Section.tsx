import type { ReactNode } from "react";

export default function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-14">
      <div className="flex items-baseline justify-between gap-6">
        <h2 className="text-sm font-semibold tracking-[0.12em] uppercase text-[rgb(var(--muted))]">
          {title}
        </h2>
        <div className="h-px flex-1 bg-[rgb(var(--border))]" />
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}
