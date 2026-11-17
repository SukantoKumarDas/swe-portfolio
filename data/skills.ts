export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level?: "Expert" | "Advanced" | "Proficient";
    highlight?: boolean;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    description: "Core programming and scripting languages for systems and web applications",
    skills: [
      { name: "TypeScript", highlight: true },
      { name: "JavaScript", highlight: true },
      { name: "PHP", highlight: true },
      { name: "Python", highlight: true },
      { name: "SQL", highlight: true },
      { name: "C++" },
      { name: "Java" },
      { name: "Solidity" },
      { name: "HTML5 & CSS3" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    description: "Modern frameworks for frontend interfaces and backend application servers",
    skills: [
      { name: "Next.js (App Router)", highlight: true },
      { name: "React", highlight: true },
      { name: "NestJS", highlight: true },
      { name: "Node.js", highlight: true },
      { name: "Laravel", highlight: true },
      { name: "CodeIgniter 4", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "Turborepo" },
      { name: "shadcn/ui" },
      { name: "Bootstrap" },
    ],
  },
  {
    category: "Databases & ORMs",
    description: "Relational persistence, data modeling, caching, and ORM integration",
    skills: [
      { name: "MySQL", highlight: true },
      { name: "Prisma ORM", highlight: true },
      { name: "SQLite" },
      { name: "NoSQL / MongoDB" },
      { name: "Database Optimization" },
      { name: "ETL Pipelines" },
    ],
  },
  {
    category: "Architecture & DevOps",
    description: "Development workflows, deployment infrastructure, and design patterns",
    skills: [
      { name: "RESTful API Design (JWT/OAuth)", highlight: true },
      { name: "Microservices Architecture", highlight: true },
      { name: "Docker & Containerization" },
      { name: "Linux Administration & Bash" },
      { name: "Nginx" },
      { name: "Git & GitHub CI/CD" },
      { name: "Web3 / DEX Protocols (Uniswap)" },
    ],
  },
];

export const quickSkills: string[] = [
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "NestJS",
  "PHP / Laravel",
  "CodeIgniter",
  "MySQL",
  "Prisma ORM",
  "Tailwind CSS",
  "Docker",
  "REST APIs",
];
