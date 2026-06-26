"use client";

import Image from "next/image";
import { FileText } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import GlowCard from "@/components/GlowCard";
import { certificates } from "@/src/data/certificates";

export default function Certificates() {
  return (
    <section id="certificates" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Certificates" title="Certificates & attestations." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((certificate) => {
            const card = (
              <GlowCard className="overflow-hidden">
                <div className="relative aspect-[4/3] bg-slate-950">
                  {certificate.image ? (
                    <Image src={certificate.image} alt={certificate.title} fill className="object-cover" sizes="(min-width: 1024px) 25vw, 50vw" />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_50%_40%,rgba(34,211,238,0.16),transparent_14rem)]">
                      <div className="text-center">
                        <FileText className="mx-auto text-cyan-200" size={46} />
                        <p className="mt-3 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">PDF Document</p>
                      </div>
                    </div>
                  )}
                </div>
                <h3 className="p-4 text-sm font-black text-white">{certificate.title}</h3>
              </GlowCard>
            );

            return certificate.href ? (
              <a key={certificate.title} href={certificate.href} target="_blank" rel="noreferrer" className="block">
                {card}
              </a>
            ) : (
              <div key={certificate.title}>{card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
