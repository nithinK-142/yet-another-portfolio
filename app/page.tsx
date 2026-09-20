import { CommandPalette, type PaletteItem } from "@/components/CommandPalette";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import { ExternalLink } from "@/components/Links";
import { experience, projects, site, tools } from "@/content/site";

const paletteItems: PaletteItem[] = [
  { label: "Email me", hint: site.email, href: `mailto:${site.email}` },
  { label: "Copy email", hint: "to clipboard", copy: site.email },
  { label: "Resume", hint: "PDF", href: site.resume, external: true },
  { label: "GitHub", hint: "nithinK-142", href: site.github, external: true },
  { label: "LinkedIn", hint: "nithin142", href: site.linkedin, external: true },
  { label: "Experience", hint: "section", href: "#experience" },
  { label: "Stack", hint: "section", href: "#stack" },
  { label: "Work", hint: "section", href: "#work" },
  ...projects.map((p) => ({ label: p.name, hint: "project", href: `#${p.id}` })),
  { label: "Contact", hint: "section", href: "#contact" },
];

const navItems = [
  ["Experience", "#experience"],
  ["Stack", "#stack"],
  ["Work", "#work"],
  ["Contact", "#contact"],
] as const;

export default function Page() {
  return (
    <div className="site-shell">
      <div className="ambient" aria-hidden="true" />
      <div className="grid-glow" aria-hidden="true" />

      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <header className="topbar">
        <div className="wrap topbar-inner">
          <a href="#top" className="brand" aria-label="Nithin portfolio home">
            <span className="brand-mark" aria-hidden="true">
              N
            </span>
            <span className="brand-label">production // backend</span>
          </a>

          <nav aria-label="Primary" className="primary-nav">
            {navItems.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
            <CommandPalette items={paletteItems} />
          </nav>
        </div>
      </header>

      <main id="main" className="main-content">
        <section className="hero-section" id="top" aria-labelledby="hero-title">
          <div className="wrap hero-wrap">
            <div className="status-pill">
              <span className="status-dot" aria-hidden="true">
                <span />
              </span>
              <span className="status-live">Available now</span>
              <span className="status-divider">·</span>
              <span>Bangalore, open to relocating</span>
              <span className="status-divider">·</span>
              <span>2+ yrs in production</span>
            </div>

            <div className="hero-grid">
              <div className="hero-copy">
                <h1 id="hero-title">
                  I take backend systems from <span className="hero-accent">unfinished to production</span>, and keep
                  them running.
                </h1>

                <p>
                  Two years of hands-on client engineering across high-load e-commerce platforms, automated warehouse
                  operations, and distributed messaging pipelines.
                </p>

                <div className="hero-actions">
                  <a className="button button-primary" href={`mailto:${site.email}`}>
                    Email me
                  </a>
                  <a className="button button-secondary" href={site.resume} target="_blank" rel="noreferrer noopener">
                    Resume (PDF)
                    <span aria-hidden="true">↗</span>
                  </a>
                  <ExternalLink href={site.github} className="button button-secondary">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.57 0-.28-.01-1.23-.01-2.24-3.01.56-3.8-.73-4.03-1.41-.13-.34-.72-1.41-1.23-1.69-.42-.22-1.02-.78-.01-.8.94-.01 1.62.87 1.84 1.23 1.08 1.82 2.81 1.31 3.5.99.1-.78.42-1.31.76-1.61-2.67-.3-5.46-1.33-5.46-5.92 0-1.31.46-2.39 1.23-3.23-.12-.3-.54-1.53.12-3.18 0 0 1-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.3-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.23 0 4.6-2.81 5.62-5.48 5.92.43.38.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.3 0 .31.23.69.82.57A12.02 12.02 0 0 0 24 12C24 5.37 18.63 0 12 0Z"
                      />
                    </svg>
                    GitHub
                  </ExternalLink>
                  <ExternalLink href={site.linkedin} className="button button-secondary">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5ZM8 19H5V8h3v11ZM6.5 6.47a1.76 1.76 0 1 1 0-3.53 1.76 1.76 0 0 1 0 3.53ZM19 19h-3v-5.4c0-3.24-4-2.99-4 0V19H9V8h3v1.76c1.39-2.59 7-2.78 7 2.47V19Z"
                      />
                    </svg>
                    LinkedIn
                  </ExternalLink>
                </div>
              </div>

              <aside className="terminal-card" aria-label="Production snapshot">
                <div className="terminal-head">
                  <div className="terminal-dots" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="mono micro">prod-sys-info.sh</span>
                </div>

                <dl className="metrics">
                  <div>
                    <dt>Live services</dt>
                    <dd>4 production apps</dd>
                  </div>
                  <div>
                    <dt>Primary scale</dt>
                    <dd className="metric-cyan">30K+ daily actives</dd>
                  </div>
                  <div>
                    <dt>Job reliability</dt>
                    <dd className="metric-green">0% failure rate</dd>
                  </div>
                  <div>
                    <dt>Data migrated</dt>
                    <dd>70K+ accounts</dd>
                  </div>
                  <div>
                    <dt>Core runtime</dt>
                    <dd>Node / Go / Linux</dd>
                  </div>
                </dl>

                <div className="daemon-line">
                  <span className="daemon-cursor" aria-hidden="true" />
                  <span className="mono micro">system daemon: stable [PID 1420]</span>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="section-band" id="experience" aria-labelledby="experience-h">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow">Career</span>
                <h2 id="experience-h">Work Experience</h2>
              </div>
              <span className="section-meta mono">2024 — 2026</span>
            </div>

            <div className="glass-panel experience-panel">
              <div className="experience-header">
                <div>
                  <div className="title-row">
                    <h3>{experience.title}</h3>
                    <span className="status-tag">Full-time</span>
                  </div>
                  <p className="company">{experience.company}</p>
                </div>
                <div className="small mono">{experience.place}, India · {experience.when.replace("September ", "Sep ")}</div>
              </div>

              <p className="experience-summary">{experience.summary}</p>

              <div className="highlight-grid">
                {experience.rows.slice(0, 4).map((row, index) => (
                  <div key={row.label} className="highlight-card">
                    <span className="mono label">0{index + 1} / {row.label}</span>
                    <h4>
                      {[
                        "Production portfolio delivery",
                        "Zero to stable production",
                        "Client-facing delivery",
                        "Production integrations",
                      ][index]}
                    </h4>
                    <p>{row.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-band" id="stack" aria-labelledby="stack-h">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow">Tooling</span>
                <h2 id="stack-h">Technical Stack &amp; Capabilities</h2>
              </div>
              <span className="section-meta mono">Battle-tested in prod</span>
            </div>

            <div className="stack-grid">
              {tools.map((tool) => (
                <div key={tool.group} className="glass-panel stack-card">
                  <div className="stack-card-head">
                    <span className="mono label">{tool.group}</span>
                    <span className="stack-icon" aria-hidden="true">↗</span>
                  </div>
                  <div className="stack-pills">
                    {tool.items.split(", ").map((item) => (
                      <span key={item} className="pill">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-band" id="work" aria-labelledby="work-h">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow">Shipped software</span>
                <h2 id="work-h">Production Case Studies</h2>
              </div>
              <span className="section-meta mono">{projects.length} key deployments</span>
            </div>

            <div className="case-list">
              {projects.map((project) => (
                <article className="glass-panel case-card" id={project.id} key={project.id}>
                  <div className="case-head">
                    <div>
                      <div className="title-row case-title-row">
                        <h3>{project.name}</h3>
                        <span className="case-tag">Production</span>
                      </div>
                      <p>{project.stack}</p>
                      {project.link && (
                        <ExternalLink className="case-link mono" href={project.link.href}>
                          {project.link.label}
                        </ExternalLink>
                      )}
                    </div>
                    <div className="case-pills">
                      {project.stack.split(", ").map((item) => (
                        <span key={item} className="pill">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="case-grid">
                    <div>
                      <span className="mono label">Context</span>
                      <p>{project.context}</p>
                    </div>
                    <div>
                      <span className="mono label">What I did</span>
                      <p>{project.did}</p>
                    </div>
                    <div className="result-card">
                      <span className="mono result-label">Live metric &amp; result</span>
                      <p>{project.result}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-h">
          <div className="wrap">
            <div className="glass-panel contact-panel">
              <div className="contact-glow" aria-hidden="true" />
              <div className="contact-grid">
                <div>
                  <span className="eyebrow">Ready to scale</span>
                  <h2 id="contact-h">
                    Building or fixing a backend? <span>Let&apos;s build reliable software.</span>
                  </h2>
                  <p>Hiring for a full-stack or backend engineering role, or need to stabilize high-workload services?</p>
                </div>

                <div className="contact-actions">
                  <div className="email-card">
                    <div>
                      <span className="mono label">Primary mail</span>
                      <a href={`mailto:${site.email}`}>{site.email}</a>
                    </div>
                    <CopyEmailButton email={site.email} />
                  </div>

                  <div className="contact-links">
                    <ExternalLink href={site.linkedin} className="contact-link">LinkedIn</ExternalLink>
                    <ExternalLink href={site.github} className="contact-link">GitHub</ExternalLink>
                    <a className="contact-link contact-link-accent" href={`mailto:${site.email}?subject=Resume%20Request%20-%20Backend%20Engineer`}>
                      PDF CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-inner">
          <span className="mono">&quot;Less talk. More git push.&quot;</span>
          <span className="mono">© {new Date().getFullYear()} Nithin. All systems operational.</span>
        </div>
      </footer>
    </div>
  );
}
