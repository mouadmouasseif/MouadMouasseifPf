export type DesignItem = {
  title: string;
  category: string;
  image: string;
  description?: string;
  link?: string;
};

export const playerDesigns: DesignItem[] = Array.from({ length: 29 }, (_, index) => ({
  title: `Player Design ${index + 1}`,
  category: "Player Design",
  image: `/player/${index + 1}.png`,
  description: "Basketball portrait, player profile card and sport glow composition.",
}));

export const eventDesigns: DesignItem[] = Array.from({ length: 28 }, (_, index) => ({
  title: `Event Poster ${index + 1}`,
  category: "Event Design",
  image: `/event/${index + 1}.png`,
  description: "Match day, score, championship and sport event poster design.",
}));

export const logoDesigns: DesignItem[] = [
  {
    title: "Mouad Mouasseif Personal Logo",
    category: "Team & Logo Design",
    image: "/logo_v1.png",
    description: "Personal Mouad Mouasseif logo identity.",
  },
  ...Array.from({ length: 24 }, (_, index) => ({
    title: `Logo Design ${index + 1}`,
    category: "Team & Logo Design",
    image: `/logo/${index + 1}.png`,
    description: "Team identity, sport branding and logo exploration.",
  })),
];

export const uxUiDesigns: DesignItem[] = [
  {
    title: "UX/UI Figma Project 1",
    category: "UX/UI Figma",
    image: "/images/figma1.png",
    link: "https://www.figma.com/design/ksrfpv2mZgTQky4kGMtu4Y/Untitled?node-id=1-15&t=rQYhlspVR3QXkkY4-1",
    description: "Web and mobile interface design exploration.",
  },
  {
    title: "UX/UI Figma Project 2",
    category: "UX/UI Figma",
    image: "/images/figma2.png",
    link: "https://www.figma.com/design/n0bj4HBoTd3umkF6gp94V8/Untitled?node-id=3-2011&t=uHfVIjsMSQlCI0AR-1",
    description: "User interface prototype and layout exploration.",
  },
  {
    title: "UX/UI Figma Project 3",
    category: "UX/UI Figma",
    image: "/images/figma3.png",
    link: "https://www.figma.com/design/UDYVsnSufFb22VOMEwxz0J/Untitled?node-id=0-1&t=YY2lAYtTyiOiJZve-1",
    description: "Digital product interface concept.",
  },
  {
    title: "UX/UI Figma Project 4",
    category: "UX/UI Figma",
    image: "/images/figma4.png",
    link: "https://www.figma.com/design/rNJJmglN3ILQmjibJt0YCC/UI-Design-Exploration-on-Sign-in-Sign-up--Community-?node-id=0-1&t=htG59bK42S51uc8s-1",
    description: "Sign-in and sign-up UI design exploration.",
  },
  {
    title: "UX/UI Figma Project 5",
    category: "UX/UI Figma",
    image: "/images/figma5.png",
    link: "https://www.figma.com/design/vxqsLLEFUzmVtfKX4qBdKq/Untitled?node-id=0-1&t=lRRIIw2npRO7xIKF-1",
    description: "Responsive interface and visual system concept.",
  },
  {
    title: "UX/UI Figma Project 6",
    category: "UX/UI Figma",
    image: "/images/figma6.png",
    link: "https://www.figma.com/design/PELleWmO8zr0Of62kKxPm0/Untitled?node-id=0-1&t=wW5e97vboU42YLmG-1",
    description: "Web and mobile UX/UI design presentation.",
  },
];
