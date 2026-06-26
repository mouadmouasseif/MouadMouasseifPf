"use client";

import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import { digitalProjects } from "@/src/data/digitalProjects";

export default function DigitalProjects() {
  return (
    <section id="digital-projects" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Digital Projects"
          title="Web, App & Desktop Projects"
          description="A clean separation for websites, web apps, mobile concepts, desktop systems and coming soon products."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {digitalProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
