export const site = {
  name: "Nithin K",
  url: "https://nithin.me",
  email: "142nithin@gmail.com",
  github: "https://github.com/nithinK-142",
  linkedin: "https://www.linkedin.com/in/nithin142/",
  resume: "/nithin-public-resume.pdf",
  title: "Nithin K, backend developer (Node.js, Go)",
  description:
    "Backend developer in Bangalore. Two years taking client systems from unfinished to production across e-commerce, warehouse operations and messaging. Available now, open to relocating.",
};

export const projects = [
  {
    id: "dealsdray",
    name: "Dealsdray",
    stack: "React, Express, MongoDB, Flutter",
    context: "A B2B e-commerce platform that was still unfinished.",
    did: "Built and shipped major parts of it. Integrated Razorpay, PayTM, Zoop and Shiprocket for payments and shipping, and migrated 70K+ legacy users and their orders.",
    result:
      "Live in production with 30K+ daily users and 2K+ orders a month. I later split it into four services (API, cron, notifications, payments) so each can be released and scaled on its own.",
  },
  {
    id: "notification-console",
    name: "Notification Console",
    stack: "React, Express, MongoDB, Go",
    context: "Sending a large push notification campaign took about 15 minutes.",
    did: "Designed and built a console that sends in priority order and in concurrent batches, and recovers if a run crashes partway.",
    result: "Campaign runs now finish in under a minute. It has handled 80K+ device tokens and 10K+ campaigns.",
  },
  {
    id: "rekrafted",
    name: "Rekrafted",
    stack: "Next.js, Express, MongoDB",
    context: "A marketplace for refurbished devices.",
    did: "Built product grading, so listings and pricing vary by a device's condition grade. Moved the 10 to 15GB media library off the API server onto ImageKit.",
    result: "70% of inventory now sits in graded listings, and orders are up 15%. The API server no longer stores the media.",
    link: { href: "https://rekrafted.in/", label: "rekrafted.in" },
  },
  {
    id: "prexo",
    name: "Prexo",
    stack: "React, Express, MongoDB",
    context: "A warehouse processing system whose scheduled jobs on Windows Server failed on 50% of runs.",
    did: "Moved the jobs into a service managed by NSSM. Built a recovery utility that puts unsellable units back in as fresh imports.",
    result: "Job failures dropped to 0%, and 30% more inventory is recovered than before.",
  },
];

export const experience = {
  title: "Full-Stack Developer",
  company: "C S Tech Infosolutions",
  place: "Bangalore",
  when: "September 2024 to May 2026",
  summary:
    "Turning business workflows into production software: application development, third-party integrations, releases, troubleshooting and system reliability.",
  rows: [
    {
      label: "Scope",
      text: "Four production applications spanning B2B commerce, warehouse operations, refurbished-device retail and notification delivery.",
    },
    {
      label: "Ownership",
      text: "Built, shipped and stabilized major parts of the Dealsdray platform, taking it from an unfinished state to production.",
    },
    {
      label: "Clients",
      text: "Worked directly with clients to understand their operational requirements and turn them into application changes.",
    },
    {
      label: "Integrations",
      text: "Connected payment and shipping providers, building webhook flows for payment confirmation and shipment status updates.",
    },
    {
      label: "Architecture",
      text: "Decomposed the Dealsdray monolith into API, cron, notification and payment microservices, so workloads scale and release independently.",
    },
    {
      label: "Live systems",
      text: "Handled production: server setup, outage resolution, urgent fixes, deployments, debugging and data corrections.",
    },
  ],
};

export const tools = [
  { group: "Languages", items: "JavaScript, TypeScript, Go" },
  { group: "Frontend", items: "React, Next.js, Tailwind CSS" },
  { group: "Backend", items: "Node.js, Express, REST APIs, webhooks, microservices, RabbitMQ" },
  { group: "Data", items: "MongoDB, PostgreSQL, Redis" },
  { group: "Infrastructure", items: "Linux, Windows Server, AWS, Docker, PM2, IIS, Plesk" },
  { group: "Integrations", items: "Razorpay, PayTM, Shiprocket, Zoop, Firebase Cloud Messaging" },
  { group: "Observability", items: "OpenTelemetry, Grafana, Prometheus, Sentry, Stackify" },
];
