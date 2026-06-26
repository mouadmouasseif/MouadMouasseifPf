"use client";

import Image from "next/image";
import { Activity, BarChart3, Brain, Camera, ClipboardList, FileDown } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import GlowCard from "@/components/GlowCard";
import { masterHoopFeatures, masterHoopImages } from "@/src/data/projects";

const icons = [Camera, Activity, ClipboardList, Brain, BarChart3, FileDown];

export default function MasterHoopFeatured() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Featured Project" title="Master Hoop AI" description="Master Hoop AI is an AI-powered basketball training platform that uses camera analysis, player tracking, shot counting, drills, training history and performance feedback." />
        <GlowCard className="overflow-hidden p-5 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-200">AI Basketball Platform</p>
              <h3 className="mt-4 text-3xl font-black text-white sm:text-5xl">Train smarter. Track faster. Improve every session.</h3>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {masterHoopFeatures.map((feature, index) => {
                  const Icon = icons[index];
                  return (
                    <div key={feature} className="rounded-2xl border border-cyan-300/15 bg-slate-950/35 p-4">
                      <Icon className="mb-3 text-cyan-300" size={22} />
                      <p className="font-bold text-white">{feature}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {masterHoopImages.map((image, index) => (
                <div key={image} className={`relative overflow-hidden rounded-3xl border border-cyan-300/15 ${index === 0 ? "sm:col-span-2 aspect-[16/9]" : "aspect-[4/3]"}`}>
                  <Image src={image} alt="Master Hoop AI basketball analytics screenshot" fill className="object-cover transition duration-700 hover:scale-105" sizes="(min-width: 1024px) 45vw, 100vw" />
                </div>
              ))}
            </div>
          </div>
        </GlowCard>
      </div>
    </section>
  );
}
