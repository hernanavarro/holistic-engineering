import type { Metadata } from "next";
import ClasesYoga from "@/src/components/ClasesYoga";

export const metadata: Metadata = {
  title: "Yoga",
  description:
    "Clases de yoga semanales presenciales y online, clases grabadas, talleres y retiros.",
};

export default function Page() {
  return <ClasesYoga />;
}
