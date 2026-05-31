import { testimoniosHeader, testimonios } from "@/src/data/content";

export default function Testimonios() {
  return (
    <section
      id="testimonios"
      className="px-16 py-28 max-lg:px-10 max-lg:py-20 max-md:px-6"
      style={{ background: "var(--blanco)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="max-w-[580px] mb-16">
          <p className="eyebrow">{testimoniosHeader.eyebrow}</p>
          <span className="divisor" />
          <h2 className="titulo-seccion">
            {testimoniosHeader.titulo[0]}
            <br />
            {testimoniosHeader.titulo[1]}
            <em>{testimoniosHeader.titulo[2]}</em>
          </h2>
        </div>

        {/* Grid masonry-like: 3 cols en desktop */}
        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
          {testimonios.map((t, i) => (
            <div
              key={i}
              className="relative bg-lavanda-pale border border-[rgba(125,92,124,0.1)]
                         p-8 rounded-sm flex flex-col gap-5
                         transition-all duration-300 hover:-translate-y-1
                         hover:shadow-[0_16px_36px_rgba(125,92,124,0.08)]"
            >
              {/* Comilla decorativa */}
              <span
                className="absolute top-5 right-7 text-[3.5rem] leading-none text-lavanda select-none"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
                aria-hidden="true"
              >
                "
              </span>

              {/* Testimonio */}
              <p
                className="italic leading-[1.8] text-gris flex-1 relative z-10"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "1.05rem",
                }}
              >
                {t.texto}
              </p>

              {/* Divisor */}
              <span className="block w-10 h-px bg-arena" aria-hidden="true" />

              {/* Autora */}
              <div className="flex flex-col gap-0.5">
                <span className="font-titulo font-normal text-[0.8rem] tracking-[0.08em] text-negro">
                  {t.nombre}
                </span>
                <span
                  className="italic text-[0.85rem] text-violeta-mid"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  {t.cargo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
