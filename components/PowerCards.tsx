"use client";

import { motion } from "motion/react";
import { Zap } from "lucide-react";
import GlowCard, { staggerContainer } from "@/components/GlowCard";
import { powerCards } from "@/src/data/profile";

export default function PowerCards() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {powerCards.map((card) => (
          <GlowCard key={card} className="p-5">
            <Zap className="mb-4 text-cyan-300" size={22} />
            <h3 className="text-lg font-black text-white">{card}</h3>
          </GlowCard>
        ))}
      </motion.div>
    </section>
  );
}
