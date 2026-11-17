import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Container } from "./Container";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-800/80 bg-[#090d16] text-slate-400 py-12 transition-colors">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand & bio */}
          <div className="md:col-span-2 space-y-3">
            <Link
              href="/"
              className="text-lg font-bold text-slate-100 tracking-tight hover:text-blue-400 transition-colors"
            >
              {siteConfig.name}
              <span className="text-blue-500">.</span>
            </Link>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Full Stack Software Engineer specialized in high-performance web
              applications, secure RESTful microservices, and reliable database
              systems.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.email}
                aria-label="Send Email"
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-400 transition-colors inline-flex items-center gap-1 text-slate-400"
                  >
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick contact / direct link */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Get in Touch
            </h4>
            <div className="space-y-2 text-sm">
              <p className="text-slate-400">
                Interested in working together or hiring?
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1 group text-sm break-all"
              >
                <span>{siteConfig.email}</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </a>
              <p className="text-xs text-slate-500 pt-1">
                {siteConfig.location}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with Next.js & Tailwind CSS • Static Export
          </p>
        </div>
      </Container>
    </footer>
  );
}
