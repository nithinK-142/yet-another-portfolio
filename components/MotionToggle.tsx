"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "nithin-motion-enabled";
const EVENT_NAME = "motion-preference-change";

function applyMotionPreference(enabled: boolean) {
  document.documentElement.dataset.motion = enabled ? "on" : "reduce";
  window.dispatchEvent(new CustomEvent<boolean>(EVENT_NAME, { detail: enabled }));
}

export function MotionToggle() {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const nextEnabled = stored === null ? true : stored !== "false";
    setEnabled(nextEnabled);
    applyMotionPreference(nextEnabled);
  }, []);

  function toggle() {
    const nextEnabled = !enabled;
    setEnabled(nextEnabled);
    window.localStorage.setItem(STORAGE_KEY, String(nextEnabled));
    applyMotionPreference(nextEnabled);
  }

  return (
    <button
      type="button"
      className="motion-toggle"
      aria-pressed={enabled}
      aria-label={enabled ? "Animations enabled" : "Animations reduced"}
      title={enabled ? "Animations on. Click to reduce motion." : "Animations reduced. Click to enable motion."}
      onClick={toggle}
    >
      <span className="motion-toggle__label">Motion</span>
      <span className={enabled ? "motion-toggle__switch is-on" : "motion-toggle__switch"} aria-hidden="true">
        <span className="motion-toggle__thumb" />
      </span>
      <span className="motion-toggle__state">{enabled ? "On" : "Off"}</span>
    </button>
  );
}
