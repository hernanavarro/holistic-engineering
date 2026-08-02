import Link from "next/link";
import LogoIcon from "./LogoIcon";
import { hero } from "@/src/data/content";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden
                 px-16 pt-32 pb-16 max-lg:px-10 max-md:px-6"
      style={{
        background:
          "linear-gradient(160deg, var(--lavanda-pale) 0%, var(--crema) 55%, var(--arena-light) 100%)",
      }}
    >
      {/* Círculos decorativos */}
      <div
        className="absolute rounded-full pointer-events-none opacity-[0.18]"
        style={{
          width: 600,
          height: 600,
          background:
            "radial-gradient(circle, var(--violeta) 0%, transparent 70%)",
          top: -150,
          right: -100,
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none opacity-25"
        style={{
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, var(--arena) 0%, transparent 70%)",
          bottom: -100,
          left: -80,
        }}
      />

      {/* Contenido */}
      <div className="max-w-[780px] text-center relative z-10">
        {/* Símbolo */}
        <div className="flex justify-center mb-8 opacity-85">
          <LogoIcon size={72} />
        </div>

        <p className="eyebrow">{hero.eyebrow}</p>

        <h1
          className="font-light leading-[1.15] text-negro mb-7"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(2.6rem, 5.5vw, 4.2rem)",
          }}
        >
          {hero.titulo[0]}
          <br />
          {hero.titulo[1]}
          <em className="italic text-violeta">{hero.titulo[2]}</em>
          {hero.titulo[3]}
        </h1>

        <p
          className="italic leading-[1.75] text-gris max-w-[560px] mx-auto mb-12"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
          }}
        >
          {hero.subtitulo}
        </p>

        <div className="flex gap-5 justify-center flex-wrap">
          <Link href={hero.ctaPrimario.href} className="btn-primario">
            {hero.ctaPrimario.label}
          </Link>
          <Link href={hero.ctaSecundario.href} className="btn-secundario">
            {hero.ctaSecundario.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
