"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import {
  Mail,
  FileDown,
  MapPin,
  Phone,
  Copy,
  Check,
  ArrowUpRight,
  Send,
  MessageSquare,
} from "lucide-react";

export function ContactView() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="py-12 sm:py-16">
      <Container>
        <div className="max-w-3xl mb-12">
          <SectionHeading
            badge="Get In Touch"
            title="Let's Start a Conversation"
            subtitle="I'm open to discussing full-time software engineering roles, contract opportunities, and innovative platform development."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Contact Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl bg-slate-900/50 border border-slate-800 p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-100">
                    Direct Email
                  </h2>
                  <p className="text-xs text-slate-400">
                    Best channel for hiring, job offers, or project discussions
                  </p>
                </div>
              </div>

              {/* Email Box */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-4 rounded-xl bg-slate-950 border border-slate-800">
                <span className="font-mono text-sm sm:text-base text-blue-400 font-medium select-all break-all">
                  {siteConfig.email}
                </span>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-medium transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${siteConfig.email}?subject=Software%20Engineer%20Opportunity`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Email</span>
                  </a>
                </div>
              </div>

              {/* Additional Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-1">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Phone className="w-3.5 h-3.5 text-blue-400" />
                    <span>Phone / WhatsApp</span>
                  </div>
                  <a
                    href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
                    className="text-sm font-semibold text-slate-200 hover:text-blue-400 transition-colors block font-mono"
                  >
                    {siteConfig.phone}
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-1">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span>Current Location</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-200">
                    {siteConfig.location}
                  </p>
                </div>
              </div>

              {/* Response Time note */}
              <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-900/40 text-xs text-slate-300 flex items-start gap-3">
                <MessageSquare className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  I typically respond to serious technical and employment inquiries
                  within 24 hours.
                </span>
              </div>
            </div>
          </div>

          {/* Social Profiles & Resume Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Download CV Card */}
            <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800 p-6 sm:p-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <FileDown className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-100">
                    Download Resume
                  </h3>
                  <p className="text-xs text-slate-400">
                    Official CV with detailed technical history
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Contains full project summaries, employment timeline, education credentials,
                and technical competencies.
              </p>

              <a
                href={siteConfig.cvPath}
                download="Sukanto_Kumar_Das_CV.pdf"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors shadow-lg shadow-emerald-600/20"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Sukanto_CV.pdf</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="rounded-2xl bg-slate-900/50 border border-slate-800 p-6 sm:p-7 space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                Professional Networks
              </h3>

              <div className="space-y-3">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/80 transition-all text-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-800 text-slate-300 group-hover:text-white transition-colors">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-semibold text-slate-200 block group-hover:text-blue-400 transition-colors">
                        GitHub
                      </span>
                      <span className="text-xs text-slate-500 font-mono">
                        github.com/sukantokumardas
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/80 transition-all text-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-800 text-slate-300 group-hover:text-white transition-colors">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-semibold text-slate-200 block group-hover:text-blue-400 transition-colors">
                        LinkedIn
                      </span>
                      <span className="text-xs text-slate-500 font-mono">
                        linkedin.com/in/sukantokumardas
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
