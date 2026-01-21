"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import React from "react"


/* ================= TYPES ================= */

type Skill = {
  name: string
  logo: string
  percentage: number
  color: string
}

type SkillGroup = {
  title: string
  skills: Skill[]
}

/* ================= DATA ================= */

const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", logo: "/logos/js.png", percentage: 90, color: "text-yellow-400" },
      { name: "TypeScript", logo: "/logos/ts.png", percentage: 75, color: "text-blue-400" },
      { name: "Python", logo: "/logos/python.png", percentage: 80, color: "text-green-400" },
      { name: "PHP", logo: "/logos/php.png", percentage: 65, color: "text-indigo-400" },
      { name: "SQL", logo: "/logos/sql.png", percentage: 85, color: "text-cyan-400" },
      { name: "Java", logo: "/logos/java.png", percentage: 60, color: "text-red-400" },
      { name: "C", logo: "/logos/c.png", percentage: 80, color: "text-blue-600" },
      { name: "C++", logo: "/logos/cpp.png", percentage: 65, color: "text-purple-400" },
      { name: "HTML", logo: "/logos/html.png", percentage: 95, color: "text-orange-400" },
      { name: "CSS", logo: "/logos/css.png", percentage: 90, color: "text-sky-400" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React.js", logo: "/logos/react.png", percentage: 80, color: "text-cyan-400" },
      { name: "Next.js", logo: "/logos/next.js.png", percentage: 75, color: "text-white" },
      { name: "Node.js", logo: "/logos/nodejs.png", percentage: 80, color: "text-green-500" },
      { name: "Laravel", logo: "/logos/laravel.png", percentage: 70, color: "text-red-400" },
      { name: "Tailwind", logo: "/logos/tailwind.png", percentage: 80, color: "text-sky-400" },
      { name: "Bootstrap", logo: "/logos/bootstrap.png", percentage: 75, color: "text-purple-400" },
      { name: "React Native", logo: "/logos/rn.png", percentage: 85, color: "text-blue-400" },
      { name :"Android", logo: "/logos/AS.png", percentage: 70, color: "text-green-400" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", logo: "/logos/Git.png", percentage: 85, color: "text-red-500" },
      { name: "GitHub", logo: "/logos/github.png", percentage: 90, color: "text-white" },
      { name: "Linux", logo: "/logos/linux.png", percentage: 75, color: "text-black" },
      { name: "VS Code", logo: "/logos/vscode.png", percentage: 90, color: "text-blue-500" },
      { name: "Windows", logo: "/logos/windows.png", percentage: 95, color: "text-blue-700" },
      { name: "WordPress", logo: "/logos/wordpress.png", percentage: 70, color: "text-blue-600" },
    ],
  },
  {
    title: "Design Tools & Video Editing",
    skills: [
      { name: "Illustrator", logo: "/logos/illustrator.png", percentage: 75, color: "text-orange-400" },
      { name: "Figma", logo: "/logos/figma.png", percentage: 70, color: "text-pink-400" },
      { name: "Photoshop", logo: "/logos/photoshop.png", percentage: 80, color: "text-blue-500" },
      { name: "Premiere Pro", logo: "/logos/premiere.png", percentage: 85, color: "text-purple-400" },
      { name : "Indesign", logo: "/logos/inDesign.png", percentage: 65, color: "text-red-400" },
      { name: "Canva", logo: "/logos/canva.png", percentage: 90, color: "text-blue-300" },
      { name: "CapCut", logo: "/logos/capcut-icon.png", percentage: 85, color: "text-green-400" },
    ],
  },
]

/* ================= HELPERS ================= */

const getItemsPerView = (width: number) => {
  if (width < 480) return 2
  if (width < 640) return 3
  if (width < 900) return 4
  if (width < 1200) return 6
  if (width < 1600) return 7
  return 6
}

/* ================= CIRCLE ================= */

const CircularSkill = ({ skill }: { skill: Skill }) => {
  const radius = 26
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (skill.percentage / 100) * circumference

  return (
    <div className="flex flex-col items-center gap-2 min-w-[110px]">
      <div className="relative w-20 h-20">
        <svg className="w-full h-full -rotate-90">
          <circle r={radius} cx="50%" cy="50%" strokeWidth="4" className="text-white/10" fill="transparent" />
          <circle
            r={radius}
            cx="50%"
            cy="50%"
            strokeWidth="4"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className={skill.color}
            fill="transparent"
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <Image src={skill.logo} alt={skill.name} width={28} height={28} />
        </div>
      </div>

      <span className="text-xs text-white/80 text-center">{skill.name}</span>
    </div>
  )
}

/* ================= ROW ================= */

const SkillRow = ({ group }: { group: SkillGroup }) => {
  const [index, setIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)

  const total = group.skills.length
  const maxIndex = Math.max(0, total - itemsPerView)

  useEffect(() => {
    const resize = () => setItemsPerView(getItemsPerView(window.innerWidth))
    resize()
    window.addEventListener("resize", resize)
    return () => window.removeEventListener("resize", resize)
  }, [])

  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + itemsPerView))
  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - itemsPerView))

  useEffect(() => {
    const interval = setInterval(next, 6000)
    return () => clearInterval(interval)
  }, [itemsPerView])

  const progress = ((index + itemsPerView) / total) * 100

  return (
    <div className="space-y-6">
      <h3 className="text-center text-sm uppercase tracking-widest text-blue-400">
        {group.title}
      </h3>

      <div className="relative flex items-center">
        {total > itemsPerView && (
          <button onClick={prev} className="absolute left-0 z-10 p-2 bg-white/10 rounded-full">
            <ChevronLeft size={18} />
          </button>
        )}

        <div className="w-full overflow-hidden px-10">
          <motion.div
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            onDragEnd={(_, info) => {
              if (info.offset.x < -50) next()
              if (info.offset.x > 50) prev()
            }}
            key={index}
            className="flex justify-center gap-6 cursor-grab active:cursor-grabbing"
          >
            {group.skills.slice(index, index + itemsPerView).map((skill) => (
              <CircularSkill key={skill.name} skill={skill} />
            ))}
          </motion.div>
        </div>

        {total > itemsPerView && (
          <button onClick={next} className="absolute right-0 z-10 p-2 bg-white/10 rounded-full">
            <ChevronRight size={18} />
          </button>
        )}
      </div>

      <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
        <motion.div className="h-full bg-blue-400" animate={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}

/* ================= MAIN ================= */

export default function SkillRowCarousel() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
      <div className="max-w-6xl mx-auto space-y-20 px-4">
        {skillGroups.map((group, i) => (
          <SkillRow key={i} group={group} />
        ))}
      </div>
    </section>
  )
}
