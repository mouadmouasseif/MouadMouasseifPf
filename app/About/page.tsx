import About from "@/components/About";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import { education } from "@/src/data/education";
import { experience } from "@/src/data/experience";

export default function AboutPage() {
  return (
    <main className="pt-24">
      <About />
      <Skills />
      <Timeline id="about-experience" eyebrow="Experience" title="Professional Experience" items={experience} />
      <Timeline id="about-education" eyebrow="Education" title="Education Timeline" items={education} />
    </main>
  );
}
