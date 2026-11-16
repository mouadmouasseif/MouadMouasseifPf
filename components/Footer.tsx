import Image from "next/image";
import Link from "next/link";
import { Sparkles, Globe, Heart } from "lucide-react";
import { profile } from "@/src/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-cyan-300/10 bg-slate-950/80 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          {/* Brand Info */}
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-cyan-300/30 bg-cyan-950/50 p-1">
              <Image
                src={profile.logo}
                alt="Mouad Mouasseif logo"
                width={44}
                height={44}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-base font-black text-white">
                Mouad Mouasseif
              </p>
              <p className="flex items-center gap-1.5 text-xs font-semibold text-cyan-200">
                <Sparkles size={12} className="text-amber-400" />
                {profile.title}
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap justify-center gap-5 text-xs font-semibold text-slate-300">
            <Link href="/#about" className="hover:text-cyan-200 transition">About</Link>
            <Link href="/#teaching" className="hover:text-cyan-200 transition">Teaching</Link>
            <Link href="/#sports-tech" className="hover:text-cyan-200 transition">Sports Tech</Link>
            <Link href="/#tech-projects" className="hover:text-cyan-200 transition">Projects</Link>
            <Link href="/#research" className="hover:text-cyan-200 transition">Research</Link>
            <Link href="/#certifications" className="hover:text-cyan-200 transition">Certifications</Link>
            <Link href="/#international" className="hover:text-cyan-200 transition">International</Link>
            <Link href="/#contact" className="hover:text-cyan-200 transition">Contact</Link>
          </div>

          {/* Copyright & International Status */}
          <div className="text-xs text-slate-400 md:text-right">
            <p className="flex items-center justify-center md:justify-end gap-1.5 text-slate-300 font-semibold">
              <Globe size={13} className="text-cyan-300" /> Based in Morocco · International Reach
            </p>
            <p className="mt-1">© 2026 Mouad Mouasseif. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
