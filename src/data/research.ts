export type ResearchProject = {
  id: string;
  title: string;
  subtitle: string;
  institution: string;
  year: string;
  type: "Empirical Teacher-Training Research" | "Pedagogical Case Study";
  abstract: string;
  context: string;
  methodology: {
    sample: string;
    tools: string[];
    duration: string;
  };
  keyFindings: string[];
  recommendations: string[];
  coverImage: string;
  presentationUrl?: string;
  documentUrl?: string;
};

export type EducationalArticle = {
  id: string;
  title: string;
  slug: string;
  category: "EdTech & AI" | "Pedagogy" | "Sports Tech" | "Cybersecurity";
  date: string;
  readTime: string;
  summary: string;
  tags: string[];
};

export const crmefResearch: ResearchProject = {
  id: "crmef-social-media-attention",
  title: "The Impact of Social Media on Students' Attention and Academic Performance",
  subtitle: "Étude empirique sur la dispersion cognitive, l'usage des smartphones et les stratégies d'engagement didactique",
  institution: "CRMEF Casablanca-Settat (Centre Régional des Métiers de l'Éducation et de la Formation)",
  year: "2025 – 2026",
  type: "Empirical Teacher-Training Research",
  abstract:
    "Ce travail de recherche empirique examine l'influence de l'utilisation intensive des réseaux sociaux et des écrans par les apprenants du cycle secondaire sur leurs capacités attentionnelles, leur persévérance cognitive en classe d'informatique et leurs résultats scolaires. L'étude propose une grille d'actions pédagogiques concrètes pour réinvestir l'attention des élèves.",
  context:
    "L'omniprésence des plateformes de flux vidéo courts (TikTok, Reels, Shorts) a transformé le rapport des élèves à la concentration et à l'effort intellectuel différé. Dans les cours de sciences et d'informatique, les enseignants observent une fragmentation accrue de l'attention lors des tâches d'abstraction algorithmique.",
  methodology: {
    sample: "Enquête quantitative et qualitative administrée auprès de 50 enseignants d'informatique et de disciplines scientifiques, complétée par des observations en classe sur 3 établissements.",
    tools: [
      "Questionnaire semi-directif structuré (50 répondants)",
      "Grille d'observation comportementale du temps d'attention continu",
      "Analyse croisée des notes d'évaluation formative et du temps d'écran déclaré",
    ],
    duration: "6 mois d'investigation sur le terrain",
  },
  keyFindings: [
    "78% des enseignants sondés constatent une baisse sensible de la durée moyenne de concentration continue sur les tâches écrites.",
    "Corrélation nette entre l'utilisation nocturne des smartphones (> 2h après 22h) et le déficit d'engagement cognitif dès la première heure de cours.",
    "Les élèves conservent une motivation élevée pour les activités numériques structurées si la boucle de rétroaction (feedback) est rapide et interactive.",
  ],
  recommendations: [
    "Séquençage micro-pédagogique : diviser les cours théoriques en unités courtes de 12 à 15 minutes entrecoupées de défis pratiques.",
    "Gamification didactique : intégrer des quiz interactifs et des énigmes de logique pour canaliser le besoin de stimulation immédiate.",
    "Éducation aux médias : créer des modules transversaux réguliers sur l'architecture persuasive des algorithmes de recommandation.",
  ],
  coverImage: "/projects/PEE.png",
  presentationUrl:
    "https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fmouadmouasseif.vercel.app%2Fdocuments%2Fppe-soutenance-academique.pptx",
  documentUrl: "/projects/PEE.png",
};

export const educationalArticles: EducationalArticle[] = [
  {
    id: "cs-education-morocco",
    title: "The Future of Computer Science Education in Morocco: Bridging Abstract Theory and Real-World Code",
    slug: "future-computer-science-education-morocco",
    category: "Pedagogy",
    date: "Late 2026",
    readTime: "5 min read",
    summary:
      "How secondary school computer science in Morocco is evolving from traditional office productivity training towards genuine algorithmic thinking, Python programming, and computational creativity.",
    tags: ["Morocco", "EdTech", "Curriculum", "Computer Science"],
  },
  {
    id: "ai-middle-school",
    title: "Artificial Intelligence in Middle School Education: Demystifying Algorithms and Building Critical Thinking",
    slug: "ai-in-middle-school-education",
    category: "EdTech & AI",
    date: "Late 2026",
    readTime: "6 min read",
    summary:
      "Why students should learn how neural networks, prompt engineering, and training datasets work before becoming uncritical consumers of generative AI tools.",
    tags: ["AI Literacy", "Middle School", "Ethics", "STEM"],
  },
  {
    id: "digital-citizenship",
    title: "Digital Literacy & Cybersecurity for the Next Generation: Protecting Identity in the Hyperconnected Era",
    slug: "digital-literacy-cybersecurity-next-gen",
    category: "Cybersecurity",
    date: "2026",
    readTime: "4 min read",
    summary:
      "Practical classroom strategies to teach phishing detection, credential hygiene, and privacy fundamentals to teenagers without causing tech anxiety.",
    tags: ["Cybersecurity", "Awareness", "Digital Hygiene", "Education"],
  },
  {
    id: "sports-tech-athletics",
    title: "The Democratization of Sports Technology: Using Browser Computer Vision to Empower Grassroots Athletes",
    slug: "democratization-sports-tech-computer-vision",
    category: "Sports Tech",
    date: "2026",
    readTime: "7 min read",
    summary:
      "How lightweight deep learning models like MediaPipe and MoveNet allow small sports clubs to access NBA/Olympic level biomechanical tracking using just a smartphone.",
    tags: ["Computer Vision", "Sports Analytics", "Basketball", "Innovation"],
  },
];
