import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/data/site";
import { educationList } from "@/data/experience";
import {
  Code2,
  GraduationCap,
  Trophy,
  ArrowRight,
  FileDown,
  ShieldCheck,
  Zap,
  Terminal,
  BrainCircuit,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Background, software engineering philosophy, technical interests, and core strengths of Sukanto Kumar Das.",
};

export default function AboutPage() {
  const edu = educationList[0];

  const philosophies = [
    {
      title: "Resilience Over Cleverness",
      description:
        "Code should be predictable, maintainable, and observable. I prioritize simple, robust architecture with explicit error boundaries, idempotency, and thorough logging.",
      icon: <ShieldCheck className="w-5 h-5 text-blue-400" />,
    },
    {
      title: "Performance as a Feature",
      description:
        "Sub-second response times, lean payloads, and optimized database queries aren't afterthoughts. High performance directly drives customer satisfaction and operational efficiency.",
      icon: <Zap className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: "Algorithmic Grounding",
      description:
        "With 600+ competitive programming problems solved across LeetCode and Codeforces, I approach data structures, algorithmic complexity, and concurrency with structured rigor.",
      icon: <BrainCircuit className="w-5 h-5 text-indigo-400" />,
    },
    {
      title: "Business-Aligned Delivery",
      description:
        "Technology exists to solve real business bottlenecks — whether reducing manual input time by 80% via Google Sheets automation or architecting multi-app billing flows.",
      icon: <Code2 className="w-5 h-5 text-sky-400" />,
    },
  ];

  const coreStrengths = [
    {
      category: "Full Stack Architecture",
      items: [
        "End-to-end web applications with Next.js (App Router) and React",
        "Type-safe development using TypeScript across frontend & backend",
        "Clean component hierarchy with modern Tailwind CSS and design systems",
      ],
    },
    {
      category: "Backend & Distributed Systems",
      items: [
        "RESTful API design secured with JWT (HS512) and OAuth standards",
        "Microservices design with NestJS, Node.js, PHP (Laravel/CodeIgniter)",
        "Database modeling, indexing, and ORM optimization (MySQL, Prisma)",
        "ETL pipelines, shell automation, and fault-tolerant batch workers",
      ],
    },
    {
      category: "Web3 & Algorithmic Trading",
      items: [
        "DEX liquidity protocol integrations (Uniswap V3, Sushiswap)",
        "Automated trade execution strategies and arbitrage bots",
        "Smart contract interaction via Solidity and Web3 providers",
      ],
    },
  ];

  return (
    <div className="py-12 sm:py-16">
      <Container>
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <SectionHeading
            badge="About Me"
            title="Engineering Background & Philosophy"
            subtitle="Full Stack Software Engineer driven by scalable systems, clean architecture, and practical business impact."
          />
        </div>

        {/* Narrative / Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-8 space-y-6 text-slate-300 leading-relaxed text-base">
            <p className="text-lg text-slate-200 font-medium leading-relaxed">
              I am a Full Stack Software Engineer based in Dhaka, Bangladesh, currently
              working at <span className="text-blue-400 font-semibold">CodeLab FZC</span>.
              My work centers on building scalable multi-application platforms,
              designing secure RESTful APIs, and delivering high-performance web applications.
            </p>

            <p>
              Over the course of my career, I have had the opportunity to build and maintain
              mission-critical systems — including a 3-tier contract-to-billing platform for
              K1 Group Japan communicating via JWT-secured (HS512) APIs, high-throughput crypto
              trading integrations across Uniswap and Sushiswap yielding a 20% margin on single trades,
              and modern Next.js 15 e-commerce applications achieving a 95% Lighthouse performance score.
            </p>

            <p>
              I hold a B.Sc. in Computer Science and Engineering from{" "}
              <strong className="text-slate-100 font-semibold">
                Shahjalal University of Science and Technology (SUST)
              </strong>
              , where I was awarded the CSE Department 3rd Year Scholarship in 2023 for academic excellence.
              My foundational problem-solving discipline was forged by solving over 600 algorithmic
              problems on LeetCode, Codeforces, UVA, Vjudge, and HackerRank.
            </p>

            <p>
              Beyond raw coding, I care deeply about developer experience, reproducible environments,
              and eliminating manual operations through automated pipelines (such as cutting data entry
              turnarounds by 80% via Google Sheets API integrations).
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={siteConfig.cvPath}
                download="Sukanto_Kumar_Das_CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/20"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium text-sm transition-all"
              >
                <span>Browse Projects</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>
          </div>

          {/* Quick info sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-6 space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-blue-400" />
                <span>Quick Facts</span>
              </h3>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-slate-500 block">Current Position</span>
                  <span className="text-slate-200 font-medium">Programmer @ CodeLab FZC</span>
                </div>
                <div className="pt-2 border-t border-slate-800/80">
                  <span className="text-slate-500 block">Education</span>
                  <span className="text-slate-200 font-medium">
                    B.Sc. CSE, SUST (CGPA 3.52 / 4.0)
                  </span>
                </div>
                <div className="pt-2 border-t border-slate-800/80">
                  <span className="text-slate-500 block">Competitive Programming</span>
                  <span className="text-slate-200 font-medium">
                    600+ Solved Problems (LeetCode, Codeforces)
                  </span>
                </div>
                <div className="pt-2 border-t border-slate-800/80">
                  <span className="text-slate-500 block">Language Proficiency</span>
                  <span className="text-slate-200 font-medium">
                    IELTS Academic Overall 7.0
                  </span>
                </div>
                <div className="pt-2 border-t border-slate-800/80">
                  <span className="text-slate-500 block">Location</span>
                  <span className="text-slate-200 font-medium">{siteConfig.location}</span>
                </div>
              </div>
            </div>

            {/* Academic Achievement Card */}
            <div className="rounded-xl bg-blue-950/20 border border-blue-800/40 p-6 space-y-3">
              <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm">
                <Trophy className="w-4 h-4" />
                <span>Honors & Awards</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>CSE Department 3rd Year Scholarship 2023, SUST</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>10th place in Regional Chemistry Olympiad, Khulna</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Engineering Philosophies */}
        <div className="mb-16">
          <SectionHeading
            badge="Principles"
            title="Software Engineering Philosophy"
            subtitle="How I think about system design, code quality, and delivery."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {philosophies.map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-slate-900/40 border border-slate-800 p-6 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-100">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Strengths & Expertise */}
        <div className="mb-16">
          <SectionHeading
            badge="Capabilities"
            title="Core Strengths & Expertise"
            subtitle="Key competencies developed across real-world commercial software development."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreStrengths.map((strength) => (
              <div
                key={strength.category}
                className="rounded-xl bg-slate-900/50 border border-slate-800/90 p-6"
              >
                <h3 className="text-base font-bold text-slate-100 mb-4 pb-2 border-b border-slate-800">
                  {strength.category}
                </h3>
                <ul className="space-y-3">
                  {strength.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <SectionHeading
            badge="Formal Education"
            title="Academic Background"
            subtitle="Undergraduate engineering degree in Computer Science."
          />

          <div className="rounded-xl bg-slate-900/50 border border-slate-800 p-6 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-100">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-blue-400 font-medium">
                    {edu.institution}
                  </p>
                </div>
              </div>

              <div className="text-xs text-slate-400">
                <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700">
                  {edu.period}
                </span>
                <span className="ml-2 font-mono text-emerald-400">
                  CGPA: {edu.cgpa}
                </span>
              </div>
            </div>

            <ul className="mt-4 space-y-2 border-t border-slate-800/80 pt-4 text-xs sm:text-sm text-slate-400">
              {edu.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-blue-400 font-semibold">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
