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
    context:
      "Dealsdray is the commerce side of the business: a mobile app for customers plus internal panels for team members, selling new and refurbished electronics and mobiles.",
    did:
      "Built and shipped major parts of the app and internal panels. Integrated Razorpay, PayTM, Zoop and Shiprocket, including webhooks for payment and shipment updates. Built the migration pipeline for 70K+ legacy users and orders, then separated API, cron, notification and payment workloads into independent services.",
    result:
      "The platform serves 30K+ daily users and 2K+ monthly orders. The service split gave API, cron, notification and payment workloads separate release boundaries.",
  },
  {
    id: "notification-console",
    name: "Notification Console",
    stack: "React, Express, MongoDB, Go",
    context:
      "Notification Console is the internal notification tool for the Dealsdray mobile app. A large campaign could take about 15 minutes to finish, so delivery had to process large token sets without making every campaign wait on serial batch work.",
    did:
      "Built the console around priority-ordered campaigns, concurrent batch delivery and crash recovery. The worker processes device-token batches and keeps enough state to resume after a process failure.",
    result:
      "Campaign runs now finish in under a minute. The system has handled 80K+ device tokens and 10K+ campaigns.",
  },
  {
    id: "rekrafted",
    name: "Rekrafted",
    stack: "Next.js, Express, MongoDB",
    context:
      "Rekrafted is the refurbished-only counterpart to Dealsdray. It follows the same commerce model but sells only refurbished mobiles. The API server also held a 10–15GB media library.",
    did:
      "Built product grading so listings and pricing could vary by device condition. Wrote a migration utility that moves existing product and color images to ImageKit, updates their URLs and thumbnails, and skips files already migrated.",
    result:
      "Grade-specific listings cover 70% of inventory and orders increased 15%. The 10–15GB media library was moved off the API server.",
    link: { href: "https://rekrafted.in/", label: "rekrafted.in" },
  },
  {
    id: "prexo",
    name: "Prexo",
    stack: "React, Express, MongoDB",
    context:
      "Prexo covers the warehouse side of the process, from buying raw electronics through processing them and preparing them for sale on Dealsdray. Its scheduled Windows Server jobs were failing on roughly 50% of runs.",
    did:
      "Moved the cron runner into an NSSM-managed Windows service. Also built a recovery utility that brings unsellable units back into the import process as fresh inventory.",
    result:
      "Scheduled job failures dropped from 50% of runs to 0%, and inventory recovery increased by 30%.",
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
