export type TeachingResource = {
  id: string;
  title: string;
  titleArabic: string;
  category: "Algorithms" | "Programming" | "Networks & Systems" | "Digital Citizenship & AI";
  grade: "1ère Année Collège" | "2ème Année Collège" | "3ème Année Collège" | "All Levels";
  description: string;
  language: "Français & Arabe (Bilingue)" | "Français" | "Arabe";
  format: "Fiche Pédagogique (PDF)" | "Présentation (PPTX/PDF)" | "Activité Interactive" | "Série d'Exercices";
  tags: string[];
  downloadUrl?: string;
  previewUrl?: string;
};

export type TeachingExperienceItem = {
  period: string;
  role: string;
  institution: string;
  location: string;
  status: "Active" | "Completed";
  description: string;
  keyAchievements: string[];
  skillsApplied: string[];
};

export const teachingExperience: TeachingExperienceItem[] = [
  {
    period: "Septembre 2026 – Présent",
    role: "Enseignant d'Informatique (Titulaire)",
    institution: "Collège Zawiyat Sidi Hamza",
    location: "Académie Régionale Drâa-Tafilalet, Maroc",
    status: "Active",
    description:
      "Enseignement des sciences informatiques au cycle secondaire collégial. Conception et animation de séquences pédagogiques axées sur l'algorithmique, la pensée computationnelle, la programmation et l'hygiène numérique.",
    keyAchievements: [
      "Mise en place d'ateliers d'initiation au code (Scratch & Python) adaptés au milieu rural",
      "Élaboration de supports pédagogiques bilingues (Français/Arabe) conformes aux orientations pédagogiques nationales",
      "Intégration d'outils interactifs pour stimuler l'engagement des élèves et l'apprentissage actif",
      "Organisation de sessions de sensibilisation à la cybersécurité et aux usages responsables d'Internet",
    ],
    skillsApplied: ["Pédagogie active", "Didactique de l'informatique", "Conception curriculaire", "Évaluation formative"],
  },
  {
    period: "2025 – 2026",
    role: "Professeur Stagiaire en Informatique",
    institution: "CRMEF Casablanca-Settat",
    location: "Casablanca, Maroc",
    status: "Completed",
    description:
      "Formation professionnelle qualifiante aux métiers de l'enseignement. Didactique générale et spécifique des sciences informatiques, psychopédagogie, gestion de classe et ingénierie de la formation.",
    keyAchievements: [
      "Réalisation d'une recherche empirique sur l'impact des réseaux sociaux sur l'attention des élèves (enquête 50 enseignants)",
      "Stages pratiques d'observation et de prise en main de classes en collèges et lycées",
      "Soutenance académique avec mention d'excellence sur les TICE et l'innovation pédagogique",
    ],
    skillsApplied: ["Recherche action", "Psychopédagogie", "TICE", "Ingénierie de formation"],
  },
  {
    period: "2024 – 2025",
    role: "Assistant Pédagogique & Animateur Numérique",
    institution: "Établissements Omar Ben El Khattab / Al Idrissi",
    location: "Rabat-Salé, Maroc",
    status: "Completed",
    description:
      "Accompagnement d'enseignants et d'élèves dans les laboratoires informatiques, maintenance d'environnements d'apprentissage et soutien didactique.",
    keyAchievements: [
      "Assistance à la prise en main des logiciels de programmation pour les collégiens",
      "Support à la préparation des évaluations numériques",
    ],
    skillsApplied: ["Administration de salles de TP", "Accompagnement individualisé", "Médiation numérique"],
  },
];

export const teachingResources: TeachingResource[] = [
  {
    id: "algo-intro",
    title: "Introduction à l'Algorithmique & Logique Séquentielle",
    titleArabic: "مدخل إلى الخوارزميات والمنطق التسلسلي",
    category: "Algorithms",
    grade: "1ère Année Collège",
    description:
      "Fiche didactique complète avec cours interactif introduisant les notions d'action, d'instruction, de variable et d'organigramme avec analogies du quotidien.",
    language: "Français & Arabe (Bilingue)",
    format: "Fiche Pédagogique (PDF)",
    tags: ["Algorithme", "Logique", "Organigrammes", "Pensée Computationnelle"],
    downloadUrl: "/documents/fiche-algorithmique-college.html",
    previewUrl: "/logos/python.png",
  },
  {
    id: "python-basics",
    title: "Découverte de Python : Variables, Types et Entrées/Sorties",
    titleArabic: "اكتشاف بايثون: المتغيرات والأنواع والمدخلات والمخرجات",
    category: "Programming",
    grade: "2ème Année Collège",
    description:
      "Guide pratique pas-à-pas pour les premiers scripts Python. Comprend des exercices progressifs, la correction type et des fiches d'auto-évaluation pour les élèves.",
    language: "Français & Arabe (Bilingue)",
    format: "Présentation (PPTX/PDF)",
    tags: ["Python", "Variables", "Syntaxe", "Exercices Pratiques"],
    downloadUrl: "/documents/cours-python-college.pdf",
    previewUrl: "/logos/python.png",
  },
  {
    id: "scratch-creative",
    title: "Programmation Créative avec Scratch : Boucles & Événements",
    titleArabic: "البرمجة الإبداعية بواسطة سكراتش: التكرار والأحداث",
    category: "Programming",
    grade: "1ère Année Collège",
    description:
      "Mini-projet de création d'un jeu vidéo interactif. Utilisation des blocs conditionnels, des boucles 'Répéter' et des capteurs de collision.",
    language: "Français & Arabe (Bilingue)",
    format: "Activité Interactive",
    tags: ["Scratch", "Jeux Vidéo", "Créativité", "Blocs"],
    downloadUrl: "/documents/projet-scratch-college.pdf",
    previewUrl: "/logos/java.png",
  },
  {
    id: "networks-architecture",
    title: "Architecture des Réseaux Informatiques & Adressage IP",
    titleArabic: "بنية الشبكات المعلوماتية وعنونة الآي بي",
    category: "Networks & Systems",
    grade: "3ème Année Collège",
    description:
      "Support didactique illustrant les topologies réseau (LAN/WAN), le rôle des routeurs/switchs, et les bases de l'adressage IPv4 et du routage Internet.",
    language: "Français & Arabe (Bilingue)",
    format: "Fiche Pédagogique (PDF)",
    tags: ["Réseaux", "IP", "Topologies", "Internet"],
    downloadUrl: "/documents/fiche-reseaux-college.pdf",
    previewUrl: "/logos/wireshark.png",
  },
  {
    id: "cyber-awareness",
    title: "Citoyenneté Numérique, Sécurité des Mots de Passe & Phishing",
    titleArabic: "المواطنة الرقمية، أمان كلمات المرور والتصيد الاحتيالي",
    category: "Digital Citizenship & AI",
    grade: "All Levels",
    description:
      "Module de sensibilisation interactive sur la protection de la vie privée, les dangers des réseaux sociaux, l'identification des arnaques en ligne et l'éthique de l'IA.",
    language: "Français & Arabe (Bilingue)",
    format: "Série d'Exercices",
    tags: ["Cybersécurité", "Éthique IA", "Vie Privée", "Sensibilisation"],
    downloadUrl: "/documents/guide-cybersecurite-eleves.pdf",
    previewUrl: "/logos/nmap.png",
  },
];

export const educationalMethodology = [
  {
    title: "Apprentissage Actif & Hands-on",
    arabic: "التعلم النشط والتطبيقي",
    description: "Chaque concept théorique est immédiatement expérimenté par du code ou une manipulation concrète.",
    icon: "Code",
  },
  {
    title: "Pédagogie Bilingue Adaptée",
    arabic: "بيداغوجيا ثنائية اللغة",
    description: "Rapprochement des terminologies informatiques internationales (FR/EN) avec des explications claires en arabe.",
    icon: "Globe",
  },
  {
    title: "Pensée Computationnelle Débranchée",
    arabic: "التفكير الحسابي غير المتصل",
    description: "Apprentissage des algorithmes par des jeux et des énigmes avant même d'allumer un écran d'ordinateur.",
    icon: "Brain",
  },
  {
    title: "Culture Numérique & Éthique de l'IA",
    arabic: "الثقافة الرقمية وأخلاقيات الذكاء الاصطناعي",
    description: "Former des créateurs éclairés capables d'analyser l'impact éthique de l'IA et de protéger leurs données.",
    icon: "Shield",
  },
];
