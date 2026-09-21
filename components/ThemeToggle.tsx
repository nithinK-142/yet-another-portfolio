"use client";

import { useSyncExternalStore } from "react";
import { Icon } from "@/components/Icon";

const STORAGE_KEY = "nithin-theme";
const EVENT_NAME = "theme-preference-change";

function subscribe(onChange: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  window.addEventListener(EVENT_NAME, onChange);
  media.addEventListener("change", onChange);
  return () => {
    window.removeEventListener(EVENT_NAME, onChange);
    media.removeEventListener("change", onChange);
  };
}

function currentTheme(): "light" | "dark" {
  const forced = document.documentElement.dataset.theme;
  if (forced === "light" || forced === "dark") return forced;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/** Light or dark, remembered. Follows the system until the first click. */
export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, currentTheme, () => "");

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable: the choice still applies for this visit */
    }
    window.dispatchEvent(new Event(EVENT_NAME));
  }

  const label = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button type="button" className="icon-btn" onClick={toggle} aria-label={theme ? label : "Switch theme"} title={theme ? label : "Switch theme"}>
      {theme === "dark" ? <Icon name="sun" size={16} /> : theme === "light" ? <Icon name="moon" size={16} /> : null}
    </button>
  );
}
