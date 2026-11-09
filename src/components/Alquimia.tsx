import Image from "next/image";
import Link from "next/link";
import { alquimiaPagina as a, whatsapp } from "@/src/data/content";

const whatsappAlquimia = `https://wa.me/${whatsapp.numero}?text=${encodeURIComponent(a.whatsappMensaje)}`;

const cormorant = { fontFamily: "var(--font-cormorant), serif" };

// Arco: semicírculo arriba y esquinas suaves abajo (igual que en Quién soy)
const ARCO = "50% 50% 28px 28px / 37.5% 37.5% 28px 28px";

function Encabezado({
  eyebrow,
  titulo,
  centrado = false,
}: {
  eyebrow: string;
  titulo: string[];
  centrado?: boolean;
}) {
  return (
    <>
      <p className="eyebrow">{eyebrow}</p>
      <span className={`divisor ${centrado ? "mx-auto" : ""}`} />
      <h2 className="titulo-seccion">
        {titulo[0]}
        <br />
        {titulo[1]}
        <em>{titulo[2]}</em>
      </h2>
    </>
  );
}

export default function Alquimia() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden px-16 py-36 text-center max-lg:px-10 max-lg:py-28 max-md:px-6 max-md:py-24">
        <Image
          src={a.hero.fondo}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover -z-20"
          style={{ objectPosition: "50% 40%" }}
        />
        {/* Velo oscuro para que el texto blanco se lea */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(22,22,22,0.45) 0%, rgba(22,22,22,0.55) 60%, rgba(22,22,22,0.7) 100%)",
          }}
          aria-hidden="true"
        />
        <div className="max-w-[720px] mx-auto text-blanco">
          <p className="font-titulo font-light text-[0.7rem] tracking-[0.25em] uppercase text-arena-light mb-4">
            {a.hero.eyebrow}
          </p>
          <h1
            className="italic font-light leading-none mb-6"
            style={{ ...cormorant, fontSize: "clamp(4rem, 11vw, 7.5rem)" }}
          >
            {a.hero.titulo}
          </h1>
          <p className="font-titulo font-light text-[clamp(1.2rem,2.4vw,1.6rem)] tracking-[-0.01em] mb-3">
            {a.hero.bajada}
          </p>
          <p className="italic text-[1.2rem] opacity-90 mb-10" style={cormorant}>
            {a.hero.frase}
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href={whatsappAlquimia}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primario"
            >
              {a.hero.ctaPrimario}
            </a>
            <a
              href={a.hero.ctaSecundario.href}
              className="inline-block px-9 py-3 rounded-full border border-blanco text-blanco font-titulo font-normal
                         text-[0.82rem] tracking-[0.1em] uppercase no-underline transition-all duration-300
                         hover:bg-blanco hover:text-violeta hover:-translate-y-0.5"
            >
              {a.hero.ctaSecundario.label}
            </a>
          </div>
        </div>
      </section>

      {/* ── Para vos si… ── */}
      <section className="bg-blanco px-16 py-28 max-lg:px-10 max-lg:py-20 max-md:px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-20 items-start max-lg:grid-cols-1 max-lg:gap-10">
          <div>
            <Encabezado eyebrow={a.paraVos.eyebrow} titulo={a.paraVos.titulo} />
            <p className="texto-seccion">{a.paraVos.texto}</p>
          </div>
          <ul className="flex flex-col list-none">
            {a.paraVos.items.map((item) => (
              <li
                key={item}
                className="relative pl-8 py-6 border-b border-[rgba(128,104,139,0.12)] first:pt-0 last:border-b-0
                           italic leading-[1.6] text-negro text-[1.15rem]"
                style={cormorant}
              >
                <span
                  className="absolute left-0 not-italic text-arena"
                  aria-hidden="true"
                >
                  ✦
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── ¿De qué se trata? ── */}
      <section
        className="px-16 py-28 max-lg:px-10 max-lg:py-20 max-md:px-6"
        style={{
          background:
            "linear-gradient(160deg, var(--crema) 0%, var(--lavanda-pale) 100%)",
        }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-[720px]">
            <Encabezado
              eyebrow={a.deQueSeTrata.eyebrow}
              titulo={a.deQueSeTrata.titulo}
            />
            {a.deQueSeTrata.parrafos.map((p) => (
              <p key={p} className="texto-seccion mb-4 last:mb-0">
                {p}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-6 mt-14 max-md:grid-cols-1">
            {a.deQueSeTrata.datos.map((d) => (
              <div
                key={d.label}
                className="bg-blanco border border-[rgba(128,104,139,0.1)] rounded-lg px-8 py-7 flex items-baseline gap-4"
              >
                <span
                  className="italic text-violeta leading-none"
                  style={{ ...cormorant, fontSize: "3rem" }}
                >
                  {d.valor}
                </span>
                <span className="font-titulo font-light text-[0.78rem] tracking-[0.12em] uppercase text-gris">
                  {d.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ¿Cómo trabajamos? ── */}
      <section className="bg-blanco px-16 py-28 max-lg:px-10 max-lg:py-20 max-md:px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-[580px] mb-14">
            <Encabezado
              eyebrow={a.comoTrabajamos.eyebrow}
              titulo={a.comoTrabajamos.titulo}
            />
          </div>
          <div className="grid grid-cols-3 gap-7 max-lg:grid-cols-1">
            {a.comoTrabajamos.pasos.map((p) => (
              <div
                key={p.numero}
                className="relative bg-blanco border border-[rgba(128,104,139,0.1)] p-10 rounded-lg overflow-hidden"
              >
                <span
                  className="absolute top-0 left-0 w-full h-[3px]"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--violeta), var(--arena))",
                  }}
                  aria-hidden="true"
                />
                <div
                  className="italic text-lavanda-viva leading-none mb-4"
                  style={{ ...cormorant, fontSize: "2.5rem" }}
                >
                  {p.numero}
                </div>
                <div className="font-titulo font-normal text-[0.85rem] tracking-[0.1em] uppercase text-negro mb-3">
                  {p.nombre}
                </div>
                <p
                  className="italic leading-[1.7] text-gris"
                  style={{ ...cormorant, fontSize: "1.02rem" }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ¿Qué incluye? ── */}
      <section
        className="px-16 py-28 max-lg:px-10 max-lg:py-20 max-md:px-6"
        style={{
          background:
            "linear-gradient(170deg, var(--lavanda-pale) 0%, var(--crema) 100%)",
        }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-[580px] mb-14">
            <Encabezado eyebrow={a.incluye.eyebrow} titulo={a.incluye.titulo} />
          </div>
          <ul className="grid grid-cols-2 gap-5 list-none max-md:grid-cols-1">
            {a.incluye.items.map((item) => (
              <li
                key={item}
                className="flex gap-4 items-start bg-blanco border border-[rgba(128,104,139,0.1)] rounded-lg px-8 py-6
                           italic leading-[1.6] text-negro text-[1.08rem]"
                style={cormorant}
              >
                <span className="not-italic text-arena mt-[2px]" aria-hidden="true">
                  ✦
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── ¿Quién te acompaña? ── */}
      <section className="bg-blanco px-16 py-28 max-lg:px-10 max-lg:py-20 max-md:px-6">
        <div className="max-w-[1000px] mx-auto grid grid-cols-[320px_1fr] gap-20 items-center max-lg:grid-cols-1 max-lg:gap-12">
          <div className="relative isolate w-full max-w-[320px] mx-auto">
            <div
              className="absolute inset-0 translate-x-4 translate-y-4 border border-arena -z-10"
              style={{ borderRadius: ARCO }}
              aria-hidden="true"
            />
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "3/4", borderRadius: ARCO }}
            >
              <Image
                src="https://odxbwxmixquriirb.public.blob.vercel-storage.com/quiensoy-foto-2.jpg"
                alt="Jimena Navarro"
                fill
                sizes="320px"
                className="object-cover"
                style={{ objectPosition: "50% 30%" }}
              />
            </div>
          </div>
          <div>
            <Encabezado eyebrow={a.acompana.eyebrow} titulo={a.acompana.titulo} />
            {a.acompana.parrafos.map((p) => (
              <p key={p} className="texto-seccion mb-4">
                {p}
              </p>
            ))}
            <Link
              href={a.acompana.link.href}
              className="inline-block mt-4 font-titulo font-normal text-[0.78rem] tracking-[0.1em] uppercase
                         text-violeta no-underline border-b border-arena pb-1 hover:border-violeta transition-colors"
            >
              {a.acompana.link.label} →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Valor ── */}
      <section
        id="valor"
        className="scroll-mt-20 px-16 py-28 max-lg:px-10 max-lg:py-20 max-md:px-6"
        style={{
          background:
            "linear-gradient(160deg, var(--crema) 0%, var(--lavanda-pale) 100%)",
        }}
      >
        <div className="max-w-[820px] mx-auto bg-violeta text-blanco rounded-xl p-14 text-center max-md:p-8">
          <div className="font-titulo font-light text-[0.75rem] tracking-[0.2em] uppercase opacity-75 mb-2">
            {a.valor.eyebrow}
          </div>
          <div className="italic mb-8" style={{ ...cormorant, fontSize: "2rem" }}>
            {a.valor.nombre}
          </div>
          <div className="font-titulo font-medium text-arena-light leading-none text-[clamp(2.4rem,6vw,3.4rem)]">
            {a.valor.precio}
            <span className="font-light text-[0.4em] tracking-[0.08em] ml-2 opacity-80">
              ARS
            </span>
          </div>
          <div className="font-titulo font-light text-[1.05rem] opacity-80 mt-2 mb-6">
            {a.valor.precioUsd}
          </div>
          <p className="italic text-[1.15rem] mb-2" style={cormorant}>
            {a.valor.cuotas}
          </p>
          <p className="italic text-[1.05rem] opacity-90 mb-8" style={cormorant}>
            {a.valor.medios}
          </p>

          <div className="border-t border-[rgba(255,255,255,0.2)] pt-6 mb-10 flex flex-col gap-2 text-left max-w-[560px] mx-auto">
            {a.valor.notas.map((n, i) => (
              <p
                key={n}
                className="italic text-[0.92rem] leading-[1.6] opacity-75"
                style={cormorant}
              >
                {"*".repeat(i + 1)} {n}
              </p>
            ))}
          </div>

          <p
            className="italic leading-[1.5] mb-8 max-w-[520px] mx-auto"
            style={{ ...cormorant, fontSize: "1.35rem" }}
          >
            {a.valor.pregunta}
          </p>
          <a
            href={whatsappAlquimia}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blanco text-violeta px-9 py-3 rounded-full font-titulo font-medium
                       text-[0.82rem] tracking-[0.1em] uppercase no-underline transition-all duration-300
                       hover:opacity-90 hover:-translate-y-0.5"
          >
            {a.valor.cta}
          </a>
        </div>
      </section>
    </>
  );
}
