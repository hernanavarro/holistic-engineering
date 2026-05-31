import Link from "next/link";
import { yoga } from "@/src/data/content";

export default function ClasesYoga() {
  return (
    <section className="px-16 py-28 max-lg:px-10 max-lg:py-20 max-md:px-6">
      <div id="clases-yoga" className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-[1.1fr_1fr] gap-24 items-center max-lg:grid-cols-1 max-lg:gap-12">
          {/* Lista */}
          <div className="flex flex-col">
            <p className="eyebrow">{yoga.eyebrow}</p>
            <span className="divisor" />
            <h2 className="titulo-seccion">
              {yoga.titulo[0]}
              <br />
              {yoga.titulo[1]}
              <em>{yoga.titulo[2]}</em>
            </h2>
            <p className="texto-seccion mb-8">{yoga.texto}</p>

            {yoga.items.map((item, i) => (
              <div
                key={i}
                className="border-b border-lavanda pb-8 mb-0 last:border-none"
                style={{ marginTop: i === 0 ? "2rem" : "2rem" }}
              >
                <div className="font-titulo font-normal text-[0.82rem] tracking-[0.12em] uppercase text-violeta mb-2">
                  {item.modalidad}
                </div>
                <div
                  className="font-light text-negro mb-2"
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "1.4rem",
                  }}
                >
                  {item.titulo}
                </div>
                <p
                  className="italic leading-[1.7] text-gris"
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "0.98rem",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}

            <Link href={yoga.cta.href} className="btn-primario mt-8 self-start">
              {yoga.cta.label}
            </Link>
          </div>

          {/* Visual */}
          <div className="relative max-lg:hidden">
            <div
              className="w-full flex items-center justify-center rounded-sm text-violeta-mid italic text-[0.95rem]"
              style={{
                aspectRatio: "4/5",
                background:
                  "linear-gradient(150deg, var(--arena-light) 0%, var(--lavanda) 100%)",
                fontFamily: "var(--font-cormorant), serif",
              }}
            >
              Tu foto aquí
            </div>
            <div
              className="absolute top-[-20px] left-[-20px] w-[100px] h-[100px] border border-lavanda rounded-sm -z-10"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
