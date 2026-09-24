"use client";

import { useEffect, useState } from "react";
import { navigation } from "@/content/site";

const SECTIONS = navigation.sections;

/** Primary links. The link for the section you are reading gets aria-current and an accent. */
export function NavLinks() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    let raf = 0;

    const compute = () => {
      raf = 0;
      const line = window.innerHeight * 0.4;
      let current: string | null = null;
      for (const s of SECTIONS) {
        for (const id of s.blocks) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= line) current = s.id;
        }
      }
      const atEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      setActive(atEnd ? "contact" : current);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {SECTIONS.map((s) => (
        <a key={s.id} href={`#${s.id}`} aria-current={active === s.id ? "location" : undefined}>
          {s.label}
        </a>
      ))}
    </>
  );
}
