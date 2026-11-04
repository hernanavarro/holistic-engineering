import type { Metadata } from "next";
import ClasesYoga from "@/src/components/ClasesYoga";

export const metadata: Metadata = {
  title: "Yoga",
  description:
    "Clases de yoga semanales presenciales.",
};

export default function Page() {
  return <ClasesYoga />;
}
