"use client";

import { useState } from "react";
import {
  Send,
  Mail,
  MapPin,
  Globe,
  Sparkles,
  CheckCircle2,
  Linkedin,
  Github,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import GlowCard from "@/components/GlowCard";
import { profile } from "@/src/data/profile";

const inquiryTypes = [
  "International Teacher Exchange / Education",
  "AI & EdTech Technology Collaboration",
  "Sports Tech & Computer Vision Partnership",
  "Workshop, Conference or Speaking Inquiry",
  "General Collaboration",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: inquiryTypes[0],
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending / open mailto fallback
    const mailtoLink = `mailto:${profile.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject} - ${formData.name}`
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`;
    window.open(mailtoLink, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative px-4 py-24 sm:px-6 lg:px-8">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_38rem)]" />

      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="08 · Contact & Collaboration"
          title="Let's Build Something Useful, Intelligent & Memorable."
          description="Whether you represent an educational institution, an international organization, an EdTech startup, or an athletic federation, I would be delighted to connect."
        />

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left Column: Professional Contact Cards */}
          <GlowCard className="flex flex-col justify-between p-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-cyan-300">
                <Sparkles size={16} className="text-amber-400" />
                <span>Professional Channels</span>
              </div>

              <h3 className="mt-4 text-3xl font-black text-white">{profile.name}</h3>
              <p className="mt-1 text-sm font-semibold text-cyan-200">{profile.title}</p>

              <p className="mt-4 text-xs leading-relaxed text-slate-300">
                Open to discussions regarding teacher training exchanges, digital pedagogy
                curricula, AI & sports computer vision applications, and international conferences.
              </p>

              <div className="mt-8 space-y-4 text-xs text-slate-300">
                <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3">
                  <Mail className="text-cyan-300 shrink-0" size={17} />
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400">Direct Email</p>
                    <a
                      href={`mailto:${profile.email}`}
                      className="font-bold text-white transition hover:text-cyan-200"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3">
                  <MapPin className="text-amber-300 shrink-0" size={17} />
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400">Based In</p>
                    <p className="font-bold text-white">{profile.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3">
                  <Globe className="text-sky-300 shrink-0" size={17} />
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400">Collaboration Scope</p>
                    <p className="font-bold text-white">National (Morocco) & International Remote</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                Connect via professional networks:
              </p>
              <div className="flex gap-3">
                {profile.socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="rounded-full border border-cyan-300/20 bg-cyan-400/5 p-3 text-cyan-200 transition hover:bg-cyan-400/20 hover:border-cyan-300/50 hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </GlowCard>

          {/* Right Column: Secure Inquiries Form */}
          <GlowCard className="p-8">
            <h4 className="text-lg font-black text-white">Send a Direct Collaboration Inquiry</h4>
            <p className="mt-1 text-xs text-slate-400">
              Select your inquiry topic and provide details. I typically respond within 24–48 hours.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-2xl border border-emerald-400/30 bg-emerald-950/30 p-6 text-center">
                <CheckCircle2 size={36} className="mx-auto text-emerald-400" />
                <h5 className="mt-3 text-base font-black text-white">Message Prepared!</h5>
                <p className="mt-1 text-xs text-slate-300">
                  Your mail client has been opened with the inquiry details. You can also reach me
                  directly at{" "}
                  <span className="font-bold text-cyan-200">{profile.email}</span>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-bold text-cyan-300 underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-xs text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. s.jenkins@university.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-xs text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                    Collaboration Focus / Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-xs text-white outline-none transition focus:border-cyan-300/50"
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type} value={type} className="bg-slate-900 text-white">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your organization, proposal, or project details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-xs text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50"
                  />
                </div>

                <button type="submit" className="glow-button w-fit mt-2">
                  <Send size={16} />
                  <span className="ml-2">Submit Collaboration Inquiry</span>
                </button>
              </form>
            )}
          </GlowCard>
        </div>
      </div>
    </section>
  );
}
