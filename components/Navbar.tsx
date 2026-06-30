"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { profile } from "@/src/data/profile";

const links = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#digital-projects" },
  { label: "Courses", href: "/courses" },
  { label: "UX/UI", href: "/#ux-ui-design" },
  { label: "Design", href: "/#designs" },
  { label: "Resources", href: "/#educational-resources" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-3">
      <div className="glass-card neon-border mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3">
        <Link href="/#home" className="flex items-center gap-3">
          <Image src={profile.logo} alt="Mouad Mouasseif logo" width={44} height={44} className="object-contain" priority />
          <span className="hidden sm:block">
            <span className="block text-sm font-black text-white">Mouad Mouasseif</span>
            <span className="text-[11px] text-slate-400">Developer • Teacher • Coach • Designer</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-4 xl:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-xs font-semibold text-slate-300 transition hover:text-cyan-200">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          {profile.socials.slice(0, 3).map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200">
              <Icon size={16} />
            </a>
          ))}
          <a href={profile.cv} download className="glow-button px-4 py-2">
            <Download size={16} />
            <span className="ml-2">Download CV</span>
          </a>
        </div>

        <button className="rounded-full border border-cyan-300/30 p-2 text-cyan-100 xl:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open ? (
        <div className="glass-card mx-auto mt-3 grid max-w-7xl grid-cols-2 gap-2 rounded-2xl p-4 sm:grid-cols-3 xl:hidden">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-xl border border-white/10 px-3 py-2 text-sm text-slate-200">
              {link.label}
            </Link>
          ))}
          <a href={profile.cv} download className="col-span-2 rounded-xl bg-cyan-300 px-3 py-2 text-center text-sm font-bold text-slate-950 sm:col-span-1">
            Download CV
          </a>
        </div>
      ) : null}
    </header>
  );
}
