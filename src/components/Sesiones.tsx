import Link from "next/link";
import { sesionesHeader, sesiones, alquimia } from "@/src/data/content";

export default function Sesiones() {
  return (
    <section
      id="sesiones"
      className="px-16 py-28 max-lg:px-10 max-lg:py-20 max-md:px-6"
      style={{
        background:
          "linear-gradient(170deg, var(--lavanda-pale) 0%, var(--crema) 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="max-w-[580px] mb-16">
          <p className="eyebrow">{sesionesHeader.eyebrow}</p>
          <span className="divisor" />
          <h2 className="titulo-seccion">
            {sesionesHeader.titulo[0]}
            <br />
            {sesionesHeader.titulo[1]}
            <em>{sesionesHeader.titulo[2]}</em>
          </h2>
          <p className="texto-seccion">{sesionesHeader.texto}</p>
        </div>

        {/* Grid de sesiones */}
        <div className="grid grid-cols-3 gap-7 max-lg:grid-cols-2 max-md:grid-cols-1">
          {sesiones.map((s) => (
            <div
              key={s.numero}
              className="relative bg-blanco border border-[rgba(128,104,139,0.1)] p-10 rounded-sm
                         overflow-hidden transition-all duration-300 hover:-translate-y-1.5
                         hover:shadow-[0_20px_40px_rgba(128,104,139,0.1)]"
            >
              {/* Barra superior */}
              <span
                className="absolute top-0 left-0 w-full h-[3px]"
                style={{
                  background:
                    "linear-gradient(90deg, var(--violeta), var(--arena))",
                }}
                aria-hidden="true"
              />
              <div
                className="italic text-lavanda leading-none mb-4"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "2.5rem",
                }}
              >
                {s.numero}
              </div>
              <div className="font-titulo font-normal text-[0.85rem] tracking-[0.1em] uppercase text-negro mb-3">
                {s.nombre}
              </div>
              <p
                className="italic leading-[1.7] text-gris"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "0.98rem",
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Banner Alquimia */}
        <div
          className="mt-12 bg-violeta text-blanco p-14 rounded-sm flex items-center justify-between gap-8 flex-wrap"
        >
          <div>
            <div className="font-titulo font-light text-[0.8rem] tracking-[0.15em] uppercase opacity-75 mb-1">
              {alquimia.sub}
            </div>
            <div
              className="font-light italic mb-4"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "2rem",
              }}
            >
              {alquimia.titulo}
            </div>
            <p
              className="italic leading-[1.7] opacity-90 max-w-[400px]"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "1rem",
              }}
            >
              {alquimia.texto}
            </p>
          </div>
          <Link
            href={alquimia.cta.href}
            className="shrink-0 bg-blanco text-violeta px-8 py-3 rounded-full font-titulo
                       font-medium text-[0.8rem] tracking-[0.1em] uppercase no-underline
                       whitespace-nowrap transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
          >
            {alquimia.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
