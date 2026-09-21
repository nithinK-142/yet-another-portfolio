"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/Icon";
import { copyText } from "@/lib/copy";

/** The email address as a mailto link, with a one-click copy button that confirms what happened. */
export function CopyEmail({ email }: { email: string }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  async function copy() {
    const ok = await copyText(email);
    setState(ok ? "copied" : "failed");
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setState("idle"), 2400);
  }

  return (
    <div className="copy-email">
      <a className="plain-link" href={`mailto:${email}`}>
        {email}
      </a>
      <button
        type="button"
        className={state === "copied" ? "copy-btn is-done" : "copy-btn"}
        onClick={copy}
        aria-label="Copy email address"
        title="Copy email address"
      >
        <Icon name={state === "copied" ? "check" : "copy"} size={16} />
        <span>{state === "copied" ? "Copied" : state === "failed" ? "Copy failed" : "Copy"}</span>
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {state === "copied" ? "Email address copied" : state === "failed" ? "Could not copy" : ""}
      </span>
    </div>
  );
}
