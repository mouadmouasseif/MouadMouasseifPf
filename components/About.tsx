"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { profile } from "@/src/data/profile";
import SectionTitle from "@/components/SectionTitle";
import GlowCard from "@/components/GlowCard";

export default function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="About Me" title="Technology, education, sport and innovation." />
        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <GlowCard className="p-8">
            <p className="text-xl leading-9 text-slate-200">{profile.about}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["Full-stack systems", "AI sport analysis", "Creative direction"].map((item) => (
                <div key={item} className="rounded-2xl border border-cyan-300/15 bg-cyan-300/5 p-4 text-sm font-bold text-cyan-100">{item}</div>
              ))}
            </div>
          </GlowCard>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card neon-border rounded-3xl p-8">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-300/10 p-3 shadow-lg shadow-cyan-500/20">
              <Image src={profile.logo} alt="Mouad Mouasseif logo" width={72} height={72} className="rounded-full object-contain" />
            </div>
            <h3 className="mt-6 text-2xl font-black text-white">Mouad Mouasseif</h3>
            <p className="mt-2 text-sm text-slate-300">{profile.signature}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {profile.values.map((value) => (
                <span key={value} className="rounded-full border border-white/10 px-3 py-2 text-xs font-bold text-slate-200">{value}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
