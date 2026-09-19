import { CampaignPipeline, MonolithSplit } from "@/components/Diagrams";
import { ExternalLink } from "@/components/Links";
import { projects, site, tools } from "@/content/site";

const nameLetters = ["N", "i", "t", "h", "i", "n", "\u00a0", "K"];

export default function Page() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <div className="wrap">
        <div className="top">
          <a href="#top">{site.name}</a>
          <nav aria-label="Primary">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <header id="top">
          <h1 className="name" aria-label={site.name}>
            {nameLetters.map((ch, i) => (
              <span key={i} aria-hidden="true">
                <i>{ch}</i>
              </span>
            ))}
          </h1>

          <div className="strip">
            <div>
              Backend-leaning
              <br />
              full-stack developer
            </div>
            <div>
              Bangalore<small>Open to relocating</small>
            </div>
            <div>
              Available now<small>Backend or full-stack roles</small>
            </div>
            <div>
              <a href={`mailto:${site.email}`}>Email</a>, <ExternalLink href={site.resume}>Resume</ExternalLink>,
              <br />
              <ExternalLink href={site.github}>GitHub</ExternalLink>, <ExternalLink href={site.linkedin}>LinkedIn</ExternalLink>
            </div>
          </div>

          <p className="statement">
            I build the backend that has to keep working. <span>Payments, order updates, notifications.</span>
          </p>
        </header>

        <main id="main">
          <section className="sec" id="work">
            <h2>Selected work, 2024 to 2026</h2>
            <ul className="index">
              {projects.map((p) => (
                <li key={p.id}>
                  <a href={`#${p.id}`}>
                    <span className="n">{p.name}</span>
                    <span className="r">{p.short}</span>
                  </a>
                </li>
              ))}
            </ul>

            {projects.map((p) => (
              <article className="case" id={p.id} key={p.id}>
                <header>
                  <h3>{p.name}</h3>
                  <p className="k">{p.kind}</p>
                  <p className="st">{p.stack}</p>
                </header>
                <div>
                  <ul className="facts">
                    {p.facts.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  {p.link && (
                    <p className="live">
                      Live at <ExternalLink href={p.link.href}>{p.link.label}</ExternalLink>
                    </p>
                  )}
                  {p.id === "dealsdray" && <MonolithSplit />}
                  {p.id === "notification-console" && <CampaignPipeline />}
                </div>
              </article>
            ))}
          </section>

          <section className="sec" id="experience">
            <h2>Experience</h2>
            <div className="cols">
              <div>
                <h3>Full-Stack Developer, C S Tech Infosolutions</h3>
                <p className="m">Bangalore, September 2024 to May 2026</p>
                <p>
                  Four production applications for clients. I worked directly with them and kept the live systems
                  running: server setup, outages, urgent fixes, deployments and data corrections.
                </p>
              </div>
              <dl className="tl">
                {tools.map((t) => (
                  <div key={t.group}>
                    <dt>{t.group}</dt>
                    <dd>{t.items}</dd>
                  </div>
                ))}
                <div>
                  <dt>Right now</dt>
                  <dd>Building an e-commerce backend in Go from scratch, standard library first.</dd>
                </div>
              </dl>
            </div>
          </section>

          <section className="contact sec" id="contact">
            <h2>Contact</h2>
            <p>The best way to reach me is email. Bangalore, open to relocating.</p>
            <p>
              <a className="plain-link" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <div className="links">
              <ExternalLink href={site.linkedin}>LinkedIn</ExternalLink>
              <ExternalLink href={site.github}>GitHub</ExternalLink>
              <ExternalLink href={site.resume}>Resume (PDF)</ExternalLink>
            </div>
          </section>
        </main>
      </div>

      <footer className="site-footer">
        <div className="wrap">
          <span>Less talk. More git push.</span>
          <span>&copy; {new Date().getFullYear()} {site.name}</span>
        </div>
      </footer>
    </>
  );
}
