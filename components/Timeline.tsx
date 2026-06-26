"use client";

import SectionTitle from "@/components/SectionTitle";
import GlowCard from "@/components/GlowCard";

type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export default function Timeline({ id, eyebrow, title, items }: { id: string; eyebrow: string; title: string; items: TimelineItem[] }) {
  return (
    <section id={id} className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionTitle eyebrow={eyebrow} title={title} />
        <div className="relative space-y-5 before:absolute before:left-4 before:top-2 before:h-full before:w-px before:bg-cyan-300/25 sm:before:left-1/2">
          {items.map((item, index) => (
            <div key={`${item.year}-${item.title}`} className={`relative grid gap-4 sm:grid-cols-2 ${index % 2 ? "" : "sm:text-right"}`}>
              <div className={`${index % 2 ? "sm:col-start-2" : ""}`}>
                <GlowCard className="ml-10 p-5 sm:ml-0">
                  <p className="text-sm font-black text-cyan-300">{item.year}</p>
                  <h3 className="mt-2 text-xl font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
                </GlowCard>
              </div>
              <span className="absolute left-2.5 top-7 h-4 w-4 rounded-full border border-cyan-200 bg-cyan-300 shadow-lg shadow-cyan-500/50 sm:left-[calc(50%-0.5rem)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
