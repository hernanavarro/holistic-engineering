import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ing. Holística by Jimena Navarro",
  description:
    "Acompañamiento holístico para mujeres: Reiki, Registros Akáshicos, Tarot Evolutivo, Constelaciones y más.",
  icons: {
    icon: "https://odxbwxmixquriirb.public.blob.vercel-storage.com/icon.png",
    apple:
      "https://odxbwxmixquriirb.public.blob.vercel-storage.com/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
