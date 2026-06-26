"use client";

import { Send } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import GlowCard from "@/components/GlowCard";
import { profile } from "@/src/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Contact" title="Let us build something useful and memorable." />
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <GlowCard className="p-6">
            <h3 className="text-2xl font-black text-white">Mouad Mouasseif</h3>
            <p className="mt-3 text-slate-300">{profile.description}</p>
            <div className="mt-6 space-y-3 text-sm text-slate-300">
              <p>{profile.phone.join(" / ")}</p>
              <p>{profile.email}</p>
              <p>{profile.address}</p>
            </div>
            <div className="mt-6 flex gap-3">
              {profile.socials.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="rounded-full border border-cyan-300/20 p-3 text-cyan-200 transition hover:bg-cyan-300/10">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </GlowCard>
          <GlowCard className="p-6">
            <form className="grid gap-4">
              {["Name", "Email", "Subject"].map((field) => (
                <input key={field} type={field === "Email" ? "email" : "text"} placeholder={field} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50" />
              ))}
              <textarea placeholder="Message" rows={6} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50" />
              <button type="button" className="glow-button w-fit">
                <Send size={18} />
                <span className="ml-2">Send Message</span>
              </button>
            </form>
          </GlowCard>
        </div>
      </div>
    </section>
  );
}
