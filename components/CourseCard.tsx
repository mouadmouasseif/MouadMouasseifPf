"use client";

import Image from "next/image";
import { ArrowRight, BookOpen, Code2, Shield, Sparkles } from "lucide-react";
import { useState } from "react";
import { Course } from "@/src/data/courses";

const iconByCategory: Record<string, typeof BookOpen> = {
  Programming: Code2,
  "Web Development": Code2,
  "Data & AI": Sparkles,
  Cybersecurity: Shield,
};

export default function CourseCard({ course }: { course: Course }) {
  const [imageError, setImageError] = useState(false);
  const Icon = iconByCategory[course.category] || BookOpen;
  const showImage = Boolean(course.image) && !imageError;

  return (
    <article className="glass-card neon-border group flex h-full flex-col overflow-hidden rounded-3xl transition hover:-translate-y-1">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
        {showImage ? (
          <Image
            src={course.image}
            alt={course.title}
            fill
            onError={() => setImageError(true)}
            className="object-cover transition duration-700 group-hover:scale-105"
            sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_50%_30%,rgba(14,165,233,0.22),transparent_13rem)]">
            <div className="text-center">
              <Icon className="mx-auto text-cyan-200" size={54} />
              <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-cyan-300">{course.category}</p>
            </div>
          </div>
        )}
        <span className="absolute left-4 top-4 rounded-full bg-emerald-400 px-3 py-1 text-xs font-black text-slate-950">FREE</span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-100">{course.level}</span>
          <span className="rounded-full bg-fuchsia-300/10 px-3 py-1 text-xs font-bold text-fuchsia-100">{course.language}</span>
        </div>
        <h3 className="mt-4 text-xl font-black text-white">{course.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{course.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {course.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-slate-200">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
          <span className="text-sm font-black text-emerald-300">{course.price}</span>
          <button className="inline-flex items-center gap-2 text-sm font-bold text-cyan-200 transition hover:text-white">
            Start Learning <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </article>
  );
}
