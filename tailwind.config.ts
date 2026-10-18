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
        violeta: "#80688B",
        "violeta-mid": "#9A86A3",
        lavanda: "#E6DFEC",
        "lavanda-viva": "#C7AEDB",
        "lavanda-pale": "#F3F0F6",
        crema: "#F7F6F4",
        arena: "#D4C29E",
        "arena-light": "#EAE0CC",
        negro: "#161616",
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
