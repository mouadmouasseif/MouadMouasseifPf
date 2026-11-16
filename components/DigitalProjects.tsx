"use client";

import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import { digitalProjects, DigitalProject } from "@/src/data/digitalProjects";

const projectFilters = [
  "All Projects",
  "Web App",
  "Website",
  "Desktop App",
] as const;

export default function DigitalProjects() {
  const [filter, setFilter] = useState<string>("All Projects");

  // Exclude duplicate Master Hoop since BasketMotion AI has its own dedicated flagship section
  const projectsList = digitalProjects.filter(
    (p) => !p.title.toLowerCase().includes("master hoop")
  );

  const filteredProjects =
    filter === "All Projects"
      ? projectsList
      : projectsList.filter((p) => p.type === filter);

  return (
    <section id="tech-projects" className="relative px-4 py-24 sm:px-6 lg:px-8">
      {/* Background ambient glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_40%_50%,rgba(14,165,233,0.08),transparent_35rem)]" />

      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="03 · Technology & AI Projects"
          title="Full-Stack Engineering & Intelligent Applications."
          description="A curated catalog of production web platforms, business solutions, client systems, and desktop management architectures."
        />

        {/* Filter Tabs */}
        <div className="mb-10 flex flex-wrap gap-2.5">
          {projectFilters.map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`rounded-full px-4 py-2 text-xs font-bold transition duration-300 ${
                filter === tab
                  ? "bg-cyan-400 text-slate-950 shadow-md shadow-cyan-400/25"
                  : "glass-card text-slate-300 hover:border-cyan-300/40 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
