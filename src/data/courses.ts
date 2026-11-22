export type Course = {
  title: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  language: "Arabic" | "English" | "Français";
  price: "Free";
  image: string;
  description: string;
  tags: string[];
  link?: string;
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
    description: "Maîtrisez les algorithmes, la logique séquentielle, les variables et les organigrammes avec des simulateurs interactifs.",
    tags: ["Algorithmique", "Structures", "Logique Séquentielle"],
    link: "/documents/cours-algorithmique-sequentielle.html",
  },
  {
    title: "Python From Zero",
    category: "Programming",
    level: "Beginner",
    language: "Français",
    price: "Free",
    image: "/logos/python.png",
    description: "Guide interactif complet : variables, types, conversions, bac à sable de code dans le navigateur et 5 exercices corrigés.",
    tags: ["Python", "Variables", "Bac à Sable", "Exercices"],
    link: "/documents/cours-python-college.html",
  },
  {
    title: "DevOps & DevSecOps Engineering",
    category: "Cybersecurity",
    level: "Intermediate",
    language: "Français",
    price: "Free",
    image: "/logos/Git.png",
    description: "Guide complet avec simulateur interactif de pipeline CI/CD : SAST, DAST, détection de secrets et sécurité logicielle.",
    tags: ["DevOps", "DevSecOps", "CI/CD", "Sécurité", "OWASP"],
    link: "/documents/cours-devops-devsecops.html",
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
  {
    title: "Programmation Créative avec Scratch",
    category: "Education",
    level: "Beginner",
    language: "Français",
    price: "Free",
    image: "/logos/canva.png",
    description: "Création d'un jeu vidéo 'Attrape les étoiles' : événements, boucles, conditions et simulateur en direct.",
    tags: ["Scratch", "Jeux Vidéo", "Créativité", "Collège"],
    link: "/documents/projet-scratch-college.html",
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
