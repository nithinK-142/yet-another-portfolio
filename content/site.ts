export const site = {
  name: "Nithin K",
  url: "https://nithin.me",
  email: "142nithin@gmail.com",
  github: "https://github.com/nithinK-142",
  linkedin: "https://www.linkedin.com/in/nithin142/",
  resume: "/nithin-public-resume.pdf",
  title: "Nithin K, backend developer (Node.js, Go)",
  description:
    "Backend-leaning full-stack developer in Bangalore. Payments, webhooks and push notification systems in production. Open to roles and relocation.",
};

export const projects = [
  {
    id: "dealsdray",
    name: "Dealsdray",
    kind: "B2B e-commerce platform",
    stack: "React, Express, MongoDB, Flutter",
    facts: [
      "Taken from unfinished to production",
      "30K+ daily users, 2K+ orders a month",
      "Razorpay, PayTM, Zoop and Shiprocket, with webhooks",
      "70K+ legacy users and their orders migrated",
    ],
  },
  {
    id: "notification-console",
    name: "Notification Console",
    kind: "Push notification delivery system",
    stack: "React, Express, MongoDB, Go",
    facts: [
      "Campaign runs cut from 15 minutes to under one",
      "Priority order, concurrent batches, crash recovery",
      "80K+ device tokens, 10K+ campaigns",
    ],
  },
  {
    id: "rekrafted",
    name: "Rekrafted",
    kind: "Refurbished-device marketplace",
    stack: "Next.js, Express, MongoDB",
    facts: [
      "Grade-based listings on 70% of inventory: orders up 15%",
      "10 to 15GB of media moved to ImageKit",
    ],
    link: { href: "https://rekrafted.in/", label: "rekrafted.in" },
  },
  {
    id: "prexo",
    name: "Prexo",
    kind: "Warehouse processing system",
    stack: "React, Express, MongoDB",
    facts: [
      "30% more inventory recovered",
      "Cron failures cut from 50% of runs to 0%",
    ],
  },
];

export const tools = [
  { group: "Languages", items: "JavaScript, TypeScript, Go" },
  { group: "Frontend", items: "React, Next.js, Tailwind CSS" },
  { group: "Backend", items: "Node.js, Express, REST APIs, webhooks, microservices, RabbitMQ" },
  { group: "Data", items: "MongoDB, PostgreSQL, Redis" },
  { group: "Infrastructure", items: "Linux, Windows Server, AWS, Docker, PM2, IIS, Plesk" },
  { group: "Integrations", items: "Razorpay, PayTM, Shiprocket, Zoop, Firebase Cloud Messaging" },
  { group: "Observability", items: "OpenTelemetry, Grafana, Prometheus, Sentry, Stackify" },
];
