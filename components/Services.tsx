"use client";

import { Rocket } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import GlowCard from "@/components/GlowCard";
import { services } from "@/src/data/services";

export default function Services() {
  return (
    <section id="services" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Services & Solutions" title="From idea to digital product." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <GlowCard key={service} className="p-5">
              <Rocket className="mb-4 text-fuchsia-300" size={22} />
              <h3 className="text-lg font-black text-white">{service}</h3>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
