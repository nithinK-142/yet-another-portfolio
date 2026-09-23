export const site = {
  name: "Nithin K",
  url: "https://nithin.me",
  email: "142nithin@gmail.com",
  github: "https://github.com/nithinK-142",
  linkedin: "https://www.linkedin.com/in/nithin142/",
  resume: "/nithin-public-resume.pdf",
  title: "Nithin K, backend developer (Node.js, Go)",
  description:
    "Backend developer in Bangalore. Two years working across commerce, warehouse processing, refurbished mobile sales and notifications for the Dealsdray app. Available now, open to relocating.",
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
    "Two years across the Dealsdray commerce app and internal panels, the Prexo warehouse operation, Rekrafted refurbished-mobile sales, and the notification console for Dealsdray.",
  rows: [
    {
      label: "Scope",
      text: "Worked across the Dealsdray customer app and internal panels, Prexo warehouse processing, Rekrafted refurbished-mobile sales, and the notification console for the Dealsdray app.",
    },
    {
      label: "Ownership",
      text: "Built, shipped and stabilized major parts of Dealsdray, including core features, integrations, background jobs and live fixes.",
    },
    {
      label: "Client work",
      text: "Worked directly with clients on operational requirements, then turned those requirements into concrete application changes.",
    },
    {
      label: "Integrations",
      text: "Integrated Razorpay, PayTM, Zoop and Shiprocket, including webhooks for payment confirmation and shipment status updates.",
    },
    {
      label: "Architecture",
      text: "Split the Dealsdray monolith into API, cron, notification and payment services so those workloads no longer share the same release boundary.",
    },
    {
      label: "Operations",
      text: "Handled server setup, deployments, outage fixes, debugging and data corrections alongside normal feature work.",
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
