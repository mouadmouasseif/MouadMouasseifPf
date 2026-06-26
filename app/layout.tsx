import "./globals.css";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Mouad Mouasseif - Portfolio",
  description: "Full-Stack Developer, AI Developer, cybersecurity student, teacher and coach.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#020617] text-white antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
