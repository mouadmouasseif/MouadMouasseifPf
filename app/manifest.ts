import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mouad Mouasseif Portfolio",
    short_name: "Mouad Mouasseif",
    description:
      "Portfolio of Mouad Mouasseif, full-stack developer, teacher trainee, AI developer, cybersecurity student and freelance digital services provider.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#06b6d4",
    icons: [
      {
        src: "/logo_v1.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo_v1.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
