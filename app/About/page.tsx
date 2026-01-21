'use client'

import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, Github, Facebook, Instagram } from "lucide-react"
import Image from "next/image"
import { Compass,  BrainCircuit,Kanban, Handshake } from 'lucide-react';
import Education from '@/components/Education';
import MyService from '@/components/Service'
import WorkExperience from '@/components/Work';
import MySkill from '@/components/MySkill';





export default function About() {
  return (
    <>
      {/* ABOUT ME */}
      <section className="w-full mb-10 flex justify-center mt-16">
        <div className="w-full max-w-6xl bg-white/10 backdrop-blur-xl border-blue-500/50 border-2 rounded-2xl p-6 py-8 md:p-10">
          <h1 className="text-center text-3xl font-semibold text-white">
            About Me
          </h1>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            {/* Avatar */}
            <div className="flex justify-center md:justify-start relative shrink-0">
              <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-80 md:h-80 bg-slate-800/50 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/avatar2.png"
                  alt="Mouasseif Mouad"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute -left-3 -top-3 w-8 h-8 rounded-full bg-blue-700/90" />
                <div className="absolute -right-5 -bottom-5 w-6 h-6 rounded-full bg-black/90" />
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-sm md:text-base text-black/90 bg-white/50 rounded-xl p-5 leading-relaxed">
                Computer Science Bachelor’s student at ENS Rabat, motivated and 
                detail-oriented, with solid experience in administrative support, 
                project management, and IT support. Having completed several 
                internships in web development, graphic design, and teaching, 
                I am proficient with office tools and digital environments. 
                Organized, versatile, and discreet, I am able to effectively 
                support management and adapt to different professional contexts.
              </p>

              {/* Contact info */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-black bg-white/50 p-5 rounded-xl">
                <div>
                  <p className="text-blue-600 font-semibold flex items-center justify-center md:justify-start gap-2">
                    <Mail className="w-4 h-4" /> Email
                  </p>
                  <p className="text-sm">mouadmouasseif@gmail.com</p>
                </div>

                <div>
                  <p className="text-blue-600 font-semibold flex items-center justify-center md:justify-start gap-2">
                    <Phone className="w-4 h-4" /> Phone
                  </p>
                  <p className="text-sm">+212 689 642 894</p>
                </div>
              </div>

              {/* Social links */}
              <div className="mt-6 flex justify-center md:justify-start gap-6">
                <a href="https://github.com/mouadmouasseif" target="_blank" className="text-white hover:text-blue-700 transition">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/mouad-mouasseif-a5619a21a/" target="_blank" className="text-white hover:text-blue-700 transition">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://facebook.com/mouadmouasseif" target="_blank" className="text-white hover:text-blue-700 transition">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://instagram.com/mouadmouasseif" target="_blank" className="text-white hover:text-blue-700 transition">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="tel:+212689642894" className="text-white hover:text-blue-700 transition">
                  <Phone className="w-6 h-6" />
                </a>
              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <Button className="rounded-full px-6 py-3 bg-blue-600/50 text-white hover:bg-blue-700">
                  Contact me
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full px-6 py-3 bg-white/50 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                >
                  Download my resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WorkExperience />
      <Education />
      <MySkill />

     {/* SOFT SKILLS */}
<section className="w-full py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
  <div className="max-w-6xl mx-auto px-4 text-white">
    
    {/* Title */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold">
        Soft Skills & Leadership
      </h2>
      <p className="mt-3 text-slate-400 text-sm md:text-base">
        Human skills that strengthen collaboration, leadership, and efficiency
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      
      {/* Card 1 */}
      <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 hover:shadow-xl transition">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600/20 mb-4">
        <Compass />
        </div>
        <h3 className="font-semibold text-lg mb-2">
          Team Leadership
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          Coaching ENSAM Girls basketball team and leading university teams with motivation and vision.
        </p>
      </div>

      {/* Card 2 */}
      <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 hover:shadow-xl transition">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600/20 mb-4">
              <BrainCircuit />

        </div>
        <h3 className="font-semibold text-lg mb-2">
          Problem Solving
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          Ability to analyze complex technical and administrative situations and deliver effective solutions.
        </p>
      </div>

      {/* Card 3 */}
      <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 hover:shadow-xl transition">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600/20 mb-4">
          <Kanban />
        </div>
        <h3 className="font-semibold text-lg mb-2">
          Project Management
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          Planning, prioritization, and monitoring using structured methodologies such as Gantt and PERT.
        </p>
      </div>

      {/* Card 4 */}
      <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 hover:shadow-xl transition">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600/20 mb-4">
              <Handshake />

        </div>
        <h3 className="font-semibold text-lg mb-2">
          Communication
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          Strong interpersonal skills, customer relations, and efficient knowledge management.
        </p>
      </div>

    </div>
  </div>
</section>
<MyService />

    </>
  )
}
