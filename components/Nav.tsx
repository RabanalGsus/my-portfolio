"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/cv", label: "CV" },
];

type ThemeMode = "auto" | "light" | "dark";

function getThemeMode(): ThemeMode {
  return ((window as any).__themeMode as ThemeMode | undefined) ?? "auto";
}

function setThemeMode(mode: ThemeMode) {
  (window as any).__setThemeMode?.(mode);
}

export default function Nav() {
  const [mode, setMode] = useState<ThemeMode>("auto");

  useEffect(() => {
    setMode(getThemeMode());
  }, []);

  function cycleTheme() {
    const current = getThemeMode();
    const next: ThemeMode =
      current === "light" ? "dark" : current === "dark" ? "auto" : "light";

    setThemeMode(next);
    setMode(next);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[rgb(var(--border))] bg-[rgb(var(--bg))]/80 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-220 py-4">
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
            onClick={cycleTheme}
            type="button"
            aria-label="Toggle theme (light, dark, auto)"
            title="Toggle theme (light → dark → auto)"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--panel))]/70 text-[rgb(var(--text))] transition hover:border-[rgb(var(--accent))] hover:-translate-y-0.5"
          >
            {mode === "light" && <Sun size={18} />}
            {mode === "dark" && <Moon size={18} />}
            {mode === "auto" && (
              <span className="text-[8px] font-semibold tracking-widest">
                AUTO
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
