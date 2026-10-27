import type { Metadata } from "next";
import Membresia from "@/src/components/Membresia";

export const metadata: Metadata = {
  title: "Membresías",
  description:
    "Membresías Semilla, Raíz y Floración para sostener el proceso entre encuentros.",
};

export default function Page() {
  return <Membresia />;
}
