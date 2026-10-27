"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoIcon from "./LogoIcon";
import { navLinks, whatsappUrl } from "@/src/data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Cierra el menú mobile al cambiar de página
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => !href.startsWith("/#") && pathname.startsWith(href);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-5
                 bg-[rgba(253,252,251,0.92)] backdrop-blur-md
                 border-b border-[rgba(128,104,139,0.12)] transition-all duration-300
                 max-xl:px-10 max-md:px-6"
    >
      {/* Logo → home */}
      <Link href="/" className="flex items-center gap-3 no-underline" aria-label="Ir al inicio">
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
      <ul className="flex items-center gap-9 list-none max-lg:gap-6 max-md:hidden">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`font-titulo text-[0.78rem] tracking-[0.12em] uppercase no-underline
                          transition-colors duration-300 hover:text-violeta
                          border-b pb-1
                          ${
                            isActive(link.href)
                              ? "text-violeta font-normal border-violeta"
                              : "text-gris font-light border-transparent"
                          }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-titulo font-normal text-[0.78rem] tracking-[0.12em] uppercase
                       no-underline bg-violeta text-blanco px-5 py-2 rounded-full
                       hover:bg-violeta-mid transition-colors duration-300"
          >
            Contacto
          </a>
        </li>
      </ul>

      {/* Hamburger — mobile */}
      <button
        className="hidden max-md:flex flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
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
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`font-titulo text-[0.82rem] tracking-[0.15em] uppercase no-underline
                          hover:text-violeta transition-colors
                          ${isActive(link.href) ? "text-violeta font-normal" : "text-gris font-light"}`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="font-titulo font-normal text-[0.78rem] tracking-[0.12em] uppercase
                       no-underline bg-violeta text-blanco px-7 py-2.5 rounded-full
                       hover:bg-violeta-mid transition-colors"
          >
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
}
