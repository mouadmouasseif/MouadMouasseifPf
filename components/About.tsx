"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  GraduationCap,
  Cpu,
  Trophy,
  Sparkles,
  CheckCircle2,
  BookOpen,
  Code2,
  Activity,
} from "lucide-react";
import { profile } from "@/src/data/profile";
import SectionTitle from "@/components/SectionTitle";
import GlowCard from "@/components/GlowCard";

const pillarsData = [
  {
    icon: GraduationCap,
    title: "01. Educator",
    subtitle: "Computer Science Teacher & Digital Pedagogy Specialist",
    text: "Enseignant d'informatique au Collège Zawiyat Sidi Hamza (Académie Drâa-Tafilalet) et diplômé de l'ENS Rabat et du CRMEF Casablanca-Settat. Je conçois des ressources didactiques bilingues (FR/AR) pour initier les apprenants à l'algorithmique, à la pensée critique et à la programmation concrète.",
    highlights: [
      "Apprentissage par projets & programmation créative",
      "Ressources didactiques bilingues (Français / Arabe)",
      "Recherche empirique sur l'attention et l'usage des écrans",
    ],
    border: "border-sky-400/30",
    badgeBg: "bg-sky-400/10 text-sky-300",
  },
  {
    icon: Cpu,
    title: "02. Technology Innovator",
    subtitle: "Full-Stack Web, Edge AI & Cybersecurity",
    text: "Ingénieur logiciel polyvalent et passionné d'intelligence artificielle appliquée. Formé aux architectures web modernes (React 19, Next.js, Node.js) et à la cybersécurité (ENSAM Rabat / JobInTech), je développe des systèmes temps réel avec vision par ordinateur (MediaPipe, TensorFlow.js).",
    highlights: [
      "Pipelines de Computer Vision légers dans le navigateur",
      "Architecture Full-Stack Next.js & interfaces réactives",
      "Sensibilisation & hygiène cybersécurité (CCEP)",
    ],
    border: "border-amber-400/30",
    badgeBg: "bg-amber-400/10 text-amber-300",
  },
  {
    icon: Trophy,
    title: "03. Sports Technology Entrepreneur",
    subtitle: "Creator of BasketMotion, SailMotion & RowMotion",
    text: "Entraîneur certifié de basketball et moniteur de voile légère, je comble le fossé entre le sport de haut niveau et la technologie accessible en concevant des outils d'analyse biomécanique et de gestion de course pour les athlètes, clubs et fédérations.",
    highlights: [
      "BasketMotion AI : analyse de tir et biomécanique",
      "SailMotion AI : dynamique de gîte et trajectoire voile",
      "RowMotion-RACE : cadence et chronométrage d'aviron",
    ],
    border: "border-cyan-400/30",
    badgeBg: "bg-cyan-400/10 text-cyan-300",
  },
];

export default function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="01 · About Me"
          title="Education meets Technology & Innovation."
          description="A professional journey connecting classroom pedagogy, intelligent software engineering, and sports biomechanics."
        />

        {/* Narrative & Manifesto Card */}
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <GlowCard className="p-8 sm:p-10">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
              <Sparkles size={16} className="text-amber-400" />
              <span>Professional Profile & Vision</span>
            </div>

            <p className="mt-5 text-lg leading-relaxed text-slate-200 sm:text-xl">
              {profile.about}
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/50 p-6 backdrop-blur-md">
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-200">
                My Core Mission
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {profile.mission}
              </p>
            </div>

            {/* Values / Core competencies */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              {profile.values.map((val) => (
                <span
                  key={val}
                  className="rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3.5 py-1.5 text-xs font-bold text-cyan-100"
                >
                  {val}
                </span>
              ))}
            </div>
          </GlowCard>

          {/* Quick Credential Profile Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card neon-border flex flex-col justify-between rounded-3xl p-8"
          >
            <div>
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-cyan-300/40 p-1 shadow-lg shadow-cyan-500/20">
                  <Image
                    src={profile.avatar}
                    alt={profile.name}
                    fill
                    className="rounded-full object-cover"
                    sizes="80px"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">{profile.name}</h3>
                  <p className="text-xs font-semibold text-cyan-200">
                    Morocco · Drâa-Tafilalet / Rabat
                  </p>
                  <p className="text-xs text-slate-400">
                    Computer Science Educator & AI Builder
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-4 border-t border-white/10 pt-6 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <GraduationCap className="mt-0.5 text-sky-400 shrink-0" size={18} />
                  <div>
                    <p className="font-bold text-white">Collège Zawiyat Sidi Hamza</p>
                    <p className="text-xs text-slate-400">Computer Science Teacher (Since Sep 2026)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="mt-0.5 text-amber-400 shrink-0" size={18} />
                  <div>
                    <p className="font-bold text-white">CRMEF Casablanca-Settat</p>
                    <p className="text-xs text-slate-400">Teacher Qualification & Empirical Research</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Code2 className="mt-0.5 text-cyan-400 shrink-0" size={18} />
                  <div>
                    <p className="font-bold text-white">ENS Rabat & ENSAM Rabat</p>
                    <p className="text-xs text-slate-400">Licence Informatique & Cybersécurité CCEP</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Activity className="mt-0.5 text-teal-400 shrink-0" size={18} />
                  <div>
                    <p className="font-bold text-white">Sports Tech Innovator</p>
                    <p className="text-xs text-slate-400">BasketMotion AI · SailMotion · RowMotion</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Global Mindset
              </p>
              <p className="mt-1 text-xs text-slate-300">
                Ready to contribute to international school exchanges, UNESCO programs, and global EdTech initiatives.
              </p>
            </div>
          </motion.div>
        </div>

        {/* 3 Pillars Deep-Dive Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillarsData.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                className={`glass-card relative flex flex-col justify-between rounded-3xl border ${pillar.border} p-7 transition duration-300 hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`rounded-full px-3 py-1 text-xs font-black uppercase tracking-wider ${pillar.badgeBg}`}>
                      {pillar.title}
                    </span>
                    <Icon size={24} className="text-white/60" />
                  </div>
                  <h4 className="mt-4 text-xl font-black text-white">
                    {pillar.subtitle}
                  </h4>
                  <p className="mt-3 text-xs leading-relaxed text-slate-300">
                    {pillar.text}
                  </p>
                </div>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Key Highlights
                  </p>
                  <ul className="mt-2 space-y-1.5 text-xs text-slate-200">
                    {pillar.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-cyan-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
