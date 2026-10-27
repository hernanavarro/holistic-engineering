import Image from "next/image";
import { quienSoy } from "@/src/data/content";

// Arco: semicírculo arriba y esquinas suaves abajo (válido para relación 3/4)
const ARCO = "50% 50% 28px 28px / 37.5% 37.5% 28px 28px";

export default function QuienSoy() {
  return (
    <section
      id="quien-soy"
      className="scroll-mt-20 bg-blanco max-w-[1200px] mx-auto grid grid-cols-2 gap-24 items-center
                 px-16 py-28 max-lg:grid-cols-1 max-lg:gap-12 max-lg:px-10 max-lg:py-20 max-md:px-6"
    >
      {/* Foto */}
      <div className="relative isolate w-full max-w-[460px] mx-auto">
        {/* Halo suave detrás */}
        <div
          className="absolute -top-8 -left-8 w-40 h-40 max-md:-top-4 max-md:-left-3 max-md:w-28 max-md:h-28 rounded-full bg-lavanda-pale -z-10"
          aria-hidden="true"
        />
        {/* Arco desplazado (contorno) */}
        <div
          className="absolute inset-0 translate-x-5 translate-y-5 max-md:translate-x-3 max-md:translate-y-3 border border-arena -z-10"
          style={{ borderRadius: ARCO }}
          aria-hidden="true"
        />
        {/* Foto en forma de arco */}
        <div
          className="relative w-full overflow-hidden shadow-[0_30px_60px_-25px_rgba(128,104,139,0.45)]"
          style={{ aspectRatio: "3/4", borderRadius: ARCO }}
        >
          <Image
            src="https://odxbwxmixquriirb.public.blob.vercel-storage.com/quiensoy-foto-2.jpg"
            alt="Jimena Navarro"
            fill
            sizes="(max-width: 1024px) 90vw, 460px"
            className="object-cover"
            style={{ objectPosition: "50% 30%" }}
          />
        </div>
      </div>

      {/* Contenido */}
      <div>
        <p className="eyebrow">{quienSoy.eyebrow}</p>
        <span className="divisor" />
        <h2 className="titulo-seccion">
          {quienSoy.titulo[0]}
          <br />
          {quienSoy.titulo[1]}
          <em>{quienSoy.titulo[2]}</em>
        </h2>
        {quienSoy.parrafos.map((p, i) => (
          <p key={i} className="texto-seccion mb-4 last:mb-0">
            {p}
          </p>
        ))}

        <div className="flex flex-col gap-5 mt-10">
          {quienSoy.valores.map((valor, i) => (
            <div key={i} className="flex gap-4 items-start">
              <span
                className="w-2 h-2 rounded-full bg-violeta mt-[0.45rem] shrink-0"
                aria-hidden="true"
              />
              <span
                className="italic text-gris leading-[1.6]"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "1rem",
                }}
              >
                {valor}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
