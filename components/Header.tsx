'use client'
import React, { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl border border-blue-700/60 px-4 py-3 md:px-8 shadow-xl">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image src="/logo_v1.png" alt="Logo" width={40} height={40} />
          <span className="font-bold text-lg">Mouad Mouasseif</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-sm font-medium items-center">
          <a href="/" className="text-blue-400 font-bold hover:text-white transition">Home</a>

        

          <a href="/about" className="hover:text-blue-400 transition">About</a>
            {/* Portfolio Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="hover:text-blue-400 transition flex items-center gap-1">
                Portfolio
                <ChevronDown className="w-4 h-4 opacity-70" />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="start"
              className="w-48 bg-gradient-to-r from-blue-900 via-slate-800 to-slate-900 text-white border border-white/10 text-white  rounded-xl"
            >

              <DropdownMenuItem asChild>
                <a href="/prof" > Tous</a>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <a href="/prof?cat=video">Video Editing</a>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <a href="/prof?cat=logo">Design Logo</a>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <a href="/prof?cat=website">Website</a>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <a href="/prof?cat=mobile">App & Mobile</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <a href="/service" className="hover:text-blue-400 transition">Services</a>
          <a href="/contact" className="hover:text-blue-400 transition">Contact</a>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden p-2 rounded-md border border-white/20 hover:bg-white/10 transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-3 bg-slate-800/80 p-4 rounded-2xl border border-white/10 backdrop-blur-md">
          <a href="/" className="text-blue-400 font-bold hover:text-white transition">Home</a>


          <a href="/about" className="hover:text-blue-400 transition">About</a>
          
          {/* Mobile Dropdown Portfolio simplified */}
          <details className="group">
            <summary className="cursor-pointer hover:text-blue-400 transition flex justify-between items-center">
              Portfolio
              <ChevronDown className="w-4 h-4 opacity-70 group-open:rotate-90 transition-transform" />
            </summary>
            <div className="flex flex-col mt-2 ml-4 gap-1">
              <a href="/prof" className="hover:text-blue-400 transition">Tous</a>
              <a href="/prof?cat=video" className="hover:text-blue-400 transition">Video Editing</a>
              <a href="/prof?cat=logo" className="hover:text-blue-400 transition">Design Logo</a>
              <a href="/prof?cat=website" className="hover:text-blue-400 transition">Website</a>
              <a href="/prof?cat=mobile" className="hover:text-blue-400 transition">App & Mobile</a>
            </div>
          </details>
          <a href="/service" className="hover:text-blue-400 transition">Services</a>
          <a href="/contact" className="hover:text-blue-400 transition">Contact</a>
        </div>
      )}
    </header>
  )
}
