import Image from "next/image";
import { CampaignPipeline, MonolithSplit } from "@/components/Diagrams";
import { Figure } from "@/components/Figure";
import { ExternalLink } from "@/components/Links";
import { site, tools, workIndex } from "@/content/site";

export default function Page() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <header className="wrap flex items-baseline justify-between py-6">
        <a href="#top" className="font-sans text-lg font-semibold">
          {site.name}
        </a>
        <nav aria-label="Primary" className="nav flex gap-6 font-sans text-base">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="main">
        <section id="top" className="wrap pt-14 pb-24 md:pt-24 md:pb-32">
          <h1 className="h1">I build the backend that has to keep working.</h1>
          <p className="lede mt-8 md:mt-10">
            Payments, order updates, push notifications. I&rsquo;m Nithin, a full-stack developer
            who leans backend, with two years of production experience in Bangalore. I&rsquo;m
            looking for a backend or full-stack role, and I&rsquo;m open to relocating.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5 font-sans text-lg">
            <a className="button" href={`mailto:${site.email}`}>
              Email me
            </a>
            <ExternalLink href={site.resume}>Resume (PDF)</ExternalLink>
            <ExternalLink href={site.linkedin}>LinkedIn</ExternalLink>
            <ExternalLink href={site.github}>GitHub</ExternalLink>
          </div>
        </section>

        <section id="work" className="wrap pb-28">
          <h2 className="h2">Work</h2>
          <p className="measure mt-4 text-muted">
            Four systems from my time at C S Tech Infosolutions. Each one is written up below.
          </p>

          <ul className="index">
            {workIndex.map((item) => (
              <li key={item.id}>
                <a className="index-row" href={`#${item.id}`}>
                  <span className="index-name">{item.name}</span>
                  <span className="index-line">{item.line}</span>
                </a>
              </li>
            ))}
          </ul>

          <article id="dealsdray" className="project">
            <h3 className="h3">Dealsdray</h3>
            <p className="meta mt-3">
              B2B e-commerce platform
              <br />
              React, Express, MongoDB, Flutter
            </p>
            <div className="prose mt-8">
              <p>
                <strong>Where it started.</strong> The platform was unfinished when I began on it.
                I built and shipped major parts of it and took it to production, where it now
                serves 30K+ daily active users and 2K+ orders a month.
              </p>
              <p>
                <strong>Payments and shipping.</strong> I integrated Razorpay, PayTM, Zoop and
                Shiprocket, with webhook flows that confirm payments and keep shipment status
                current.
              </p>
              <p>
                <strong>Moving the old data.</strong> I built the pipeline that carried 70K+ legacy
                users and their orders into the new system.
              </p>
              <p>
                <strong>Email.</strong> The old code opened a new SMTP connection for every email,
                and large sends exhausted the connection pool. I replaced it with a shared pool,
                and those failures stopped.
              </p>
              <p>
                <strong>Splitting the monolith.</strong> I later broke the application into API,
                cron, notification and payment services, so each workload could be released and
                scaled separately.
              </p>
            </div>
            <MonolithSplit />
          </article>

          <article id="notification-console" className="project">
            <h3 className="h3">Notification Console</h3>
            <p className="meta mt-3">
              Push notification delivery system
              <br />
              React, Express, MongoDB, Go
            </p>
            <div className="prose mt-8">
              <p>
                <strong>The problem.</strong> Sending a large campaign took about 15 minutes.
              </p>
              <p>
                <strong>What I built.</strong> I designed and delivered the console. It sends in
                priority order, in concurrent batches, and recovers if a run crashes partway.
              </p>
              <p>
                <strong>The result.</strong> Campaign runs dropped from 15 minutes to under one. The
                system has handled 80K+ device tokens across 10K+ campaigns.
              </p>
            </div>
            <CampaignPipeline />
            <Figure caption="Recent notifications in the console.">
              <div className="scroll-x" tabIndex={0} role="region" aria-label="Console screenshot, scrolls sideways">
                <Image
                  src="/projects/notification-console.webp"
                  alt="List of recent push notifications in the console, each with a title, message, status and date"
                  width={1176}
                  height={257}
                  sizes="(min-width: 64rem) 60rem, 40rem"
                />
              </div>
            </Figure>
          </article>

          <article id="rekrafted" className="project">
            <h3 className="h3">Rekrafted</h3>
            <p className="meta mt-3">
              Refurbished-device marketplace
              <br />
              Next.js, Express, MongoDB
            </p>
            <div className="prose mt-8">
              <p>
                <strong>Grading.</strong> I built the product-grading feature: listings and pricing
                that vary by grade, covering 70% of inventory. Orders rose 15%.
              </p>
              <p>
                <strong>Media.</strong> I moved the media library, 10&ndash;15GB, off the API server
                and onto ImageKit, which took that load off the server&rsquo;s disk.
              </p>
              <p>
                It&rsquo;s live at <ExternalLink href="https://rekrafted.in/">rekrafted.in</ExternalLink>.
              </p>
            </div>
            <Figure caption="The Rekrafted storefront.">
              <Image
                src="/projects/rekrafted-home.webp"
                alt="Rekrafted home page with a banner for tested, certified refurbished mobile phones"
                width={1440}
                height={673}
                sizes="(min-width: 64rem) 60rem, 100vw"
              />
            </Figure>
          </article>

          <article id="prexo" className="project">
            <h3 className="h3">Prexo</h3>
            <p className="meta mt-3">
              Warehouse processing system
              <br />
              React, Express, MongoDB
            </p>
            <div className="prose mt-8">
              <p>
                <strong>Inventory.</strong> I built a recovery utility that puts unsellable units
                back in as fresh imports. It recovers 30% more inventory than before.
              </p>
              <p>
                <strong>Reliability.</strong> The scheduled jobs on Windows Server were failing on
                50% of runs. I moved them into a service managed by NSSM, and the failure rate went
                to 0%.
              </p>
            </div>
          </article>
        </section>

        <section id="experience" className="wrap pb-28">
          <h2 className="h2">Experience</h2>
          <div className="prose mt-8">
            <h3 className="h4">Full-Stack Developer, C S Tech Infosolutions Pvt. Ltd.</h3>
            <p className="meta !mt-1">Bangalore, September 2024 to May 2026</p>
            <p className="!mt-4">
              I worked on four production applications for clients in B2B commerce, warehouse
              operations, refurbished-device retail and notification delivery. I worked directly
              with the clients to turn how their operations run into changes to the software.
            </p>
            <p>
              I also kept the live systems running: server setup, outage resolution, urgent fixes,
              deployments, debugging and data corrections.
            </p>
          </div>

          <div className="prose mt-12">
            <h3 className="h4">Education</h3>
            <p className="!mt-3">
              Master of Computer Applications, Cambridge Institute of Technology, Bangalore.
              <span className="meta mt-1 block">2020 to 2022</span>
            </p>
            <p>
              Bachelor of Computer Applications, Lal Bahadur Arts, Science &amp; S.B. Solabanna
              Shetty Commerce College, Shimoga.
              <span className="meta mt-1 block">2017 to 2020</span>
            </p>
          </div>
        </section>

        <section id="tools" className="wrap pb-28">
          <h2 className="h2">Tools</h2>
          <dl className="tools">
            {tools.map((row) => (
              <div key={row.group}>
                <dt>{row.group}</dt>
                <dd>{row.items}</dd>
              </div>
            ))}
          </dl>
          <p className="measure mt-8">
            Right now I&rsquo;m building an e-commerce backend in Go from scratch, standard library
            first (net/http, pgx, golang-migrate), before reaching for frameworks.
          </p>
        </section>

        <section id="contact" className="wrap pb-24">
          <h2 className="h2">Contact</h2>
          <p className="measure mt-4">
            The best way to reach me is email. I&rsquo;m based in Bangalore and open to relocating.
          </p>
          <a className="email" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <p className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-sans text-lg">
            <ExternalLink href={site.linkedin}>LinkedIn</ExternalLink>
            <ExternalLink href={site.github}>GitHub</ExternalLink>
            <ExternalLink href={site.resume}>Resume (PDF)</ExternalLink>
          </p>
        </section>
      </main>

      <footer className="wrap footer">
        <div className="flex flex-wrap justify-between gap-x-8 gap-y-2 border-t border-line py-8">
          <p>Less talk. More git push.</p>
          <p>
            &copy; {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </footer>
    </>
  );
}
