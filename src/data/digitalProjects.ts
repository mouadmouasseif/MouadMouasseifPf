export type DigitalProject = {
  title: string;
  type: "Website" | "Web App" | "Mobile App" | "Desktop App" | "Coming Soon";
  image?: string;
  description: string;
  tech: string[];
  link?: string;
  status?: string;
};

export const digitalProjects: DigitalProject[] = [
  {
    title: "Master Hoop AI",
    type: "Web App",
    image: "/master-hoop/master-hoop-dashboard.png",
    description:
      "AI-powered basketball analytics app with camera analysis, shot tracking, player movement analysis, Firebase, React and TypeScript.",
    tech: ["React", "TypeScript", "Firebase", "AI Analytics", "Camera Analysis"],
    link: "https://master-hoopai.vercel.app",
    status: "Live",
  },
  {
    title: "TRANSIDF Website",
    type: "Website",
    image: "/projects/project1.png",
    description: "Professional business website for transport and administrative services.",
    tech: ["Website", "Business", "Responsive UI"],
    link: "https://transidf.com",
    status: "Live",
  },
  {
    title: "Car N GO Rent Car",
    type: "Website",
    image: "/projects/project2.png",
    description: "Car rental website with a clear booking-oriented interface and responsive business presentation.",
    tech: ["Website", "Car Rental", "Responsive UI"],
    link: "https://car-ngo.vercel.app/",
    status: "Live",
  },
  {
    title: "marNautique App",
    type: "Web App",
    image: "/projects/project14.png",
    description:
      "Nautical club management application for reservations, members, coaches, payments and activities.",
    tech: ["Club Management", "Reservations", "Members", "Payments"],
    status: "Prototype",
  },
  {
    title: "Club Nautique Plage de Rabat",
    type: "Website",
    image: "/projects/project3.png",
    description: "Nautical club digital presence for activities, sport communication and community visibility.",
    tech: ["Website", "Nautical Club", "Sport"],
    status: "Completed",
  },
  {
    title: "Marsailing Website",
    type: "Website",
    image: "/projects/project5.png",
    description: "Nautical and sailing website project for sport visibility and digital presence.",
    tech: ["Website", "Sailing", "Sport Branding"],
    link: "https://marsailing.netlify.app/",
    status: "Live",
  },
  {
    title: "Portfolio Web Mouad",
    type: "Website",
    image: "/projects/project6.png",
    description: "Personal portfolio website for Mouad Mouasseif.",
    tech: ["Next.js", "Tailwind CSS", "Portfolio"],
    link: "https://mouadmouasseif.netlify.app/",
    status: "Live",
  },
  {
    title: "SA Poseur Website",
    type: "Website",
    image: "/projects/project7.png",
    description: "Professional website for service presentation, brand credibility and customer contact.",
    tech: ["Website", "Business", "Responsive UI"],
    link: "https://sa-poseur.netlify.app/",
    status: "Live",
  },
  {
    title: "K.B.G Website",
    type: "Website",
    image: "/projects/project8.png",
    description: "Business website for Keur Baye Gorgui with structured content and service presentation.",
    tech: ["Website", "Business", "Branding"],
    link: "https://kbgsuarl.netlify.app/",
    status: "Live",
  },
  {
    title: "Laila De Luxe Website",
    type: "Website",
    image: "/projects/project9.png",
    description: "Elegant business website focused on presentation, visual identity and responsive browsing.",
    tech: ["Website", "Luxury", "Responsive UI"],
    link: "https://lailadeluxe.netlify.app/",
    status: "Live",
  },
  {
    title: "MM Factu WebApp",
    type: "Web App",
    image: "/projects/project10.png",
    description: "Invoice and business management web application for simple administrative workflows.",
    tech: ["Web App", "Invoices", "Management"],
    status: "Completed",
  },
  {
    title: "E-Pharma WebApp",
    type: "Web App",
    image: "/projects/project11.png",
    description: "Pharmacy-oriented web application concept for products, users and digital health workflows.",
    tech: ["Web App", "Healthcare", "Dashboard"],
    link: "https://E-Pharma.vercel.app/",
    status: "Completed",
  },
  {
    title: "Bank Loan Calculator",
    type: "Desktop App",
    image: "/projects/project12.png",
    description: "Bank loan calculator built with Python for credit simulations and financial calculations.",
    tech: ["Python", "Calculator", "Finance"],
    link: "https://github.com/mouadmouasseif/CALCULATEUR-DE-CR-DIT-BANCAIRE-EN-PYTHON",
    status: "Completed",
  },
  {
    title: "School Manager",
    type: "Desktop App",
    image: "/projects/project13.png",
    description: "Desktop school management system for student and administrative data workflows.",
    tech: ["Java", "JavaFX", "SQLite", "Management System"],
    link: "https://github.com/mouadmouasseif/gestion_etudiant.java",
    status: "Completed",
  },
  {
    title: "ENSPOC Website",
    type: "Website",
    image: "/projects/project4.png",
    description: "Additional digital project from Mouad Mouasseif's portfolio collection.",
    tech: ["Digital Product", "UI", "Development"],
    status: "Completed",
  },
  {
    title: "NavFlow App",
    type: "Coming Soon",
    description: "Coming soon navigation and flow management app.",
    tech: ["Navigation", "Flow Management", "Product Design"],
    status: "Coming Soon",
  },
];
