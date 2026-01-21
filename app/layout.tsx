
import './globals.css'
import React from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export const metadata = {
  title: 'Mouasseif Mouad - Portfolio',
  description: 'Développeur Full-Stack',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className='bg-gradient-to-br from-[#0a0f14] via-[#1e415f] to-[#bba7a0]'>
                <Header />
        
        {children}
                <Footer />

      </body>
    </html>
  )
}

