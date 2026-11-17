import React from "react";
import Link from "next/link";
import { experiences } from "@/data/experience";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { ArrowRight, Calendar, MapPin, CheckCircle } from "lucide-react";

export function ExperienceOverviewSection() {
  return (
    <section className="py-16 md:py-20 border-b border-slate-800/60 bg-[#0a0e18]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <SectionHeading
            badge="Career History"
            title="Work Experience"
            subtitle="Demonstrated engineering contributions across production platforms and full-stack systems."
          />
          <Link
            href="/experience"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group mb-10 md:mb-0"
          >
            <span>View full career details</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="relative border-l border-slate-800 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-10">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline marker */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 ${
                  exp.current
                    ? "bg-blue-500 border-blue-400 ring-4 ring-blue-500/20"
                    : "bg-slate-900 border-slate-600"
                }`}
              />

              <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-5 sm:p-6 hover:border-slate-700 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-bold text-slate-100">
                      {exp.role}
                    </span>
                    <span className="text-blue-400 font-medium">
                      @{exp.company}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="hidden sm:flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 mb-4">{exp.summary}</p>

                <ul className="space-y-2 mb-4">
                  {exp.responsibilities.slice(0, 2).map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-slate-400"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60">
                  {exp.technologies.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs font-mono text-slate-400 bg-slate-800/60 rounded border border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
