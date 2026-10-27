import Cierre from "@/src/components/Cierre";

// Layout de las páginas de sección: deja lugar para el menú fijo
// y cierra cada página con el llamado a la acción.
export default function SeccionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="pt-[78px]">
      {children}
      <Cierre />
    </main>
  );
}
