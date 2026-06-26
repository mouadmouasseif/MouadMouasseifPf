"use client";

import Image from "next/image";
import { BookOpen } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import GlowCard from "@/components/GlowCard";
import { educationalResources } from "@/src/data/educationalResources";

export default function EducationalResources() {
  return (
    <section id="educational-resources" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Teaching"
          title="Educational Resources"
          description="Courses, classroom supports and digital learning resources for computer science, networks, TICE and cybersecurity awareness."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {educationalResources.map((resource) => (
            <GlowCard key={resource.title} className="p-5">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10">
                {resource.image ? (
                  <Image src={resource.image} alt={resource.title} width={38} height={38} className="max-h-10 max-w-10 object-contain" />
                ) : (
                  <BookOpen className="text-cyan-300" />
                )}
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">{resource.category}</p>
              <h3 className="mt-2 text-lg font-black text-white">{resource.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{resource.description}</p>
              <p className="mt-4 text-xs font-bold text-fuchsia-200">{resource.level}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {resource.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
