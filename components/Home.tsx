"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "@/components/Icons";
import { ProjectList } from "@/components/ProjectList";

const links = [
  { label: "GitHub", href: "https://github.com/nithinK-142" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nithin142/" },
  { label: "Email", href: "mailto:142nithin@gmail.com" },
];

export function Home() {
  const reduce = useReducedMotion();

  return (
    <main className="relative min-h-screen overflow-x-clip">
      <div className="site-grid pointer-events-none absolute inset-x-0 top-0 h-[760px] opacity-70" />

      <header className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 md:px-8 md:py-7">
        <a href="#top" className="font-mono text-[13px] tracking-[-0.02em] text-[var(--text)]">nithin.me</a>
        <nav className="flex items-center gap-5 text-[12px] text-[var(--muted)] md:gap-7">
          <a className="transition hover:text-white" href="#work">Work</a>
          <a className="transition hover:text-white" href="#experience">Experience</a>
          <a className="transition hover:text-white" href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="relative mx-auto grid w-full max-w-6xl gap-12 px-5 pb-24 pt-16 md:grid-cols-[1.15fr_.85fr] md:gap-20 md:px-8 md:pb-32 md:pt-28">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--accent)]">Backend-leaning full-stack developer</p>
          <h1 className="text-balance max-w-4xl text-[clamp(3rem,7vw,6.6rem)] font-semibold leading-[0.92] tracking-[-0.055em] text-[var(--text)]">
            I build the systems behind the product.
          </h1>
          <p className="mt-7 max-w-xl text-[15px] leading-7 text-[var(--muted)] md:text-[17px] md:leading-8">
            Two years shipping production software across commerce, warehouse operations, refurbished retail, and notification delivery.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#work" className="inline-flex h-10 items-center gap-2 rounded-full bg-[var(--text)] px-4 text-[12px] font-medium text-black transition hover:bg-white">
              View work
              <ArrowDown size={14} />
            </a>
            <a href="/nithin-public-resume.pdf" target="_blank" rel="noreferrer" className="inline-flex h-10 items-center gap-2 rounded-full border border-[var(--line)] px-4 text-[12px] font-medium text-[var(--text)] transition hover:border-white/20 hover:bg-white/[0.03]">
              Resume
              <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>

        <motion.aside
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.5, ease: "easeOut" }}
          className="self-end"
        >
          <div className="border-t border-[var(--line)] pt-4">
            <div className="flex items-center gap-2 text-[12px] text-[var(--text)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              Available now
            </div>
            <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--muted)]">
              Backend-first work. Open to product teams, startups, and engineering roles where I can own real systems.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-3 border-y border-[var(--line)] py-4">
            <div>
              <p className="font-mono text-xl tracking-[-0.03em] text-[var(--text)]">2 yrs</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-[var(--subtle)]">Experience</p>
            </div>
            <div className="border-l border-[var(--line)] pl-4">
              <p className="font-mono text-xl tracking-[-0.03em] text-[var(--text)]">30K+</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-[var(--subtle)]">Daily users</p>
            </div>
            <div className="border-l border-[var(--line)] pl-4">
              <p className="font-mono text-xl tracking-[-0.03em] text-[var(--text)]">15m → 1m</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-[var(--subtle)]">Campaigns</p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[12px] text-[var(--muted)]">
            {links.map((link) => (
              <a key={link.label} href={link.href} target={link.label !== "Email" ? "_blank" : undefined} rel={link.label !== "Email" ? "noreferrer" : undefined} className="transition hover:text-[var(--text)]">
                {link.label} ↗
              </a>
            ))}
          </div>
        </motion.aside>
      </section>

      <section id="work" className="relative mx-auto w-full max-w-6xl px-5 pb-24 md:px-8 md:pb-32">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--subtle)]">01 / Work</p>
            <h2 className="mt-2 text-xl font-medium tracking-[-0.025em] text-[var(--text)]">Production work.</h2>
          </div>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--subtle)] md:block">Click a row for detail</span>
        </div>
        <ProjectList />
      </section>

      <section id="experience" className="relative mx-auto grid w-full max-w-6xl gap-10 px-5 pb-24 md:grid-cols-[200px_1fr] md:px-8 md:pb-32">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--subtle)]">02 / Experience</p>
        </div>
        <div className="max-w-3xl">
          <div className="border-t border-[var(--line)] py-5">
            <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-6">
              <p className="text-[15px] font-medium text-[var(--text)]">C S Tech Infosolutions Pvt. Ltd.</p>
              <p className="font-mono text-[11px] text-[var(--subtle)]">Sept 2024 — May 2026</p>
            </div>
            <p className="mt-1 text-sm text-[var(--muted)]">Full-Stack Developer · Bengaluru</p>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--muted)]">
              <li>Shipped and stabilized major parts of a B2B commerce platform used by 30K+ daily active users.</li>
              <li>Owned third-party payment and shipment integrations, production releases, debugging, and urgent fixes.</li>
              <li>Decomposed a monolith into API, cron, notification, and payment services for separate workloads and releases.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="relative mx-auto grid w-full max-w-6xl gap-10 border-t border-[var(--line)] px-5 py-14 md:grid-cols-[200px_1fr] md:px-8 md:py-18">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--subtle)]">03 / Contact</p>
        </div>
        <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-balance text-3xl font-medium tracking-[-0.04em] text-[var(--text)] md:text-5xl">Have a real problem to solve?</h2>
            <a href="mailto:142nithin@gmail.com" className="mt-5 inline-block text-sm text-[var(--muted)] underline decoration-white/10 underline-offset-4 transition hover:text-white hover:decoration-white/30">142nithin@gmail.com</a>
          </div>
          <div className="flex gap-5 text-[12px] text-[var(--muted)]">
            <a href="https://github.com/nithinK-142" target="_blank" rel="noreferrer" className="hover:text-white">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/nithin142/" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn ↗</a>
          </div>
        </div>
      </section>

      <footer className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-5 pb-8 pt-2 text-[10px] uppercase tracking-[0.14em] text-[var(--subtle)] md:px-8">
        <span>Less talk. More git push.</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </main>
  );
}
