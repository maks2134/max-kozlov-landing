export const profile = {
  name: "Max Kozlov",
  shortName: "Max",
  role: "AI Integration Engineer · Go + Full-stack",
  tagline:
    "I ship production AI integrations, full-stack apps, and Telegram bots — from Go APIs to React/Next and mobile.",
  years: "4+",
  location: "Remote · Worldwide",
  email: "maksik2134@icloud.com",
};

export const services = [
  {
    title: "AI integrations",
    description:
      "RAG over your documents with citations, tool-calling agents for email and tickets, streaming chat UIs, and LLM wiring that teams can own in production — not demos.",
  },
  {
    title: "Telegram bots",
    description:
      "Custom Telegram bots for support, sales, notifications, and AI assistants — webhooks, payments, inline keyboards, admin flows, and Go backends that stay reliable under load.",
  },
  {
    title: "Full-stack applications",
    description:
      "End-to-end product slices: Go backends, React/Next frontends, auth, APIs, realtime (WebSocket/WebRTC), databases, and deployable delivery with clear handoff.",
  },
  {
    title: "Mobile apps",
    description:
      "Cross-platform product apps from MVP to polished release — React Native–friendly stack, connected to real backends and AI features when needed.",
  },
];

export const experience = [
  {
    period: "2023 — Present",
    title: "Middle Go Developer · Full-stack",
    context: "Digital product ecosystem · team of ~10 backend engineers",
    highlights: [
      "Built IoT telemetry, POS, and access-control integrations with Kafka, queues, and idempotent handlers",
      "Shipped a WebRTC video service from scratch and the Angular client for live camera grids",
      "Moved heavy analytics to ClickHouse — reports that took minutes now finish in seconds",
      "Primary developer of an internal multi-channel notification service with Kafka, templates, and ops dashboards",
      "Co-built a Service Desk with real-time WebSocket chat, Keycloak auth, and Angular operator UI",
    ],
  },
  {
    period: "2022 — 2023",
    title: "Go Backend Developer · Full-stack",
    context: "Consumer platform & marketing automation · thousands of active users",
    highlights: [
      "Delivered catalog and content APIs with Redis caching, full-text search, and S3 media pipelines",
      "Contributed to an LLM chat assistant: WebSocket streaming, session limits, and Next.js client",
      "Integrated OAuth, maps, and social publishing APIs with resilient background workers",
      "Built Angular screens for campaign calendars and publication analytics",
    ],
  },
];

export const skills = {
  languages: ["Go", "TypeScript", "JavaScript", "SQL", "Bash"],
  backend: [
    "REST / gRPC / WebSocket",
    "PostgreSQL · ClickHouse · Redis",
    "Kafka · RabbitMQ",
    "Fiber · Gin · chi",
    "Docker · Kubernetes · CI/CD",
  ],
  fullstack: [
    "Next.js · React",
    "Angular · RxJS",
    "Tailwind CSS",
    "WebRTC clients",
    "Mobile (React Native–ready)",
  ],
  ai: [
    "LLM APIs · RAG · embeddings",
    "Tool-calling agents",
    "Telegram Bot API",
    "Streaming chat & bots",
    "Claude · Codex · Cursor",
  ],
};

export const selectedWork = [
  {
    label: "AI chat",
    title: "LLM assistant in a live product",
    blurb:
      "WebSocket streaming, session controls, and a Next.js client connected to real product data — production AI, not a prototype.",
  },
  {
    label: "Telegram",
    title: "Telegram bots for product & support",
    blurb:
      "Bots with webhooks, structured dialogs, AI answers grounded in docs, and human escalation — built to run in production, not just a demo token.",
  },
  {
    label: "AI tooling",
    title: "Faster delivery with modern AI IDEs",
    blurb:
      "Daily practice with Claude, Codex, and Cursor to ship integrations and full-stack features faster without dropping code quality.",
  },
  {
    label: "Realtime video",
    title: "Low-latency camera grid",
    blurb:
      "WebRTC + MediaMTX backend with an Angular player for multi-stream monitoring.",
  },
  {
    label: "Notifications",
    title: "Multi-channel delivery service",
    blurb:
      "Kafka pipelines, templates, rate limits, and an internal panel so support stops pinging engineers.",
  },
];
