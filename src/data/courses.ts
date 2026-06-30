export type Course = {
  title: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  language: "Arabic" | "English" | "Français";
  price: "Free";
  image: string;
  description: string;
  tags: string[];
};

export const courses: Course[] = [
  {
    title: "C Programming From Zero",
    category: "Programming",
    level: "Beginner",
    language: "English",
    price: "Free",
    image: "/logos/c.png",
    description: "Learn C programming from scratch with practical examples and exercises.",
    tags: ["C", "Basics", "Exercises"],
  },
  {
    title: "Next.js From Zero",
    category: "Web Development",
    level: "Beginner",
    language: "English",
    price: "Free",
    image: "/logos/Next.js.png",
    description: "Build modern full-stack web applications with Next.js 14.",
    tags: ["Next.js", "React", "Full-Stack"],
  },
  {
    title: "Web Development Bootcamp",
    category: "Web Development",
    level: "Beginner",
    language: "English",
    price: "Free",
    image: "/logos/html.png",
    description: "HTML, CSS, JavaScript, React, Node.js and more.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Microsoft Word Mastery",
    category: "Office & Productivity",
    level: "Beginner",
    language: "English",
    price: "Free",
    image: "/logos/Windows.png",
    description: "Complete guide to mastering Microsoft Word.",
    tags: ["Word", "Office", "Documents"],
  },
  {
    title: "Microsoft Excel Mastery",
    category: "Office & Productivity",
    level: "Beginner",
    language: "English",
    price: "Free",
    image: "/logos/sql.png",
    description: "From basics to advanced formulas, charts and data analysis.",
    tags: ["Excel", "Formulas", "Charts"],
  },
  {
    title: "Microsoft PowerPoint Mastery",
    category: "Office & Productivity",
    level: "Beginner",
    language: "English",
    price: "Free",
    image: "/logos/figma.png",
    description: "Create professional presentations that impress your audience.",
    tags: ["PowerPoint", "Slides", "Presentation"],
  },
  {
    title: "Réseaux Informatiques De A à Z",
    category: "Networks",
    level: "Intermediate",
    language: "Français",
    price: "Free",
    image: "/logos/wireshark.png",
    description: "Comprendre les réseaux, TCP/IP, sécurité et administration.",
    tags: ["Réseaux", "TCP/IP", "Sécurité"],
  },
  {
    title: "Algorithmique & Structures de Données",
    category: "Algorithms",
    level: "Intermediate",
    language: "Français",
    price: "Free",
    image: "/logos/cpp.png",
    description: "Maîtrisez les algorithmes et les structures de données essentielles.",
    tags: ["Algorithmique", "Structures", "Data"],
  },
  {
    title: "Python From Zero",
    category: "Programming",
    level: "Beginner",
    language: "English",
    price: "Free",
    image: "/logos/python.png",
    description: "Learn Python programming with projects and real world examples.",
    tags: ["Python", "Projects", "Basics"],
  },
  {
    title: "Cybersecurity Essentials",
    category: "Cybersecurity",
    level: "Beginner",
    language: "English",
    price: "Free",
    image: "/logos/nmap.png",
    description: "Learn fundamental cybersecurity concepts and best practices.",
    tags: ["Security", "Awareness", "Best Practices"],
  },
  {
    title: "Data Analysis With Excel",
    category: "Data & AI",
    level: "Intermediate",
    language: "English",
    price: "Free",
    image: "/logos/sql.png",
    description: "Analyze data like a pro with pivot tables, dashboards and formulas.",
    tags: ["Data", "Excel", "Dashboards"],
  },
  {
    title: "TICE & Pédagogie Numérique",
    category: "Education",
    level: "Beginner",
    language: "Français",
    price: "Free",
    image: "/logos/figma.png",
    description: "Intégration des technologies dans l’enseignement.",
    tags: ["TICE", "Pédagogie", "CRMEF"],
  },
];

export const courseCategories = [
  "All Courses",
  "Programming",
  "Web Development",
  "Data & AI",
  "Cybersecurity",
  "Networks",
  "Office & Productivity",
  "Education",
  "Algorithms",
  "Free Courses",
];

export const courseLevels = ["Beginner", "Intermediate", "Advanced"] as const;
export const courseLanguages = ["Arabic", "English", "Français"] as const;
