"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  // État pour le filtre : 'all', 'diplome', ou 'certificat'
  const [filter, setFilter] = useState("all");

  const certificates = [
     {
      title: "Certified Cybersecurity Educator Professional (CCEP)",
      school: "RED TEAM LEADERS",
      dates: "December 2025",
      img: "/certificates/certif8.png",
      category: "certificat", // Catégorie ajoutée
    },
    {
      title: "Cybersecurity Training",
      school: "Ensam-Rabat",
      dates: "Sep 2025 - Present",
      img: "/certificates/cybersecurity.png",
      category: "certificat", // Catégorie ajoutée
    },
      {
      title: "Bachelor's In Computer Science",
      school: "Ecole Normale Supérieure de Rabat",
      dates: "2021 - 2024",
      img: "/certificates/license.png",
      category: "diplome", // Catégorie ajoutée
    },
    {
      title: "Graphic Design Training",
      school: "OXFORD ACADEMIC",
      dates: "2024 - 2025",
      img: "/certificates/graphic-design.png",
      category: "certificat", // Catégorie ajoutée
    },
     {
      title: "Design & Infography Training",
      school: "Gad Academy LTP",
      dates: "2022 - 2023",
      img: "/certificates/gad.png",
      category: "certificat", // Catégorie ajoutée
    },
    {
      title: "Initiation à la programmation (en Java)",
      school: "École Polytechnique Fédérale de Lausanne et proposépar l'intermédiaire de Coursera",
      dates: "Novembre  2022",
      img: "/certificates/certif2.png",
      category: "certificat", // Catégorie ajoutée
    },
    {
      title: "Apprenez à programmer en Java",
      school: "OpenClassrooms",
      dates: "Novembre  2022",
      img: "/certificates/certif3.png",
      category: "certificat", // Catégorie ajoutée
    },
    {
      title: "Créez votre site web avec HTML5 et CSS3",
      school: "OpenClassrooms",
      dates: "Novembre  2022",
      img: "/certificates/certif7.png",
      category: "certificat", // Catégorie ajoutée
    },
       {
      title: "Implémentez vos bases de données relationnelles avec SQL",
      school: "OpenClassrooms",
      dates: "Novembre  2022",
      img: "/certificates/certif5.png",
      category: "certificat", // Catégorie ajoutée
    },
    {
      title: "Créez des visuels avec Illustrator",
      school: "OpenClassrooms",
      dates: "Novembre  2022",
      img: "/certificates/certif6.png",
      category: "certificat", // Catégorie ajoutée
    },
    {
      title: "Apprenez à programmer en C",
      school: "OpenClassrooms",
      dates: "Janvier 2022",
      img: "/certificates/certif4.png",
      category: "certificat", // Catégorie ajoutée
    },
  
   
    {
      title: "High School Diploma — Physics",
      school: "Ibn El Khatib High School, Salé",
      dates: "2018 - 2019",
      img: "/certificates/bac.png",
      category: "diplome", // Catégorie ajoutée
    },
  ];

  // Logique pour filtrer les éléments
  const filteredCertificates = certificates.filter((item) =>
    filter === "all" ? true : item.category === filter
  );

  return (
    <section className="w-full px-6 py-10 md:px-20 relative bg-gradient-to-br from-yellow-900 via-slate-900 to-slate-800">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-blue-900/20 backdrop-blur-md -z-10" />
<h1 className="text-4xl md:text-5xl font-semibold mb-4 text-white text-center">
            Education
          </h1>
      {/* Top Section */}

      <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
        {/* Left: Education + Text Card */}
        <div className="flex-1">
          

          <Card className="bg-white/60 backdrop-blur-md border-none shadow-lg max-w-3xl">
            <CardContent className="p-6 text-black leading-relaxed">
              Bachelor's degree in computer science from ENS-Rabat, passionate
              about web development, graphic design, and project management.
              Versatile, autonomous, and with solid practical experience
              acquired through various internships and personal projects. Able
              to work both independently and in a team, with excellent
              organizational skills.
            </CardContent>
          </Card>
        </div>

        {/* Right: Profile Image */}
        <div className="w-48 h-48 md:w-90 md:h-90 shrink-0 rounded-full overflow-hidden border-2 border-black shadow-xl">
          <Image
            src="/avatar3.jpg"
            alt="Profile"
            width={190}
            height={190}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* --- SECTION FILTRE (Style Boutons Pillules) --- */}
      <div className="flex justify-center mb-8">
        <div className="flex flex-wrap gap-4 p-1 justify-center">
          {/* Bouton TOUS */}
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 border ${
              filter === "all"
                ? "bg-[#0B1221] text-[#4B9CFF] border-[#4B9CFF] shadow-[0_0_15px_rgba(75,156,255,0.4)]"
                : "bg-transparent text-gray-700 border-gray-500 hover:bg-white/20 hover:text-black"
            }`}
          >
            Tout
          </button>

          {/* Bouton DIPLÔMES */}
          <button
            onClick={() => setFilter("diplome")}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 border ${
              filter === "diplome"
                ? "bg-[#0B1221] text-[#4B9CFF] border-[#4B9CFF] shadow-[0_0_15px_rgba(75,156,255,0.4)]"
                : "bg-transparent text-gray-700 border-gray-500 hover:bg-white/20 hover:text-black"
            }`}
          >
            Diplômes
          </button>

          {/* Bouton CERTIFICATS */}
          <button
            onClick={() => setFilter("certificat")}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 border ${
              filter === "certificat"
                ? "bg-[#0B1221] text-[#4B9CFF] border-[#4B9CFF] shadow-[0_0_15px_rgba(75,156,255,0.4)]"
                : "bg-transparent text-gray-700 border-gray-500 hover:bg-white/20 hover:text-black"
            }`}
          >
            Certificats
          </button>
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 min-h-[300px]">
        {filteredCertificates.map((item, index) => (
          <Card
            key={index}
            className="bg-white/60 backdrop-blur-md border-none shadow-lg p-4 cursor-pointer hover:scale-[1.03] transition h-full flex flex-col"
            onClick={() => setSelectedImage(item.img)}
          >
            <CardHeader className="p-0 mb-4">
              <div className="w-full h-40 relative overflow-hidden rounded-md">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            </CardHeader>

            <CardContent className="text-sm p-0 flex-grow">
              <CardTitle className="text-lg mb-2 leading-tight">
                {item.title}
              </CardTitle>
              <p className="font-medium">{item.school}</p>
              <p className="text-xs text-gray-600 mt-1">{item.dates}</p>
              
              {/* Petit badge catégorie (optionnel, pour voir ce que c'est) */}
              <span className="inline-block mt-2 text-[10px] bg-black/5 px-2 py-1 rounded uppercase tracking-wider text-blue-700">
                {item.category}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Message si vide */}
      {filteredCertificates.length === 0 && (
         <div className="text-center text-white mt-10 italic opacity-70">
            Aucun élément trouvé dans cette catégorie.
         </div>
      )}

      {/* Modal Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-4xl max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Certificate Full View"
              width={1600}
              height={1600}
              className="rounded-xl shadow-2xl object-contain w-full h-full max-h-[85vh]"
            />
            <p className="text-black text-center mt-4 text-sm">
              Cliquez n'importe où pour fermer
            </p>
          </div>
        </div>
      )}
    </section>
  );
}