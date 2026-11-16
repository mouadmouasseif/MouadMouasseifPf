"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Trophy,
  Activity,
  ExternalLink,
  Github,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Lightbulb,
  Cpu,
  Layers,
  ChevronRight,
  FileText,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import GlowCard from "@/components/GlowCard";
import { sportsTechProjects, SportsTechProject } from "@/src/data/sportsTech";

export default function SportsTechSuite() {
  const [selectedId, setSelectedId] = useState<string>(sportsTechProjects[0].id);
  const activeProject = sportsTechProjects.find((p) => p.id === selectedId) || sportsTechProjects[0];

  return (
    <section id="sports-tech" className="relative px-4 py-24 sm:px-6 lg:px-8">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_40%,rgba(245,158,11,0.1),transparent_36rem)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.12),transparent_36rem)]" />

      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="04 · Sports Technology Suite"
          title="Intelligent Sports Analytics & Computer Vision."
          description="Proprietary athletic performance applications designed for basketball, Olympic sailing, and competitive rowing, powered by accessible browser-based computer vision."
        />

        {/* Project Selector Tabs */}
        <div className="mb-10 flex flex-wrap gap-3">
          {sportsTechProjects.map((proj) => {
            const isSelected = proj.id === selectedId;
            return (
              <button
                key={proj.id}
                onClick={() => setSelectedId(proj.id)}
                className={`flex items-center gap-2.5 rounded-2xl px-5 py-3 text-sm font-bold transition duration-300 ${
                  isSelected
                    ? "bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 shadow-lg shadow-amber-400/25"
                    : "glass-card text-slate-300 hover:border-cyan-300/40 hover:text-white"
                }`}
              >
                <Trophy size={16} />
                <span>{proj.title}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-black uppercase tracking-wider ${
                    isSelected ? "bg-black/20 text-slate-950" : "bg-white/10 text-cyan-200"
                  }`}
                >
                  {proj.sport}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Project Full Case Study Card */}
        <motion.div
          key={activeProject.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <GlowCard className="overflow-hidden p-6 sm:p-10">
            {/* Top Case Study Header */}
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-amber-400/15 px-3 py-1 text-xs font-black uppercase tracking-wider text-amber-300">
                    {activeProject.badge}
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-slate-300">
                    {activeProject.category}
                  </span>
                </div>

                <h3 className="mt-4 text-3xl font-black text-white sm:text-5xl">
                  {activeProject.title}
                </h3>
                <p className="mt-2 text-base font-semibold text-cyan-200 sm:text-lg">
                  {activeProject.tagline}
                </p>

                <p className="mt-5 text-sm leading-relaxed text-slate-300 sm:text-base">
                  {activeProject.description}
                </p>

                {/* Problem vs Solution Split */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-red-400/20 bg-red-950/20 p-5">
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-red-300">
                      <ShieldAlert size={16} />
                      <span>The Problem Identified</span>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-slate-300">
                      {activeProject.problem}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-emerald-400/20 bg-emerald-950/20 p-5">
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-300">
                      <Lightbulb size={16} />
                      <span>The AI & Tech Solution</span>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-slate-300">
                      {activeProject.solution}
                    </p>
                  </div>
                </div>

                {/* My Role & Contribution */}
                <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                    My Exact Role
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    {activeProject.role}
                  </p>
                </div>
              </div>

              {/* Right Column: Visual Showcase & Operational Metrics */}
              <div className="flex flex-col justify-between gap-6">
                {/* Main Hero Screenshot */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/15 bg-slate-950 shadow-2xl">
                  <Image
                    src={activeProject.images.hero}
                    alt={`${activeProject.title} platform screenshot`}
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-semibold text-white">
                    <span className="flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 backdrop-blur-md">
                      <Activity size={13} className="text-amber-400" />
                      Live Application Demo
                    </span>
                    <a
                      href={activeProject.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="glow-button px-3.5 py-1.5 text-xs font-bold"
                    >
                      <ExternalLink size={13} />
                      <span className="ml-1">Launch Live Demo</span>
                    </a>
                  </div>
                </div>

                {/* Measured Results / Evidence */}
                {activeProject.metrics && (
                  <div className="rounded-2xl border border-amber-400/20 bg-amber-500/5 p-5">
                    <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-300">
                      <Sparkles size={14} /> Measured Performance & Impact
                    </p>
                    <ul className="mt-3 space-y-2 text-xs text-slate-200">
                      {activeProject.metrics.map((m) => (
                        <li key={m} className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-amber-400" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={activeProject.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="glow-button flex-1 text-center"
                  >
                    <ExternalLink size={16} />
                    <span className="ml-2">Live Demo</span>
                  </a>
                  <Link
                    href={`/projects/${activeProject.id}`}
                    className="inline-flex items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-400/10 px-5 py-3 text-sm font-bold text-cyan-200 transition hover:bg-cyan-400/20"
                  >
                    <FileText size={16} />
                    <span className="ml-2">Full Case Study</span>
                  </Link>
                  {activeProject.githubUrl && (
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-4 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Row: Key Operational Features & Technology Stack */}
            <div className="mt-10 border-t border-white/10 pt-8 grid gap-8 lg:grid-cols-2">
              <div>
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-white">
                  <Layers size={16} className="text-cyan-300" />
                  <span>Operational Features</span>
                </div>
                <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {activeProject.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs text-slate-200"
                    >
                      <ChevronRight size={14} className="mt-0.5 shrink-0 text-cyan-300" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-white">
                  <Cpu size={16} className="text-amber-300" />
                  <span>Technology Stack & Architecture</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {activeProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-bold text-cyan-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </section>
  );
}
