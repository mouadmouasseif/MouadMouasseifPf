import React from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import MySkill from '@/components/MySkill'
import MyService from '@/components/Service'
import MyDesign from '@/components/MyDesign'
import WebMobileDesign from '@/components/WebMobileDesign'
import RecentProjects from '@/components/RecentProjects'
import WorkExperience from '@/components/Work'
// import MyVideoEditing from '@/components/Video'
import Education from '@/components/Education'
import SoftSkillsSection from '@/components/SoftSkillsSection';
import ContactMe from '@/components/ContactMe'


export default function Home() {
  return (
    <main >
      <div className=" mx-auto">
        <Hero />
        <About />
        <MySkill />

        <MyService />
        <RecentProjects />

        < MyDesign />
        
        <WorkExperience />
        <Education />
        <SoftSkillsSection />
        <ContactMe />
      </div>
    </main>
  )
}