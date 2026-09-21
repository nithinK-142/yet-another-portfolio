import { CommandPalette, type PaletteItem } from "@/components/CommandPalette";
import { CursorLight } from "@/components/CursorLight";
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
  ...projects.map((p) => ({ label: p.name, hint: "project", href: `#${p.id}` })),
  { label: "Contact", hint: "section", href: "#contact" },
];

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
            <a href="#experience">Experience</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
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
                  I take backend systems from <span className="u">unfinished to production</span>, and keep them
                  running.
                </h1>
                <p>Two years of client work across e-commerce, warehouse operations and messaging.</p>
                <div className="acts">
                  <a className="button" href={`mailto:${site.email}`}>
                    Email me
                  </a>
                  <ExternalLink href={site.resume}>Resume</ExternalLink>
                  <ExternalLink href={site.github}>GitHub</ExternalLink>
                  <ExternalLink href={site.linkedin}>LinkedIn</ExternalLink>
                </div>
              </div>
              <ul className="hero-meta">
                <li>Available now</li>
                <li>Bangalore, open to relocating</li>
                <li>2 years in production</li>
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
                <p className="summary">{experience.summary}</p>
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
            <div className="blk pair" id="stack">
              <h2 id="stack-h">Stack</h2>
              <dl className="tl">
                {tools.map((t) => (
                  <div key={t.group}>
                    <dt>{t.group}</dt>
                    <dd>{t.items}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="sec" aria-labelledby="work-h">
          <div className="wrap">
            <div className="blk" id="work">
              <h2 id="work-h">Work</h2>
              {projects.map((p) => (
                <article className="proj pair" id={p.id} key={p.id}>
                  <div>
                    <h3 className="pname">{p.name}</h3>
                    <p className="stack">{p.stack}</p>
                    {p.link && (
                      <p className="stack">
                        <ExternalLink href={p.link.href}>{p.link.label}</ExternalLink>
                      </p>
                    )}
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

        <section className="sec" aria-labelledby="contact-h">
          <div className="wrap">
            <div className="blk pair" id="contact">
              <div>
                <h2 id="contact-h">Contact</h2>
                <p className="ask">Building or fixing a backend? Email me.</p>
                <p className="ask-sub">Hiring for a backend or full-stack role? Same address.</p>
                <p>
                  <a className="plain-link" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </p>
              </div>
              <dl className="tl">
                <div>
                  <dt>LinkedIn</dt>
                  <dd>
                    <ExternalLink href={site.linkedin}>linkedin.com/in/nithin142</ExternalLink>
                  </dd>
                </div>
                <div>
                  <dt>GitHub</dt>
                  <dd>
                    <ExternalLink href={site.github}>github.com/nithinK-142</ExternalLink>
                  </dd>
                </div>
                <div>
                  <dt>Resume</dt>
                  <dd>
                    <ExternalLink href={site.resume}>PDF</ExternalLink>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap">
          <span>Less talk. More git push.</span>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
      </footer>
    </>
  );
}
