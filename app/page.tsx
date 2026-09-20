import { CommandPalette, type PaletteItem } from "@/components/CommandPalette";
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
  ...projects.map((p) => ({ label: p.name, hint: "in Work", href: "#work" })),
  { label: "Contact", hint: "section", href: "#contact" },
];

export default function Page() {
  return (
    <>
      <div className="bg-mesh" aria-hidden="true" />

      <a href="#main" className="skip-link">
        Skip to content
      </a>

      {/* Sticky bar: stays visible on every screen. The name appears here and nowhere else. */}
      <div className="topbar">
        <div className="wrap top">
          <a href="#top">{site.name}</a>
          <nav aria-label="Primary">
            <a href="#experience">Experience</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
            <CommandPalette items={paletteItems} />
          </nav>
        </div>
      </div>

      {/* Every screen fills the space below the bar, so nothing is cut off at the fold. */}
      <div className="screen screen-hero">
        <div className="wrap">
          <header id="top" className="hero">
            <div className="hero-grid">
              <div>
                <h1>
                  Backend developer for <span className="u">payments</span>, <span className="u">webhooks</span> and{" "}
                  <span className="u">notification systems</span>.
                </h1>
                <p>Commerce and operations software for clients, from a B2B marketplace to a warehouse system.</p>
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
        <section className="screen" id="experience" aria-label="Experience and stack">
          <div className="wrap profile">
            <div className="blk">
              <h2>Experience</h2>
              <h3 className="role">{experience.title}</h3>
              <p className="sub">{experience.company}</p>
              <p className="small">
                {experience.place}, {experience.when}
              </p>
              <ul className="facts">
                {experience.points.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>

            <div className="blk" id="stack">
              <h2>Stack</h2>
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

        <section className="screen" id="work" aria-labelledby="work-h">
          <div className="wrap">
            <div className="blk">
              <h2 id="work-h">Work</h2>
              <div className="projects">
                {projects.map((p) => (
                  <article className="proj" id={p.id} key={p.id}>
                    <div className="pmeta">
                      <h3 className="pname">{p.name}</h3>
                      <p className="lead">{p.kind}</p>
                      <p className="stack">
                        {p.stack}
                        {p.link && (
                          <>
                            {" "}
                            <ExternalLink href={p.link.href}>{p.link.label}</ExternalLink>
                          </>
                        )}
                      </p>
                    </div>
                    <ul className="facts">
                      {p.facts.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="screen screen-last" id="contact" aria-labelledby="contact-h">
          <div className="wrap profile">
            <div className="blk">
              <h2 id="contact-h">Contact</h2>
              <p className="ask">Payments, webhooks or notifications giving you trouble? Email me.</p>
              <p className="ask-sub">Hiring for a backend or full-stack role? Same address.</p>
              <p>
                <a className="plain-link" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </p>
            </div>
            <div className="blk">
              <h2>Elsewhere</h2>
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
