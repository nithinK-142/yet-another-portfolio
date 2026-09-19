"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Plus } from "@/components/Icons";
import { useState } from "react";

type Project = {
  id: string;
  name: string;
  type: string;
  outcome: string;
  summary: string;
  detail: string;
  stack: string;
  link?: string;
  linkLabel?: string;
  image?: string;
  visual: "notifications" | "commerce" | "marketplace" | "warehouse";
};

const projects: Project[] = [
  {
    id: "01",
    name: "Notification Console",
    type: "Push delivery system",
    outcome: "15m → <1m",
    summary: "Made large notification campaigns run in under a minute.",
    detail: "80K+ device tokens. 10K+ campaigns. Priority-ordered concurrent batching with crash recovery.",
    stack: "React · Express · MongoDB · Go",
    visual: "notifications",
  },
  {
    id: "02",
    name: "Dealsdray",
    type: "B2B commerce platform",
    outcome: "30K+ DAU",
    summary: "Took major parts of a B2B commerce platform through production.",
    detail: "Built the migration pipeline for 70K+ legacy users and orders, integrated payments and shipments, and split the monolith into separately releasable services.",
    stack: "React · Express · MongoDB · Flutter",
    image: "/projects/dealsdray-dashboard.webp",
    visual: "commerce",
  },
  {
    id: "03",
    name: "RekrafteD",
    type: "Refurbished-device marketplace",
    outcome: "+15% orders",
    summary: "Added grade-based listings and pricing across 70% of inventory.",
    detail: "Moved 10–15GB of media from the API server to ImageKit. Public product at rekrafted.in.",
    stack: "Next.js · Express · MongoDB",
    link: "https://rekrafted.in/",
    linkLabel: "Open product",
    image: "/projects/rekrafted-home.webp",
    visual: "marketplace",
  },
  {
    id: "04",
    name: "Prexo",
    type: "Warehouse processing system",
    outcome: "50% → 0%",
    summary: "Recovered more inventory and stopped recurring Windows cron failures.",
    detail: "Recovery utility delivered 30% more inventory recovery. Cron workload moved to an NSSM-managed service.",
    stack: "React · Express · MongoDB",
    visual: "warehouse",
  },
];

function Schematic({ kind }: { kind: Project["visual"] }) {
  if (kind === "notifications") {
    return (
      <div className="schematic notification-schematic" aria-hidden="true">
        <div className="schematic-head"><span>QUEUE</span><span>LIVE</span></div>
        {["A1", "A2", "A3", "A4"].map((item, i) => (
          <div key={item} className="batch-row">
            <b>{item}</b>
            <span><i style={{ width: `${58 + i * 10}%` }} /></span>
            <em>{i < 3 ? "sent" : "queue"}</em>
          </div>
        ))}
        <div className="schematic-foot">concurrent batches</div>
      </div>
    );
  }

  if (kind === "commerce") {
    return (
      <div className="schematic commerce-schematic" aria-hidden="true">
        <span className="node node-root">traffic</span>
        <div className="node-grid">
          <span className="node">API</span>
          <span className="node">PAY</span>
          <span className="node">CRON</span>
          <span className="node">NOTIFY</span>
        </div>
        <small>independent workloads</small>
      </div>
    );
  }

  if (kind === "marketplace") {
    return (
      <div className="schematic marketplace-schematic" aria-hidden="true">
        <div className="mini-card"><small>GRADE A</small><strong>Device</strong><span>price</span></div>
        <div className="mini-card middle"><small>GRADE B</small><strong>Device</strong><span>price</span></div>
        <div className="mini-card back"><small>GRADE C</small><strong>Device</strong><span>price</span></div>
      </div>
    );
  }

  return (
    <div className="schematic warehouse-schematic" aria-hidden="true">
      <span className="flow-node active">scan</span>
      <i />
      <span className="flow-node">recover</span>
      <i />
      <span className="flow-node">import</span>
      <small>service stable</small>
    </div>
  );
}

export function ProjectList() {
  const [open, setOpen] = useState("03");
  const reduce = useReducedMotion();

  return (
    <div className="project-list">
      {projects.map((project) => {
        const isOpen = open === project.id;
        return (
          <article key={project.id} className={`project-row ${isOpen ? "is-open" : ""}`}>
            <button
              type="button"
              className="project-button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? "" : project.id)}
            >
              <span className="project-id">{project.id}</span>
              <span className="project-title">
                <strong>{project.name}</strong>
                <small>{project.type}</small>
              </span>
              <span className="project-result">{project.outcome}</span>
              <span className="project-plus"><Plus size={15} /></span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                  className="project-open"
                >
                  <div className="project-open-grid">
                    <div className="project-open-copy">
                      <p>{project.summary}</p>
                      <p className="project-detail-text">{project.detail}</p>
                      <div className="project-open-footer">
                        <span>{project.stack}</span>
                        {project.link ? (
                          <a href={project.link} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}>
                            {project.linkLabel} <ArrowUpRight size={13} />
                          </a>
                        ) : (
                          <span>Private product</span>
                        )}
                      </div>
                    </div>
                    <div className="project-media">
                      {project.image ? <img src={project.image} alt={`${project.name} interface preview`} loading="lazy" /> : <Schematic kind={project.visual} />}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );
}
