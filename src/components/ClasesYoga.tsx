import Image from "next/image";
import Link from "next/link";
import { yoga } from "@/src/data/content";

// Hoja: dos esquinas opuestas muy redondeadas (eco de la hoja del logo)
const HOJA = "160px 24px 160px 24px";

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
                  className="font-titulo font-medium tracking-[-0.01em] text-negro mb-2"
                  style={{
                    fontSize: "1.2rem",
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
          <div className="relative isolate w-full max-w-[480px] mx-auto max-lg:max-w-[420px]">
            {/* Halo arena detrás */}
            <div
              className="absolute -bottom-8 -right-8 w-44 h-44 max-md:-bottom-4 max-md:-right-3 max-md:w-28 max-md:h-28 rounded-full bg-arena-light/60 -z-10"
              aria-hidden="true"
            />
            {/* Hoja desplazada (contorno) */}
            <div
              className="absolute inset-0 -translate-x-5 -translate-y-5 max-md:-translate-x-3 max-md:-translate-y-3 border border-violeta-mid/40 -z-10"
              style={{ borderRadius: HOJA }}
              aria-hidden="true"
            />
            {/* Foto en forma de hoja */}
            <div
              className="relative w-full overflow-hidden shadow-[0_30px_60px_-25px_rgba(128,104,139,0.45)]"
              style={{ aspectRatio: "4/5", borderRadius: HOJA }}
            >
              <Image
                src="https://odxbwxmixquriirb.public.blob.vercel-storage.com/yoga-sala.jpg"
                alt="Sala de yoga con mats y luz natural"
                fill
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-cover"
                style={{ objectPosition: "50% 55%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
