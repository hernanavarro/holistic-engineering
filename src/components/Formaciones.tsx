import { formacionesHeader, formaciones } from "@/src/data/content";

export default function Formaciones() {
  return (
    <section
      id="formaciones"
      className="bg-negro text-blanco px-16 py-28 max-lg:px-10 max-lg:py-20 max-md:px-6"
    >
      <div className="max-w-[1200px] mx-auto">
        <p className="font-titulo font-light text-[0.7rem] tracking-[0.25em] uppercase text-arena mb-4">
          {formacionesHeader.eyebrow}
        </p>
        <span className="block w-12 h-px bg-arena mb-8" />
        <h2
          className="font-light leading-[1.2] text-blanco mb-6"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
          }}
        >
          {formacionesHeader.titulo[0]}
          <br />
          {formacionesHeader.titulo[1]}
          <em className="italic text-arena">{formacionesHeader.titulo[2]}</em>
        </h2>
        <p
          className="italic leading-[1.85] max-w-[560px] mb-14"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          {formacionesHeader.texto}
        </p>

        <div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1">
          {formaciones.map((f) => (
            <div
              key={f.titulo}
              className="border border-[rgba(201,187,154,0.2)] p-10 rounded-sm
                         transition-all duration-300 hover:border-[rgba(201,187,154,0.5)]
                         hover:bg-[rgba(255,255,255,0.03)]"
            >
              <div className="text-[1.8rem] mb-5" aria-hidden="true">✦</div>
              <div className="font-titulo font-normal text-[0.8rem] tracking-[0.15em] uppercase text-arena mb-2">
                {f.nombre}
              </div>
              <div
                className="font-light text-blanco mb-3"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "1.5rem",
                }}
              >
                {f.titulo}
              </div>
              <p
                className="italic leading-[1.75]"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "0.98rem",
                  color: "rgba(255,255,255,0.6)",
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
