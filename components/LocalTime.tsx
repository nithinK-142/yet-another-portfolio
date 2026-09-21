"use client";

import { useSyncExternalStore } from "react";

const formatter = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "2-digit",
  timeZone: "Asia/Kolkata",
});

function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 15_000);
  return () => window.clearInterval(id);
}

/** Current time in Bangalore, so a reader in another time zone knows when I am at my desk. */
export function LocalTime() {
  const time = useSyncExternalStore(
    subscribe,
    () => formatter.format(new Date()),
    () => "",
  );

  return (
    <span className="time" aria-label={time ? `Local time in Bangalore: ${time}` : undefined}>
      {time || "\u00a0"}
    </span>
  );
}
