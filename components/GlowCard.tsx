"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

type GlowCardProps = {
  children: ReactNode;
  className?: string;
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function GlowCard({ children, className = "" }: GlowCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ y: -6, scale: 1.015 }}
      className={`glass-card neon-border rounded-3xl transition ${className}`}
    >
      {children}
    </motion.div>
  );
}
