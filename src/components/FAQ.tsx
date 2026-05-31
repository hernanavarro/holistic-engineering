"use client";

import { useState } from "react";
import { faqHeader, faqs } from "@/src/data/content";

function AccordionItem({
  pregunta,
  respuesta,
  isOpen,
  onToggle,
  index,
}: {
  pregunta: string;
  respuesta: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const id = `faq-${index}`;

  return (
    <div className="border-b border-[rgba(125,92,124,0.15)] last:border-none">
      <button
        id={`${id}-trigger`}
        aria-expanded={isOpen}
        aria-controls={`${id}-panel`}
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-6 py-6 text-left
                   group transition-colors duration-300 bg-transparent border-none cursor-pointer"
      >
        <span
          className="font-light leading-[1.4] text-negro group-hover:text-violeta transition-colors duration-300"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "1.15rem",
          }}
        >
          {pregunta}
        </span>

        {/* Ícono +/- */}
        <span
          className={`shrink-0 w-7 h-7 rounded-full border border-[rgba(125,92,124,0.3)]
                      flex items-center justify-center text-violeta transition-all duration-300
                      group-hover:border-violeta
                      ${isOpen ? "bg-violeta text-blanco border-violeta rotate-45" : ""}`}
          aria-hidden="true"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <line x1="6" y1="1" x2="6" y2="11" />
            <line x1="1" y1="6" x2="11" y2="6" />
          </svg>
        </span>
      </button>

      {/* Panel */}
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        className={`overflow-hidden transition-all duration-300 ease-in-out
                    ${isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <p
          className="italic leading-[1.85] text-gris pb-6"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "1.05rem",
          }}
        >
          {respuesta}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      className="px-16 py-28 max-lg:px-10 max-lg:py-20 max-md:px-6"
      style={{
        background:
          "linear-gradient(170deg, var(--lavanda-pale) 0%, var(--crema) 100%)",
      }}
    >
      <div className="max-w-[900px] mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="eyebrow">{faqHeader.eyebrow}</p>
          <span className="divisor" />
          <h2 className="titulo-seccion">
            {faqHeader.titulo[0]}
            <br />
            {faqHeader.titulo[1]}
            <em>{faqHeader.titulo[2]}</em>
          </h2>
        </div>

        {/* Accordion */}
        <div>
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              index={i}
              pregunta={faq.pregunta}
              respuesta={faq.respuesta}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
