"use client";

import SectionTitle from "@/components/SectionTitle";
import GlowCard from "@/components/GlowCard";
import { skills } from "@/src/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Skills" title="A wide stack for building, teaching and analyzing." />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skills.map((group) => (
            <GlowCard key={group.category} className="p-5">
              <h3 className="text-lg font-black text-white">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-slate-200">{item}</span>)}
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
