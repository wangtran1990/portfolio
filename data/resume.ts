export interface PersonalInfo {
  name: string
  title: string
  tagline: string
  email: string
  phone: string
  linkedin: string
  location: string
}

export interface Experience {
  company: string
  subtitle: string
  role: string
  roleNote?: string
  period: string
  location: string
  bullets: string[]
  stack: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface Achievement {
  title: string
  description: string
}

export interface Education {
  degree: string
  institution: string
  period: string
}

export const personal: PersonalInfo = {
  name: "Trần Đăng Quang ",
  title: "Technical Lead",
  tagline:
    "10+ years building cloud-native backends, distributed systems, and payment platforms.",
  email: "trandangquangit@gmail.com",
  phone: "0979667069",
  linkedin: "https://linkedin.com/in/dang-quang-tran-6a49aa15b",
  location: "Ho Chi Minh City, Vietnam",
}

export const about: string = `Hands-on Technical Lead with 10+ years of experience building cloud-native backend platforms, distributed systems, and payment solutions using Node.js, Golang, .NET, and AWS. Led cross-functional development teams on technical architecture, code reviews, engineering standards, and delivery while remaining hands-on in software development. Experienced in international engineering environments, leveraging AI-assisted engineering workflows to improve software quality and developer productivity.`

export const experiences: Experience[] = [
  {
    company: "Global Mind Business",
    subtitle: "Agriculture Technology Startup",
    role: "Engineering Manager / Technical Lead",
    period: "Oct 2025 – May 2026",
    location: "Ho Chi Minh City, Vietnam",
    bullets: [
      "Designed cloud-native backend architecture, engineering standards, and service communication for a 0-to-1 platform.",
      "Led cross-functional development team (backend, web, and mobile), responsible for technical design, code reviews, mentoring, and implementation of critical backend services.",
      "Collaborated with product stakeholders on estimation, delivery planning, and production reliability.",
      "Actively used AI coding assistants (Claude Code, GitHub Copilot, OpenCode, etc.) in daily development and encouraged team adoption.",
    ],
    stack:
      "Golang · Microservices · AWS · Docker · CI/CD · gRPC · REST APIs · PostgreSQL · Redis · Observability",
  },
  {
    company: "GOOPAY JSC",
    subtitle: "FUTA Group",
    role: "Software Engineering Team Lead",
    period: "Jul 2024 – Sep 2025",
    location: "Ho Chi Minh City, Vietnam",
    bullets: [
      "Led backend delivery for payment gateway and digital wallet platforms, covering architecture, code reviews, releases, and production operations.",
      "Designed banking integrations, callback workflows, idempotency, reconciliation, and transaction processing.",
      "Co-led PCI DSS compliance, API hardening, and engineering quality standards.",
    ],
    stack:
      "Node.js · Golang · MongoDB · Redis · Payment Systems · PCI DSS · Monitoring & Observability",
  },
  {
    company: "VieON",
    subtitle: "DatViet VAC",
    role: "Backend Manager",
    roleNote: "Promoted from Backend Supervisor",
    period: "May 2020 – Jun 2024",
    location: "Ho Chi Minh City, Vietnam",
    bullets: [
      "Led backend engineering for a streaming platform serving 400,000+ concurrent users.",
      "Designed Golang services for payment, billing, reconciliation, promotion, and subscription systems.",
      "Remained hands-on in architecture, code review, performance optimization, and production troubleshooting.",
      "Collaborated with Product and Sales teams delivering technical solution advice, estimations, and architecture recommendations.",
    ],
    stack:
      "Golang · Microservices · MySQL · MongoDB · Redis · Distributed Systems · Observability · High-Availability Systems",
  },
  {
    company: "Earlier Experience",
    subtitle: "2012 – 2020",
    role: "Software Engineer",
    period: "2012 – 2020",
    location: "Ho Chi Minh City, Vietnam",
    bullets: [
      "Fujinet Systems JSC: Japanese outsourcing environment with structured SDLC, quality standards, and cross-cultural collaboration.",
      "SystemGear Vietnam: Japanese company in Vietnam, applying Japanese software development practices.",
      "Isobar Commerce: Delivered enterprise software for global e-commerce brands.",
      "Galaxy Play: Developed streaming applications.",
    ],
    stack: ".NET · Java · Salesforce Commerce Cloud · Embedded Systems",
  },
]

export const skills: SkillGroup[] = [
  {
    category: "Programming Languages",
    items: ["Node.js", "Golang", ".NET", "JavaScript", "Python", "Java"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Observability"],
  },
  {
    category: "Backend & Architecture",
    items: [
      "Microservices",
      "Distributed Systems",
      "REST APIs",
      "gRPC",
      "Event-Driven Architecture",
      "PostgreSQL",
      "Redis",
      "Kafka",
    ],
  },
  {
    category: "Leadership",
    items: [
      "Technical Leadership",
      "Code Review",
      "Team Mentoring",
      "Agile/Scrum",
      "Stakeholder Management",
    ],
  },
  {
    category: "Data & AI Engineering",
    items: [
      "LLM Integration",
      "AI Engineering",
      "Applied Machine Learning",
      "Data Platform",
      "Operational Analytics",
    ],
  },
  {
    category: "Domain Experience",
    items: [
      "Payment Systems",
      "Digital Wallet",
      "PCI DSS Compliance",
      "OTT Streaming Video",
      "e-Commerce",
      "Agriculture Tech",
      "High-Concurrency Systems",
    ],
  },
]

export const achievements: Achievement[] = [
  {
    title: "0-to-1 Golang Microservices Platform",
    description:
      "Designed and implemented a full microservices backend from scratch: authentication, API gateway, service communication, PostgreSQL, Redis, and observability foundations.",
  },
  {
    title: "Led 10+ Member Cross-functional Teams",
    description:
      "Led engineering teams of more than 10 members across backend, web, and mobile while remaining involved in architecture, implementation review, mentoring, and production troubleshooting.",
  },
  {
    title: "400,000+ Concurrent Users Streaming Platform",
    description:
      "Supported backend engineering for a high-concurrency OTT streaming platform with publicly reported peaks exceeding 400,000 concurrent users.",
  },
  {
    title: "PCI DSS & Penetration-Test Remediation",
    description:
      "Led payment system security remediation for PCI DSS and penetration-test findings, improving API security, transaction reliability, and operational visibility.",
  },
]

export const education: Education[] = [
  {
    degree: "Bachelor's Degree in Information Technology",
    institution: "Vietnam National University HCMC – An Giang University",
    period: "2008 – 2012",
  },
  {
    degree: "Master's Program in Information Technology (Incomplete)",
    institution:
      "Vietnam National University HCMC – University of Information Technology",
    period: "2020",
  },
]
