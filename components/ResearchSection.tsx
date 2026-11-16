"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  BookOpen,
  FileText,
  Presentation,
  ExternalLink,
  Users,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  TrendingUp,
  AlertCircle,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import GlowCard from "@/components/GlowCard";
import { crmefResearch, educationalArticles } from "@/src/data/research";

export default function ResearchSection() {
  return (
    <section id="research" className="relative px-4 py-24 sm:px-6 lg:px-8">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_25%,rgba(168,85,247,0.1),transparent_35rem)]" />

      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="06 · Research & Insights"
          title="Empirical Inquiry & Educational Perspectives."
          description="Bridging scientific observation, classroom teacher surveys, and forward-looking analyses on digital education, AI, and youth cognitive engagement."
        />

        {/* Highlight Banner / Academic Integrity Note */}
        <div className="mb-8 flex items-center gap-3 rounded-2xl border border-sky-400/20 bg-sky-950/25 px-5 py-3 text-xs text-slate-300">
          <AlertCircle size={18} className="text-sky-300 shrink-0" />
          <span>
            <strong>Note de transparence académique :</strong> Cette étude empirique a été menée au CRMEF Casablanca-Settat dans le cadre du Projet Professionnel d&apos;Entraînement / Mémoire de fin de formation qualifiante aux métiers de l&apos;enseignement.
          </span>
        </div>

        {/* CRMEF Empirical Research Deep Dive */}
        <GlowCard className="overflow-hidden p-6 sm:p-10 mb-16">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="rounded-full bg-purple-400/15 px-3 py-1 text-xs font-black uppercase tracking-wider text-purple-300">
                  {crmefResearch.type}
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-slate-300">
                  {crmefResearch.institution}
                </span>
                <span className="text-xs text-slate-400">{crmefResearch.year}</span>
              </div>

              <h3 className="mt-4 text-2xl font-black text-white sm:text-4xl">
                {crmefResearch.title}
              </h3>
              <p className="mt-2 text-sm font-semibold text-cyan-200">
                {crmefResearch.subtitle}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                {crmefResearch.abstract}
              </p>

              {/* Methodology Grid */}
              <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
                  <Users size={16} />
                  <span>Protocole & Échantillon Méthodologique</span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  {crmefResearch.methodology.sample}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {crmefResearch.methodology.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-lg bg-white/5 px-2.5 py-1 text-[11px] text-slate-300"
                    >
                      • {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={crmefResearch.presentationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="glow-button text-xs font-bold"
                >
                  <Presentation size={16} />
                  <span className="ml-2">Visualiser la Présentation de Soutenance (PPTX)</span>
                </a>
                <a
                  href={crmefResearch.documentUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-white/10"
                >
                  <FileText size={16} />
                  <span className="ml-2">Page de garde & Résumé</span>
                </a>
              </div>
            </div>

            {/* Right Column: Key Findings & Recommendations */}
            <div className="flex flex-col justify-between gap-6">
              {/* Findings */}
              <div className="rounded-2xl border border-purple-400/20 bg-purple-950/20 p-6">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-purple-300">
                  <TrendingUp size={16} />
                  <span>Constats Clés de l&apos;Enquête (50 Enseignants)</span>
                </div>
                <ul className="mt-4 space-y-3 text-xs leading-relaxed text-slate-200">
                  {crmefResearch.keyFindings.map((finding) => (
                    <li key={finding} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-purple-400" />
                      <span>{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommendations */}
              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-950/20 p-6">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-cyan-300">
                  <Sparkles size={16} />
                  <span>Recommandations Pédagogiques Proposées</span>
                </div>
                <ul className="mt-4 space-y-3 text-xs leading-relaxed text-slate-200">
                  {crmefResearch.recommendations.map((rec) => (
                    <li key={rec} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-cyan-400" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </GlowCard>

        {/* Section: Articles & Insights */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="text-amber-400" size={20} />
              <h3 className="text-xl font-black uppercase tracking-wider text-white">
                Articles & Educational Insights
              </h3>
            </div>
            <span className="text-xs text-slate-400">Thought leadership & perspectives</span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {educationalArticles.map((art) => (
              <motion.div
                key={art.id}
                whileHover={{ y: -4 }}
                className="glass-card flex flex-col justify-between rounded-3xl border border-white/10 p-6 transition duration-300 hover:border-cyan-300/40"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="rounded-full bg-cyan-400/10 px-2.5 py-0.5 font-bold text-cyan-300">
                      {art.category}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <Clock size={11} /> {art.readTime}
                    </span>
                  </div>

                  <h4 className="mt-4 text-base font-black leading-snug text-white">
                    {art.title}
                  </h4>

                  <p className="mt-3 text-xs leading-relaxed text-slate-300">
                    {art.summary}
                  </p>
                </div>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {art.tags.slice(0, 2).map((t) => (
                      <span key={t} className="text-[10px] text-slate-400">
                        #{t}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    className="flex items-center justify-between text-xs font-bold text-cyan-200 transition hover:text-white"
                  >
                    <span>Read Overview / Discuss</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
