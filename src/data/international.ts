export type CollaborationPillar = {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge: string;
};

export type TargetRegion = {
  country: string;
  flag: string;
  status: "Active Collaboration" | "Targeted Network";
  focus: string;
};

export type OpportunityTrack = {
  category: "Education" | "Technology" | "Research & Keynotes";
  title: string;
  description: string;
  examples: string[];
  ctaText: string;
};

export const internationalPillars: CollaborationPillar[] = [
  {
    id: "teacher-exchange",
    title: "International Teacher Exchanges & eTwinning",
    description:
      "Cross-border educational projects connecting Moroccan students with international classrooms to collaborate on coding challenges, digital literacy, and cultural exchange.",
    icon: "Users",
    badge: "Pedagogy",
  },
  {
    id: "unesco-edtech",
    title: "UNESCO & Global EdTech Initiatives",
    description:
      "Contributing to global frameworks on digital competencies, AI in the classroom, open educational resources (OER), and equitable digital transformation for developing regions.",
    icon: "Award",
    badge: "Global Impact",
  },
  {
    id: "opensource-curriculum",
    title: "Open-Source Educational Resources (OER)",
    description:
      "Developing accessible, bilingual (French/Arabic/English) computer science curricula, coding exercises, and unplugged computing toolkits for educators worldwide.",
    icon: "BookOpen",
    badge: "Open Education",
  },
  {
    id: "sports-analytics-partners",
    title: "Sports Technology & Computer Vision Research",
    description:
      "Collaborating with universities, basketball academies, and sailing clubs internationally to advance camera-based biomechanical tracking without prohibitive costs.",
    icon: "Activity",
    badge: "Innovation",
  },
];

export const targetRegions: TargetRegion[] = [
  { country: "Morocco", flag: "🇲🇦", status: "Active Collaboration", focus: "Public Education, CRMEF & Sports Federations" },
  { country: "France", flag: "🇫🇷", status: "Active Collaboration", focus: "Remote Software Engineering & EdTech Exchanges" },
  { country: "United Kingdom", flag: "🇬🇧", status: "Targeted Network", focus: "Academic Research & STEM Pedagogy" },
  { country: "United States", flag: "🇺🇸", status: "Targeted Network", focus: "AI in Sports & Computer Vision Collaborations" },
  { country: "Canada", flag: "🇨🇦", status: "Targeted Network", focus: "Bilingual Digital Education & Tech Partnerships" },
  { country: "United Arab Emirates", flag: "🇦🇪", status: "Targeted Network", focus: "EdTech Innovation & Smart Learning Hubs" },
  { country: "Saudi Arabia", flag: "🇸🇦", status: "Targeted Network", focus: "Vision 2030 Digital Education & Youth Tech" },
  { country: "Qatar", flag: "🇶🇦", status: "Targeted Network", focus: "Sports Science & World-Class Athletic Tech" },
];

export const opportunityTracks: OpportunityTrack[] = [
  {
    category: "Education",
    title: "International Teacher Exchanges & Curriculum Design",
    description:
      "Available for collaborative school partnerships, bilingual STEM resource development, and teacher training workshops on digital pedagogy.",
    examples: ["Bilingual Scratch/Python curriculum design", "Classroom-to-classroom joint coding challenges", "Digital pedagogy mentorship"],
    ctaText: "Discuss Educational Exchange",
  },
  {
    category: "Technology",
    title: "AI, Computer Vision & EdTech Engineering",
    description:
      "Partnering with tech startups, educational platforms, and athletic organizations to build real-time vision pipelines and full-stack applications.",
    examples: ["Browser-based pose tracking (MediaPipe/MoveNet)", "Interactive educational dashboards", "Web & mobile product engineering"],
    ctaText: "Start a Tech Collaboration",
  },
  {
    category: "Research & Keynotes",
    title: "Conferences, Workshops & Educational Insights",
    description:
      "Delivering presentations and practical hands-on workshops on AI literacy in secondary schools, digital attention span, and sports computer vision.",
    examples: ["AI in the Middle School Classroom", "Screen time & student attention findings", "Sports tech on a budget"],
    ctaText: "Invite for a Workshop / Talk",
  },
];
