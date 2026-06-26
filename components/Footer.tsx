import Image from "next/image";
import { profile } from "@/src/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-cyan-300/10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div className="flex items-center gap-3">
          <Image src={profile.logo} alt="Mouad Mouasseif logo" width={46} height={46} className="rounded-full object-contain" />
          <div>
            <p className="font-black text-white">Mouad Mouasseif</p>
            <p className="text-sm text-cyan-200">{profile.signature}</p>
          </div>
        </div>
        <p className="text-sm text-slate-400">© 2026 Mouad Mouasseif. All rights reserved.</p>
      </div>
    </footer>
  );
}
