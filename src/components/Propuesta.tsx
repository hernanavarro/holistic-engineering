import Link from "next/link";
import { propuestaHeader, secciones } from "@/src/data/content";

// Bloque de la home que presenta la propuesta y lleva a cada sección.
export default function Propuesta() {
  return (
    <section
      id="propuesta"
      className="scroll-mt-20 px-16 py-28 max-lg:px-10 max-lg:py-20 max-md:px-6"
      style={{
        background:
          "linear-gradient(170deg, var(--lavanda-pale) 0%, var(--crema) 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="max-w-[580px] mb-16">
          <p className="eyebrow">{propuestaHeader.eyebrow}</p>
          <span className="divisor" />
          <h2 className="titulo-seccion">
            {propuestaHeader.titulo[0]}
            <br />
            {propuestaHeader.titulo[1]}
            <em>{propuestaHeader.titulo[2]}</em>
          </h2>
          <p className="texto-seccion">{propuestaHeader.texto}</p>
        </div>

        {/* Una card por sección */}
        <div className="grid grid-cols-4 gap-6 max-xl:grid-cols-2 max-md:grid-cols-1">
          {secciones.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group relative flex flex-col bg-blanco border border-[rgba(128,104,139,0.1)]
                         p-9 rounded-sm no-underline overflow-hidden transition-all duration-300
                         hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(128,104,139,0.1)]"
            >
              <span
                className="absolute top-0 left-0 w-full h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{ background: "linear-gradient(90deg, var(--violeta), var(--arena))" }}
                aria-hidden="true"
              />
              <span className="font-titulo font-light text-[0.68rem] tracking-[0.18em] uppercase text-violeta mb-3">
                {s.eyebrow}
              </span>
              <span className="font-titulo font-medium tracking-[-0.01em] text-negro text-[1.35rem] mb-3">
                {s.label}
              </span>
              <p
                className="italic leading-[1.7] text-gris flex-1 mb-8"
                style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1rem" }}
              >
                {s.resumen}
              </p>
              <span className="font-titulo font-normal text-[0.75rem] tracking-[0.12em] uppercase text-violeta inline-flex items-center gap-2">
                Ver más
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
