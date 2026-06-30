"use client";

import { BookOpen, Filter } from "lucide-react";
import { courseCategories, courseLanguages, courseLevels } from "@/src/data/courses";

type CourseSidebarProps = {
  activeCategory: string;
  activeLevel: string;
  activeLanguage: string;
  onCategoryChange: (value: string) => void;
  onLevelChange: (value: string) => void;
  onLanguageChange: (value: string) => void;
};

export default function CourseSidebar({
  activeCategory,
  activeLevel,
  activeLanguage,
  onCategoryChange,
  onLevelChange,
  onLanguageChange,
}: CourseSidebarProps) {
  return (
    <aside className="space-y-5 lg:sticky lg:top-28">
      <div className="glass-card neon-border rounded-3xl p-5">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-black text-white">
          <BookOpen className="text-cyan-300" size={20} /> Browse by
        </h2>
        <div className="space-y-2">
          {courseCategories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`w-full rounded-2xl px-4 py-3 text-left text-sm font-bold transition ${
                activeCategory === category ? "bg-cyan-300 text-slate-950" : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="glass-card neon-border rounded-3xl p-5">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-black text-white">
          <Filter className="text-fuchsia-300" size={20} /> Filter by
        </h2>
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">Level</p>
          <div className="space-y-2">
            <button onClick={() => onLevelChange("All")} className={`block text-sm ${activeLevel === "All" ? "text-cyan-200" : "text-slate-300"}`}>All</button>
            {courseLevels.map((level) => (
              <button key={level} onClick={() => onLevelChange(level)} className={`block text-sm ${activeLevel === level ? "text-cyan-200" : "text-slate-300"}`}>
                {level}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-5">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">Language</p>
          <div className="space-y-2">
            <button onClick={() => onLanguageChange("All")} className={`block text-sm ${activeLanguage === "All" ? "text-cyan-200" : "text-slate-300"}`}>All</button>
            {courseLanguages.map((language) => (
              <button key={language} onClick={() => onLanguageChange(language)} className={`block text-sm ${activeLanguage === language ? "text-cyan-200" : "text-slate-300"}`}>
                {language}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
