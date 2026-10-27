import type { Metadata } from "next";
import Sesiones from "@/src/components/Sesiones";

export const metadata: Metadata = {
  title: "Sesiones",
  description:
    "Sesiones individuales de Reiki, Registros Akáshicos, Tarot Evolutivo, Constelaciones, Biodecodificación y el Programa Alquimia.",
};

export default function Page() {
  return <Sesiones />;
}
