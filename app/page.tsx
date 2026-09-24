import { CommandPalette, type PaletteItem } from "@/components/CommandPalette";
import { CopyEmail } from "@/components/CopyEmail";
import { CursorLight } from "@/components/CursorLight";
import { Icon } from "@/components/Icon";
import { LocalTime } from "@/components/LocalTime";
import { MotionToggle } from "@/components/MotionToggle";
import { NavLinks } from "@/components/NavLinks";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ExternalLink } from "@/components/Links";
import {
  accessibility,
  commandPalette,
  contact,
  experience,
  footer,
  hero,
  navigation,
  projectLabels,
  projects,
  sections,
  site,
  stack,
  tools,
} from "@/content/site";

const paletteItems: PaletteItem[] = [
  { label: commandPalette.labels.email, hint: site.email, href: `mailto:${site.email}`, icon: "mail" },
  { label: commandPalette.labels.copyEmail, hint: commandPalette.hints.copyEmail, copy: site.email, icon: "copy" },
  { label: commandPalette.labels.resume, hint: commandPalette.hints.resume, href: site.resume, external: true, icon: "file" },
  { label: commandPalette.labels.github, hint: commandPalette.hints.github, href: site.github, external: true, icon: "github" },
  { label: commandPalette.labels.linkedin, hint: commandPalette.hints.linkedin, href: site.linkedin, external: true, icon: "linkedin" },
  { label: commandPalette.labels.experience, hint: commandPalette.hints.section, href: "#experience", icon: "chevron" },
  { label: commandPalette.labels.stack, hint: commandPalette.hints.section, href: "#stack", icon: "chevron" },
  ...projects.map((p) => ({ label: p.name, hint: commandPalette.hints.project, href: `#${p.id}`, icon: "chevron" as const })),
  { label: commandPalette.labels.contact, hint: commandPalette.hints.section, href: "#contact", icon: "chevron" },
];

export default function Page() {
  return (
    <>
      <CursorLight />

      <a href="#main" className="skip-link">
        {accessibility.skipToContent}
      </a>

      {/* Sticky bar: stays visible on every screen. The name is not shown on the page; the mark stands in for it. */}
      <div className="topbar">
        <div className="wrap top">
          <a href="#top" className="mark" aria-label={accessibility.backToTop}>
            <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true">
              <path d="M9 24V8l14 16V8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="miter" />
            </svg>
          </a>
          <nav aria-label={navigation.ariaLabel}>
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
                  {hero.heading} <span className="u">{hero.headingHighlight}</span>.
                </h1>
                <p>{hero.description}</p>
                <div className="acts">
                  <a className="button" href={`mailto:${site.email}`}>
                    <Icon name="mail" size={18} />
                    {site.links.email.label}
                  </a>
                  <ExternalLink href={site.resume} icon="file">
                    {site.links.resume.label}
                  </ExternalLink>
                  <ExternalLink href={site.github} icon="github">
                    {site.links.github.label}
                  </ExternalLink>
                  <ExternalLink href={site.linkedin} icon="linkedin">
                    {site.links.linkedin.label}
                  </ExternalLink>
                </div>
              </div>
              <ul className="hero-meta">
                <li className="status">
                  <span className="dot" aria-hidden="true" />
                  <span className="status-label">{hero.status}</span>
                </li>
                <li className="meta-row">
                  <span>{hero.meta.openTo.label}</span>
                  <span className="meta-value">{hero.meta.openTo.value}</span>
                </li>
                <li className="meta-row">
                  <span>{hero.meta.experience.label}</span>
                  <span className="meta-value">{hero.meta.experience.value}</span>
                </li>
                <li className="meta-row">
                  <span>{hero.meta.location.label}</span>
                  <span className="meta-value">{hero.meta.location.value}</span>
                </li>
                <li className="meta-row">
                  <span>{hero.meta.primaryStack.label}</span>
                  <span className="meta-value">{hero.meta.primaryStack.value}</span>
                </li>
                <li className="meta-row">
                  <span>{hero.meta.localTime}</span>
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
                <h2 id="experience-h">{sections.experience}</h2>
                <h3 className="role">{experience.title}</h3>
                <p className="sub">{experience.company}</p>
                <p className="small">
                  {experience.place}, {experience.when}
                </p>
              </div>
              <dl className="story">
                {experience.rows.map((r) => (
                  <div key={r.label}>
                    <dt className="sr-only">Responsibility</dt>
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
                  <h2 id="stack-h">{sections.stack}</h2>
                  <p>{stack.description}</p>
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
                        <p className="stack-note">{stack.notes[t.group as keyof typeof stack.notes]}</p>
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
              <h2 id="work-h">{sections.work}</h2>
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
                      <dt>{projectLabels.context}</dt>
                      <dd>{p.context}</dd>
                    </div>
                    <div>
                      <dt>{projectLabels.did}</dt>
                      <dd>{p.did}</dd>
                    </div>
                    <div>
                      <dt>{projectLabels.result}</dt>
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
              <h2 id="contact-h">{contact.heading}</h2>
              <p className="ask">
                {contact.ask} <span className="u">{contact.askHighlight}</span>
              </p>
              <p className="ask-sub">{contact.askSub}</p>
              <CopyEmail email={site.email} />

            </div>

            <div className="footer-side">
              <dl className="tl">
                <div>
                  <dt className="ic">
                    <Icon name="linkedin" size={17} />
                    {site.links.linkedin.label}
                  </dt>
                  <dd>
                    <ExternalLink href={site.linkedin} trailing="external">
                      {site.links.linkedin.text}
                    </ExternalLink>
                  </dd>
                </div>
                <div>
                  <dt className="ic">
                    <Icon name="github" size={17} />
                    {site.links.github.label}
                  </dt>
                  <dd>
                    <ExternalLink href={site.github} trailing="external">
                      {site.links.github.text}
                    </ExternalLink>
                  </dd>
                </div>
                <div>
                  <dt className="ic">
                    <Icon name="file" size={17} />
                    {site.links.resume.label}
                  </dt>
                  <dd>
                    <ExternalLink href={site.resume} trailing="external">
                      {site.links.resume.text}
                    </ExternalLink>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-note">
              {footer.copyright} {new Date().getFullYear()} {site.name}
            </p>
            <div className="contact-controls">
              <ThemeToggle />
              <MotionToggle />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
