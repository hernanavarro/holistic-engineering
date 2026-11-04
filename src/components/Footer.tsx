import Link from "next/link";
import LogoIcon from "./LogoIcon";
import RedesSociales from "./RedesSociales";

// Una sola fila: logo y nombre a la izquierda, copyright al medio, redes a la derecha.
// En mobile se apila centrado (logo, redes, copyright).
export default function Footer() {
  return (
    <footer
      id="contacto"
      className="bg-negro text-[rgba(255,255,255,0.55)] px-16 py-10 max-lg:px-10 max-md:px-6 max-md:py-10"
    >
      <div
        className="max-w-[1200px] mx-auto grid grid-cols-[1fr_auto_1fr] items-center gap-6
                   max-md:flex max-md:flex-col max-md:gap-6"
      >
        {/* Logo + nombre */}
        <Link href="/" className="flex items-center gap-3 no-underline justify-self-start" aria-label="Ir al inicio">
          <LogoIcon size={32} />
          <span className="text-left">
            <span className="block font-titulo font-light text-[0.9rem] tracking-[0.1em] text-[rgba(255,255,255,0.8)]">
              Jimena Navarro
            </span>
            <span
              className="block italic text-[0.8rem] text-arena"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Ingeniería Holística
            </span>
          </span>
        </Link>

        {/* Copyright */}
        <p
          className="italic opacity-35 text-[0.82rem] text-center max-md:order-last"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          © {new Date().getFullYear()} · All rights reserved
        </p>

        {/* Redes */}
        <div className="justify-self-end">
          <RedesSociales />
        </div>
      </div>
    </footer>
  );
}
