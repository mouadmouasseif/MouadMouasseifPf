export type CertificateItem = {
  title: string;
  image?: string;
  href?: string;
  type?: "image" | "pdf";
};

export const certificates: CertificateItem[] = [
  { title: "Licence en Informatique", image: "/certificates/license.png", type: "image" },
  { title: "Baccalaureat Sciences Physiques", image: "/certificates/bac.png", type: "image" },
  { title: "Attestation - Mouad Mouasseif", href: "/documents/attestation-mouad-mouasseif.pdf", type: "pdf" },
  { title: "Cybersecurity ENSAM Rabat", image: "/certificates/certif8.png", type: "image" },
  { title: "Java Certification", image: "/certificates/certif1.png", type: "image" },
  { title: "Python Programming", image: "/certificates/certif2.png", type: "image" },
  { title: "React Development", image: "/certificates/certif3.png", type: "image" },
  { title: "JavaScript ES6+", image: "/certificates/certif4.png", type: "image" },
  { title: "Responsive Web Design", image: "/certificates/certif5.png", type: "image" },
  { title: "UI/UX Design Figma", image: "/certificates/graphic-design.png", type: "image" },
  { title: "Git & GitHub Certification", image: "/certificates/certif7.png", type: "image" },
  { title: "Certified Cybersecurity Educator Professional (CCEP)", image: "/certificates/certif8.png", type: "image" },
];
