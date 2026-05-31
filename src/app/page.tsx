import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import QuienSoy from "@/src/components/QuienSoy";
import Sesiones from "@/src/components/Sesiones";
import ClasesYoga from "@/src/components/ClasesYoga";
import Formaciones from "@/src/components/Formaciones";
import Membresia from "@/src/components/Membresia";
import Testimonios from "@/src/components/Testimonios";
import FAQ from "@/src/components/FAQ";
import Footer from "@/src/components/Footer";
import WhatsAppButton from "@/src/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuienSoy />
        <Sesiones />
        <ClasesYoga />
        <Formaciones />
        <Membresia />
        <Testimonios />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
