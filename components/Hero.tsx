import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Container } from "./Container";
import { quickSkills } from "@/data/skills";
import { ArrowRight, FileDown, Mail, MapPin, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-slate-800/60">
      {/* Subtle background glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />

      <Container>
        <div className="relative z-10 max-w-3xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-medium text-slate-300 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Full Stack Opportunities</span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1 text-slate-400">
              <MapPin className="w-3 h-3 text-slate-400" />
              <span>Dhaka, Bangladesh</span>
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.15] mb-6">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-indigo-300">
              {siteConfig.name}
            </span>
            <br />
            <span className="text-slate-300 text-2xl sm:text-4xl lg:text-5xl font-bold">
              Full Stack Software Engineer.
            </span>
          </h1>

          {/* Bio paragraph */}
          <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed mb-8 max-w-2xl font-normal">
            Specialized in engineering robust multi-service platforms, high-performance
            Next.js web applications, and resilient database architectures. Experienced with
            PHP (CodeIgniter/Laravel), TypeScript (NestJS/React), and automated trading systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
            {/* View Projects */}
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Download Resume */}
            <a
              href={siteConfig.cvPath}
              download="Sukanto_Kumar_Das_CV.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700/80 text-slate-200 border border-slate-700 font-medium text-sm transition-all hover:border-slate-600"
            >
              <FileDown className="w-4 h-4 text-blue-400" />
              <span>Download Resume</span>
            </a>

            {/* Contact Me */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 font-medium text-sm transition-all"
            >
              <Mail className="w-4 h-4 text-slate-400" />
              <span>Contact Me</span>
            </Link>
          </div>

          {/* Quick tech pills */}
          <div className="pt-6 border-t border-slate-800/60">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-blue-400" />
              <span>Core Stack & Technologies</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {quickSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-800/70 text-slate-300 border border-slate-700/60 hover:border-blue-500/40 hover:text-blue-300 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
