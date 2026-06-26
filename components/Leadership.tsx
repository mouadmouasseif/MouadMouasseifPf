"use client";

import { Crown } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import GlowCard from "@/components/GlowCard";
import { leadership } from "@/src/data/services";

export default function Leadership() {
  return (
    <section id="leadership" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionTitle eyebrow="Leadership" title="Leading projects, teams and training culture." />
        <div className="grid gap-4 md:grid-cols-2">
          {leadership.map((item) => (
            <GlowCard key={item} className="p-5">
              <Crown className="mb-4 text-cyan-300" size={22} />
              <h3 className="text-lg font-black text-white">{item}</h3>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
