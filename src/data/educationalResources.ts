export type EducationalResource = {
  title: string;
  category: string;
  description: string;
  level: string;
  image?: string;
  tags: string[];
};

export const educationalResources: EducationalResource[] = [
  {
    title: "C from Zero",
    category: "Programming",
    description: "Beginner-friendly resources to learn C syntax, logic, loops, arrays and problem solving.",
    level: "Beginner",
    image: "/logos/c.png",
    tags: ["C", "Algorithmique", "Practice"],
  },
  {
    title: "Next.js Course",
    category: "Web Development",
    description: "Modern web development course covering React, routing, components, styling and deployment.",
    level: "Intermediate",
    image: "/logos/Next.js.png",
    tags: ["Next.js", "React", "Tailwind"],
  },
  {
    title: "Network / Réseaux informatiques",
    category: "Networking",
    description: "Supports for IP addressing, protocols, network security basics and practical troubleshooting.",
    level: "Intermediate",
    image: "/logos/wireshark.png",
    tags: ["Réseaux", "TCP/IP", "Wireshark"],
  },
  {
    title: "Algorithmique",
    category: "Computer Science",
    description: "Structured lessons for variables, conditions, loops, arrays, functions and algorithmic reasoning.",
    level: "Beginner",
    image: "/logos/python.png",
    tags: ["Logic", "Algorithms", "Exercises"],
  },
  {
    title: "Programmation",
    category: "Programming",
    description: "General programming resources for classroom practice, mini projects and code reviews.",
    level: "Beginner to Intermediate",
    image: "/logos/java.png",
    tags: ["Java", "Python", "Projects"],
  },
  {
    title: "TICE",
    category: "Educational Technology",
    description: "Digital tools and classroom activities for better learning, evaluation and collaboration.",
    level: "Teacher Training",
    image: "/images/figma1.png",
    tags: ["TICE", "Classroom", "Digital Learning"],
  },
  {
    title: "Cybersecurity Awareness",
    category: "Cybersecurity",
    description: "Awareness resources about safe browsing, passwords, phishing, networks and digital hygiene.",
    level: "Awareness",
    image: "/logos/nmap.png",
    tags: ["Security", "Awareness", "Kali Linux"],
  },
  {
    title: "Supports pédagogiques CRMEF",
    category: "Pedagogy",
    description: "Teacher training materials, lesson sequences, pedagogical sheets and assessment supports.",
    level: "CRMEF",
    image: "/certificates/license.png",
    tags: ["CRMEF", "Pédagogie", "Évaluation"],
  },
];
