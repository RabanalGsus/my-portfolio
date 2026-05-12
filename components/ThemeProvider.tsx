"use client";

import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

const STORAGE_KEY = "jr_theme_mode";

function setTheme(theme: ThemeMode) {
  document.documentElement.dataset.theme = theme;
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;

    if (saved === "light" || saved === "dark") {
      setMode(saved);
      setTheme(saved);
      return;
    }

    // Default to light theme
    setMode("light");
    setTheme("light");
  }, []);

  useEffect(() => {
    (window as any).__setThemeMode = (nextMode: ThemeMode) => {
      localStorage.setItem(STORAGE_KEY, nextMode);
      setMode(nextMode);
      setTheme(nextMode);
    };

    (window as any).__themeMode = mode;
  }, [mode]);

  return <>{children}</>;
}