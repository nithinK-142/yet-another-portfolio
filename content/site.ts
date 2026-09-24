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
  links: {
    email: { label: "Email me" },
    resume: { label: "Resume", text: "PDF" },
    github: { label: "GitHub", username: "nithinK-142", text: "github.com/nithinK-142" },
    linkedin: { label: "LinkedIn", username: "nithin142", text: "linkedin.com/in/nithin142" },
  },
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

export const experience = {
  title: "Full-Stack Developer",
  company: "C S Tech Infosolutions",
  place: "Bangalore",
  when: "September 2024 to May 2026",
  rows: [
    {
      text: "Build and maintain full-stack applications, from UI changes through backend logic, database work, and server-side code.",
    },
    {
      text: "Extend existing codebases, trace bugs through dependent parts, and fix issues without breaking related functionality.",
    },
    {
      text: "Implement application requirements involving external services, data changes, background work, and scheduled tasks.",
    },
    {
      text: "Take changes through release and handle live issues through logs, server checks, debugging, outages, and data fixes.",
    },
  ],
};

export const sections = {
  experience: "Experience",
  stack: "Stack",
  work: "Selected Work",
  contact: "Contact",
};

export const navigation = {
  ariaLabel: "Primary",
  sections: [
    { id: "experience", label: sections.experience, blocks: ["experience", "stack"] },
    { id: "work", label: "Work", blocks: ["work"] },
    { id: "contact", label: sections.contact, blocks: ["contact"] },
  ],
};

export const hero = {
  heading: "I build the systems behind",
  headingHighlight: "real business workflows",
  description:
    "Payments, shipping, warehouse operations, data migrations, notifications, and deployments — with end-to-end ownership.",
  status: "Available now",
  meta: {
    openTo: { label: "Open to", value: "Backend · Full Stack" },
    experience: { label: sections.experience, value: "2 years" },
    location: { label: "Based in", value: "Bengaluru" },
    primaryStack: { label: "Primary stack", value: "Node.js · Go · React" },
    localTime: "Local time",
  },
};

export const stack = {
  description: "Most of my work is backend: APIs, jobs, data stores, integrations and deployment tooling.",
  notes: {
    Languages: "Application code",
    Frontend: "Interfaces + web apps",
    Backend: "APIs + async services",
    Data: "Persistence + caching",
    Infrastructure: "Deployment + process management",
    Integrations: "Payments + logistics + messaging",
    Observability: "Metrics + tracing + error tracking",
  },
};

export const projectLabels = {
  context: "Context",
  did: "What I did",
  result: "Result",
};

export const contact = {
  heading: sections.contact,
  ask: "Need help building, integrating, or fixing something?",
  askHighlight: `${site.links.email.label}.`,
  askSub: "Hiring for backend or full-stack work? Same address.",
};

export const footer = {
  copyright: "©",
};

export const commandPalette = {
  labels: {
    email: site.links.email.label,
    copyEmail: "Copy email",
    resume: site.links.resume.label,
    github: site.links.github.label,
    linkedin: site.links.linkedin.label,
    experience: sections.experience,
    stack: sections.stack,
    contact: sections.contact,
  },
  hints: {
    copyEmail: "to clipboard",
    resume: site.links.resume.text,
    github: site.links.github.username,
    linkedin: site.links.linkedin.username,
    section: "section",
    project: "project",
  },
  ariaLabel: "Open command palette",
  dialogLabel: "Command palette",
  searchLabel: "Search links and sections",
  placeholder: "Type to search",
  resultsLabel: "Results",
  noMatches: "No matches",
  status: "Enter to open, Esc to close",
  shortcut: { mac: "⌘ K", default: "Ctrl K" },
  copied: "Copied:",
  copyFailed: "Couldn't copy. Email:",
};

export const accessibility = {
  skipToContent: "Skip to content",
  backToTop: "Back to top",
  externalLinkSuffix: " (opens in a new tab)",
  localTime: "Local time in Bangalore",
  copyEmail: "Copy email address",
  emailCopied: "Email address copied",
  couldNotCopy: "Could not copy",
  copyStates: {
    idle: "Copy",
    copied: "Copied",
    failed: "Copy failed",
  },
};

export const controls = {
  motion: {
    enabledAria: "Animations enabled",
    reducedAria: "Animations reduced",
    enabledTitle: "Animations on. Click to reduce motion.",
    reducedTitle: "Animations reduced. Click to enable motion.",
    enabledTooltip: "Motion on · click to reduce",
    reducedTooltip: "Motion reduced · click to enable",
  },
  theme: {
    light: "Switch to light theme",
    dark: "Switch to dark theme",
    generic: "Switch theme",
  },
};

export const seo = {
  jsonLd: {
    jobTitle: "Backend-leaning full-stack developer",
    addressLocality: "Bangalore",
    addressCountry: "IN",
    knowsAbout: ["Node.js", "Go", "MongoDB", "PostgreSQL", "Microservices", "API integrations"],
  },
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
