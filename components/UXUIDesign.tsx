"use client";

import Image from "next/image";
import { ExternalLink, LayoutPanelTop } from "lucide-react";
import { motion } from "motion/react";
import SectionTitle from "@/components/SectionTitle";
import { uxUiDesigns } from "@/src/data/designs";

export default function UXUIDesign() {
  return (
    <section id="ux-ui-design" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="UX/UI Design"
          title="My UX/UI Figma Design"
          description="All web and mobile interface designs from the images folder, separated from digital projects and graphic posters."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {uxUiDesigns.map((design, index) => (
            <motion.article
              key={design.image}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="glass-card neon-border group overflow-hidden rounded-3xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                <Image
                  src={design.image}
                  alt={design.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  priority={index < 2}
                />
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-cyan-300/30 bg-black/55 px-3 py-1 text-xs font-bold text-cyan-100 backdrop-blur">
                  <LayoutPanelTop size={14} />
                  Figma
                </div>
              </div>

              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">{design.category}</p>
                <div className="mt-2 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-black text-white">{design.title}</h3>
                    {design.description ? <p className="mt-3 text-sm leading-6 text-slate-300">{design.description}</p> : null}
                  </div>
                  {design.link ? (
                    <a
                      href={design.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${design.title}`}
                      className="rounded-full border border-cyan-300/20 p-2 text-cyan-200 transition hover:bg-cyan-300/10"
                    >
                      <ExternalLink size={17} />
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
