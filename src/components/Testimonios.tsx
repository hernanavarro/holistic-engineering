"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { testimoniosHeader, testimonios } from "@/src/data/content";

const INTERVALO_MS = 6000;

// Carrusel de testimonios: una sola fila que avanza sola (pausa al pasar el mouse
// o al interactuar) y se puede deslizar con el dedo o con las flechas.
export default function Testimonios() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activo, setActivo] = useState(0);
  const [pausado, setPausado] = useState(false);
  const [paginas, setPaginas] = useState(testimonios.length);

  // Ancho de un paso = ancho de una card + gap
  const paso = useCallback(() => {
    const track = trackRef.current;
    const card = track?.firstElementChild as HTMLElement | null;
    if (!track || !card) return 0;
    const gap = parseFloat(getComputedStyle(track).columnGap || "0");
    return card.offsetWidth + gap;
  }, []);

  const irA = useCallback(
    (i: number) => {
      const track = trackRef.current;
      if (!track) return;
      track.scrollTo({ left: i * paso(), behavior: "smooth" });
    },
    [paso]
  );

  // Cantidad de posiciones posibles según cuántas cards entran a la vez
  useEffect(() => {
    const calcular = () => {
      const track = trackRef.current;
      const p = paso();
      if (!track || !p) return;
      const visibles = Math.max(1, Math.round((track.clientWidth + 1) / p));
      setPaginas(Math.max(1, testimonios.length - visibles + 1));
    };
    calcular();
    window.addEventListener("resize", calcular);
    return () => window.removeEventListener("resize", calcular);
  }, [paso]);

  // Sincroniza el punto activo con el scroll (incluye swipe manual)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const p = paso();
      if (p) setActivo(Math.round(track.scrollLeft / p));
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [paso]);

  // Autoplay (respeta prefers-reduced-motion)
  useEffect(() => {
    if (pausado) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      irA(activo + 1 >= paginas ? 0 : activo + 1);
    }, INTERVALO_MS);
    return () => clearInterval(id);
  }, [activo, paginas, pausado, irA]);

  const anterior = () => irA(activo <= 0 ? paginas - 1 : activo - 1);
  const siguiente = () => irA(activo + 1 >= paginas ? 0 : activo + 1);

  return (
    <section
      id="testimonios"
      className="px-16 py-28 max-lg:px-10 max-lg:py-20 max-md:px-6"
      style={{ background: "var(--blanco)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header + flechas */}
        <div className="flex items-end justify-between gap-8 mb-12">
          <div className="max-w-[580px]">
            <p className="eyebrow">{testimoniosHeader.eyebrow}</p>
            <span className="divisor" />
            <h2 className="titulo-seccion">
              {testimoniosHeader.titulo[0]}
              <br />
              {testimoniosHeader.titulo[1]}
              <em>{testimoniosHeader.titulo[2]}</em>
            </h2>
          </div>

          <div className="flex gap-3 shrink-0 max-md:hidden">
            {[
              { fn: anterior, label: "Testimonio anterior", icon: "←" },
              { fn: siguiente, label: "Testimonio siguiente", icon: "→" },
            ].map((b) => (
              <button
                key={b.label}
                type="button"
                onClick={b.fn}
                aria-label={b.label}
                className="w-11 h-11 rounded-full border border-[rgba(128,104,139,0.25)] text-violeta
                           flex items-center justify-center transition-colors duration-300
                           hover:bg-violeta hover:text-blanco hover:border-violeta"
              >
                {b.icon}
              </button>
            ))}
          </div>
        </div>

        {/* Carrusel */}
        <div
          ref={trackRef}
          onMouseEnter={() => setPausado(true)}
          onMouseLeave={() => setPausado(false)}
          onTouchStart={() => setPausado(true)}
          onFocus={() => setPausado(true)}
          onBlur={() => setPausado(false)}
          role="region"
          aria-roledescription="carrusel"
          aria-label="Testimonios"
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth py-2 -my-2
                     [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonios.map((t, i) => (
            <div
              key={i}
              aria-roledescription="slide"
              aria-label={`${i + 1} de ${testimonios.length}`}
              className="relative snap-start shrink-0 bg-lavanda-pale border border-[rgba(128,104,139,0.1)]
                         p-8 rounded-lg flex flex-col gap-5
                         basis-[calc((100%-3rem)/3)] max-lg:basis-[calc((100%-1.5rem)/2)] max-md:basis-[88%]"
            >
              {/* Comilla decorativa */}
              <span
                className="absolute top-5 right-7 text-[3.5rem] leading-none text-lavanda select-none"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
                aria-hidden="true"
              >
                &ldquo;
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

        {/* Puntos */}
        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: paginas }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => irA(i)}
              aria-label={`Ir al testimonio ${i + 1}`}
              aria-current={i === activo}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activo ? "w-6 bg-violeta" : "w-1.5 bg-lavanda hover:bg-violeta-mid"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
