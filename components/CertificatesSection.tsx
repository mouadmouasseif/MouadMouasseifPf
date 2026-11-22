"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  Award,
  ExternalLink,
  ShieldCheck,
  GraduationCap,
  Cpu,
  Trophy,
  CheckCircle2,
  FileText,
  X,
  Maximize2,
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
  const [previewModal, setPreviewModal] = useState<{
    src: string;
    title: string;
    issuer: string;
  } | null>(null);

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

        {/* Category Filter Tabs with Count Badges */}
        <div className="mb-10 flex flex-wrap gap-2.5">
          {categories.map((cat) => {
            const count =
              cat === "All"
                ? categorizedCertificates.length
                : categorizedCertificates.filter((c) => c.category === cat).length;
            const isSelected = activeCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition duration-300 ${
                  isSelected
                    ? "bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/25"
                    : "glass-card text-slate-300 hover:border-cyan-300/40 hover:text-white"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[10px] font-black ${
                    isSelected ? "bg-slate-950/20 text-slate-950" : "bg-white/10 text-cyan-300"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
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

                  {/* Image Preview Thumbnail */}
                  {cert.image && (
                    <div
                      onClick={() =>
                        setPreviewModal({
                          src: cert.image!,
                          title: cert.title,
                          issuer: cert.issuer,
                        })
                      }
                      className="group/img relative mt-4 aspect-[16/10] w-full cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-slate-950 shadow-md"
                    >
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-cover object-top transition duration-500 group-hover/img:scale-105"
                        sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 backdrop-blur-[2px] transition duration-300 group-hover/img:opacity-100 flex items-center justify-center">
                        <span className="flex items-center gap-1.5 rounded-full bg-cyan-400 px-3 py-1 text-[11px] font-black text-slate-950 shadow-lg shadow-cyan-400/30">
                          <Maximize2 size={12} />
                          Agrandir le Certificat
                        </span>
                      </div>
                    </div>
                  )}

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
                    <button
                      onClick={() =>
                        setPreviewModal({
                          src: cert.image!,
                          title: cert.title,
                          issuer: cert.issuer,
                        })
                      }
                      className="flex items-center gap-1 font-bold text-cyan-300 transition hover:underline"
                    >
                      <span>Aperçu Document</span>
                      <ExternalLink size={13} />
                    </button>
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

      {/* Interactive Modal Lightbox for Full-Resolution Certificate View */}
      <AnimatePresence>
        {previewModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-md"
            onClick={() => setPreviewModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-3xl border border-cyan-400/30 bg-slate-900 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                <div>
                  <h3 className="text-base font-bold text-white sm:text-lg">
                    {previewModal.title}
                  </h3>
                  <p className="text-xs text-cyan-300">{previewModal.issuer}</p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={previewModal.src}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-bold text-slate-200 transition hover:border-cyan-400 hover:text-white"
                  >
                    Ouvrir l'original ↗
                  </a>
                  <button
                    onClick={() => setPreviewModal(null)}
                    className="rounded-full bg-white/10 p-2 text-slate-400 transition hover:bg-white/20 hover:text-white"
                    aria-label="Fermer"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Modal Image */}
              <div className="relative aspect-[4/3] max-h-[70vh] w-full overflow-hidden bg-slate-950 p-2">
                <Image
                  src={previewModal.src}
                  alt={previewModal.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 95vw, 1000px"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
