import { CommandPalette, type PaletteItem } from "@/components/CommandPalette";
import { ExternalLink } from "@/components/Links";
import { experience, projects, site, tools } from "@/content/site";

const paletteItems: PaletteItem[] = [
  { label: "Email me", hint: site.email, href: `mailto:${site.email}` },
  { label: "Copy email", hint: "to clipboard", copy: site.email },
  { label: "Resume", hint: "PDF", href: site.resume, external: true },
  { label: "GitHub", hint: "nithinK-142", href: site.github, external: true },
  { label: "LinkedIn", hint: "nithin142", href: site.linkedin, external: true },
  ...projects.map((p) => ({ label: p.name, hint: "in Work", href: "#work" })),
  { label: "Experience", hint: "section", href: "#experience" },
  { label: "Stack", hint: "section", href: "#stack" },
  { label: "Contact", hint: "section", href: "#contact" },
];

export default function Page() {
  return (
    <>
      <div className="bg-mesh" aria-hidden="true" />

      <a href="#main" className="skip-link">
        Skip to content
      </a>

      {/* Every screen is sized to the viewport height, so nothing is cut off at the fold. */}
      <div className="screen screen-hero">
        <div className="wrap">
          <div className="top">
            <a href="#top">{site.name}</a>
            <nav aria-label="Primary">
              <a href="#work">Work</a>
              <a href="#experience">Experience</a>
              <a href="#contact">Contact</a>
              <CommandPalette items={paletteItems} />
            </nav>
          </div>

          <header id="top" className="hero">
            <h1>I build the backend that has to keep working.</h1>
            <p>
              {site.name}, backend-leaning full-stack developer in Bangalore. Two years shipping payments, order
              updates and push notifications. <span>Available now, open to relocating.</span>
            </p>
            <div className="acts">
              <a className="button" href={`mailto:${site.email}`}>
                Email me
              </a>
              <ExternalLink href={site.resume}>Resume</ExternalLink>
              <ExternalLink href={site.github}>GitHub</ExternalLink>
              <ExternalLink href={site.linkedin}>LinkedIn</ExternalLink>
            </div>
          </header>
        </div>
      </div>

      <main id="main">
        <section className="screen" id="work" aria-labelledby="work-h">
          <div className="wrap">
            <div className="blk">
              <h2 id="work-h">Selected work, 2024 to 2026</h2>
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

        <section className="screen screen-last" id="contact" aria-labelledby="contact-h">
          <div className="wrap profile">
            <div className="blk">
              <h2 id="contact-h">Contact</h2>
              <p className="ask">If you&rsquo;re hiring for backend or full-stack work, email me.</p>
              <p className="ask-sub">Bangalore, open to relocating.</p>
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
          <span>
            &copy; {new Date().getFullYear()} {site.name}
          </span>
        </div>
      </footer>
    </>
  );
}
