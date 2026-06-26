"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { DesignItem } from "@/src/data/designs";

export default function LogoGallery({ items }: { items: DesignItem[] }) {
  return (
    <div className="mt-12">
      <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <h3 className="text-2xl font-black text-white">Team & Logo Design</h3>
          <p className="mt-2 max-w-2xl text-sm text-slate-300">
            Team logos, club marks, sport branding, created logos and personal Mouad Mouasseif identity.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 sm:justify-start">
        {items.map((item) => (
          <motion.article key={item.image} whileHover={{ y: -4, rotate: 2 }} className="flex w-28 flex-col items-center gap-3 sm:w-32">
            <div className="logo-card h-28 w-28 sm:h-32 sm:w-32">
              <Image src={item.image} alt={item.title} width={90} height={90} className="max-h-[90px] max-w-[90px]" />
            </div>
            <p className="line-clamp-2 text-center text-xs font-bold text-slate-200">{item.title}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
