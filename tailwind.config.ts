import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        violeta: "#7D5C7C",
        "violeta-mid": "#9B7A9A",
        lavanda: "#DDD5E8",
        "lavanda-pale": "#F0EDF5",
        crema: "#F7F4F0",
        arena: "#C9BB9A",
        "arena-light": "#E8DFC8",
        negro: "#1A1A1A",
        gris: "#5A5A5A",
        blanco: "#FDFCFB",
      },
      fontFamily: {
        titulo: ["var(--font-inter)", "sans-serif"],
        cuerpo: ["var(--font-cormorant)", "serif"],
      },
      transitionDuration: {
        DEFAULT: "400ms",
      },
    },
  },
  plugins: [],
};

export default config;
