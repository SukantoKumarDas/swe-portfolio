import Link from "next/link";
import { Container } from "@/components/Container";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-24 sm:py-32 flex items-center justify-center">
      <Container>
        <div className="max-w-md mx-auto text-center space-y-6">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-rose-400 uppercase bg-rose-500/10 border border-rose-500/20 rounded-full">
            404 Error
          </span>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Page Not Found
          </h1>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            The page you are looking for doesn&apos;t exist, has been moved, or is
            temporarily unavailable.
          </p>

          <div className="pt-4 flex items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-sm font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>View Projects</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
