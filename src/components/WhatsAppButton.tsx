import { whatsapp } from "@/src/data/content";

export default function WhatsAppButton() {
  const url = `https://wa.me/${whatsapp.numero}?text=${encodeURIComponent(whatsapp.mensaje)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-7 right-7 z-50 group flex items-center gap-3"
    >
      {/* Tooltip */}
      <span
        className="opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0
                   transition-all duration-300 bg-negro text-blanco text-[0.75rem] tracking-[0.06em]
                   px-3 py-2 rounded whitespace-nowrap shadow-md pointer-events-none"
        style={{ fontFamily: "var(--font-jost), sans-serif" }}
      >
        Escribime
      </span>

      {/* Botón */}
      <div
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center
                   shadow-[0_4px_20px_rgba(37,211,102,0.4)]
                   transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_28px_rgba(37,211,102,0.55)]"
      >
        {/* WhatsApp SVG oficial */}
        <svg
          width="28"
          height="28"
          viewBox="0 0 32 32"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.68 4.61 1.86 6.5L4 29l7.74-1.83A12.93 12.93 0 0016 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22.5a10.46 10.46 0 01-5.36-1.47l-.38-.23-3.94.93.99-3.83-.25-.4A10.46 10.46 0 015.5 15C5.5 9.2 10.2 4.5 16 4.5S26.5 9.2 26.5 15 21.8 25.5 16 25.5zm5.78-7.86c-.31-.16-1.84-.91-2.13-1.01-.28-.1-.49-.16-.7.16-.2.31-.79 1.01-.97 1.22-.18.2-.36.22-.67.07-.31-.16-1.32-.49-2.51-1.56-.93-.83-1.55-1.85-1.73-2.16-.18-.31-.02-.48.13-.63.14-.14.31-.36.47-.54.16-.18.2-.31.31-.52.1-.2.05-.38-.02-.54-.07-.16-.7-1.68-.95-2.3-.25-.6-.5-.52-.7-.53H9.8c-.18 0-.47.07-.71.33C8.85 10.5 8 11.28 8 12.82c0 1.54 1.1 3.02 1.26 3.23.16.2 2.16 3.3 5.24 4.63.73.32 1.3.5 1.75.64.73.23 1.4.2 1.93.12.59-.09 1.84-.75 2.1-1.48.26-.72.26-1.35.18-1.48-.08-.13-.28-.2-.59-.36z" />
        </svg>
      </div>
    </a>
  );
}
