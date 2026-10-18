import { formacionesHeader, formaciones } from "@/src/data/content";

export default function Formaciones() {
  return (
    <section
      id="formaciones"
      className="bg-violeta text-blanco px-16 py-28 max-lg:px-10 max-lg:py-20 max-md:px-6"
    >
      <div className="max-w-[1200px] mx-auto">
        <p className="font-titulo font-light text-[0.7rem] tracking-[0.25em] uppercase text-arena-light mb-4">
          {formacionesHeader.eyebrow}
        </p>
        <span className="block w-12 h-px bg-arena-light mb-8" />
        <h2
          className="font-titulo font-medium leading-[1.15] tracking-[-0.015em] text-blanco mb-6"
          style={{
            fontSize: "clamp(1.75rem, 3vw, 2.6rem)",
          }}
        >
          {formacionesHeader.titulo[0]}
          <br />
          {formacionesHeader.titulo[1]}
          <em className="titulo-acento !text-arena-light">{formacionesHeader.titulo[2]}</em>
        </h2>
        <p
          className="italic leading-[1.85] max-w-[560px] mb-14"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.85)",
          }}
        >
          {formacionesHeader.texto}
        </p>

        <div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1">
          {formaciones.map((f) => (
            <div
              key={f.titulo}
              className="border border-[rgba(255,255,255,0.22)] p-10 rounded-sm
                         transition-all duration-300 hover:border-[rgba(234,224,204,0.6)]
                         hover:bg-[rgba(255,255,255,0.06)]"
            >
              <div className="text-[1.8rem] mb-5" aria-hidden="true">✦</div>
              <div className="font-titulo font-normal text-[0.8rem] tracking-[0.15em] uppercase text-arena-light mb-2">
                {f.nombre}
              </div>
              <div
                className="font-titulo font-medium tracking-[-0.01em] text-blanco mb-3"
                style={{
                  fontSize: "1.3rem",
                }}
              >
                {f.titulo}
              </div>
              <p
                className="italic leading-[1.75]"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "0.98rem",
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
