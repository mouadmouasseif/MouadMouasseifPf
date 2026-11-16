import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle2,
  Sparkles,
  ShieldAlert,
  Lightbulb,
  Cpu,
  Layers,
  Activity,
  Trophy,
} from "lucide-react";
import { sportsTechProjects } from "@/src/data/sportsTech";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return sportsTechProjects.map((p) => ({
    slug: p.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = sportsTechProjects.find((p) => p.id === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Case Study by Mouad Mouasseif`,
    description: project.description,
    openGraph: {
      title: `${project.title} - ${project.tagline}`,
      description: project.description,
      images: [{ url: project.images.hero }],
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = sportsTechProjects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_15%,rgba(14,165,233,0.15),transparent_35rem)]" />

      <div className="mx-auto max-w-5xl">
        {/* Back Link */}
        <Link
          href="/#sports-tech"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-slate-300 transition hover:bg-white/10 hover:text-white mb-8"
        >
          <ArrowLeft size={14} />
          <span>Back to Sports Technology Suite</span>
        </Link>

        {/* Case Study Header */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-amber-400/20 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-amber-300">
              {project.badge}
            </span>
            <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-slate-300">
              {project.sport}
            </span>
            <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
              {project.category}
            </span>
          </div>

          <h1 className="mt-6 text-3xl font-black text-white sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="mt-3 text-lg font-bold text-cyan-200 sm:text-2xl">
            {project.tagline}
          </p>

          <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
            {project.description}
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="glow-button"
            >
              <ExternalLink size={18} />
              <span className="ml-2">Launch Live Application</span>
            </a>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                <Github size={18} />
                <span className="ml-2">Source Code on GitHub</span>
              </a>
            )}
          </div>
        </div>

        {/* Main Hero Visual Showcase */}
        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-3xl border border-white/15 bg-slate-950 shadow-2xl">
          <Image
            src={project.images.hero}
            alt={project.title}
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 1000px, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-semibold text-white">
            <span className="flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 backdrop-blur-md">
              <Activity size={14} className="text-amber-400" />
              Production Interface Overview
            </span>
          </div>
        </div>

        {/* Problem vs Solution Section */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="glass-card rounded-3xl border border-red-400/20 bg-red-950/15 p-8">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-red-300">
              <ShieldAlert size={18} />
              <span>The Industry Problem</span>
            </div>
            <h3 className="mt-3 text-xl font-black text-white">
              Why this solution was required
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              {project.problem}
            </p>
          </div>

          <div className="glass-card rounded-3xl border border-emerald-400/20 bg-emerald-950/15 p-8">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-300">
              <Lightbulb size={18} />
              <span>The Engineering Solution</span>
            </div>
            <h3 className="mt-3 text-xl font-black text-white">
              How the technology resolves it
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Operational Features */}
        <div className="glass-card mt-12 rounded-3xl border border-white/10 p-8 sm:p-10">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-cyan-300">
            <Layers size={18} />
            <span>Operational Features & Capabilities</span>
          </div>
          <h3 className="mt-2 text-2xl font-black text-white">
            Functional Architecture
          </h3>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-sm text-slate-200"
              >
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-cyan-300" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Measured Impact & Results */}
        {project.metrics && (
          <div className="glass-card mt-12 rounded-3xl border border-amber-400/20 bg-amber-500/5 p-8 sm:p-10">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-300">
              <Sparkles size={18} />
              <span>Demonstrated Performance Metrics</span>
            </div>
            <h3 className="mt-2 text-2xl font-black text-white">
              Measured Results & Validation
            </h3>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {project.metrics.map((metric) => (
                <div
                  key={metric}
                  className="rounded-2xl border border-amber-400/20 bg-black/40 p-5"
                >
                  <p className="text-sm font-bold text-white">{metric}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack & Creator Role */}
        <div className="glass-card mt-12 rounded-3xl border border-white/10 p-8 sm:p-10 grid gap-8 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-white">
              <Cpu size={18} className="text-amber-300" />
              <span>Technology Stack</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-bold text-cyan-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-white">
              <Trophy size={18} className="text-cyan-300" />
              <span>Author & Development Role</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              {project.role}
            </p>
          </div>
        </div>

        {/* Bottom CTA to collaborate */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-black text-white">
            Interested in deploying or collaborating on {project.title}?
          </h3>
          <p className="mt-2 text-sm text-slate-400">
            Available for pilot testing with clubs, academies, and athletic federations.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/#contact" className="glow-button">
              Get in Touch for Collaboration
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
