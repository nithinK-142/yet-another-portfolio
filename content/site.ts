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
    id: "prexo",
    name: "Prexo",
    stack: "React, Express, MongoDB",
    context:
      "Warehouse operations including batching, QC, audit, RDL, and sale through Dealsdray.",
    did:
      "Worked on the application logic around warehouse processing and inventory movement. Fixed recurring Windows Server cron failures by moving the runner behind NSSM. Built a recovery utility for unsellable units.",
    result:
      "Cron failures: 50% → 0%. Inventory recovery: +30%.",
  },
  {
    id: "dealsdray",
    name: "Dealsdray",
    stack: "React, Express, MongoDB, Flutter",
    context:
      "Commerce app for customers and internal panels, selling electronics.",
    did:
      "Took major parts of Dealsdray from an unfinished state to production, migrated 70K+ legacy users and orders, integrated Razorpay, PayTM, Zoop and Shiprocket with webhook-based updates, handled production fixes and data corrections, and separated API, cron, notification and payment workloads.",
    result:
      "30K+ daily users and 2K+ monthly orders.",
  },
  {
    id: "notification-console",
    name: "Notification Console",
    stack: "React, Express, MongoDB, Go",
    context:
      "Internal notification tool for the Dealsdray mobile app.",
    did:
      " Campaigns could take about 15 minutes to finish. Changed campaign delivery to use priority ordering and concurrent batches, then added crash recovery so interrupted runs could continue without losing delivery progress.",
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
      "Added grade-based listings and pricing, moved the 10–15GB image library to ImageKit, and built a rerunnable migration utility for moving existing media and updating its stored URLs.",
    result:
      "70% of inventory covered by grading; orders increased 15%.",
    link: { href: "https://rekrafted.in/", label: "rekrafted.in" },
  },
];

// export const projects = [
//   {
//     id: "prexo",
//     name: "Prexo",
//     stack: "React, Express, MongoDB",
//     context:
//       "Warehouse operations, from buying raw electronics through processing and preparing them for sale on Dealsdray.",
//     did:
//       "Moved the cron runner behind NSSM and built a recovery utility for unsellable units.",
//     result:
//       "Cron failures: 50% → 0%. Inventory recovery: +30%.",
//   },
//   {
//     id: "dealsdray",
//     name: "Dealsdray",
//     stack: "React, Express, MongoDB, Flutter",
//     context:
//       "Commerce app for customers and internal panels. Sells new and refurbished electronics and mobiles.",
//     did:
//       "Built major features, integrated Razorpay, PayTM, Zoop and Shiprocket, migrated 70K+ legacy users and orders, and split API, cron, notification and payment workloads.",
//     result:
//       "30K+ daily users and 2K+ monthly orders.",
//   },
//   {
//     id: "notification-console",
//     name: "Notification Console",
//     stack: "React, Express, MongoDB, Go",
//     context:
//       "Internal notification tool for the Dealsdray mobile app. Campaigns could take about 15 minutes to finish.",
//     did:
//       "Added priority ordering, concurrent batch delivery and crash recovery for device-token campaigns.",
//     result:
//       "Campaigns now finish in under a minute. 80K+ device tokens and 10K+ campaigns handled.",
//   },
//   {
//     id: "rekrafted",
//     name: "Rekrafted",
//     stack: "Next.js, Express, MongoDB",
//     context:
//       "Refurbished-only counterpart to Dealsdray, selling refurbished mobiles.",
//     did:
//       "Added grade-based listings and pricing. Moved the 10–15GB image library to ImageKit with a rerunnable migration utility.",
//     result:
//       "70% of inventory covered by grading; orders increased 15%.",
//     link: { href: "https://rekrafted.in/", label: "rekrafted.in" },
//   },
// ];

export const experience = {
  title: "Full-Stack Developer",
  company: "C S Tech Infosolutions",
  place: "Bangalore",
  when: "September 2024 to May 2026",
  rows: [
    {
      label: "",
      text: "Build and maintain full-stack applications, from UI changes through backend logic, database work, and server-side code.",
    },
    {
      label: "",
      text: "Extend existing codebases, trace bugs through dependent parts, and fix issues without breaking related functionality.",
    },
    {
      label: "",
      text: "Implement application requirements involving external services, data changes, background work, and scheduled tasks.",
    },
    {
      label: "",
      text: "Take changes through release and handle live issues through logs, server checks, debugging, outages, and data fixes.",
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
