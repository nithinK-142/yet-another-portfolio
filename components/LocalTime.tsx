"use client";

import { useSyncExternalStore } from "react";
import { accessibility } from "@/content/site";

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
    <span className="time" aria-label={time ? `${accessibility.localTime}: ${time}` : undefined}>
      {time || "\u00a0"}
    </span>
  );
}
