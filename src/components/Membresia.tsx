import Link from "next/link";
import { membresiaHeader, membresias } from "@/src/data/content";

export default function Membresia() {
  return (
    <section
      id="membresia"
      className="px-16 py-28 max-lg:px-10 max-lg:py-20 max-md:px-6"
      style={{
        background:
          "linear-gradient(160deg, var(--crema) 0%, var(--lavanda-pale) 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="max-w-[580px] mb-16">
          <p className="eyebrow">{membresiaHeader.eyebrow}</p>
          <span className="divisor" />
          <h2 className="titulo-seccion">
            {membresiaHeader.titulo[0]}
            <br />
            {membresiaHeader.titulo[1]}
            <em>{membresiaHeader.titulo[2]}</em>
          </h2>
          <p className="texto-seccion">{membresiaHeader.texto}</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
          {membresias.map((m) => (
            <div
              key={m.nombre}
              className={`flex flex-col gap-5 p-10 rounded-sm border transition-all duration-300
                          hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(128,104,139,0.1)]
                          ${
                            m.destacada
                              ? "bg-violeta border-violeta text-blanco"
                              : "bg-blanco border-[rgba(128,104,139,0.12)]"
                          }`}
            >
              <div
                className={`font-titulo font-light text-[0.7rem] tracking-[0.2em] uppercase
                            ${m.destacada ? "text-[rgba(255,255,255,0.7)]" : "text-violeta"}`}
              >
                {m.tipo}
              </div>
              <div
                className={`font-titulo font-medium tracking-[-0.01em] text-[1.35rem] ${m.destacada ? "text-blanco" : "text-negro"}`}
              >
                {m.nombre}
              </div>
              <div
                className={`font-titulo font-medium text-[1.4rem] ${m.destacada ? "text-arena-light" : "text-violeta"}`}
              >
                {m.precio}
              </div>

              <ul className="flex flex-col gap-3 flex-1 list-none">
                {m.items.map((item) => (
                  <li
                    key={item}
                    className={`relative pl-5 italic leading-[1.5] text-[0.95rem]
                                ${m.destacada ? "text-[rgba(255,255,255,0.82)]" : "text-gris"}`}
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    <span
                      className={`absolute left-0 not-italic ${m.destacada ? "text-arena-light" : "text-arena"}`}
                    >
                      –
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="#"
                className={`text-center py-3 px-6 rounded-full font-titulo font-normal
                            text-[0.78rem] tracking-[0.1em] uppercase no-underline
                            transition-all duration-300 border
                            ${
                              m.destacada
                                ? "bg-blanco text-violeta border-blanco hover:bg-lavanda"
                                : "text-violeta border-violeta hover:bg-violeta hover:text-blanco"
                            }`}
              >
                Consultar
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
