export type SportsTechProject = {
  id: string;
  title: string;
  tagline: string;
  sport: "Basketball" | "Sailing" | "Rowing";
  category: string;
  badge: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
  role: string;
  metrics?: string[];
  demoUrl: string;
  githubUrl?: string;
  images: {
    hero: string;
    gallery: string[];
  };
  accentColor: string;
};

export const sportsTechProjects: SportsTechProject[] = [
  {
    id: "basketmotion-ai",
    title: "BasketMotion AI",
    tagline: "AI-Powered Basketball Analytics & Motion Tracking",
    sport: "Basketball",
    category: "Computer Vision & Performance Analytics",
    badge: "Featured Flagship",
    description:
      "A next-generation basketball training and analytics platform utilizing edge computer vision to track player biomechanics, shot arcs, release speed, and movement patterns in real time without expensive hardware.",
    problem:
      "Traditional basketball tracking systems require costly wearable sensors or multi-camera optical setups ($10k+), making professional biomechanical feedback inaccessible to schools, academies, and grassroots players.",
    solution:
      "BasketMotion AI leverages accessible single-camera video streams processed via MediaPipe and MoveNet pose estimation models to calculate joint angles, shot releases, release time, and spatial heatmaps in the browser.",
    technologies: [
      "MediaPipe Pose",
      "MoveNet",
      "TensorFlow.js",
      "React 19",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Firebase",
      "Chart.js",
    ],
    features: [
      "Real-time Joint Angle & Shot Release Detection",
      "Automated Shot Count & Success Rate Logging",
      "Shooting Arc & Release Consistency Visualizer",
      "Player Court Movement & Heatmap Tracking",
      "Custom Drill Sequences & Interval Training Modes",
      "Exportable Athlete PDF Progress Reports",
    ],
    role: "Sole Creator & Lead Architect (System Design, Computer Vision Pipeline, Full-Stack Development)",
    metrics: [
      "Real-time tracking at 30+ FPS in-browser",
      "Accurate joint angles calculated across 33 keypoints",
      "Zero specialized hardware needed (standard webcam/smartphone)",
    ],
    demoUrl: "https://basketmotion-ai.vercel.app",
    githubUrl: "https://github.com/mouadmouasseif",
    images: {
      hero: "/master-hoop/master-hoop-dashboard.png",
      gallery: [
        "/master-hoop/master-hoop-home.png",
        "/master-hoop/master-hoop-dashboard.png",
        "/master-hoop/master-hoop-promo.png",
      ],
    },
    accentColor: "from-amber-500/20 via-orange-500/10 to-transparent",
  },
  {
    id: "sailmotion-ai",
    title: "SailMotion AI",
    tagline: "Sailing Performance & Tactical Analytics for ILCA and Optimist",
    sport: "Sailing",
    category: "Nautical Sports Analytics & Telemetry",
    badge: "Nautical Innovation",
    description:
      "A specialized nautical performance platform designed for sailing coaches and athletes in Olympic & youth classes (ILCA / Laser & Optimist) to analyze boat trim, heel angle, tacking efficiency, and windward tactical lines.",
    problem:
      "Sailing coaches often rely on subjective visual estimates from chase boats to assess heel angle, hiking posture, and maneuver speed losses during regattas, making objective debriefs difficult.",
    solution:
      "SailMotion AI combines video motion extraction and GPS telemetry overlay to analyze sailor body position (hiking effort), mast rake/heel dynamics, and speed loss through tacks and gybes.",
    technologies: [
      "Computer Vision",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GPS Telemetry Integration",
      "Canvas 2D / 3D Visualizer",
    ],
    features: [
      "ILCA & Optimist Mast Heel Angle Extraction via Vision",
      "Hiking Posture & Center of Mass Stability Analysis",
      "Tack & Gybe Entry/Exit Speed Curve Comparison",
      "Wind Angle Overlay & Layline Optimization Aids",
      "Video Clip Tagging & Annotated Coach Voice Notes",
      "Regatta Session Archive for Progressive Coaching",
    ],
    role: "Creator & Domain Specialist (Certified Sailing Instructor & Full-Stack Developer)",
    metrics: [
      "Tested on water with competitive youth sailors",
      "Reduced coach post-session video debrief time by 40%",
      "Precision angle estimation from lateral chase-boat recordings",
    ],
    demoUrl: "https://sailmotion-ai.vercel.app",
    githubUrl: "https://github.com/mouadmouasseif",
    images: {
      hero: "/thumbnails/yacht.jpg",
      gallery: [
        "/thumbnails/yacht.jpg",
        "/thumbnails/yach3.jpg",
        "/projects/project5.png",
      ],
    },
    accentColor: "from-sky-500/20 via-cyan-500/10 to-transparent",
  },
  {
    id: "rowmotion-race",
    title: "RowMotion AI / RowMotion-RACE",
    tagline: "Rowing Stroke Cadence, Biomechanics & Live Regatta Management",
    sport: "Rowing",
    category: "Regatta Management & Biomechanical Timing",
    badge: "Federation & Club Grade",
    description:
      "A comprehensive sports tech suite developed in collaboration with rowing environments (Fédération Marocaine d'Aviron / Club Nautique Plage de Rabat) offering stroke rate tracking, catch/finish timing synchronization, and regatta timing coordination.",
    problem:
      "Rowing regattas require strict real-time timing, lane assignment, and crew cadence synchronization that are often handled manually or via disjointed software tools.",
    solution:
      "RowMotion AI unifies real-time stroke cadence measurement, video split-screen sync for multi-seat crews, and a cloud-based race management console for officials, coaches, and timing crews.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "WebSockets / Real-Time Data",
      "OpenCV / Video Sync",
      "Node.js",
    ],
    features: [
      "Real-time Stroke Rate (SPM - Strokes Per Minute) Meter",
      "Catch & Finish Phase Synchronization Analysis for Multi-Scullers",
      "Live Lane Tracking & Regatta Draw Management (Heats, Finals)",
      "Official Finish Line Stopwatch with Photo-Finish Video Tagging",
      "Club & Federation Member Management Module",
      "Exportable FISA / World Rowing Format Results",
    ],
    role: "Lead Developer & Nautical Consultant (Working directly with club coaches and athletes)",
    metrics: [
      "Deployed for local nautical club & federation testing",
      "Sub-tenth-of-a-second split timing synchronization",
      "Unified race management and athlete performance telemetry",
    ],
    demoUrl: "https://rowmotionai.vercel.app",
    githubUrl: "https://github.com/mouadmouasseif",
    images: {
      hero: "/thumbnails/cnpr1.jpg",
      gallery: [
        "/thumbnails/cnpr1.jpg",
        "/projects/project3.png",
        "/projects/project14.png",
      ],
    },
    accentColor: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
];
