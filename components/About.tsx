'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, Github, Facebook, Instagram } from "lucide-react"

export default function About() {
  return (
    <section className="w-full  mb-10 flex justify-center  mt-16 ">
      <div className="w-full max-w-6xl bg-white/10 backdrop-blur-xl border-blue-500/50 border-2 rounded-2xl p-6 py-8 md:p-10">
        <h2 className="text-center text-3xl  font-semibold text-white">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="flex justify-center md:justify-start relative shrink-0">
            <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-80 md:h-80 bg-slate-800/50 rounded-full overflow-hidden shadow-lg">
              <Image
                src="/avatar2.png"
                alt="Mouasseif Mouad"
                width={450}
                height={450}
                className="object-cover w-full h-full"
              />
              <div className="absolute -left-3 -top-3 w-8 h-8 rounded-full bg-blue-700/90" />
              <div className="absolute -right-5 -bottom-5 w-6 h-6 rounded-full bg-black/90" />
            </div>
          </div>

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

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-black bg-white/50 p-5 rounded-xl">
              <div>
                <p className="text-blue-600 font-semibold flex items-center justify-center md:justify-start gap-2">
                  <Mail className="w-4 h-4" /> Email
                </p>
                <p className="text-sm text-center md:text-left">mouadmouasseif@gmail.com</p>
              </div>

              <div>
                <p className="text-blue-600 font-semibold flex items-center justify-center md:justify-start gap-2">
                  <Phone className="w-4 h-4" /> Phone
                </p>
                <p className="text-sm text-center md:text-left">+212 689 642 894</p>
              </div>
            </div>

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

            <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Button className="rounded-full px-6 py-3 bg-blue-600/50 text-white hover:bg-blue-700 transition">
                Contact me
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-6 py-3 border bg-white/50 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition"
              >
                Download my resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
