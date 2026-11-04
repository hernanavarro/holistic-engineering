import type { ReactNode } from "react";
import { redes, whatsappUrl } from "@/src/data/content";

// Íconos de redes + WhatsApp para el footer, en colores de la marca.

type Red = (typeof redes)[number]["red"] | "whatsapp";

const iconos: Record<Red, ReactNode> = {
  whatsapp: (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.68 4.61 1.86 6.5L4 29l7.74-1.83A12.93 12.93 0 0016 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22.5a10.46 10.46 0 01-5.36-1.47l-.38-.23-3.94.93.99-3.83-.25-.4A10.46 10.46 0 015.5 15C5.5 9.2 10.2 4.5 16 4.5S26.5 9.2 26.5 15 21.8 25.5 16 25.5zm5.78-7.86c-.31-.16-1.84-.91-2.13-1.01-.28-.1-.49-.16-.7.16-.2.31-.79 1.01-.97 1.22-.18.2-.36.22-.67.07-.31-.16-1.32-.49-2.51-1.56-.93-.83-1.55-1.85-1.73-2.16-.18-.31-.02-.48.13-.63.14-.14.31-.36.47-.54.16-.18.2-.31.31-.52.1-.2.05-.38-.02-.54-.07-.16-.7-1.68-.95-2.3-.25-.6-.5-.52-.7-.53H9.8c-.18 0-.47.07-.71.33C8.85 10.5 8 11.28 8 12.82c0 1.54 1.1 3.02 1.26 3.23.16.2 2.16 3.3 5.24 4.63.73.32 1.3.5 1.75.64.73.23 1.4.2 1.93.12.59-.09 1.84-.75 2.1-1.48.26-.72.26-1.35.18-1.48-.08-.13-.28-.2-.59-.36z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14 8h3V4h-3c-2.8 0-4.5 1.7-4.5 4.5V11H7v4h2.5v7h4v-7h3l.5-4h-3.5V9c0-.6.4-1 1-1z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3L10 15z" />
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.1v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.7a5.7 5.7 0 0 0-.8-.1 5.7 5.7 0 1 0 5.7 5.7V9a7.4 7.4 0 0 0 4.3 1.4V7.3a4.3 4.3 0 0 1-3.2-1.5z" />
    </svg>
  ),
};

export default function RedesSociales() {
  const links: { red: Red; label: string; url: string }[] = [
    ...redes.filter((r) => r.url),
    { red: "whatsapp", label: "WhatsApp", url: whatsappUrl },
  ];

  return (
    <ul className="flex items-center gap-5 list-none" aria-label="Redes y contacto">
        {links.map((l) => (
          <li key={l.red}>
            <a
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={l.red === "whatsapp" ? "Escribime por WhatsApp" : `Seguime en ${l.label}`}
              title={l.label}
              className="block w-8 h-8 text-arena transition-colors duration-300 hover:text-blanco
                         [&>svg]:w-full [&>svg]:h-full"
            >
              {iconos[l.red]}
            </a>
          </li>
        ))}
      </ul>
  );
}
