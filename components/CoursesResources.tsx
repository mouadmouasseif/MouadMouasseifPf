"use client";

import Image from "next/image";
import { ArrowRight, BookOpen, GraduationCap, Star, Users } from "lucide-react";
import { useMemo, useState } from "react";
import BuyMeCoffee from "@/components/BuyMeCoffee";
import CourseCard from "@/components/CourseCard";
import CourseSidebar from "@/components/CourseSidebar";
import TrainingRequest from "@/components/TrainingRequest";
import { courses } from "@/src/data/courses";
import { profile } from "@/src/data/profile";

export default function CoursesResources() {
  const [activeCategory, setActiveCategory] = useState("All Courses");
  const [activeLevel, setActiveLevel] = useState("All");
  const [activeLanguage, setActiveLanguage] = useState("All");

  const filteredCourses = useMemo(
    () =>
      courses.filter((course) => {
        const categoryMatch = activeCategory === "All Courses" || activeCategory === "Free Courses" || course.category === activeCategory;
        const levelMatch = activeLevel === "All" || course.level === activeLevel;
        const languageMatch = activeLanguage === "All" || course.language === activeLanguage;
        return categoryMatch && levelMatch && languageMatch;
      }),
    [activeCategory, activeLevel, activeLanguage],
  );

  return (
    <main id="courses" className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_10%,rgba(37,99,235,0.24),transparent_30rem)]" />
      <section className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <Image src={profile.logo} alt="Mouad Mouasseif logo" width={58} height={58} className="object-contain" />
            <div>
              <p className="text-sm font-black text-white">Mouad Mouasseif</p>
              <p className="text-xs text-cyan-200">Developer • Teacher • Coach • Designer</p>
            </div>
          </div>
          <h1 className="text-5xl font-black leading-tight text-white sm:text-7xl">
            Courses & <span className="neon-text">Resources</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
            Free high quality courses, practical projects and resources to help you learn, build and grow.
          </p>
          <div className="mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ["15+", "Courses", BookOpen],
              ["100%", "Free", GraduationCap],
              ["1000+", "Students", Users],
              ["4.9", "Rating", Star],
            ].map(([value, label, Icon]) => (
              <div key={label as string} className="glass-card rounded-2xl p-4">
                <Icon className="mb-2 text-cyan-300" size={20} />
                <p className="text-2xl font-black text-cyan-200">{value as string}</p>
                <p className="text-xs text-slate-400">{label as string}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card neon-border relative min-h-80 overflow-hidden rounded-[2rem] p-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(14,165,233,0.24),transparent_18rem)]" />
          <div className="relative flex h-full min-h-72 items-center justify-center">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10">
                <GraduationCap className="text-cyan-200" size={58} />
              </div>
              <p className="text-xs font-black uppercase tracking-[0.32em] text-cyan-300">Free Learning Platform</p>
              <h2 className="mt-3 text-3xl font-black text-white">Learn. Build. Grow.</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-14 grid max-w-7xl gap-6 lg:grid-cols-[280px_1fr]">
        <CourseSidebar
          activeCategory={activeCategory}
          activeLevel={activeLevel}
          activeLanguage={activeLanguage}
          onCategoryChange={setActiveCategory}
          onLevelChange={setActiveLevel}
          onLanguageChange={setActiveLanguage}
        />

        <div>
          <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">All free</p>
              <h2 className="text-3xl font-black text-white">All Courses</h2>
            </div>
            <p className="text-sm text-slate-400">{filteredCourses.length} free resources</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredCourses.map((course) => (
              <CourseCard key={course.title} course={course} />
            ))}
          </div>

          <div className="mt-8 grid gap-5 xl:grid-cols-[1.25fr_0.75fr]">
            <div className="glass-card neon-border overflow-hidden rounded-3xl p-5">
              <p className="text-xs font-black uppercase tracking-[0.26em] text-cyan-300">Featured Resource</p>
              <div className="mt-4 grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-cyan-300/15 bg-slate-950">
                  <Image src="/projects/PEE.png" alt="PPE Soutenance CRMEF Casablanca-Settat cover" fill className="object-cover" sizes="(min-width: 1024px) 35vw, 100vw" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">PPE – Soutenance CRMEF Casablanca-Settat</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Projet Personnel Encadré réalisé dans le cadre de ma formation au CRMEF Casablanca-Settat. Thème : intégration du numérique dans l’enseignement, innovation pédagogique et ressources éducatives.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Pédagogie", "Numérique", "Innovation", "CRMEF"].map((tag) => (
                      <span key={tag} className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href="/#ppe-crmef" className="mt-5 inline-flex items-center rounded-full border border-cyan-300/30 px-5 py-3 text-sm font-bold text-cyan-100 transition hover:bg-cyan-300/10">
                    Voir le projet <ArrowRight className="ml-2" size={17} />
                  </a>
                </div>
              </div>
            </div>
            <BuyMeCoffee />
          </div>
          <TrainingRequest />
        </div>
      </section>
    </main>
  );
}
