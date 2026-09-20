"use client";

import { useEffect, useId, useMemo, useRef, useState, useSyncExternalStore } from "react";

export type PaletteItem = {
  label: string;
  hint: string;
  href?: string;
  copy?: string;
  external?: boolean;
};

async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const t = document.createElement("textarea");
      t.value = text;
      t.setAttribute("readonly", "");
      t.style.position = "fixed";
      t.style.opacity = "0";
      document.body.appendChild(t);
      t.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(t);
      return ok;
    } catch {
      return false;
    }
  }
}

/** Ctrl/Cmd+K (or "/") opens a keyboard-driven list of links and jumps. */
export function CommandPalette({ items }: { items: PaletteItem[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [status, setStatus] = useState("");
  const [toast, setToast] = useState("");
  const mac = useSyncExternalStore(
    () => () => {},
    () => /Mac|iPhone|iPad/.test(navigator.platform),
    () => false,
  );
  const listId = useId();

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? items.filter((i) => `${i.label} ${i.hint}`.toLowerCase().includes(q)) : items;
  }, [items, query]);

  function open() {
    const d = dialogRef.current;
    if (!d || d.open) return;
    setQuery("");
    setActive(0);
    setStatus("");
    d.showModal();
    inputRef.current?.focus();
  }

  function close() {
    dialogRef.current?.close();
  }

  async function run(item: PaletteItem) {
    if (item.copy) {
      const ok = await copyText(item.copy);
      close();
      setToast(ok ? `Copied: ${item.copy}` : `Couldn't copy. Email: ${item.copy}`);
      return;
    }
    close();
    if (!item.href) return;
    if (item.external) window.open(item.href, "_blank", "noopener,noreferrer");
    else window.location.href = item.href;
  }

  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(""), 2800);
    return () => window.clearTimeout(t);
  }, [toast]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const typing = document.activeElement instanceof HTMLInputElement || document.activeElement instanceof HTMLTextAreaElement;
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (dialogRef.current?.open) close();
        else open();
      } else if (e.key === "/" && !typing) {
        e.preventDefault();
        open();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  function onInputKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, shown.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter" && shown[active]) {
      e.preventDefault();
      void run(shown[active]);
    }
  }

  return (
    <>
      <button type="button" className="kbd" onClick={open} aria-label="Open command palette">
        {mac ? "\u2318 K" : "Ctrl K"}
      </button>

      <dialog
        ref={dialogRef}
        className="pal"
        aria-label="Command palette"
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
      >
        <input
          ref={inputRef}
          type="text"
          role="combobox"
          aria-expanded={shown.length > 0}
          aria-controls={shown.length > 0 ? listId : undefined}
          aria-activedescendant={shown[active] ? `${listId}-${active}` : undefined}
          aria-label="Search links and sections"
          placeholder="Type to search"
          autoComplete="off"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActive(0);
            setStatus("");
          }}
          onKeyDown={onInputKey}
        />
        {shown.length > 0 ? (
          <div id={listId} role="listbox" aria-label="Results" className="pal-list">
            {shown.map((item, i) => {
              const common = {
                id: `${listId}-${i}`,
                role: "option" as const,
                "aria-selected": i === active,
                tabIndex: -1,
                onMouseMove: () => setActive(i),
                className: "pal-row",
              };
              const body = (
                <>
                  <span>{item.label}</span>
                  <small>{item.hint}</small>
                </>
              );
              return item.href && !item.copy ? (
                <a
                  key={item.label}
                  {...common}
                  href={item.href}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  onClick={close}
                >
                  {body}
                </a>
              ) : (
                <button key={item.label} type="button" {...common} onClick={() => void run(item)}>
                  {body}
                </button>
              );
            })}
          </div>
        ) : (
          <p className="pal-empty">No matches</p>
        )}
        <p className="pal-status" aria-live="polite">
          {status || "Enter to open, Esc to close"}
        </p>
      </dialog>

      <div className={toast ? "toast on" : "toast"} role="status" aria-live="polite">
        {toast}
      </div>
    </>
  );
}
