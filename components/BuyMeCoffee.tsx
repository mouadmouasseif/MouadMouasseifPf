import Image from "next/image";
import { Coffee } from "lucide-react";
import { profile } from "@/src/data/profile";

export default function BuyMeCoffee() {
  return (
    <div className="glass-card neon-border relative overflow-hidden rounded-3xl p-6">
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="relative">
        <div className="mb-5 flex items-center gap-3">
          <Image src={profile.logo} alt="Mouad Mouasseif logo" width={42} height={42} className="object-contain" />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">Support</p>
            <h3 className="text-2xl font-black text-white">Support Free Education</h3>
          </div>
        </div>
        <p className="text-sm leading-6 text-slate-300">If you find my content helpful, consider supporting my work.</p>
        <a
          href="https://www.buymeacoffee.com/mouadmouasseif"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center rounded-full border border-cyan-300/30 bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-5 py-3 text-sm font-black text-white shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5"
        >
          <Coffee className="mr-2" size={18} /> Buy me a Coffee
        </a>
      </div>
    </div>
  );
}
