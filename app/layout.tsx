import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = "https://mouadmouasseif.vercel.app";
const siteTitle = "Mouad Mouasseif | Full-Stack Developer, Teacher & Freelance Services";
const siteDescription =
  "Mouad Mouasseif is a Moroccan full-stack web developer, AI developer, computer science teacher trainee, cybersecurity student, UX/UI designer and freelance digital services provider in Sale and Rabat.";

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
  category: "Portfolio",
  keywords: [
    "Mouad Mouasseif",
    "Mouasseif Mouad",
    "Mouad Mouassief",
    "Full-Stack Developer Morocco",
    "Developpeur web Maroc",
    "Developpeur web Rabat",
    "Developpeur web Sale",
    "Freelance web developer",
    "Freelance services Morocco",
    "Prof informatique",
    "Teacher trainee computer science",
    "AI developer",
    "Cybersecurity student",
    "UX UI designer",
    "Next.js developer",
    "React developer",
    "Master Hoop AI",
    "Graphic designer Morocco",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/logo_v1.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: "Mouad Mouasseif",
    locale: "fr_MA",
    images: [
      {
        url: "/logo_v1.png",
        width: 512,
        height: 512,
        alt: "Mouad Mouasseif logo",
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
      telephone: ["+212689642894", "+212664860246"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "N 21 Blad Bensaid Tabriquet",
        addressLocality: "Sale",
        addressRegion: "Rabat-Sale",
        addressCountry: "MA",
      },
      jobTitle: [
        "Full-Stack Developer",
        "AI Developer",
        "Computer Science Teacher Trainee",
        "Cybersecurity Student",
        "UX/UI Designer",
        "Basketball Coach",
      ],
      knowsAbout: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Artificial Intelligence",
        "Cybersecurity",
        "Computer Science Teaching",
        "UX/UI Design",
        "Graphic Design",
        "Basketball Coaching",
      ],
      sameAs: [
        "https://github.com/mouadmouasseif",
        "https://www.linkedin.com/in/mouad-mouasseif",
        "https://www.instagram.com/mouadmouasseif",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#services`,
      name: "Mouad Mouasseif Freelance Services",
      url: siteUrl,
      logo: `${siteUrl}/logo_v1.png`,
      image: `${siteUrl}/logo_v1.png`,
      description:
        "Freelance web development, mobile app design, AI applications, cybersecurity awareness, educational content, UX/UI design and graphic design services.",
      provider: {
        "@id": `${siteUrl}/#person`,
      },
      areaServed: ["Morocco", "Rabat", "Sale", "Casablanca", "Remote"],
      serviceType: [
        "Web Development",
        "Full-Stack Development",
        "React Development",
        "Next.js Development",
        "UX/UI Design",
        "Graphic Design",
        "AI Applications",
        "Educational Resources",
        "Cybersecurity Awareness",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Mouad Mouasseif Portfolio",
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
