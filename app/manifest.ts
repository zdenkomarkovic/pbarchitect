import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PB Architect",
    short_name: "PB Architect",
    description: "Arhitektonski biro u Novom Sadu — projektovanje, inženjering i urbanizam.",
    start_url: "/",
    display: "browser",
    background_color: "#f8f7f4",
    theme_color: "#1a1a1a",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
