import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Production web platforms, multi-service backend architectures, and high-performance applications built by Sukanto Kumar Das.",
};

export default function ProjectsPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <div className="max-w-3xl mb-12">
          <SectionHeading
            badge="Engineering Portfolio"
            title="Software Projects & Systems"
            subtitle="Commercial platforms, high-throughput backend services, and automated trading integrations."
          />
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </div>
  );
}
