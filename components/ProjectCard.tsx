"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { DigitalProject } from "@/src/data/digitalProjects";

export default function ProjectCard({ project }: { project: DigitalProject }) {
  const [hasImageError, setHasImageError] = useState(false);
  const showImage = Boolean(project.image) && !hasImageError;

  return (
    <article className="group glass-card neon-border flex h-full flex-col overflow-hidden rounded-3xl transition hover:-translate-y-1">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
        {showImage ? (
          <Image
            src={project.image as string}
            alt={project.title}
            fill
            onError={() => setHasImageError(true)}
            className="object-cover transition duration-700 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_50%_40%,rgba(34,211,238,0.16),transparent_18rem)] p-6 text-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.32em] text-cyan-300">{project.type}</p>
              <h3 className="mt-3 text-2xl font-black text-white">{project.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{project.status || "Project preview"}</p>
            </div>
          </div>
        )}
        <span className="absolute left-4 top-4 rounded-full border border-cyan-300/30 bg-black/55 px-3 py-1 text-xs font-bold text-cyan-100 backdrop-blur">
          {project.status || project.type}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">{project.type}</p>
            <h3 className="mt-2 text-xl font-black text-white">{project.title}</h3>
          </div>
          {project.link ? (
            <a href={project.link} target="_blank" rel="noreferrer" className="rounded-full border border-cyan-300/20 p-2 text-cyan-200 transition hover:bg-cyan-300/10" aria-label={`Open ${project.title}`}>
              <ExternalLink size={17} />
            </a>
          ) : null}
        </div>
        <p className="mt-4 flex-1 text-sm leading-6 text-slate-300">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-100">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
