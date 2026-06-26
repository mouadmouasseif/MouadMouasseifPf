"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Download, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { profile } from "@/src/data/profile";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen px-4 pb-16 pt-32 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_65%_20%,rgba(14,165,233,0.18),transparent_32rem)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-7 flex flex-wrap items-center gap-4">
            <div className="relative h-28 w-28 rounded-full border border-cyan-200/40 p-1 shadow-[0_0_60px_rgba(34,211,238,0.35)] sm:h-36 sm:w-36">
              <Image src={profile.avatar} alt={profile.name} fill priority className="rounded-full object-cover" sizes="144px" />
            </div>
            <div className="glass-card rounded-2xl px-5 py-4">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-cyan-200">
                <Sparkles size={15} /> {profile.signature}
              </p>
              <p className="mt-2 text-sm text-slate-300">Branding Mouad Mouasseif</p>
            </div>
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
            MOUAD <span className="neon-text">MOUASSEIF</span>
          </h1>
          <p className="mt-5 max-w-3xl text-base font-semibold text-cyan-100 sm:text-xl">{profile.title}</p>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-lg">{profile.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={profile.cv} download className="glow-button"><Download size={18} /><span className="ml-2">Download CV</span></a>
            <a href="#contact" className="rounded-full border border-cyan-300/30 px-5 py-3 text-sm font-bold text-cyan-100 transition hover:bg-cyan-300/10">Contact Me</a>
            <a href="#projects" className="inline-flex items-center rounded-full border border-fuchsia-300/30 px-5 py-3 text-sm font-bold text-fuchsia-100 transition hover:bg-fuchsia-300/10">View Projects <ArrowRight className="ml-2" size={18} /></a>
          </div>

          <div className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
            <p className="flex gap-3"><Phone className="mt-0.5 text-cyan-300" size={17} /> {profile.phone.join(" / ")}</p>
            <p className="flex gap-3"><Mail className="mt-0.5 text-cyan-300" size={17} /> {profile.email}</p>
            <p className="flex gap-3 sm:col-span-2"><MapPin className="mt-0.5 shrink-0 text-cyan-300" size={17} /> {profile.address}</p>
            <a href={`https://${profile.website}`} className="text-cyan-200 underline decoration-cyan-300/30 underline-offset-4">{profile.website}</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.75, delay: 0.1 }} className="relative">
          <div className="glass-card neon-border relative overflow-hidden rounded-[2rem] p-4">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/12 via-transparent to-fuchsia-500/18" />
            <div className="relative mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.32em] text-cyan-200">PLAYER DESIGN</p>
                <h2 className="mt-2 text-3xl font-black text-white">Sport visual identity</h2>
              </div>
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 p-2">
                <Image src={profile.logo} alt="Mouad Mouasseif logo" width={42} height={42} className="rounded-full object-contain" />
              </span>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-cyan-300/20 bg-slate-950">
              <Image src="/player/17.png" alt="Player design by Mouad Mouasseif" fill className="object-cover transition duration-700 hover:scale-105" sizes="(min-width: 1024px) 45vw, 100vw" />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-black/45 p-4 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">Glow poster</p>
                <p className="text-xl font-black text-white">Basketball Player Card</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
