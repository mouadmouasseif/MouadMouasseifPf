"use client";

import { Mail, MessageCircle, Send, Sparkles } from "lucide-react";
import GlowCard from "@/components/GlowCard";
import { profile } from "@/src/data/profile";

const subjects = [
  "Web Development Service",
  "Private Training",
  "School / CRMEF Support",
  "UX/UI Design",
  "Cybersecurity Awareness",
  "Office & Productivity",
];

export default function TrainingRequest() {
  return (
    <section className="mx-auto mt-8 max-w-7xl">
      <GlowCard className="p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.28em] text-cyan-300">
              <Sparkles size={15} /> Service & training request
            </p>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">Demander un service ou une formation</h2>
            <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
              Besoin d’un site web, d’une application, d’une formation privée, d’un support pédagogique ou d’un accompagnement en informatique ? Envoyez-moi votre demande et je vous répondrai avec une proposition adaptée.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {subjects.map((subject) => (
                <span key={subject} className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-xs font-bold text-cyan-100">
                  {subject}
                </span>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}?subject=Service%20or%20training%20request`} className="glow-button">
                <Mail size={18} />
                <span className="ml-2">Send Email</span>
              </a>
              <a href="https://wa.me/212689642894" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full border border-cyan-300/30 px-5 py-3 text-sm font-bold text-cyan-100 transition hover:bg-cyan-300/10">
                <MessageCircle size={18} />
                <span className="ml-2">WhatsApp</span>
              </a>
            </div>
          </div>

          <form className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/50" placeholder="Name" />
              <input className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/50" placeholder="Email or phone" />
            </div>
            <select className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/50" defaultValue="">
              <option value="" disabled>
                Choose request type
              </option>
              {subjects.map((subject) => (
                <option key={subject}>{subject}</option>
              ))}
            </select>
            <textarea className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/50" placeholder="Describe what you need" rows={6} />
            <button type="button" className="glow-button w-fit">
              <Send size={18} />
              <span className="ml-2">Send Request</span>
            </button>
          </form>
        </div>
      </GlowCard>
    </section>
  );
}
