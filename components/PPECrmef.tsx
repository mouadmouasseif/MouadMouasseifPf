"use client";

import { Download, FileText, GraduationCap, Presentation, Sparkles } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import GlowCard from "@/components/GlowCard";

const badges = ["CRMEF Casablanca-Settat", "Teacher Training", "Pedagogy", "Educational Innovation", "Soutenance"];

export default function PPECrmef() {
  return (
    <section id="ppe-crmef" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="PPE & CRMEF" title="PPE & CRMEF Soutenance" />
        <GlowCard className="overflow-hidden p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="flex min-h-72 items-center justify-center rounded-3xl border border-cyan-300/15 bg-[radial-gradient(circle_at_50%_40%,rgba(34,211,238,0.16),transparent_16rem)]">
              <div className="relative">
                <div className="flex h-28 w-28 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 shadow-2xl shadow-cyan-500/20">
                  <GraduationCap className="text-cyan-200" size={54} />
                </div>
                <div className="absolute -right-8 -top-7 flex h-16 w-16 items-center justify-center rounded-full border border-fuchsia-300/30 bg-fuchsia-300/10">
                  <Presentation className="text-fuchsia-200" size={30} />
                </div>
              </div>
            </div>
            <div>
              <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.28em] text-cyan-300">
                <Sparkles size={15} /> Important pedagogical project
              </p>
              <h3 className="mt-4 text-3xl font-black text-white sm:text-5xl">Projet personnel encadre au CRMEF Casablanca-Settat</h3>
              <p className="mt-5 text-base leading-8 text-slate-300">
                Sujet : integration du numerique, innovation pedagogique, ressources educatives et reflexion professionnelle. This project presents a serious teacher-training vision that connects classroom practice, digital tools, educational resources and professional reflection.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {badges.map((badge) => (
                  <span key={badge} className="rounded-full bg-cyan-300/10 px-4 py-2 text-xs font-bold text-cyan-100">
                    {badge}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="/documents/ppe-soutenance-academique.pptx" className="glow-button" download>
                  <Download size={18} />
                  <span className="ml-2">Download PPE</span>
                </a>
                <a href="/documents/ppe-soutenance-academique.pptx" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full border border-cyan-300/30 px-5 py-3 text-sm font-bold text-cyan-100 transition hover:bg-cyan-300/10">
                  <FileText size={18} />
                  <span className="ml-2">Open Soutenance</span>
                </a>
              </div>
            </div>
          </div>
        </GlowCard>
      </div>
    </section>
  );
}
