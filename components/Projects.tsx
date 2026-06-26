"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import GlowCard from "@/components/GlowCard";
import { projects } from "@/src/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Projects" title="Smart apps, web platforms and sport tech." />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <GlowCard key={project.title} className="group overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-black text-white">{project.title}</h3>
                  {project.href ? <a href={project.href} target="_blank" rel="noreferrer" className="text-cyan-300"><ExternalLink size={18} /></a> : null}
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => <span key={tag} className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-100">{tag}</span>)}
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
