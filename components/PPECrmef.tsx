"use client";

import Image from "next/image";
import { ExternalLink, FileText, Presentation, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import GlowCard from "@/components/GlowCard";

const badges = ["CRMEF Casablanca-Settat", "Teacher Training", "Pedagogy", "Educational Innovation", "Soutenance"];
const pptxViewerUrl =
  "https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fmouadmouasseif.vercel.app%2Fdocuments%2Fppe-soutenance-academique.pptx";

export default function PPECrmef() {
  const [hasPdf, setHasPdf] = useState(false);

  useEffect(() => {
    fetch("/documents/ppe-soutenance-academique.pdf", { method: "HEAD" })
      .then((response) => setHasPdf(response.ok))
      .catch(() => setHasPdf(false));
  }, []);

  return (
    <section id="ppe-crmef" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="PPE & CRMEF" title="PPE & CRMEF Soutenance" />
        <GlowCard className="overflow-hidden p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-cyan-300/15 bg-slate-950">
              <Image src="/projects/PEE.png" alt="Page de garde PPE CRMEF Casablanca-Settat" fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" />
            </div>
            <div>
              <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.28em] text-cyan-300">
                <Sparkles size={15} /> Important pedagogical project
              </p>
              <h3 className="mt-4 text-3xl font-black text-white sm:text-5xl">Projet personnel encadré au CRMEF Casablanca-Settat</h3>
              <p className="mt-5 text-base leading-8 text-slate-300">
                Sujet : intégration du numérique dans l’enseignement, innovation pédagogique, ressources éducatives et réflexion professionnelle. Les documents sont proposés en mode consultation pour protéger le projet.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {badges.map((badge) => (
                  <span key={badge} className="rounded-full bg-cyan-300/10 px-4 py-2 text-xs font-bold text-cyan-100">
                    {badge}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="/projects/PEE.png" target="_blank" rel="noreferrer" className="glow-button">
                  <ExternalLink size={18} />
                  <span className="ml-2">Voir la page de garde</span>
                </a>
                <a href={pptxViewerUrl} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full border border-cyan-300/30 px-5 py-3 text-sm font-bold text-cyan-100 transition hover:bg-cyan-300/10">
                  <Presentation size={18} />
                  <span className="ml-2">Visualiser PPTX</span>
                </a>
                {hasPdf ? (
                  <a href="/documents/ppe-soutenance-academique.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full border border-fuchsia-300/30 px-5 py-3 text-sm font-bold text-fuchsia-100 transition hover:bg-fuchsia-300/10">
                    <FileText size={18} />
                    <span className="ml-2">Visualiser PDF</span>
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </GlowCard>
      </div>
    </section>
  );
}
