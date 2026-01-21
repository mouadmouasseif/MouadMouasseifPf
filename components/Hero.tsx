'use client'
import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function Hero() {
return (
<section className="mt-12 px-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
<div className="md:col-span-2">
<p className="text-white/90 text-4xl font-medium">I&apos;m Mouasseif Mouad</p>
<h1 className="mt-4 text-6xl md:text-7xl leading-tight font-display text-blue-400">Developper <span className="text-white/80">Full-Stack</span></h1>


<div className="mt-9 flex gap-5 bg-white/30 transition rounded-full p-2 w-fit">
      <Button
        className="rounded-full px-6 py-3 bg-blue-400/90 backdrop-blur text-white font-medium shadow hover:bg-white/20 transition"
        onClick={() => console.log("Portfolio clicked")}
      >
        Portfolio
      </Button>

      <Button
        variant="secondary"
        className="rounded-full px-6 py-3 bg-white/90 text-blue-400/90 hover:bg-white/30 transition"
        onClick={() => console.log("About clicked")}
      >
        About
      </Button>
    </div>
</div>

  <div className="flex justify-center md:justify-end md:items-start relative">
        <div className="relative w-56 h-56 md:w-100 md:h-100 bg-slate-800/70 shadow-lg
         rounded-full overflow-hidden   ">
          <Image
            src="/avatar.jpg"
            alt="MouasseifMouad"
            width={950}
            height={950}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
</section>
)
}