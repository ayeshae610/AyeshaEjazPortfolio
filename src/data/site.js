export const techBannerItems = [
  "OpenAI", "n8n", "VAPI", "Supabase", "ElevenLabs", "LangChain",
  "Qdrant", "Pinecone", "Zapier", "Make", "Retool", "Appsmith",
  "Airtable", "Claude", "Gemini", "WhatsApp API", "PostgreSQL", "Redis",
];

export const services = [
  {
    title: "AI Automation Systems",
    desc: "End-to-end intelligent workflows that connect your tools, data, and teams into one automated brain.",
    icon: "⚡",
  },
  {
    title: "Voice AI Agents",
    desc: "Human-sounding voice agents built on VAPI & ElevenLabs — answer calls, book appointments, qualify leads 24/7.",
    icon: "🎙️",
  },
  {
    title: "WhatsApp AI Assistants",
    desc: "Conversational commerce bots that sell, support, and follow up inside the world's #1 messaging app.",
    icon: "💬",
  },
  {
    title: "Business Workflow Automation",
    desc: "Replace repetitive ops with n8n / Make pipelines that never sleep, never forget, never make typos.",
    icon: "🔀",
  },
  {
    title: "RAG & Knowledge Systems",
    desc: "Private knowledge bases on Qdrant/Pinecone with cited answers your team can actually trust.",
    icon: "📚",
  },
  {
    title: "AI Consulting & Strategy",
    desc: "From audit to architecture — a clear roadmap for embedding AI into your operations, not slides.",
    icon: "🧭",
  },
];

export const skillGroups = [
  { name: "AI", items: [
    { label: "OpenAI", level: 95 },
    { label: "Claude", level: 92 },
    { label: "Gemini", level: 88 },
    { label: "LangChain", level: 90 },
  ]},
  { name: "Automation", items: [
    { label: "n8n", level: 96 },
    { label: "Zapier", level: 90 },
    { label: "Make", level: 88 },
  ]},
  { name: "Databases", items: [
    { label: "Supabase", level: 94 },
    { label: "PostgreSQL", level: 88 },
    { label: "Redis", level: 82 },
    { label: "Qdrant", level: 86 },
  ]},
  { name: "Development", items: [
    { label: "React", level: 88 },
    { label: "Tailwind", level: 92 },
    { label: "Node.js", level: 85 },
  ]},
  { name: "Cloud", items: [
    { label: "Vercel", level: 90 },
    { label: "Railway", level: 86 },
    { label: "Render", level: 82 },
  ]},
];

export const projects = [
  {
    title: "AI Restaurant Receptionist",
    tag: "Voice Agent · VAPI",
    metric: "2,451 calls handled",
    json: {
      agent: "Restaurant AI",
      platform: "VAPI",
      callsHandled: 2451,
      availability: "24/7",
      accuracy: "98.7%",
    },
    size: "lg",
  },
  {
    title: "WhatsApp Sales Agent",
    tag: "Conversational · WA API",
    metric: "$142k pipeline sourced",
    json: {
      agent: "SalesGPT",
      channel: "WhatsApp",
      leadsQualified: 1287,
      conversion: "34%",
    },
    size: "md",
  },
  {
    title: "Voice Appointment Scheduler",
    tag: "VAPI · Google Cal",
    metric: "98% booking accuracy",
    json: {
      workflow: "Scheduler",
      integrations: ["VAPI", "Google Calendar", "Supabase"],
    },
    size: "md",
  },
  {
    title: "Retail AI Assistant",
    tag: "OpenAI · Shopify",
    metric: "3.2x avg. order value",
    json: {
      store: "Aurora Retail",
      recommendations: "personalized",
      uplift: "3.2x AOV",
    },
    size: "md",
  },
  {
    title: "AI Knowledge Base",
    tag: "RAG · Qdrant",
    metric: "40k docs indexed",
    json: {
      vectorDB: "Qdrant",
      documents: 40218,
      cited: true,
    },
    size: "md",
  },
  {
    title: "Customer Support Agent",
    tag: "n8n · OpenAI",
    metric: "82% tickets auto-resolved",
    json: {
      workflow: "Lead Automation",
      tool: "n8n",
      integrations: ["WhatsApp", "OpenAI", "Google Sheets", "Supabase"],
    },
    size: "lg",
  },
];

export const testimonials = [
  {
    name: "Daniel Reyes",
    role: "Startup Founder",
    avatar: "DR",
    quote:
      "Ayesha replaced our entire manual lead ops with an n8n + OpenAI system in two weeks. We haven't touched a spreadsheet since.",
    rating: 5,
  },
  {
    name: "Priya Menon",
    role: "CEO, Loop Agency",
    avatar: "PM",
    quote:
      "Her VAPI voice agent handles 60% of our inbound calls. Clients think it's a human. Truly world-class engineering.",
    rating: 5,
  },
  {
    name: "Marco Bianchi",
    role: "Restaurant Owner",
    avatar: "MB",
    quote:
      "We book 40+ reservations a night through the AI receptionist. It paid for itself in the first week.",
    rating: 5,
  },
  {
    name: "Sara Ahmed",
    role: "Agency Owner",
    avatar: "SA",
    quote:
      "Ayesha thinks in systems. Every workflow she ships is documented, resilient, and genuinely production-ready.",
    rating: 5,
  },
];

export const certifications = [
  { title: "OpenAI API Specialist", issuer: "OpenAI", year: "2025" },
  { title: "n8n Advanced Workflows", issuer: "n8n.io", year: "2024" },
  { title: "VAPI Voice Engineering", issuer: "VAPI", year: "2025" },
  { title: "Supabase Certified Dev", issuer: "Supabase", year: "2024" },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];
