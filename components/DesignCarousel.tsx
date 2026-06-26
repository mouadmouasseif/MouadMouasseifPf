"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { DesignItem } from "@/src/data/designs";

export default function DesignCarousel({ title, description, items, posterRatio = "aspect-[5/4]" }: { title: string; description: string; items: DesignItem[]; posterRatio?: string }) {
  return (
    <div className="mt-12">
      <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <h3 className="text-2xl font-black text-white">{title}</h3>
          <p className="mt-2 max-w-2xl text-sm text-slate-300">{description}</p>
        </div>
        <span className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-300">Scroll</span>
      </div>
      <div className="hide-scrollbar flex gap-5 overflow-x-auto pb-5">
        {items.map((item, index) => (
          <motion.article
            key={item.image}
            whileHover={{ scale: 1.035 }}
            className="group w-72 shrink-0 overflow-hidden rounded-[24px] border border-cyan-300/15 bg-white/[0.055] shadow-2xl shadow-black/30 backdrop-blur-xl transition hover:border-cyan-300/50 sm:w-80"
          >
            <div className={`relative ${posterRatio} overflow-hidden`}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
                sizes="320px"
                priority={index < 2}
              />
            </div>
            <div className="p-5">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">{item.category}</p>
              <div className="mt-2 flex items-start justify-between gap-3">
                <h4 className="text-lg font-black text-white">{item.title}</h4>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noreferrer" aria-label={`Open ${item.title}`} className="rounded-full border border-cyan-300/20 p-2 text-cyan-200 transition hover:bg-cyan-300/10">
                    <ExternalLink size={16} />
                  </a>
                ) : null}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
