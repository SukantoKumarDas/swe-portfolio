import { Hero } from "@/components/Hero";
import { TechStackSection } from "@/components/TechStackSection";
import { FeaturedProjectsSection } from "@/components/FeaturedProjectsSection";
import { ExperienceOverviewSection } from "@/components/ExperienceOverviewSection";
import { HomeContactSection } from "@/components/HomeContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjectsSection />
      <TechStackSection />
      <ExperienceOverviewSection />
      <HomeContactSection />
    </>
  );
}
