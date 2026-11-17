import React from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import { ArrowUpRight, Layers, Zap } from "lucide-react";
import { GithubIcon } from "./Icons";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col justify-between rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900/90 transition-all duration-200 overflow-hidden p-6 sm:p-7">
      {/* Top highlight bar on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="space-y-4">
        {/* Category & Metrics badge */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <Layers className="w-3 h-3" />
            <span>{project.category}</span>
          </span>

          {project.metrics && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-md">
              <Zap className="w-3 h-3" />
              <span className="truncate max-w-[200px]">{project.metrics}</span>
            </span>
          )}
        </div>

        {/* Title */}
        <div>
          <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
            <Link
              href={`/projects/${project.slug}`}
              className="focus:outline-none"
            >
              <span className="absolute inset-0" aria-hidden="true" />
              {project.title}
            </Link>
          </h3>
          <p className="mt-1 text-xs font-medium text-slate-400">
            Role: {project.role}
          </p>
        </div>

        {/* Summary */}
        <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
          {project.summary}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs font-mono text-slate-400 bg-slate-800/80 rounded border border-slate-700/50"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-1.5 py-0.5 text-xs font-mono text-slate-500 bg-slate-800/40 rounded">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Footer / Links */}
      <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-medium relative z-10">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
        >
          <span>Read case study</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub repo for ${project.title}`}
            className="text-slate-400 hover:text-slate-100 transition-colors p-1"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        )}
      </div>
    </article>
  );
}
