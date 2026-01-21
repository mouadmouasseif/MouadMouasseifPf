// components/Footer.tsx
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full py-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo et nom de la société */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo_v1.png"
            alt="Mouad Mouasseif"
            width={100}
            height={100}
            className="rounded-md"
          />
          <h1 className="text-xl font-medium text-white">Mouad Mouasseif</h1>
        </div>

        {/* Liens légaux */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
          <a href="/privacy-policy" className="hover:text-white">Politique de confidentialité</a>
          <a href="/terms-of-service" className="hover:text-white">Conditions d'utilisation</a>
        </div>

        {/* Développement */}
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span>Développé par</span>
          <a
            href="https://www.linkedin.com/company/mm-servicese/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400"
          >
            <Image
              src="/logo_v1.png" // à placer dans public/images/
              alt="Made For Web"
              width={24}
              height={24}
              className="rounded"
            />
            <span className="font-semibold">Made For Web</span>
          </a>
        </div>
      </div>

      <p className="text-center text-xs text-gray-500 mt-6">
        &copy;2025 Mouad Mouasseif & <a href="https://www.linkedin.com/company/made-forweb/?viewAsMember=true">Made for Web</a>. Tous droits réservés.
      </p>
    </footer>
  );
}
