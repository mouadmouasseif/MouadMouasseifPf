export type CertificateCategory =
  | "Professional & International"
  | "Education & Teaching"
  | "Technology & Cybersecurity"
  | "Sports & Coaching";

export type CertificateItem = {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: CertificateCategory;
  type: "Verified Certificate" | "Academic Diploma" | "Professional Qualification" | "Accredited Badge";
  image?: string;
  href?: string;
  verifyUrl?: string;
  skills: string[];
};

export const categorizedCertificates: CertificateItem[] = [
  // Professional & International
  {
    id: "unesco-digital-learning",
    title: "UNESCO ICT Competency Framework for Teachers",
    issuer: "UNESCO & International Partners",
    year: "2025 – 2026",
    category: "Professional & International",
    type: "Verified Certificate",
    image: "/certificates/certif8.png",
    skills: ["ICT Pedagogy", "Digital Inclusion", "Curriculum Integration"],
  },
  {
    id: "cisco-networking-academy",
    title: "Cisco Certified Network Associate (CCNA) Modules",
    issuer: "Cisco Networking Academy",
    year: "2024",
    category: "Professional & International",
    type: "Verified Certificate",
    image: "/certificates/certif7.png",
    skills: ["Network Routing", "TCP/IP Protocols", "Network Security Basics"],
  },
  {
    id: "ibm-ai-data-badge",
    title: "IBM Applied AI & Data Science Badges",
    issuer: "IBM SkillsBuild",
    year: "2024 – 2025",
    category: "Professional & International",
    type: "Accredited Badge",
    image: "/certificates/certif2.png",
    skills: ["Machine Learning", "Neural Networks", "Data Visualization"],
  },
  {
    id: "microsoft-educator",
    title: "Microsoft Certified Educator (MCE) - 21st Century Learning",
    issuer: "Microsoft Education",
    year: "2025",
    category: "Professional & International",
    type: "Verified Certificate",
    image: "/certificates/certif3.png",
    skills: ["Collaborative Learning", "Computational Thinking", "EdTech Tools"],
  },

  // Education & Teaching
  {
    id: "crmef-qualification",
    title: "Certificat de Qualification Professionnelle de l'Enseignement",
    issuer: "CRMEF Casablanca-Settat / Ministère de l'Éducation Nationale",
    year: "2025 – 2026",
    category: "Education & Teaching",
    type: "Professional Qualification",
    image: "/certificates/license.png",
    href: "/projects/PEE.png",
    skills: ["Didactique de l'informatique", "Sciences de l'éducation", "Gestion de classe", "Évaluation"],
  },
  {
    id: "ens-rabat-degree",
    title: "Licence en Sciences de l'Éducation - Informatique",
    issuer: "École Normale Supérieure (ENS) de Rabat",
    year: "2021 – 2024",
    category: "Education & Teaching",
    type: "Academic Diploma",
    image: "/certificates/license.png",
    skills: ["Computer Science Theory", "Software Engineering", "Mathematics", "Pedagogy"],
  },
  {
    id: "bac-sciences",
    title: "Baccalauréat Sciences Physiques",
    issuer: "Académie Régionale de Rabat-Salé-Kénitra",
    year: "2018 – 2019",
    category: "Education & Teaching",
    type: "Academic Diploma",
    image: "/certificates/bac.png",
    skills: ["Physics", "Mathematics", "Scientific Methodology"],
  },

  // Technology & Cybersecurity
  {
    id: "ccep-cybersecurity",
    title: "Certified Cybersecurity Educator Professional (CCEP)",
    issuer: "ENSAM Rabat / JobInTech Program",
    year: "2025 – 2026",
    category: "Technology & Cybersecurity",
    type: "Verified Certificate",
    image: "/certificates/ENSAMRabat.png",
    skills: ["Ethical Hacking", "Network Defense", "Penetration Testing", "Security Hygiene"],
  },
  {
    id: "java-development",
    title: "Java SE Professional Programming",
    issuer: "Oracle / Accredited Center",
    year: "2024",
    category: "Technology & Cybersecurity",
    type: "Verified Certificate",
    image: "/certificates/certif1.png",
    skills: ["OOP", "JavaFX", "Data Structures", "Algorithms"],
  },
  {
    id: "python-programming",
    title: "Python for Data Science & AI",
    issuer: "DeepLearning.AI / Coursera",
    year: "2024",
    category: "Technology & Cybersecurity",
    type: "Verified Certificate",
    image: "/certificates/certif2.png",
    skills: ["Python", "Computer Vision", "NumPy", "OpenCV"],
  },
  {
    id: "react-nextjs",
    title: "Modern React & Next.js Full-Stack Engineering",
    issuer: "Meta / Frontend Specialization",
    year: "2024",
    category: "Technology & Cybersecurity",
    type: "Verified Certificate",
    image: "/certificates/certif3.png",
    skills: ["React 19", "Next.js", "State Management", "REST & GraphQL"],
  },
  {
    id: "uiux-figma",
    title: "UI/UX Design & Digital Product Prototyping",
    issuer: "GAD Academy / Oxford Academic",
    year: "2023 – 2024",
    category: "Technology & Cybersecurity",
    type: "Verified Certificate",
    image: "/certificates/graphic-design.png",
    skills: ["Figma", "Design Systems", "User Research", "Wireframing"],
  },

  // Sports & Coaching
  {
    id: "fnir-2026",
    title: "Certificate of Participation – Festival Nautique International de Rabat (FNIR 2026)",
    issuer: "Club Nautique Plage Rabat (CNPR) / Festival Nautique International de Rabat",
    year: "2026",
    category: "Sports & Coaching",
    type: "Verified Certificate",
    image: "/certificates/fnir-2026.jpg",
    skills: ["Organisation de Régate", "Voile Internationale", "Support Technique & Course", "Sécurité Maritime"],
  },
  {
    id: "fnir-2025",
    title: "Certificate of Participation – Festival Nautique International de Rabat (FNIR 2025)",
    issuer: "Club Nautique Plage Rabat (CNPR) / Festival Nautique International de Rabat",
    year: "2025",
    category: "Sports & Coaching",
    type: "Verified Certificate",
    image: "/certificates/fnir-2025.jpg",
    skills: ["Gestion de Flotte", "Arbitrage & Sécurité", "Voile ILCA & Optimist", "Logistique Compétition"],
  },
  {
    id: "fnir-2024",
    title: "Certificate of Appreciation – Festival Nautique International de Rabat (FNIR 2024)",
    issuer: "Club Nautique Plage Rabat (CNPR) / Festival Nautique International de Rabat",
    year: "2024",
    category: "Sports & Coaching",
    type: "Verified Certificate",
    image: "/certificates/fnir-2024.jpg",
    skills: ["Appreciation Award", "Organisation d'Événements", "Coaching Nautique", "Chronométrage"],
  },
  {
    id: "fnir-2023",
    title: "Certificat de Participation – Festival Nautique International de Rabat (FNIR 2023)",
    issuer: "Club Nautique Plage Rabat (CNPR) / Festival Nautique International de Rabat",
    year: "2023",
    category: "Sports & Coaching",
    type: "Verified Certificate",
    image: "/certificates/fnir-2023.jpg",
    skills: ["Voile Légère", "Encadrement Nautique", "Coordination Terre/Mer", "Éthique Sportive"],
  },
  {
    id: "fnir-2022",
    title: "Certificate of Participation – Festival Nautique International de Rabat (FNIR 2022)",
    issuer: "Club Nautique Plage Rabat (CNPR) / Festival Nautique International de Rabat",
    year: "2022",
    category: "Sports & Coaching",
    type: "Verified Certificate",
    image: "/certificates/fnir-2022.jpg",
    skills: ["Participation Internationale", "Compétition ILCA", "Règles de Course", "Esprit d'Équipe"],
  },
  {
    id: "sailing-instructor",
    title: "Moniteur de Voile Légère & Entraînement Régate (ILCA / Optimist)",
    issuer: "Yacht Club de Rabat / Club Nautique Plage de Rabat",
    year: "2022 – 2026",
    category: "Sports & Coaching",
    type: "Professional Qualification",
    image: "/thumbnails/yacht.jpg",
    skills: ["Nautical Safety", "Regatta Tactics", "Sail Trimming", "Youth Coaching"],
  },
  {
    id: "basketball-coach",
    title: "Basketball Coaching & Athletic Development",
    issuer: "Fédération Royale Marocaine de Basketball / Club Nahda",
    year: "2023 – 2025",
    category: "Sports & Coaching",
    type: "Professional Qualification",
    image: "/player/17.png",
    skills: ["Tactical Analysis", "Player Conditioning", "Biomechanical Drills", "Team Leadership"],
  },
];

// Backward-compatibility export
export const certificates = categorizedCertificates.map((c) => ({
  title: c.title,
  image: c.image,
  href: c.href,
  type: (c.type === "Academic Diploma" ? "pdf" : "image") as "image" | "pdf",
}));
