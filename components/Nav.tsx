"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/cv", label: "CV" },
];

type ThemeMode = "auto" | "light" | "dark";

export default function Nav() {
  const [mode, setMode] = useState<ThemeMode>("auto");

  useEffect(() => {
    // read the mode that ThemeProvider exposes (fallback to auto)
    const m = ((window as any).__themeMode as ThemeMode | undefined) ?? "auto";
    setMode(m);
  }, []);

  function cycleTheme() {
    const current = ((window as any).__themeMode as ThemeMode | undefined) ?? "auto";
    const next: ThemeMode = current === "auto" ? "light" : current === "light" ? "dark" : "auto";
    (window as any).__setThemeMode?.(next);
    setMode(next);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[rgb(var(--border))] bg-[rgb(var(--bg))]/80 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-5">
          <nav className="flex gap-4 text-sm text-[rgb(var(--muted))]">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-[rgb(var(--text))] hover:underline decoration-[rgb(var(--accent))] underline-offset-4"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            className="rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--panel))] px-3 py-1 text-xs text-[rgb(var(--muted))] hover:text-[rgb(var(--text))] hover:border-[rgb(var(--accent))] transition"
            onClick={cycleTheme}
            type="button"
            title="Theme: auto/light/dark"
          >
            Theme: {mode}
          </button>
        </div>
      </div>
    </header>
  );
}
