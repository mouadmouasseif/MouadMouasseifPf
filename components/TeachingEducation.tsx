"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  GraduationCap,
  BookOpen,
  Sparkles,
  Download,
  ExternalLink,
  Code2,
  Brain,
  Shield,
  CheckCircle2,
  FileText,
  Presentation,
  Award,
  Globe,
  School,
  ArrowRight,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import GlowCard from "@/components/GlowCard";
import {
  teachingExperience,
  teachingResources,
  educationalMethodology,
  TeachingResource,
} from "@/src/data/teaching";

const categories = [
  "All Resources",
  "Algorithms",
  "Programming",
  "Networks & Systems",
  "Digital Citizenship & AI",
] as const;

export default function TeachingEducation() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Resources");

  const filteredResources =
    selectedCategory === "All Resources"
      ? teachingResources
      : teachingResources.filter((r) => r.category === selectedCategory);

  return (
    <section id="teaching" className="relative px-4 py-24 sm:px-6 lg:px-8">
      {/* Background ambient light */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_30%,rgba(14,165,233,0.12),transparent_35rem)]" />

      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="02 · Teaching & Education"
          title="Empowering the Next Generation with Digital Intelligence."
          description="Combining official secondary-school teaching practice in Morocco with bilingual pedagogical resources, hands-on programming, and educational research."
        />

        {/* 01. Teaching Experience Spotlight */}
        <div className="mb-16">
          <div className="mb-6 flex items-center gap-2">
            <School className="text-sky-400" size={20} />
            <h3 className="text-xl font-black uppercase tracking-wider text-white">
              01. Teaching Experience
            </h3>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {teachingExperience.map((exp, idx) => (
              <motion.div
                key={exp.institution}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`glass-card relative flex flex-col justify-between rounded-3xl p-7 ${
                  exp.status === "Active"
                    ? "border-2 border-sky-400/50 shadow-[0_0_35px_rgba(56,189,248,0.2)]"
                    : "border-white/10"
                }`}
              >
                {exp.status === "Active" && (
                  <span className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-slate-950 shadow-md">
                    Current Official Appointment
                  </span>
                )}

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-sky-300">
                    {exp.period}
                  </p>
                  <h4 className="mt-2 text-xl font-black text-white">{exp.role}</h4>
                  <p className="mt-1 text-sm font-semibold text-cyan-200">
                    {exp.institution}
                  </p>
                  <p className="text-xs text-slate-400">{exp.location}</p>

                  <p className="mt-4 text-xs leading-relaxed text-slate-300">
                    {exp.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Key Contributions:
                  </p>
                  <ul className="mt-2 space-y-1.5 text-xs text-slate-200">
                    {exp.keyAchievements.map((ach) => (
                      <li key={ach} className="flex items-start gap-2">
                        <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-sky-400" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 02. Featured Bilingual Didactic Unit (Concrete Classroom Evidence) */}
        <div className="mb-16">
          <GlowCard className="overflow-hidden border border-amber-400/30 bg-gradient-to-br from-amber-500/10 via-slate-950/80 to-slate-950 p-6 sm:p-9">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/15 px-3 py-1 text-xs font-bold text-amber-300">
                  <Sparkles size={13} /> Pedagogical Evidence & Classroom Material
                </span>
                <h3 className="mt-4 text-2xl font-black text-white sm:text-3xl">
                  Unité Didactique : Introduction à l&apos;Algorithmique & Organigrammes
                </h3>
                <p className="mt-1 text-lg font-bold text-amber-200" dir="rtl">
                  الوحدة الديدكتيكية: مدخل إلى الخوارزميات والمنطق البرمجي
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  Exemple concret d&apos;ingénierie pédagogique conçue pour les élèves du secondaire collégial. Cette fiche didactique bilingue (Français & Arabe) articule mise en situation concrète du quotidien, formulation logique sans écran, puis transcription en pseudo-code et organigrammes interactifs.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-black/40 p-3">
                    <p className="text-xs font-bold text-cyan-200">Format Didactique</p>
                    <p className="text-xs text-slate-300">Fiche de préparation + Fiche apprenant</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/40 p-3">
                    <p className="text-xs font-bold text-cyan-200">Approche</p>
                    <p className="text-xs text-slate-300">Pédagogie active & situation-problème</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="/documents/fiche-algorithmique-college.html"
                    target="_blank"
                    rel="noreferrer"
                    className="glow-button text-xs font-bold"
                  >
                    <FileText size={16} />
                    <span className="ml-2">Consulter la Fiche Pédagogique</span>
                  </a>
                  <a
                    href="#teaching-resources"
                    className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-white/10"
                  >
                    <span>Voir toutes les ressources</span>
                    <ArrowRight size={14} className="ml-1.5" />
                  </a>
                </div>
              </div>

              {/* Visual Preview Box & Direct Launcher */}
              <a
                href="/documents/fiche-algorithmique-college.html"
                target="_blank"
                rel="noreferrer"
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-amber-400/30 bg-slate-900/90 p-6 flex flex-col justify-between transition hover:border-amber-400 hover:shadow-2xl hover:shadow-amber-500/20 cursor-pointer"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-mono font-bold text-amber-300">
                    SIMULATEUR_ALGO.HTML
                  </span>
                  <span className="rounded bg-sky-400/20 px-2 py-0.5 text-[10px] font-bold text-sky-200">
                    Bilingue FR / AR · Interactif
                  </span>
                </div>
                <div className="my-auto space-y-3 font-mono text-xs text-slate-300">
                  <div className="rounded border border-cyan-400/20 bg-cyan-950/30 p-2.5">
                    <p className="text-cyan-300 font-bold">1. Situation Déclenchante / الوضعية الانطلاقية</p>
                    <p className="text-[11px] text-slate-400">Automatisation d&apos;un feu de signalisation intelligent</p>
                  </div>
                  <div className="rounded border border-amber-400/20 bg-amber-950/30 p-2.5">
                    <p className="text-amber-300 font-bold">2. Pseudo-Code & Organigramme animé</p>
                    <p className="text-[11px] text-slate-400">SI (capteur_voiture == VRAI) ALORS feu = VERT</p>
                  </div>
                  <div className="rounded border border-emerald-400/20 bg-emerald-950/30 p-2.5">
                    <p className="text-emerald-300 font-bold">3. Laboratoire interactif & Quiz</p>
                    <p className="text-[11px] text-slate-400">Test en direct du feu et évaluation formative</p>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-2 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400">
                    Collège Zawiyat Sidi Hamza · 2026/2027
                  </span>
                  <span className="text-[10px] font-bold text-amber-300 group-hover:underline">
                    Tester le simulateur →
                  </span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center backdrop-blur-[2px]">
                  <span className="glow-button text-xs font-bold scale-95 group-hover:scale-100 transition">
                    Lancer la simulation interactive & la fiche →
                  </span>
                </div>
              </a>
            </div>
          </GlowCard>
        </div>

        {/* 03. Teaching Resources Grid */}
        <div id="teaching-resources" className="mb-16">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <BookOpen className="text-cyan-300" size={20} />
              <h3 className="text-xl font-black uppercase tracking-wider text-white">
                02. Teaching Resources
              </h3>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition ${
                    selectedCategory === cat
                      ? "bg-cyan-400 text-slate-950 shadow-md shadow-cyan-400/30"
                      : "border border-white/10 bg-white/[0.03] text-slate-300 hover:bg-white/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredResources.map((res) => (
              <GlowCard key={res.id} className="flex flex-col justify-between p-6">
                <div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="rounded-full bg-cyan-400/10 px-2.5 py-1 font-bold text-cyan-200">
                      {res.category}
                    </span>
                    <span className="font-semibold text-slate-400">{res.grade}</span>
                  </div>

                  <h4 className="mt-4 text-lg font-black text-white">{res.title}</h4>
                  <p className="mt-1 text-sm font-semibold text-amber-300" dir="rtl">
                    {res.titleArabic}
                  </p>

                  <p className="mt-3 text-xs leading-relaxed text-slate-300">
                    {res.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {res.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5 text-[10px] font-medium text-slate-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs">
                  <span className="font-semibold text-sky-300">{res.format}</span>
                  <a
                    href={res.downloadUrl || "#contact"}
                    target={res.downloadUrl?.startsWith("/documents") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 font-bold text-cyan-300 transition hover:underline"
                  >
                    {res.downloadUrl?.endsWith(".html") ? (
                      <>
                        <ExternalLink size={14} />
                        <span>Ouvrir l'activité</span>
                      </>
                    ) : (
                      <>
                        <Download size={14} />
                        <span>Télécharger</span>
                      </>
                    )}
                  </a>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>

        {/* 04. Educational Innovation & Methodology */}
        <div className="mb-16">
          <div className="mb-6 flex items-center gap-2">
            <Brain className="text-amber-400" size={20} />
            <h3 className="text-xl font-black uppercase tracking-wider text-white">
              03. Educational Innovation & Methodology
            </h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {educationalMethodology.map((m) => (
              <div
                key={m.title}
                className="glass-card rounded-2xl border border-white/10 p-6 transition duration-300 hover:border-cyan-300/40"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-300">
                  <Sparkles size={20} />
                </div>
                <h4 className="mt-4 text-base font-black text-white">{m.title}</h4>
                <p className="mt-1 text-xs font-semibold text-amber-300" dir="rtl">
                  {m.arabic}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-slate-300">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 05. Professional Development Badges (UNESCO, Cisco, IBM, Microsoft) */}
        <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-7">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                04. Professional Development
              </span>
              <h3 className="mt-1 text-xl font-black text-white">
                Continuous International & National Teacher Training
              </h3>
              <p className="text-xs text-slate-400">
                Regularly updating pedagogical and technical competencies with world-class education frameworks.
              </p>
            </div>
            <a
              href="#certifications"
              className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-bold text-cyan-200 transition hover:bg-cyan-400/20"
            >
              <Award size={15} />
              <span>Voir les certifications vérifiées</span>
            </a>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-center">
              <p className="text-xs font-black text-white">UNESCO</p>
              <p className="mt-1 text-[11px] text-slate-400">ICT Competency Framework</p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-center">
              <p className="text-xs font-black text-white">CRMEF</p>
              <p className="mt-1 text-[11px] text-slate-400">Didactique & Qualification</p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-center">
              <p className="text-xs font-black text-white">Cisco Networking</p>
              <p className="mt-1 text-[11px] text-slate-400">Network Academy Modules</p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-center">
              <p className="text-xs font-black text-white">Microsoft & IBM</p>
              <p className="mt-1 text-[11px] text-slate-400">Certified Educator & AI Badges</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
