"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";

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

function ThemeButton({
  mode,
  onClick,
}: {
  mode: ThemeMode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      type="button"
      aria-label="Toggle theme (light, dark, auto)"
      title="Toggle theme (light → dark → auto)"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--panel))]/70 text-[rgb(var(--text))] shadow-sm transition hover:-translate-y-0.5 hover:border-[rgb(var(--accent))]"
    >
      {mode === "light" && <Sun size={18} />}
      {mode === "dark" && <Moon size={18} />}
      {mode === "auto" && (
        <span className="text-[8px] font-semibold tracking-widest">AUTO</span>
      )}
    </button>
  );
}

export default function Nav() {
  const [mode, setMode] = useState<ThemeMode>("auto");
  const [isOpen, setIsOpen] = useState(false);

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

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[rgb(var(--border))] bg-[rgb(var(--bg))]/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-6">
        <Link
          href="/"
          onClick={closeMenu}
          className="text-sm font-semibold tracking-tight text-[rgb(var(--text))] sm:text-base"
        >
          Jesús Rabanal
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-5 md:flex">
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

          <ThemeButton mode={mode} onClick={cycleTheme} />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeButton mode={mode} onClick={cycleTheme} />

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--panel))]/70 text-[rgb(var(--text))] shadow-sm transition hover:border-[rgb(var(--accent))]"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen ? (
        <div className="border-t border-[rgb(var(--border))] bg-[rgb(var(--bg))]/95 px-5 py-4 backdrop-blur md:hidden">
          <nav className="mx-auto grid max-w-5xl gap-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))]/70 px-4 py-3 text-sm font-medium text-[rgb(var(--text))] shadow-sm transition hover:border-[rgb(var(--accent))]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}