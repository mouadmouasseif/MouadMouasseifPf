import Hero from "@/components/Hero";
import PowerCards from "@/components/PowerCards";
import About from "@/components/About";
import TeachingEducation from "@/components/TeachingEducation";
import SportsTechSuite from "@/components/SportsTechSuite";
import DigitalProjects from "@/components/DigitalProjects";
import ResearchSection from "@/components/ResearchSection";
import CertificatesSection from "@/components/CertificatesSection";
import Timeline from "@/components/Timeline";
import InternationalHub from "@/components/InternationalHub";
import Contact from "@/components/Contact";
import { education } from "@/src/data/education";
import { experience } from "@/src/data/experience";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Background subtle noise and ambient grid */}
      <div className="noise-overlay fixed inset-0 pointer-events-none opacity-30" />

      {/* 00. Hero & Brand Identity */}
      <Hero />

      {/* Highlights Marquee Bar */}
      <PowerCards />

      {/* 01. About Me & The Three Pillars */}
      <About />

      {/* 02. Teaching & Education (Centrale: Zawiyat Sidi Hamza, Supports FR/AR, Innovation) */}
      <TeachingEducation />

      {/* 04. Sports Technology (BasketMotion AI, SailMotion AI, RowMotion-RACE) */}
      <SportsTechSuite />

      {/* 03. Technology & AI Projects (Full-Stack Applications, Client & Desktop Systems) */}
      <DigitalProjects />

      {/* 06. Research & Publications (CRMEF Empirical Study on 50 Teachers + Educational Insights) */}
      <ResearchSection />

      {/* 05. Verified Certifications (UNESCO, Cisco, IBM, Microsoft, CRMEF, ENSAM) */}
      <CertificatesSection />

      {/* Career & Education Timelines */}
      <Timeline
        id="experience"
        eyebrow="Milestones"
        title="Professional Experience"
        items={experience}
      />
      <Timeline
        id="education"
        eyebrow="Academic Path"
        title="Education & Qualifications"
        items={education}
      />

      {/* 07. International Dimensions & Opportunities (Global Network, Open to Opportunities) */}
      <InternationalHub />

      {/* 08. Contact & Collaboration (Secure Inquiry Form, Professional Channels) */}
      <Contact />
    </main>
  );
}
