import { CommandPalette, type PaletteItem } from "@/components/CommandPalette";
import { CopyEmail } from "@/components/CopyEmail";
import { CursorLight } from "@/components/CursorLight";
import { Icon } from "@/components/Icon";
import { LocalTime } from "@/components/LocalTime";
import { MotionToggle } from "@/components/MotionToggle";
import { NavLinks } from "@/components/NavLinks";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ExternalLink } from "@/components/Links";
import { experience, projects, site, tools } from "@/content/site";

const paletteItems: PaletteItem[] = [
  { label: "Email me", hint: site.email, href: `mailto:${site.email}`, icon: "mail" },
  { label: "Copy email", hint: "to clipboard", copy: site.email, icon: "copy" },
  { label: "Resume", hint: "PDF", href: site.resume, external: true, icon: "file" },
  { label: "GitHub", hint: "nithinK-142", href: site.github, external: true, icon: "github" },
  { label: "LinkedIn", hint: "nithin142", href: site.linkedin, external: true, icon: "linkedin" },
  { label: "Experience", hint: "section", href: "#experience", icon: "chevron" },
  { label: "Stack", hint: "section", href: "#stack", icon: "chevron" },
  ...projects.map((p) => ({ label: p.name, hint: "project", href: `#${p.id}`, icon: "chevron" as const })),
  { label: "Contact", hint: "section", href: "#contact", icon: "chevron" },
];

const stackNotes: Record<string, string> = {
  Languages: "Application code",
  Frontend: "Interfaces + web apps",
  Backend: "APIs + async services",
  Data: "Persistence + caching",
  Infrastructure: "Deployment + process management",
  Integrations: "Payments + logistics + messaging",
  Observability: "Metrics + tracing + error tracking",
};

export default function Page() {
  return (
    <>
      <CursorLight />

      <a href="#main" className="skip-link">
        Skip to content
      </a>

      {/* Sticky bar: stays visible on every screen. The name is not shown on the page; the mark stands in for it. */}
      <div className="topbar">
        <div className="wrap top">
          <a href="#top" className="mark" aria-label="Back to top">
            <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true">
              <path d="M9 24V8l14 16V8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="miter" />
            </svg>
          </a>
          <nav aria-label="Primary">
            <NavLinks />
            <CommandPalette items={paletteItems} />
          </nav>
        </div>
      </div>

      {/* The hero fills the first screen below the bar, so nothing is cut off at the fold. */}
      <div className="screen-hero">
        <div className="wrap">
          <header id="top" className="hero">
            <div className="hero-grid">
              <div>
                <h1>
                  I build the systems behind <span className="u">real business workflows</span>.
                </h1>
                <p>Payments, shipping, warehouse operations, data migrations, notifications, and deployments — with end-to-end ownership.</p>
                <div className="acts">
                  <a className="button" href={`mailto:${site.email}`}>
                    <Icon name="mail" size={18} />
                    Email me
                  </a>
                  <ExternalLink href={site.resume} icon="file">
                    Resume
                  </ExternalLink>
                  <ExternalLink href={site.github} icon="github">
                    GitHub
                  </ExternalLink>
                  <ExternalLink href={site.linkedin} icon="linkedin">
                    LinkedIn
                  </ExternalLink>
                </div>
              </div>
              <ul className="hero-meta">
                <li className="status">
                  <span className="dot" aria-hidden="true" />
                  <span className="status-label">Available now</span>
                </li>
                <li className="meta-row">
                  <span>Open to</span>
                  <span className="meta-value">Backend · Full Stack</span>
                </li>
                <li className="meta-row">
                  <span>Experience</span>
                  <span className="meta-value">2 years</span>
                </li>
                <li className="meta-row">
                  <span>Based in</span>
                  <span className="meta-value">Bengaluru</span>
                </li>
                <li className="meta-row">
                  <span>Primary stack</span>
                  <span className="meta-value">Node.js · Go · React</span>
                </li>
                <li className="meta-row">
                  <span>Local time</span>
                  <LocalTime />
                </li>
              </ul>
            </div>
          </header>
        </div>
      </div>

      <main id="main">
        <section className="sec" aria-labelledby="experience-h">
          <div className="wrap">
            <div className="blk pair" id="experience">
              <div>
                <h2 id="experience-h">Experience</h2>
                <h3 className="role">{experience.title}</h3>
                <p className="sub">{experience.company}</p>
                <p className="small">
                  {experience.place}, {experience.when}
                </p>
              </div>
              <dl className="story">
                {experience.rows.map((r) => (
                  <div key={r.label}>
                    <dt>{r.label}</dt>
                    <dd>{r.text}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="sec" aria-labelledby="stack-h">
          <div className="wrap">
            <div className="blk stack-block" id="stack">
              <div className="stack-intro">
                <div>
                  <h2 id="stack-h">Stack</h2>
                  <p>Most of my work is backend: APIs, jobs, data stores, integrations and deployment tooling.</p>
                </div>
              </div>

              <div className="stack-grid">
                {tools.map((t, index) => (
                  <article className={`stack-group${t.group === "Backend" ? " stack-group-main" : ""}`} key={t.group}>
                    <div className="stack-group-head">
                      <span className="stack-index" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3>{t.group}</h3>
                        <p className="stack-note">{stackNotes[t.group]}</p>
                      </div>
                    </div>
                    <div className="stack-items">
                      {t.items.split(", ").map((item) => (
                        <span className="stack-item" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="sec" aria-labelledby="work-h">
          <div className="wrap">
            <div className="blk" id="work">
              <h2 id="work-h">Selected Work</h2>
              {projects.map((p, index) => (
                <article className="proj pair" id={p.id} key={p.id}>
                  <div className="project-intro">
                    <span className="project-index" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="pname">{p.name}</h3>
                      <p className="stack">{p.stack}</p>
                      {p.link && (
                        <p className="stack">
                          <ExternalLink href={p.link.href} trailing="external">
                            {p.link.label}
                          </ExternalLink>
                        </p>
                      )}
                    </div>
                  </div>
                  <dl className="story">
                    <div>
                      <dt>Context</dt>
                      <dd>{p.context}</dd>
                    </div>
                    <div>
                      <dt>What I did</dt>
                      <dd>{p.did}</dd>
                    </div>
                    <div>
                      <dt>Result</dt>
                      <dd>{p.result}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" aria-labelledby="contact-h">
        <div className="wrap">
          <div className="blk pair" id="contact">
            <div>
              <p className="ask">Need help building, integrating, or fixing something? Email me.</p>
              <p className="ask-sub">Hiring for backend or full-stack work? Same address.</p>
              <CopyEmail email={site.email} />

            </div>

            <div className="footer-side">
              <dl className="tl">
                <div>
                  <dt className="ic">
                    <Icon name="linkedin" size={17} />
                    LinkedIn
                  </dt>
                  <dd>
                    <ExternalLink href={site.linkedin} trailing="external">
                      linkedin.com/in/nithin142
                    </ExternalLink>
                  </dd>
                </div>
                <div>
                  <dt className="ic">
                    <Icon name="github" size={17} />
                    GitHub
                  </dt>
                  <dd>
                    <ExternalLink href={site.github} trailing="external">
                      github.com/nithinK-142
                    </ExternalLink>
                  </dd>
                </div>
                <div>
                  <dt className="ic">
                    <Icon name="file" size={17} />
                    Resume
                  </dt>
                  <dd>
                    <ExternalLink href={site.resume} trailing="external">
                      PDF
                    </ExternalLink>
                  </dd>
                </div>
              </dl>

              <div className="contact-controls">
                <ThemeToggle />
                <MotionToggle />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
