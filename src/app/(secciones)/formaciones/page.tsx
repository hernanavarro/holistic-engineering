import type { Metadata } from "next";
import Formaciones from "@/src/components/Formaciones";

export const metadata: Metadata = {
  title: "Formaciones",
  description:
    "Formaciones en Reiki Usui (Nivel I y II) y Registros Akáshicos.",
};

export default function Page() {
  return <Formaciones />;
}
