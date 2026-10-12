import Image from "next/image";
import { quienSoy } from "@/src/data/content";

export default function QuienSoy() {
  return (
    <section
      id="quien-soy"
      className="bg-blanco max-w-[1200px] mx-auto grid grid-cols-2 gap-24 items-center
                 px-16 py-28 max-lg:grid-cols-1 max-lg:gap-12 max-lg:px-10 max-lg:py-20 max-md:px-6"
    >
      {/* Foto */}
      <div className="relative">
        <div
          className="relative w-full overflow-hidden rounded-sm"
          style={{ aspectRatio: "3/4" }}
        >
          <Image
            src="https://odxbwxmixquriirb.public.blob.vercel-storage.com/quiensoy-foto-2.jpg"
            alt="Jimena Navarro"
            fill
            className="object-cover"
          />
        </div>
        <div
          className="absolute bottom-[-20px] right-[-20px] w-[120px] h-[120px] border border-arena rounded-sm -z-10"
          aria-hidden="true"
        />
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
