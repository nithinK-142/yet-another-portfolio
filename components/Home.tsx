"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "@/components/Icons";
import { ProjectList } from "@/components/ProjectList";

const links = [
  { label: "GitHub", href: "https://github.com/nithinK-142" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nithin142/" },
  { label: "Email", href: "mailto:142nithin@gmail.com" },
];

const skills = ["Node.js", "Go", "PostgreSQL", "MongoDB", "Redis", "Docker"];

export function Home() {
  const reduce = useReducedMotion();

  return (
    <main className="portfolio-shell">
      <aside className="identity-panel">
        <div className="identity-top">
          <a href="#top" className="wordmark">nithin<span>.me</span></a>
          <span className="identity-count">02 / 04</span>
        </div>

        <motion.div
          id="top"
          className="identity-main"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="eyebrow"><span>Software engineer</span></div>
          <h1>Backend systems.<br /><i>Production software.</i></h1>
          <p>
            Backend-leaning full-stack developer with two years of production work across commerce,
            warehouse operations, refurbished retail, and notification delivery.
          </p>
          <div className="identity-actions">
            <a href="#work" className="button button-primary">Selected work <ArrowRight size={15} /></a>
            <a href="/nithin-public-resume.pdf" target="_blank" rel="noreferrer" className="text-link">Resume <ArrowUpRight size={14} /></a>
          </div>
        </motion.div>

        <div className="identity-bottom">
          <div className="availability"><span className="status-dot" />Available now</div>
          <div className="identity-links">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel={link.label === "Email" ? undefined : "noreferrer"}
              >
                {link.label} ↗
              </a>
            ))}
          </div>
          <div className="stack-inline">
            {skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
          <div className="identity-footer">
            <span>Less talk. More git push.</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </aside>

      <div className="content-column">
        <header className="mobile-topbar">
          <a href="#top" className="wordmark">nithin<span>.me</span></a>
          <nav aria-label="Primary navigation">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <section id="work" className="content-section work-section">
          <div className="section-heading">
            <div>
              <span className="section-kicker">01 / Work</span>
              <h2>Things I actually shipped.</h2>
            </div>
            <span className="section-hint">select a row</span>
          </div>
          <ProjectList />
        </section>

        <section id="experience" className="content-section">
          <div className="section-heading">
            <div>
              <span className="section-kicker">02 / Experience</span>
              <h2>Production ownership.</h2>
            </div>
          </div>
          <div className="experience-block">
            <div className="experience-heading">
              <div>
                <h3>C S Tech Infosolutions Pvt. Ltd.</h3>
                <p>Full-Stack Developer · Bengaluru</p>
              </div>
              <span>Sept 2024 — May 2026</span>
            </div>
            <div className="experience-copy">
              <p>Shipped and stabilized major parts of a B2B commerce platform used by 30K+ daily active users.</p>
              <p>Owned payment and shipment integrations, production releases, debugging, data corrections, and urgent fixes.</p>
              <p>Decomposed the monolith into API, cron, notification, and payment services for separate workloads and releases.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="section-heading">
            <div>
              <span className="section-kicker">03 / Contact</span>
              <h2>Have a real problem?</h2>
            </div>
          </div>
          <a className="contact-email" href="mailto:142nithin@gmail.com">
            142nithin@gmail.com <ArrowUpRight size={18} />
          </a>
        </section>
      </div>
    </main>
  );
}
