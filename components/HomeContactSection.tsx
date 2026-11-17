import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Container } from "./Container";
import { Mail, ArrowRight, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function HomeContactSection() {
  return (
    <section className="py-16 md:py-20 bg-[#0b0f19]">
      <Container>
        <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/60 border border-slate-800 p-8 sm:p-12 text-center relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 rounded-full">
              Let&apos;s Connect
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Have an opportunity or project in mind?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              I am currently open to full-time engineering positions, contract roles,
              and exciting technical collaborations. Feel free to reach out directly.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/25"
              >
                <Mail className="w-4 h-4" />
                <span>Say Hello ({siteConfig.email})</span>
              </a>

              <a
                href={siteConfig.cvPath}
                download="Sukanto_Kumar_Das_CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium text-sm transition-all"
              >
                <FileDown className="w-4 h-4 text-blue-400" />
                <span>Download CV</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-lg text-slate-400 hover:text-white font-medium text-sm transition-colors"
              >
                <span>Contact Page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="pt-6 border-t border-slate-800/80 flex items-center justify-center gap-4 text-xs text-slate-400">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-blue-400" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
