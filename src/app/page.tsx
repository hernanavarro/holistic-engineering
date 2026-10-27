import Hero from "@/src/components/Hero";
import QuienSoy from "@/src/components/QuienSoy";
import Propuesta from "@/src/components/Propuesta";
import Testimonios from "@/src/components/Testimonios";
import FAQ from "@/src/components/FAQ";

// Home: presentación general. Cada servicio tiene su propia página
// (ver src/app/(secciones)); acá solo se presentan y se enlazan.
export default function Home() {
  return (
    <main>
      <Hero />
      <QuienSoy />
      <Propuesta />
      <Testimonios />
      <FAQ />
    </main>
  );
}
