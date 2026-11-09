import type { Metadata } from "next";
import Alquimia from "@/src/components/Alquimia";

export const metadata: Metadata = {
  title: "Alquimia",
  description:
    "Alquimia: mentoría de 3 meses con seis encuentros 1:1 de 90 minutos para trabajar en profundidad tu proceso de transformación.",
};

export default function Page() {
  return <Alquimia />;
}
