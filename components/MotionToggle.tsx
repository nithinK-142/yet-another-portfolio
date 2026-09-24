"use client";

import { useSyncExternalStore } from "react";
import { controls } from "@/content/site";

const STORAGE_KEY = "nithin-motion-enabled";
const EVENT_NAME = "motion-preference-change";

function applyMotionPreference(enabled: boolean) {
  document.documentElement.dataset.motion = enabled ? "on" : "reduce";
  window.dispatchEvent(new CustomEvent<boolean>(EVENT_NAME, { detail: enabled }));
}

function subscribe(onChange: () => void) {
  window.addEventListener(EVENT_NAME, onChange);
  return () => window.removeEventListener(EVENT_NAME, onChange);
}

/** The initial value comes from the inline script in layout.tsx, which sets data-motion before first paint. */
export function MotionToggle() {
  const enabled = useSyncExternalStore(
    subscribe,
    () => document.documentElement.dataset.motion !== "reduce",
    () => true,
  );

  function toggle() {
    const nextEnabled = !enabled;
    try {
      window.localStorage.setItem(STORAGE_KEY, String(nextEnabled));
    } catch {
      /* storage unavailable: the choice still applies for this visit */
    }
    applyMotionPreference(nextEnabled);
  }

  return (
    <button
      type="button"
      className="motion-toggle"
      aria-pressed={enabled}
      aria-label={enabled ? controls.motion.enabledAria : controls.motion.reducedAria}
      title={enabled ? controls.motion.enabledTitle : controls.motion.reducedTitle}
      data-tooltip={enabled ? controls.motion.enabledTooltip : controls.motion.reducedTooltip}
      onClick={toggle}
    >
      <span className={enabled ? "motion-toggle__switch is-on" : "motion-toggle__switch"} aria-hidden="true">
        <span className="motion-toggle__thumb" />
      </span>
    </button>
  );
}
