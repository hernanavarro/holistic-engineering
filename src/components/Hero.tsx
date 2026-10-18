import Image from "next/image";
import Link from "next/link";
import LogoIcon from "./LogoIcon";
import { hero } from "@/src/data/content";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden
                 px-16 pt-32 pb-56 max-lg:px-10 max-md:px-6 max-md:pb-48"
      style={{
        background:
          "linear-gradient(160deg, var(--lavanda-pale) 0%, var(--crema) 55%, var(--arena-light) 100%)",
      }}
    >
      {/* Foto de fondo */}
      <Image
        src="https://odxbwxmixquriirb.public.blob.vercel-storage.com/hero-fondo.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover pointer-events-none select-none"
        style={{ objectPosition: "30% 80%" }}
      />
      {/* Velo oscuro para dar tono opaco y que el texto claro se lea */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(22,22,22,0.62) 0%, rgba(22,22,22,0.5) 55%, rgba(22,22,22,0.38) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Contenido */}
      <div className="max-w-[780px] text-center relative z-10">
        {/* Símbolo */}
        <div className="flex justify-center mb-8" style={{ filter: "brightness(0) invert(1)", opacity: 0.92 }}>
          <LogoIcon size={72} />
        </div>

        <p className="eyebrow !text-lavanda">{hero.eyebrow}</p>

        <h1
          className="font-titulo font-medium leading-[1.1] tracking-[-0.02em] text-blanco mb-7 drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
          style={{
            fontSize: "clamp(2.2rem, 4.6vw, 3.6rem)",
          }}
        >
          {hero.titulo[0]}
          <br />
          {hero.titulo[1]}
          <em className="titulo-acento !text-lavanda-viva !font-medium">{hero.titulo[2]}</em>
          {hero.titulo[3]}
        </h1>

        <p
          className="italic leading-[1.75] text-blanco/90 max-w-[560px] mx-auto mb-12"
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
          <Link
            href={hero.ctaSecundario.href}
            className="btn-secundario !text-blanco !border-blanco/80 hover:!bg-blanco/15"
          >
            {hero.ctaSecundario.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
