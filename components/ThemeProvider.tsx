"use client";

import { useEffect, useMemo, useState } from "react";

type ThemeMode = "auto" | "light" | "dark";

const STORAGE_KEY = "jr_theme_mode";

function setTheme(theme: "light" | "dark") {
  document.documentElement.dataset.theme = theme;
}

function clearTheme() {
  delete document.documentElement.dataset.theme;
}

// Fetch sunrise/sunset for user's lat/lng (no API key)
async function getSunTimes(lat: number, lng: number, date = new Date()) {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const dateStr = `${yyyy}-${mm}-${dd}`;

  const url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=${dateStr}&formatted=0`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Sun API request failed");
  const json = await res.json();

  // API returns UTC times in ISO strings
  const sunriseUtc = new Date(json.results.sunrise);
  const sunsetUtc = new Date(json.results.sunset);

  return { sunriseUtc, sunsetUtc };
}

function decideThemeFromSun(sunriseUtc: Date, sunsetUtc: Date) {
  // Compare against viewer local time using UTC dates (Date handles local comparison)
  const now = new Date();
  const isDay = now >= sunriseUtc && now < sunsetUtc;
  return isDay ? "light" : "dark";
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>("auto");

  // load saved preference
  useEffect(() => {
    const saved = (localStorage.getItem(STORAGE_KEY) as ThemeMode | null) ?? "auto";
    setMode(saved);
  }, []);

  // apply theme whenever mode changes
  useEffect(() => {
    let timer: number | null = null;

    async function applyAuto() {
      // fallback: if no location permission, use system preference
      const fallback = () => {
        const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
        setTheme(prefersDark ? "dark" : "light");
      };

      if (!navigator.geolocation) {
        fallback();
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          try {
            const { latitude, longitude } = pos.coords;
            const { sunriseUtc, sunsetUtc } = await getSunTimes(latitude, longitude);
            setTheme(decideThemeFromSun(sunriseUtc, sunsetUtc));

            // re-check every 10 minutes so it flips around sunrise/sunset
            timer = window.setInterval(async () => {
              try {
                const { sunriseUtc, sunsetUtc } = await getSunTimes(latitude, longitude);
                setTheme(decideThemeFromSun(sunriseUtc, sunsetUtc));
              } catch {
                // ignore periodic errors
              }
            }, 10 * 60 * 1000);
          } catch {
            fallback();
          }
        },
        () => fallback(),
        { enableHighAccuracy: false, timeout: 8000, maximumAge: 60 * 60 * 1000 }
      );
    }

    if (mode === "light") setTheme("light");
    else if (mode === "dark") setTheme("dark");
    else {
      // auto
      applyAuto();
    }

    return () => {
      if (timer) window.clearInterval(timer);
    };
  }, [mode]);

  const actions = useMemo(
    () => ({
      mode,
      setMode: (m: ThemeMode) => {
        localStorage.setItem(STORAGE_KEY, m);
        setMode(m);
        if (m === "auto") {
          // remove explicit theme so auto can control it
          clearTheme();
        }
      },
    }),
    [mode]
  );

  // Expose to window for quick wiring without context (simple approach)
  useEffect(() => {
    (window as any).__setThemeMode = actions.setMode;
    (window as any).__themeMode = actions.mode;
  }, [actions]);

  return <>{children}</>;
}
