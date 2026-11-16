"use client";

import { motion } from "motion/react";
import {
  Globe,
  Sparkles,
  Users,
  Award,
  BookOpen,
  Activity,
  ArrowRight,
  Handshake,
  CheckCircle2,
  Mail,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import GlowCard from "@/components/GlowCard";
import {
  internationalPillars,
  targetRegions,
  opportunityTracks,
} from "@/src/data/international";

export default function InternationalHub() {
  return (
    <section id="international" className="relative px-4 py-24 sm:px-6 lg:px-8">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,rgba(14,165,233,0.1),transparent_38rem)]" />

      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="07 · International Dimensions"
          title="Connecting Education & Technology Worldwide."
          description="Fostering global educational exchange, UNESCO competency frameworks, cross-border classroom collaborations, and international AI partnerships."
        />

        {/* 4 Pillars of International Collaboration */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {internationalPillars.map((pillar) => (
            <div
              key={pillar.id}
              className="glass-card flex flex-col justify-between rounded-3xl border border-white/10 p-6 transition duration-300 hover:border-cyan-300/40"
            >
              <div>
                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-cyan-300">
                  {pillar.badge}
                </span>
                <h4 className="mt-4 text-lg font-black text-white">{pillar.title}</h4>
                <p className="mt-3 text-xs leading-relaxed text-slate-300">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <a
                  href="#contact"
                  className="flex items-center gap-1.5 text-xs font-bold text-amber-300 transition hover:underline"
                >
                  <span>Propose Collaboration</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Targeted Global Network Map / Region Grid */}
        <div className="mb-16 rounded-3xl border border-white/10 bg-slate-950/70 p-7 sm:p-9">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-300">
                <Globe size={16} /> Global Network & Partnerships
              </span>
              <h3 className="mt-1 text-2xl font-black text-white">
                Active Collaborations & Targeted International Horizons
              </h3>
              <p className="mt-1 text-xs text-slate-400">
                Distinguishing established working relationships from targeted institutional ecosystems.
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1.5 text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Active Collaboration
              </span>
              <span className="flex items-center gap-1.5 text-sky-300">
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                Targeted Network
              </span>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {targetRegions.map((region) => {
              const isActive = region.status === "Active Collaboration";
              return (
                <div
                  key={region.country}
                  className={`rounded-2xl border p-4 transition ${
                    isActive
                      ? "border-emerald-400/30 bg-emerald-950/20"
                      : "border-white/10 bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{region.flag}</span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                        isActive
                          ? "bg-emerald-400/20 text-emerald-300"
                          : "bg-sky-400/20 text-sky-300"
                      }`}
                    >
                      {region.status}
                    </span>
                  </div>
                  <h4 className="mt-3 text-base font-black text-white">{region.country}</h4>
                  <p className="mt-1 text-xs text-slate-300">{region.focus}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Open to Opportunities Grid */}
        <div>
          <div className="mb-6 flex items-center gap-2">
            <Handshake className="text-amber-400" size={22} />
            <h3 className="text-2xl font-black uppercase tracking-wider text-white">
              Open to Opportunities
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {opportunityTracks.map((track) => (
              <GlowCard key={track.category} className="flex flex-col justify-between p-7">
                <div>
                  <span className="rounded-full bg-amber-400/15 px-3 py-1 text-xs font-black uppercase tracking-wider text-amber-300">
                    {track.category}
                  </span>
                  <h4 className="mt-4 text-xl font-black text-white">{track.title}</h4>
                  <p className="mt-3 text-xs leading-relaxed text-slate-300">
                    {track.description}
                  </p>

                  <div className="mt-6 border-t border-white/10 pt-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Scope of engagement:
                    </p>
                    <ul className="mt-2 space-y-1.5 text-xs text-slate-200">
                      {track.examples.map((ex) => (
                        <li key={ex} className="flex items-start gap-2">
                          <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-cyan-300" />
                          <span>{ex}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="#contact"
                    className="glow-button w-full text-center text-xs font-bold"
                  >
                    <Mail size={15} />
                    <span className="ml-1.5">{track.ctaText}</span>
                  </a>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
