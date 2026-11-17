import React from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { ArrowRight } from "lucide-react";

export function FeaturedProjectsSection() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="py-16 md:py-20 border-b border-slate-800/60 bg-[#0a0e18]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <SectionHeading
            badge="Engineering Portfolio"
            title="Featured Projects"
            subtitle="Selected production platforms, multi-service backend architectures, and high-performance applications."
          />
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group mb-10 md:mb-0"
          >
            <span>View all projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
