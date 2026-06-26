import SectionTitle from "@/components/SectionTitle";
import DesignCarousel from "@/components/DesignCarousel";
import LogoGallery from "@/components/LogoGallery";
import { eventDesigns, logoDesigns, playerDesigns } from "@/src/data/designs";

export default function GraphicDesignPortfolio() {
  return (
    <section id="designs" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Graphic Design Portfolio" title="Player cards, event posters and sport branding." description="A dedicated gallery for basketball player portraits, match day visuals, score designs, club identities, personal branding and logo systems." />
        <DesignCarousel title="Player Design" description="Basketball portraits, player profile cards, posters joueurs and sports edits." items={playerDesigns} />
        <DesignCarousel title="Event Design" description="Next match, match day, man of the match, score posters and championship posters." items={eventDesigns} posterRatio="aspect-[4/5]" />
        <LogoGallery items={logoDesigns} />
      </div>
    </section>
  );
}
