"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Sparkles,
  GraduationCap,
  Cpu,
  Trophy,
  ExternalLink,
  Globe,
} from "lucide-react";
import { useState } from "react";
import { profile } from "@/src/data/profile";

const heroPillars = [
  {
    id: "educator",
    title: "Educator",
    badge: "Official Appointment",
    role: "Computer Science Teacher",
    detail: "Collège Zawiyat Sidi Hamza · Académie Drâa-Tafilalet",
    quote: "Empowering youth through computational thinking and bilingual pedagogy.",
    stats: "Bilingual FR/AR · Algorithms & Python",
    icon: GraduationCap,
    color: "from-sky-500/20 via-blue-500/10 to-transparent",
    borderColor: "border-sky-400/40",
    textColor: "text-sky-300",
    buttonText: "Discover Teaching & Pedagogy",
    href: "#teaching",
  },
  {
    id: "innovator",
    title: "Technology Innovator",
    badge: "Full-Stack & AI",
    role: "AI Developer & Cybersecurity",
    detail: "Computer Vision · React 19 · Next.js · ENSAM Rabat",
    quote: "Building real-time intelligent solutions from Morocco to the world.",
    stats: "MediaPipe · MoveNet · Web & Mobile",
    icon: Cpu,
    color: "from-amber-500/20 via-yellow-500/10 to-transparent",
    borderColor: "border-amber-400/40",
    textColor: "text-amber-300",
    buttonText: "Explore Tech & AI Solutions",
    href: "#tech-projects",
  },
  {
    id: "sports-tech",
    title: "Sports Tech Creator",
    badge: "Proprietary Products",
    role: "BasketMotion · SailMotion · RowMotion",
    detail: "AI-Assisted Sports Analytics & Federation Solutions",
    quote: "Transforming athletic performance tracking with browser computer vision.",
    stats: "30+ FPS Edge Vision · 3 Sports Disciplines",
    icon: Trophy,
    color: "from-cyan-500/20 via-teal-500/10 to-transparent",
    borderColor: "border-cyan-400/40",
    textColor: "text-cyan-300",
    buttonText: "View Sports Technology Suite",
    href: "#sports-tech",
  },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);
  const activePillar = heroPillars[activeTab];

  return (
    <section id="home" className="relative min-h-screen px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      {/* Background ambient glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_70%_15%,rgba(14,165,233,0.16),transparent_36rem)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_20%_80%,rgba(245,158,11,0.08),transparent_32rem)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
        {/* Left Column: Personal Brand Identity */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Top Identity Badge */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <div className="relative h-20 w-20 rounded-full border border-cyan-300/40 p-1 shadow-[0_0_40px_rgba(34,211,238,0.25)] sm:h-24 sm:w-24">
              <Image
                src={profile.avatar}
                alt={profile.name}
                fill
                priority
                className="rounded-full object-cover"
                sizes="96px"
              />
            </div>
            <div className="glass-card rounded-2xl px-4 py-2.5">
              <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.25em] text-cyan-200">
                <Sparkles size={14} className="text-amber-400" />
                {profile.signature}
              </p>
              <p className="mt-1 text-xs text-slate-300 font-medium">
                Morocco · International Reach
              </p>
            </div>
          </div>

          {/* Main Title & Headline */}
          <h1 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
            MOUAD <span className="neon-text">MOUASSEIF</span>
          </h1>

          <p className="mt-4 max-w-2xl text-base font-bold text-cyan-100 sm:text-xl">
            {profile.title}
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            I am a Moroccan Computer Science Teacher and technology innovator passionate about
            transforming education through artificial intelligence, digital technologies, and
            practical learning experiences.
          </p>

          <p className="mt-2 max-w-2xl text-xs leading-relaxed text-slate-400 sm:text-sm">
            With a background in Computer Science from ENS Rabat, teacher qualification from CRMEF
            Casablanca-Settat, and experience in software engineering, cybersecurity, and athletic
            coaching, I build digital solutions that connect technology, learning, and innovation.
          </p>

          {/* Location & Status Pill */}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-300">
            <span className="flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1.5 text-cyan-200">
              <MapPin size={14} className="text-cyan-300" />
              Based in Morocco
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1.5 text-amber-200">
              <Globe size={14} className="text-amber-300" />
              Open to International Collaboration
            </span>
          </div>

          {/* 3 Call-to-Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#sports-tech" className="glow-button">
              <span>Explore My Projects</span>
              <ArrowRight className="ml-2" size={17} />
            </a>
            <div className="inline-flex items-center rounded-full border border-cyan-300/30 bg-white/[0.04] p-1 backdrop-blur-md">
              <a
                href="/Mouad-Mouasseif-CV.html"
                target="_blank"
                className="inline-flex items-center rounded-full px-4 py-2 text-xs sm:text-sm font-bold text-cyan-100 transition hover:bg-cyan-300/20"
              >
                <Download size={15} className="mr-1.5" />
                CV (EN)
              </a>
              <span className="text-white/25">|</span>
              <a
                href="/Mouad-Mouasseif-CV-FR.html"
                target="_blank"
                className="inline-flex items-center rounded-full px-4 py-2 text-xs sm:text-sm font-bold text-cyan-200 transition hover:bg-cyan-300/20"
              >
                CV (FR)
              </a>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-amber-300/30 bg-amber-400/10 px-5 py-3 text-sm font-bold text-amber-200 backdrop-blur-md transition hover:bg-amber-400/20 hover:border-amber-300/60"
            >
              <Mail size={17} className="mr-2" />
              Let&apos;s Collaborate
            </a>
          </div>
        </motion.div>

        {/* Right Column: Interactive 3-Pillar Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="relative"
        >
          <div className="glass-card neon-border relative overflow-hidden rounded-[2rem] p-6 sm:p-7">
            {/* Top Selector Tabs */}
            <div className="mb-6 flex rounded-xl border border-white/10 bg-slate-950/60 p-1">
              {heroPillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                const isSelected = activeTab === idx;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActiveTab(idx)}
                    className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-bold transition ${
                      isSelected
                        ? "bg-white/15 text-white shadow-lg"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <Icon size={14} className={isSelected ? pillar.textColor : ""} />
                    <span className="hidden sm:inline">{pillar.title}</span>
                    <span className="sm:hidden">{pillar.title.split(" ")[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Pillar Card Body */}
            <div
              className={`rounded-2xl border ${activePillar.borderColor} bg-gradient-to-br ${activePillar.color} p-6 backdrop-blur-md`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                    {activePillar.badge}
                  </span>
                  <h3 className="mt-3 text-2xl font-black text-white">
                    {activePillar.role}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-slate-300">
                    {activePillar.detail}
                  </p>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white shadow-md">
                  <activePillar.icon size={24} className={activePillar.textColor} />
                </div>
              </div>

              {/* Quote & Value Proposition */}
              <blockquote className="mt-5 rounded-xl border-l-2 border-cyan-300/40 bg-black/30 p-3.5 text-xs italic leading-relaxed text-slate-200">
                &ldquo;{activePillar.quote}&rdquo;
              </blockquote>

              {/* Quick Stats / Highlights */}
              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-semibold text-slate-300">
                <span className="flex items-center gap-1">
                  <Sparkles size={13} className="text-amber-400" />
                  {activePillar.stats}
                </span>
                <a
                  href={activePillar.href}
                  className={`inline-flex items-center font-bold transition hover:underline ${activePillar.textColor}`}
                >
                  Explore <ArrowRight size={13} className="ml-1" />
                </a>
              </div>
            </div>

            {/* Quick 3-Pillar Summary Footnote */}
            <div className="mt-5 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5">
                <p className="text-[11px] font-black text-sky-300">01. Educator</p>
                <p className="text-[10px] text-slate-400">Drâa-Tafilalet / CRMEF</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5">
                <p className="text-[11px] font-black text-amber-300">02. Tech & AI</p>
                <p className="text-[10px] text-slate-400">Full-Stack & Vision</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5">
                <p className="text-[11px] font-black text-cyan-300">03. Sports Tech</p>
                <p className="text-[10px] text-slate-400">Basket & Nautique</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
