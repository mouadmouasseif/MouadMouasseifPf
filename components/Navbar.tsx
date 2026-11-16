"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";
import { profile } from "@/src/data/profile";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Teaching", href: "/#teaching" },
  { label: "Sports Tech", href: "/#sports-tech" },
  { label: "Tech & AI", href: "/#tech-projects" },
  { label: "Research", href: "/#research" },
  { label: "Certifications", href: "/#certifications" },
  { label: "International", href: "/#international" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-3">
      <div className="glass-card neon-border mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3">
        <Link href="/#home" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-cyan-300/40 bg-cyan-950/40 p-1">
            <Image
              src={profile.logo}
              alt="Mouad Mouasseif logo"
              width={36}
              height={36}
              className="object-contain"
              priority
            />
          </div>
          <div>
            <span className="block text-sm font-black tracking-tight text-white">
              Mouad Mouasseif
            </span>
            <span className="flex items-center gap-1.5 text-[11px] font-medium text-cyan-200">
              <Sparkles size={11} className="text-amber-400" /> Educator · AI Developer · Innovator
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-4 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-semibold text-slate-300 transition hover:text-cyan-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Socials & Download CV */}
        <div className="hidden items-center gap-2 lg:flex">
          {profile.socials.slice(0, 3).map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200"
            >
              <Icon size={16} />
            </a>
          ))}
          <div className="flex items-center rounded-full border border-cyan-300/40 bg-cyan-400 p-0.5 shadow-md shadow-cyan-500/20">
            <a
              href="/Mouad-Mouasseif-CV.html"
              target="_blank"
              className="flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-black text-slate-950 transition hover:bg-white"
              title="Curriculum Vitae en Anglais"
            >
              <Download size={13} />
              <span>CV EN</span>
            </a>
            <span className="text-slate-800 text-xs font-black">|</span>
            <a
              href="/Mouad-Mouasseif-CV-FR.html"
              target="_blank"
              className="flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-black text-slate-950 transition hover:bg-white"
              title="Curriculum Vitae en Français"
            >
              <span>FR</span>
            </a>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="rounded-full border border-cyan-300/30 p-2 text-cyan-100 xl:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile navigation drawer */}
      {open && (
        <div className="glass-card mx-auto mt-2 grid max-w-7xl grid-cols-2 gap-2 rounded-2xl p-4 sm:grid-cols-4 xl:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2.5 text-center text-xs font-semibold text-slate-200 transition hover:bg-cyan-300/10 hover:text-cyan-200"
            >
              {link.label}
            </Link>
          ))}
          <div className="col-span-2 flex items-center justify-center gap-2 pt-2 sm:col-span-4">
            <a
              href="/Mouad-Mouasseif-CV.html"
              target="_blank"
              className="glow-button flex-1 py-2 text-xs font-bold text-center"
            >
              <Download size={14} className="mr-1 inline" /> CV (EN)
            </a>
            <a
              href="/Mouad-Mouasseif-CV-FR.html"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full border border-cyan-300/40 bg-white/[0.08] px-4 py-2 text-xs font-bold text-cyan-200 transition hover:bg-white/15 flex-1 text-center"
            >
              <Download size={14} className="mr-1 inline" /> CV (FR)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
