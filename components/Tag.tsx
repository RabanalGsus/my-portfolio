import type { ReactNode } from "react";

export default function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-zinc-800 bg-zinc-900/40 px-2.5 py-1 text-xs text-zinc-200">
      {children}
    </span>
  );
}
