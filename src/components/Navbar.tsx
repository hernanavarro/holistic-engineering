"use client";

import { useState } from "react";
import Link from "next/link";
import LogoIcon from "./LogoIcon";
import { navLinks } from "@/src/data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-5
                 bg-[rgba(253,252,251,0.92)] backdrop-blur-md
                 border-b border-[rgba(128,104,139,0.12)] transition-all duration-300
                 max-lg:px-8 max-md:px-6"
    >
      {/* Logo */}
      <Link href="#inicio" className="flex items-center gap-3 no-underline">
        <LogoIcon size={38} />
        <span className="flex flex-col leading-tight">
          <span className="font-titulo font-normal text-[0.9rem] tracking-[0.08em] text-negro">
            Jimena Navarro
          </span>
          <span
            className="font-cuerpo italic text-[0.75rem] tracking-[0.06em] text-violeta"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Ingeniería Holística
          </span>
        </span>
      </Link>

      {/* Links — desktop */}
      <ul className="flex gap-10 list-none max-md:hidden">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="font-titulo font-light text-[0.78rem] tracking-[0.12em] uppercase
                         no-underline text-gris hover:text-violeta transition-colors duration-300"
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="#sesiones"
            className="font-titulo font-normal text-[0.78rem] tracking-[0.12em] uppercase
                       no-underline bg-violeta text-blanco px-5 py-2 rounded-full
                       hover:bg-violeta-mid transition-colors duration-300"
          >
            Comenzar
          </Link>
        </li>
      </ul>

      {/* Hamburger — mobile */}
      <button
        className="hidden max-md:flex flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1"
        aria-label="Abrir menú"
        onClick={() => setOpen(!open)}
      >
        <span
          className={`block w-6 h-px bg-violeta transition-all duration-300 ${open ? "rotate-45 translate-y-[6px]" : ""}`}
        />
        <span
          className={`block w-6 h-px bg-violeta transition-all duration-300 ${open ? "opacity-0" : ""}`}
        />
        <span
          className={`block w-6 h-px bg-violeta transition-all duration-300 ${open ? "-rotate-45 -translate-y-[6px]" : ""}`}
        />
      </button>

      {/* Mobile drawer */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-blanco border-t border-lavanda
                        flex flex-col items-center gap-6 py-8 md:hidden shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-titulo font-light text-[0.82rem] tracking-[0.15em] uppercase
                         no-underline text-gris hover:text-violeta transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#sesiones"
            onClick={() => setOpen(false)}
            className="font-titulo font-normal text-[0.78rem] tracking-[0.12em] uppercase
                       no-underline bg-violeta text-blanco px-7 py-2.5 rounded-full
                       hover:bg-violeta-mid transition-colors"
          >
            Comenzar
          </Link>
        </div>
      )}
    </nav>
  );
}
