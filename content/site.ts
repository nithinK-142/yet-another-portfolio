export const site = {
  name: "Nithin K",
  url: "https://nithin.me",
  email: "142nithin@gmail.com",
  github: "https://github.com/nithinK-142",
  linkedin: "https://www.linkedin.com/in/nithin142/",
  resume: "/nithin-public-resume.pdf",
  title: "Nithin K, backend developer (Node.js, Go)",
  description:
    "Backend developer in Bangalore. Two years working on commerce, warehouse processing, refurbished mobile sales and the notification tool for the Dealsdray app. Available now, open to relocating.",
};

export const projects = [
  {
    id: "dealsdray",
    name: "Dealsdray",
    stack: "React, Express, MongoDB, Flutter",
    context:
      "Commerce app for customers and internal panels. Sells new and refurbished electronics and mobiles.",
    did:
      "Built major features, integrated Razorpay, PayTM, Zoop and Shiprocket, migrated 70K+ legacy users and orders, and split API, cron, notification and payment workloads.",
    result:
      "30K+ daily users and 2K+ monthly orders.",
  },
  {
    id: "notification-console",
    name: "Notification Console",
    stack: "React, Express, MongoDB, Go",
    context:
      "Internal notification tool for the Dealsdray mobile app. Campaigns could take about 15 minutes to finish.",
    did:
      "Added priority ordering, concurrent batch delivery and crash recovery for device-token campaigns.",
    result:
      "Campaigns now finish in under a minute. 80K+ device tokens and 10K+ campaigns handled.",
  },
  {
    id: "rekrafted",
    name: "Rekrafted",
    stack: "Next.js, Express, MongoDB",
    context:
      "Refurbished-only counterpart to Dealsdray, selling refurbished mobiles.",
    did:
      "Added grade-based listings and pricing. Moved the 10–15GB image library to ImageKit with a rerunnable migration utility.",
    result:
      "70% of inventory covered by grading; orders increased 15%.",
    link: { href: "https://rekrafted.in/", label: "rekrafted.in" },
  },
  {
    id: "prexo",
    name: "Prexo",
    stack: "React, Express, MongoDB",
    context:
      "After Amazon/Flipkart deliveries: bagging → segregation → BQC → audit → RDL1 → RDL2 → sales through Dealsdray.",
    did:
      "Moved the cron runner behind NSSM and built a recovery utility for unsellable units.",
    result:
      "Cron failures: 50% → 0%. Inventory recovery: +30%.",
  },
];

export const experience = {
  title: "Full-Stack Developer",
  company: "C S Tech Infosolutions",
  place: "Bangalore",
  when: "September 2024 to May 2026",
  summary:
    "Worked on Dealsdray, Prexo, Rekrafted, and the notification console for the Dealsdray app.",
  rows: [
    {
      label: "Ownership",
      text: "Built and shipped major Dealsdray features, integrations, jobs and fixes.",
    },
    {
      label: "Integrations",
      text: "Razorpay, PayTM, Zoop and Shiprocket, including payment and shipment webhooks.",
    },
    {
      label: "Architecture",
      text: "Split API, cron, notification and payment workloads into separate services.",
    },
    {
      label: "Operations",
      text: "Server setup, deployments, outage fixes, debugging and data corrections.",
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
