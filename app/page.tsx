import Hero from "@/components/Hero";
import PowerCards from "@/components/PowerCards";
import About from "@/components/About";
import MasterHoopFeatured from "@/components/MasterHoopFeatured";
import DigitalProjects from "@/components/DigitalProjects";
import GraphicDesignPortfolio from "@/components/GraphicDesignPortfolio";
import UXUIDesign from "@/components/UXUIDesign";
import EducationalResources from "@/components/EducationalResources";
import PPECrmef from "@/components/PPECrmef";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import { education } from "@/src/data/education";
import { experience } from "@/src/data/experience";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="noise-overlay fixed inset-0 pointer-events-none opacity-35" />
      <Hero />
      <PowerCards />
      <About />
      <MasterHoopFeatured />
      <DigitalProjects />
      <UXUIDesign />
      <GraphicDesignPortfolio />
      <EducationalResources />
      <PPECrmef />
      <Skills />
      <Timeline id="experience" eyebrow="Experience" title="Professional Experience" items={experience} />
      <Timeline id="education" eyebrow="Education" title="Education Timeline" items={education} />
      <Certificates />
      <Contact />
    </main>
  );
}
