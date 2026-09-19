"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Plus } from "@/components/Icons";
import { useState } from "react";

type Project = {
  id: string;
  name: string;
  role: string;
  outcome: string;
  stack: string;
  details: string[];
  link?: string;
  linkLabel?: string;
};

const projects: Project[] = [
  {
    id: "01",
    name: "Notification Console",
    role: "Push delivery system",
    outcome: "15 min → under 1 min",
    stack: "React · Express · MongoDB · Go",
    details: [
      "Delivered priority-ordered concurrent batches across 80K+ device tokens and 10K+ campaigns.",
      "Designed crash recovery around campaign execution instead of leaving failed runs as manual work.",
    ],
  },
  {
    id: "02",
    name: "Dealsdray",
    role: "B2B commerce platform",
    outcome: "30K+ daily active users",
    stack: "React · Express · MongoDB · Flutter",
    details: [
      "Built and stabilized major parts of the platform through production, including payment and shipment integrations.",
      "Moved the monolith into API, cron, notification, and payment services for independent releases and scaling.",
    ],
  },
  {
    id: "03",
    name: "RekrafteD",
    role: "Refurbished-device marketplace",
    outcome: "+15% orders",
    stack: "Next.js · Express · MongoDB",
    details: [
      "Built grade-specific listings and pricing covering 70% of inventory.",
      "Moved 10–15GB of media off the API server into ImageKit to reduce disk pressure.",
    ],
    link: "https://rekrafted.in/",
    linkLabel: "Live site",
  },
  {
    id: "04",
    name: "Prexo",
    role: "Warehouse processing system",
    outcome: "50% → 0% cron failures",
    stack: "React · Express · MongoDB",
    details: [
      "Built an inventory recovery utility that reintegrated unsellable units as fresh imports.",
      "Replaced recurring Windows Server cron failures with an NSSM-managed service.",
    ],
  },
];

export function ProjectList() {
  const [open, setOpen] = useState<string | null>(null);
  const reduce = useReducedMotion();

  return (
    <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
      {projects.map((project) => {
        const isOpen = open === project.id;
        return (
          <div key={project.id}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : project.id)}
              className="group grid w-full grid-cols-[40px_1fr_auto] gap-4 py-5 text-left md:grid-cols-[54px_minmax(260px,1.1fr)_minmax(180px,.8fr)_minmax(190px,.9fr)_22px] md:items-center md:gap-6 md:py-6"
            >
              <span className="font-mono text-xs text-[var(--subtle)]">{project.id}</span>
              <span>
                <span className="block text-[15px] font-medium tracking-[-0.01em] text-[var(--text)] group-hover:text-[var(--accent)] md:text-[17px]">
                  {project.name}
                </span>
                <span className="mt-1 block text-sm text-[var(--muted)] md:hidden">{project.role}</span>
              </span>
              <span className="hidden text-sm text-[var(--muted)] md:block">{project.role}</span>
              <span className="hidden font-mono text-[12px] text-[var(--text)] md:block">{project.outcome}</span>
              <span className={`flex h-7 w-7 items-center justify-center rounded-full border border-[var(--line)] text-[var(--muted)] transition ${isOpen ? "rotate-45 bg-[var(--accent-soft)] text-[var(--accent)]" : "group-hover:border-white/20 group-hover:text-white"}`}>
                <Plus size={15} />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="grid gap-6 pb-6 pl-[40px] md:grid-cols-[54px_minmax(260px,1.1fr)_minmax(180px,.8fr)_minmax(190px,.9fr)_22px] md:gap-6 md:pl-0">
                    <span />
                    <div>
                      <p className="max-w-xl text-sm leading-6 text-[#b5b4ba]">{project.details[0]}</p>
                      <p className="mt-3 max-w-xl text-sm leading-6 text-[#8e8d93]">{project.details[1]}</p>
                    </div>
                    <div className="text-xs text-[var(--muted)] md:col-span-2">
                      <span className="block font-mono uppercase tracking-[0.14em] text-[var(--subtle)]">Stack</span>
                      <span className="mt-2 block">{project.stack}</span>
                    </div>
                    <div className="flex items-end justify-start md:justify-end">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-medium text-[var(--text)] transition hover:text-[var(--accent)]"
                          onClick={(event) => event.stopPropagation()}
                        >
                          {project.linkLabel}
                          <ArrowUpRight size={14} />
                        </a>
                      ) : (
                        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--subtle)]">Private</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
