import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = "https://mouadmouasseif.vercel.app";
const siteTitle = "Mouad Mouasseif | Computer Science Educator · AI Developer · EdTech Innovator";
const siteDescription =
  "Official portfolio of Mouad Mouasseif. Moroccan Computer Science Educator at Collège Zawiyat Sidi Hamza (Drâa-Tafilalet), AI & Full-Stack Developer, and Sports Technology Creator (BasketMotion AI, SailMotion, RowMotion).";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Mouad Mouasseif",
  },
  description: siteDescription,
  applicationName: "Mouad Mouasseif Portfolio",
  authors: [{ name: "Mouad Mouasseif", url: siteUrl }],
  creator: "Mouad Mouasseif",
  publisher: "Mouad Mouasseif",
  category: "Education & Technology Portfolio",
  keywords: [
    "Mouad Mouasseif",
    "Computer Science Educator",
    "Enseignant Informatique Maroc",
    "Collège Zawiyat Sidi Hamza",
    "CRMEF Casablanca-Settat",
    "ENS Rabat",
    "AI Developer Morocco",
    "EdTech Innovator",
    "BasketMotion AI",
    "SailMotion AI",
    "RowMotion AI",
    "Computer Vision in Sports",
    "MediaPipe MoveNet",
    "Digital Pedagogy",
    "Cybersecurity Educator ENSAM",
    "Next.js Developer Morocco",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/logo_v1.png", type: "image/png" }],
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "profile",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: "Mouad Mouasseif",
    locale: "en_US",
    alternateLocale: ["fr_MA"],
    images: [
      {
        url: "/logo_v1.png",
        width: 512,
        height: 512,
        alt: "Mouad Mouasseif - Education meets Technology & Innovation",
      },
      {
        url: "/avatar.jpg",
        width: 800,
        height: 800,
        alt: "Mouad Mouasseif",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/logo_v1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Mouad Mouasseif",
      alternateName: ["Mouasseif Mouad", "Mouad Mouassief"],
      url: siteUrl,
      image: `${siteUrl}/avatar.jpg`,
      logo: `${siteUrl}/logo_v1.png`,
      email: "mailto:mouadmouassief@gmail.com",
      jobTitle: [
        "Computer Science Educator",
        "AI Developer",
        "EdTech Innovator",
        "Sports Technology Creator",
      ],
      worksFor: {
        "@type": "EducationalOrganization",
        name: "Ministère de l'Éducation Nationale / Collège Zawiyat Sidi Hamza",
        address: {
          "@type": "PostalAddress",
          addressRegion: "Drâa-Tafilalet",
          addressCountry: "MA",
        },
      },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "École Normale Supérieure (ENS) de Rabat",
        },
        {
          "@type": "EducationalOrganization",
          name: "CRMEF Casablanca-Settat",
        },
        {
          "@type": "EducationalOrganization",
          name: "ENSAM Rabat",
        },
      ],
      knowsAbout: [
        "Computer Science Education",
        "Digital Pedagogy",
        "Artificial Intelligence",
        "Computer Vision",
        "MediaPipe & MoveNet",
        "Full-Stack Web Engineering",
        "React & Next.js",
        "Cybersecurity",
        "Sports Performance Analytics (Basketball, Sailing, Rowing)",
      ],
      sameAs: [
        "https://github.com/mouadmouasseif",
        "https://www.linkedin.com/in/mouad-mouasseif",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Mouad Mouasseif | Personal Brand & International Portfolio",
      url: siteUrl,
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: ["en", "fr"],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#020617] text-white antialiased">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
