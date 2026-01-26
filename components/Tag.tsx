import type { ReactNode } from "react";

export default function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="
      rounded-full
      border border-[rgb(var(--accent))]
      bg-[rgb(var(--accent))]/10
      px-2.5 py-1
      text-xs
      text-[rgb(var(--text))]
    ">
      {children}
    </span>

  );
}
