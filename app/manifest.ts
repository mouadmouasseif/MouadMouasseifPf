import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mouad Mouasseif | Educator · AI Developer · Innovator",
    short_name: "Mouad Mouasseif",
    description:
      "Official portfolio of Mouad Mouasseif. Moroccan Computer Science Educator at Collège Zawiyat Sidi Hamza, AI developer, and Sports Technology Creator (BasketMotion AI, SailMotion, RowMotion).",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#22d3ee",
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
