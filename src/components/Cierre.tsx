import { cierre, whatsappUrl } from "@/src/data/content";

// Llamado a la acción al final de cada página de sección.
export default function Cierre() {
  return (
    <section
      className="px-16 py-16 text-center max-lg:px-10 max-md:px-6 max-md:py-14"
      style={{
        background:
          "linear-gradient(160deg, var(--crema) 0%, var(--arena-light) 100%)",
      }}
    >
      <div className="max-w-[640px] mx-auto">
        <h2 className="titulo-seccion !font-light !mb-8">
          {cierre.titulo[0]}
          <em>{cierre.titulo[1]}</em>
          {cierre.titulo[2]}
        </h2>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primario"
        >
          {cierre.cta}
        </a>
      </div>
    </section>
  );
}
