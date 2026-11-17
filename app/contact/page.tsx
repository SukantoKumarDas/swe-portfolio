import type { Metadata } from "next";
import { ContactView } from "@/components/ContactView";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteConfig.name} — Full Stack Software Engineer. Direct email, phone, LinkedIn, and downloadable resume.`,
};

export default function ContactPage() {
  return <ContactView />;
}
