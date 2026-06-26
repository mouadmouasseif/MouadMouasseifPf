'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Code2,
  Palette,
  Smartphone,
  Video,
  PenTool,
  Image,
  Megaphone,
  Globe,
  BarChart3,
  ChevronLeft,
  ChevronRight,
    Brain,                // 👈 AJOUT ICI

} from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

// ==================== SERVICES ==================== //
const services = [
   {
    icon: <Brain className="w-10 h-10 text-emerald-400" />,
    title: "Problem Solving",
    desc: "Analyzing complex issues and delivering efficient, tailored solutions.",
  },
     {
    icon: <Brain className="w-10 h-10 text-cyan-400" />,
    title: "Logical & Mathematical Thinking",
    desc: "Use logical reasoning, mathematical modeling, and structured thinking to optimize processes and decisions.",
  },
  {
    icon: <Brain className="w-10 h-10 text-fuchsia-400" />,
    title: "Interpersonal & Intrapersonal Intelligence",
    desc: "Empathic communication, active listening, and self-awareness to improve teamwork and project success.",
  },
  {
    icon: <Code2 className="w-10 h-10 text-blue-400" />,
    title: "Web Development",
    desc: "Responsive and modern websites built with the latest technologies.",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-green-400" />,
    title: "App Development",
    desc: "Cross-platform mobile applications with intuitive interfaces.",
  },
  {
    icon: <Palette className="w-10 h-10 text-pink-400" />,
    title: "Web Design",
    desc: "Clean and professional web interfaces focused on user experience.",
  },
  {
    icon: <PenTool className="w-10 h-10 text-purple-400" />,
    title: "App Design",
    desc: "Creative UI/UX design for mobile applications that engage users.",
  },
  {
    icon: <Video className="w-10 h-10 text-red-400" />,
    title: "Video Editing",
    desc: "Professional video editing for ads, social media, and branding.",
  },
  {
    icon: <Image className="w-10 h-10 text-yellow-400" />,
    title: "Logo Creation",
    desc: "Unique logo designs that represent your brand identity.",
  },
  {
    icon: <Megaphone className="w-10 h-10 text-orange-400" />,
    title: "Content Creation",
    desc: "Engaging content for websites, blogs, and social media platforms.",
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-teal-400" />,
    title: "SEO Optimization",
    desc: "Improve your visibility and ranking on search engines.",
  },
  {
    icon: <Globe className="w-10 h-10 text-indigo-400" />,
    title: "Digital Marketing",
    desc: "Promote your brand effectively through digital strategies.",
  },
  
]

// ==================== SERVICE CARD ==================== //
const ServiceCard = ({ service }: { service: any }) => (
  <motion.div
    className="flex flex-col items-center bg-slate-800/70 border border-slate-600 hover:border-blue-500 rounded-2xl shadow-md hover:shadow-blue-500/20 hover:scale-[1.03] transition-all duration-300 p-6 w-64 backdrop-blur-sm"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
  >
    <div className="p-4 rounded-full bg-slate-700/50 mb-3">
      {service.icon}
    </div>
    <h3 className="text-lg font-semibold text-white text-center">
      {service.title}
    </h3>
    <p className="text-sm text-gray-300 text-center mt-2">{service.desc}</p>
  </motion.div>
)

// ==================== SLIDER / LAYOUT ==================== //
const ScrollableServiceRow = ({ items }: { items: any[] }) => {
  const [isMobile, setIsMobile] = useState(false)
  const [index, setIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 768)
    checkWidth()
    window.addEventListener("resize", checkWidth)
    return () => window.removeEventListener("resize", checkWidth)
  }, [])

  const handleNext = () => setIndex((prev) => (prev + 1) % items.length)
  const handlePrev = () => setIndex((prev) => (prev - 1 + items.length) % items.length)

  // Swipe mobile
  useEffect(() => {
    if (!isMobile || !containerRef.current) return
    let startX = 0
    const onTouchStart = (e: TouchEvent) => (startX = e.touches[0].clientX)
    const onTouchEnd = (e: TouchEvent) => {
      const endX = e.changedTouches[0].clientX
      if (startX - endX > 50) handleNext()
      if (endX - startX > 50) handlePrev()
    }
    const el = containerRef.current
    el.addEventListener("touchstart", onTouchStart)
    el.addEventListener("touchend", onTouchEnd)
    return () => {
      el.removeEventListener("touchstart", onTouchStart)
      el.removeEventListener("touchend", onTouchEnd)
    }
  }, [isMobile, items.length])

  return (
    <div className="relative my-10">
      {/* DESKTOP / TABLET : grille centrée */}
      {!isMobile && (
        <div className="flex flex-wrap justify-center gap-8">
          {items.map((service, i) => (
            <ServiceCard key={`${service.title}-${i}`} service={service} />
          ))}
        </div>
      )}

      {/* MOBILE : une carte + boutons + swipe */}
      {isMobile && (
        <div className="flex flex-col items-center" ref={containerRef}>
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition"
            >
              <ChevronLeft className="text-white" />
            </button>

            <ServiceCard service={items[index]} />

            <button
              onClick={handleNext}
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition"
            >
              <ChevronRight className="text-white" />
            </button>
          </div>

          <div className="flex gap-1 mt-4">
            {items.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === index ? "bg-blue-500" : "bg-slate-600"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// ==================== COMPOSANT PRINCIPAL ==================== //
export default function MyService() {
  return (
    <section className="w-full px-4 py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h3 className="text-blue-400 uppercase text-sm tracking-widest">
            What I Do
          </h3>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mt-2">
            My Services &amp; Solutions
          </h2>
          <div className="w-32 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Services */}
        <ScrollableServiceRow items={services} />
      </div>
    </section>
  )
}
