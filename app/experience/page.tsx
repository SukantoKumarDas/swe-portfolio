import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { experiences, educationList } from "@/data/experience";
import { siteConfig } from "@/data/site";
import {
  Calendar,
  MapPin,
  CheckCircle2,
  Trophy,
  GraduationCap,
  FileDown,
  Briefcase,
  Layers,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional work history, engineering contributions, and academic background of Sukanto Kumar Das.",
};

export default function ExperiencePage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <SectionHeading
            badge="Work History"
            title="Professional Experience"
            subtitle="Commercial software engineering track record, responsibilities, and delivered impact."
          />

          <a
            href={siteConfig.cvPath}
            download="Sukanto_Kumar_Das_CV.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-medium transition-colors shrink-0 mb-8 sm:mb-0"
          >
            <FileDown className="w-4 h-4 text-blue-400" />
            <span>Download Full CV (PDF)</span>
          </a>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l border-slate-800 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-12 mb-20">
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

              <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-6 sm:p-8 hover:border-slate-700 transition-colors space-y-6">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-100">
                        {exp.role}
                      </h2>
                      <span className="text-blue-400 font-semibold text-lg">
                        @{exp.company}
                      </span>
                      {exp.current && (
                        <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          Current Role
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        <span>{exp.period}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{exp.location}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-slate-500" />
                        <span>{exp.type}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Responsibilities */}
                <div className="space-y-3">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Key Responsibilities & Deliverables
                  </h3>
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Achievements */}
                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5" />
                      <span>Impact & Achievements</span>
                    </h3>
                    <ul className="space-y-2">
                      {exp.achievements.map((achieve, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                        >
                          <span className="text-emerald-400 font-bold">•</span>
                          <span>{achieve}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div className="pt-4 border-t border-slate-800/80">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-blue-400" />
                    <span>Stack & Tools Employed</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono text-slate-300 bg-slate-800/80 rounded border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education & Academic Honors */}
        <div>
          <SectionHeading
            badge="Academic Credentials"
            title="Education & Problem Solving"
            subtitle="Foundation in computer science, algorithmic competitions, and academic scholarships."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Degree Card */}
            {educationList.map((edu, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-slate-900/50 border border-slate-800 p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-100">
                        {edu.degree}
                      </h3>
                      <p className="text-xs sm:text-sm text-blue-400 font-medium">
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-4 pb-4 border-b border-slate-800">
                    <span>{edu.period}</span>
                    <span>•</span>
                    <span className="font-mono text-emerald-400">
                      CGPA {edu.cgpa}
                    </span>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {edu.details.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="text-blue-400 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Problem Solving & Achievements Card */}
            <div className="rounded-xl bg-slate-900/50 border border-slate-800 p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-100">
                      Competitive Programming
                    </h3>
                    <p className="text-xs sm:text-sm text-amber-400 font-medium">
                      600+ Solved Algorithmic Problems
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 pb-4 border-b border-slate-800">
                  Extensive problem-solving experience across competitive platforms including
                  LeetCode, Codeforces, UVA Online Judge, Vjudge, and HackerRank with an emphasis on
                  graph algorithms, dynamic programming, and data structures.
                </p>

                <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>
                      Department 3rd Year Scholarship (2023) — SUST CSE
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>
                      10th place — Regional Chemistry Olympiad, Khulna Division
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>
                      IELTS Academic Overall 7.0 English Proficiency
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
