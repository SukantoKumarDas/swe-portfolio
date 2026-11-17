import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Container } from "@/components/Container";
import { GithubIcon } from "@/components/Icons";
import {
  ArrowLeft,
  Layers,
  Cpu,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  ExternalLink,
  ShieldCheck,
  Server,
  Zap,
} from "lucide-react";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Case Study`,
      description: project.summary,
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-12 sm:py-16">
      <Container>
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to all projects</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="border-b border-slate-800 pb-10 mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <Layers className="w-3.5 h-3.5" />
              <span>{project.category}</span>
            </span>

            {project.metrics && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-md">
                <Zap className="w-3.5 h-3.5" />
                <span>{project.metrics}</span>
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight mb-4">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed mb-6">
            {project.tagline}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800/60">
            <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-400">
              <span>
                Role:{" "}
                <strong className="text-slate-200 font-semibold">
                  {project.role}
                </strong>
              </span>
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-medium transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Preview</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-12">
            {/* 1. Problem Statement */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" />
                <span>The Problem Being Solved</span>
              </div>
              <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-6 text-slate-300 leading-relaxed text-base">
                {project.problem}
              </div>
            </section>

            {/* 2. Project Overview */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Project Overview</span>
              </div>
              <p className="text-base text-slate-300 leading-relaxed">
                {project.overview}
              </p>
            </section>

            {/* 3. Technical Architecture */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm uppercase tracking-wider">
                <Server className="w-4 h-4" />
                <span>Technical Architecture</span>
              </div>
              <div className="rounded-xl bg-slate-900/40 border border-slate-800 p-6 text-slate-300 leading-relaxed text-base">
                {project.architecture}
              </div>
            </section>

            {/* 4. Key Implementation Details */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm uppercase tracking-wider">
                <Cpu className="w-4 h-4" />
                <span>Key Implementation Details</span>
              </div>
              <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-6">
                <ul className="space-y-3.5">
                  {project.implementationNotes.map((note, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* 5. Challenges & Solutions */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm uppercase tracking-wider">
                <Lightbulb className="w-4 h-4" />
                <span>Engineering Challenges & Solutions</span>
              </div>

              <div className="space-y-4">
                {project.challengesAndSolutions.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl bg-slate-900/40 border border-slate-800 p-6 space-y-3"
                  >
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-rose-400 block mb-1">
                        Challenge #{idx + 1}
                      </span>
                      <h4 className="text-base font-semibold text-slate-100">
                        {item.challenge}
                      </h4>
                    </div>

                    <div className="pt-2 border-t border-slate-800/80">
                      <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 block mb-1">
                        Solution Implemented
                      </span>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 rounded-xl bg-slate-900/60 border border-slate-800 p-6 space-y-6">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono text-slate-300 bg-slate-800 rounded border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Project Classification
                </h3>
                <div className="text-xs text-slate-300 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Domain</span>
                    <span>{project.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Engineering Role</span>
                    <span>{project.role}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-colors"
                >
                  <span>Discuss Similar Projects</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
