"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  Award,
  ExternalLink,
  ShieldCheck,
  GraduationCap,
  Cpu,
  Trophy,
  CheckCircle2,
  FileText,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import GlowCard from "@/components/GlowCard";
import {
  categorizedCertificates,
  CertificateCategory,
  CertificateItem,
} from "@/src/data/certificates";

const categories: ("All" | CertificateCategory)[] = [
  "All",
  "Professional & International",
  "Education & Teaching",
  "Technology & Cybersecurity",
  "Sports & Coaching",
];

export default function CertificatesSection() {
  const [activeCategory, setActiveCategory] = useState<"All" | CertificateCategory>("All");

  const filteredCerts =
    activeCategory === "All"
      ? categorizedCertificates
      : categorizedCertificates.filter((c) => c.category === activeCategory);

  return (
    <section id="certifications" className="relative px-4 py-24 sm:px-6 lg:px-8">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_20%,rgba(14,165,233,0.1),transparent_35rem)]" />

      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="05 · Verified Certifications"
          title="Verified Credentials & Lifelong Professional Learning."
          description="A categorized directory of verified credentials, accredited badges, academic diplomas, and coaching licenses from international and national bodies."
        />

        {/* Category Filter Tabs */}
        <div className="mb-10 flex flex-wrap gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 text-xs font-bold transition duration-300 ${
                activeCategory === cat
                  ? "bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/25"
                  : "glass-card text-slate-300 hover:border-cyan-300/40 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCerts.map((cert) => (
            <motion.div
              key={cert.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <GlowCard className="flex h-full flex-col justify-between p-6">
                <div>
                  {/* Top Type and Category Badge */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1 font-bold text-amber-300">
                      <ShieldCheck size={14} />
                      {cert.type}
                    </span>
                    <span className="text-slate-400">{cert.year}</span>
                  </div>

                  {/* Certificate Title */}
                  <h4 className="mt-4 text-lg font-black leading-snug text-white">
                    {cert.title}
                  </h4>

                  {/* Issuer */}
                  <p className="mt-1 text-xs font-semibold text-cyan-200">
                    {cert.issuer}
                  </p>

                  {/* Competencies */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5 text-[10px] font-medium text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Actions & Image Preview */}
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs">
                  <span className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-semibold text-slate-300">
                    {cert.category}
                  </span>

                  {cert.image ? (
                    <a
                      href={cert.image}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 font-bold text-cyan-300 transition hover:underline"
                    >
                      <span>Aperçu Document</span>
                      <ExternalLink size={13} />
                    </a>
                  ) : cert.href ? (
                    <a
                      href={cert.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 font-bold text-cyan-300 transition hover:underline"
                    >
                      <span>Voir Diplôme</span>
                      <FileText size={13} />
                    </a>
                  ) : (
                    <span className="text-[11px] text-slate-400">Certifié</span>
                  )}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
