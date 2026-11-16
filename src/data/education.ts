export type EducationItem = {
  year: string;
  title: string;
  description: string;
  badge?: string;
};

export const education: EducationItem[] = [
  {
    year: "2025 – 2026",
    title: "CRMEF Casablanca-Settat",
    description: "Formation professionnelle qualifiante des enseignants du secondaire collégial. Didactique de l'informatique, psychopédagogie et recherche action.",
    badge: "Qualification Professionnelle",
  },
  {
    year: "2025 – 2026",
    title: "ENSAM Rabat / JobInTech",
    description: "Spécialisation en Cybersécurité appliquée, sécurité des réseaux, tests d'intrusion et certification CCEP.",
    badge: "Spécialisation Cyber",
  },
  {
    year: "2021 – 2024",
    title: "École Normale Supérieure (ENS) de Rabat",
    description: "Licence d'Éducation en Informatique (LE informatique). Théorie informatique, algorithmique avancée, génie logiciel et méthodologies didactiques.",
    badge: "Diplôme Universitaire",
  },
  {
    year: "2024 – 2025",
    title: "Oxford Academic",
    description: "Formation certifiante en Graphic Design & Visual Communication.",
  },
  {
    year: "2023",
    title: "GAD Academy",
    description: "Conception graphique et UI/UX Design.",
  },
  {
    year: "2018 – 2019",
    title: "Lycée Ibn El Khatib",
    description: "Baccalauréat en Sciences Physiques.",
  },
];
