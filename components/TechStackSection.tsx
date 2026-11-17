import React from "react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { skillCategories } from "@/data/skills";
import { Code, Database, Server, Cpu, CheckCircle2 } from "lucide-react";

export function TechStackSection() {
  const getIcon = (category: string) => {
    switch (category) {
      case "Languages":
        return <Code className="w-5 h-5 text-blue-400" />;
      case "Frameworks & Libraries":
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case "Databases & ORMs":
        return <Database className="w-5 h-5 text-cyan-400" />;
      default:
        return <Server className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section className="py-16 md:py-20 border-b border-slate-800/60 bg-[#0b0f19]">
      <Container>
        <SectionHeading
          badge="Technical Expertise"
          title="Skills & Technology Stack"
          subtitle="Battle-tested tools and languages I leverage to design, build, and deploy reliable software products."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((group) => (
            <div
              key={group.category}
              className="rounded-xl bg-slate-900/50 border border-slate-800/80 p-6 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60">
                    {getIcon(group.category)}
                  </div>
                  <h3 className="text-base font-semibold text-slate-100">
                    {group.category}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed min-h-[32px]">
                  {group.description}
                </p>

                <ul className="space-y-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center gap-2 text-xs font-medium text-slate-300"
                    >
                      <CheckCircle2
                        className={`w-3.5 h-3.5 shrink-0 ${
                          skill.highlight ? "text-blue-400" : "text-slate-500"
                        }`}
                      />
                      <span className={skill.highlight ? "text-slate-200 font-semibold" : "text-slate-300"}>
                        {skill.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
