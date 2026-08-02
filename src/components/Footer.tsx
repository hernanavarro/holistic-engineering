import Link from "next/link";
import LogoIcon from "./LogoIcon";
import { footerLinks } from "@/src/data/content";

export default function Footer() {
  return (
    <footer className="bg-negro text-[rgba(255,255,255,0.55)] px-16 py-16 text-center max-md:px-8 max-md:py-12">
      {/* Logo */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <LogoIcon size={32} />
        <div className="text-left">
          <div className="font-titulo font-light text-[0.9rem] tracking-[0.1em] text-[rgba(255,255,255,0.8)]">
            Jimena Navarro
          </div>
          <div
            className="italic text-[0.8rem] text-arena"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Ingeniería Holística
          </div>
        </div>
      </div>

      {/* Links */}
      <ul className="flex gap-8 justify-center flex-wrap list-none mb-8 max-md:gap-4">
        {footerLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="font-titulo font-light text-[0.72rem] tracking-[0.1em] uppercase
                         no-underline text-[rgba(255,255,255,0.4)] hover:text-arena transition-colors duration-300"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Copyright */}
      <p
        className="italic opacity-35 text-[0.82rem]"
        style={{ fontFamily: "var(--font-cormorant), serif" }}
      >
        © {new Date().getFullYear()} · All rights reserved
      </p>
    </footer>
  );
}
