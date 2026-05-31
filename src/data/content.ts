// src/data/content.ts
// Centraliza todo el contenido de la landing page.

// ─── NAVEGACIÓN ──────────────────────────────────────────────────────────────

export const navLinks = [
  { label: "Quién soy", href: "#quien-soy" },
  { label: "Sesiones", href: "#sesiones" },
  { label: "Yoga", href: "#clases-yoga" },
  { label: "Formaciones", href: "#formaciones" },
  { label: "Membresía", href: "#membresia" },
];

// ─── HERO ────────────────────────────────────────────────────────────────────

export const hero = {
  eyebrow: "Ingeniería Holística",
  titulo: ["Tu vida puede cambiar", "cuando ", "sabés cómo", " habitarla"],
  // índice 2 es la palabra en itálico/violeta
  subtitulo:
    "Acompañamiento para mujeres que ya hicieron mucho y aún sienten que algo no termina de moverse.",
  ctaPrimario: { label: "Quiero acompañamiento", href: "#sesiones" },
  ctaSecundario: { label: "Conocer el proceso", href: "#quien-soy" },
};

// ─── QUIÉN SOY ────────────────────────────────────────────────────────────────

export const quienSoy = {
  eyebrow: "Quién soy",
  titulo: ["Una ingeniera que", "aprendió a ", "integrar"],
  parrafos: [
    "Soy Jimena Navarro. Llego a este trabajo desde la ingeniería industrial y desde mi propio proceso de transformación personal — ese largo camino donde las herramientas técnicas se encontraron con las espirituales y, en vez de contradecirse, se completaron.",
    "Creé el Método Ingeniería Holística para acompañar a mujeres que ya buscan, que ya saben que algo tiene que cambiar, pero que todavía no encontraron el proceso que sostenga ese cambio de verdad.",
  ],
  valores: [
    "No te vendo herramientas — te acompaño en un proceso.",
    "Integramos lo que vivís, lo que sentís y lo que repetís.",
    "El cambio real no es un momento — es una nueva forma de habitarte.",
  ],
};

// ─── SESIONES ─────────────────────────────────────────────────────────────────

export const sesionesHeader = {
  eyebrow: "Sesiones individuales",
  titulo: ["Trabajo profundo,", "a tu ", "ritmo"],
  texto:
    "Cada sesión es un espacio para integrar lo que no termina de acomodarse. Trabajamos desde múltiples planos según lo que el proceso pida.",
};

export const sesiones = [
  {
    numero: "01",
    nombre: "Reiki Usui",
    desc: "Trabajo energético para liberar bloqueos, restaurar el flujo y acompañar el cuerpo en sus procesos de integración.",
  },
  {
    numero: "02",
    nombre: "Registros Akáshicos",
    desc: "Acceso a la información del alma para comprender patrones que se repiten y encontrar claridad en los momentos de encrucijada.",
  },
  {
    numero: "03",
    nombre: "Tarot Evolutivo",
    desc: "El tarot como espejo — no para predecir, sino para ver con más claridad lo que ya está en movimiento en tu vida.",
  },
  {
    numero: "04",
    nombre: "Constelaciones",
    desc: "Trabajo con los sistemas familiares y relacionales que influyen en tus patrones, abriendo espacio para nuevas dinámicas.",
  },
  {
    numero: "05",
    nombre: "Biodecodificación",
    desc: "Lectura del lenguaje del cuerpo — cómo los conflictos emocionales y simbólicos se expresan a nivel físico y cómo integrarlos.",
  },
  {
    numero: "06",
    nombre: "Sesión Integradora",
    desc: "Combinamos las herramientas que tu proceso necesite en un único encuentro personalizado y profundo.",
  },
];

export const alquimia = {
  sub: "Mentoring · 3 meses",
  titulo: "Programa Alquimia",
  texto:
    "Para las que ya saben que los cambios de fondo no se hacen solos ni en una sesión. Seis encuentros de 90 minutos para trabajar en profundidad y con continuidad real.",
  cta: { label: "Quiero saber más", href: "#" },
};

// ─── YOGA ────────────────────────────────────────────────────────────────────

export const yoga = {
  eyebrow: "Método Ingeniería Holística",
  titulo: ["Yoga que trabaja", "desde ", "adentro"],
  texto:
    "Las clases no son solo movimiento. Son una práctica de reconexión — con el cuerpo, con la respiración y con lo que estás viviendo.",
  items: [
    {
      modalidad: "Presencial · Online",
      titulo: "Clases semanales",
      desc: "Grupos pequeños para trabajar con presencia real. Práctica física, respiración y espacio para integrar.",
    },
    {
      modalidad: "A tu ritmo",
      titulo: "Clases grabadas",
      desc: "Acceso a prácticas para sostener el proceso entre encuentros presenciales.",
    },
    {
      modalidad: "Intensivos",
      titulo: "Talleres y retiros",
      desc: "Experiencias de inmersión para momentos donde el proceso necesita más espacio y profundidad.",
    },
  ],
  cta: { label: "Ver clases disponibles", href: "#" },
};

// ─── FORMACIONES ─────────────────────────────────────────────────────────────

export const formacionesHeader = {
  eyebrow: "Formaciones",
  titulo: ["Para las que quieren", "transmitir lo que ", "transformaron"],
  texto:
    "Programas de formación para quienes sienten el llamado a acompañar a otras desde estas herramientas.",
};

export const formaciones = [
  {
    nombre: "Formación · Nivel I y II",
    titulo: "Reiki Usui",
    desc: "Iniciación y práctica en el sistema Usui de Reiki. Aprendés a trabajar con la energía para el bienestar propio y de otros.",
  },
  {
    nombre: "Formación intensiva",
    titulo: "Registros Akáshicos",
    desc: "Técnica para acceder e interpretar los Registros — para uso personal y como herramienta de acompañamiento.",
  },
];

// ─── MEMBRESÍA ────────────────────────────────────────────────────────────────

export const membresiaHeader = {
  eyebrow: "Membresía",
  titulo: ["El proceso no termina", "cuando termina la ", "sesión"],
  texto:
    "La membresía es el espacio para sostener el proceso entre encuentros — con contenido, práctica y comunidad.",
};

export const membresias = [
  {
    tipo: "Plan base",
    nombre: "Semilla",
    precio: "Consultá precio",
    destacada: false,
    items: [
      "Clases de yoga grabadas",
      "Meditaciones guiadas",
      "Contenido mensual exclusivo",
    ],
  },
  {
    tipo: "Plan completo · Más elegido",
    nombre: "Raíz",
    precio: "Consultá precio",
    destacada: true,
    items: [
      "Todo el plan Semilla",
      "Clases en vivo semanales",
      "Una sesión mensual individual",
      "Comunidad privada",
    ],
  },
  {
    tipo: "Plan inmersión",
    nombre: "Floración",
    precio: "Consultá precio",
    destacada: false,
    items: [
      "Todo el plan Raíz",
      "Acceso a talleres y retiros",
      "Acompañamiento prioritario",
      "Programa Alquimia con descuento",
    ],
  },
];

// ─── TESTIMONIOS ─────────────────────────────────────────────────────────────

export const testimoniosHeader = {
  eyebrow: "Testimonios",
  titulo: ["Lo que dicen las que", "ya ", "comenzaron"],
};

export const testimonios = [
  {
    nombre: "Valentina G.",
    cargo: "Sesiones individuales · Reiki & Registros",
    texto:
      "Llegué sin saber bien qué buscar. A las pocas sesiones empecé a ver patrones que venía repitiendo hace años. Jimena tiene una capacidad única para sostener sin invadir.",
  },
  {
    nombre: "Camila R.",
    cargo: "Programa Alquimia",
    texto:
      "El programa Alquimia fue un antes y un después. No solo trabajamos lo emocional — entendí cómo mi historia familiar se estaba expresando en mi cuerpo y en mis vínculos.",
  },
  {
    nombre: "Lucía M.",
    cargo: "Membresía Raíz · 6 meses",
    texto:
      "Lo que más valoro es la continuidad. Las clases semanales y el acompañamiento entre sesiones me ayudaron a sostener el proceso en lo cotidiano, no solo en los momentos de crisis.",
  },
  {
    nombre: "Sofía P.",
    cargo: "Tarot Evolutivo & Biodecodificación",
    texto:
      "Vine escéptica y me fui con herramientas reales. El tarot evolutivo me ayudó a ver mis propios movimientos con mucha más claridad.",
  },
  {
    nombre: "Martina D.",
    cargo: "Formación Reiki Nivel I y II",
    texto:
      "La formación fue intensa y profunda. Jimena enseña desde el cuerpo y desde la experiencia — no desde el manual. Aprendí a trabajar energéticamente de una forma que tiene sentido.",
  },
  {
    nombre: "Ana B.",
    cargo: "Constelaciones & Sesión Integradora",
    texto:
      "Después de la constelación entendí cosas de mi familia que cargaba sin saberlo. Fue una sesión que me cambió la perspectiva de manera muy concreta.",
  },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export const faqHeader = {
  eyebrow: "Preguntas frecuentes",
  titulo: ["Todo lo que querés", "saber antes de ", "comenzar"],
};

export const faqs = [
  {
    pregunta: "¿Necesito tener experiencia previa en herramientas holísticas?",
    respuesta:
      "No. Trabajo con mujeres en distintos momentos del camino — desde las que no saben nada del mundo holístico hasta las que llevan años explorándolo. Lo que importa es que algo en vos está buscando un cambio real.",
  },
  {
    pregunta: "¿Las sesiones son presenciales u online?",
    respuesta:
      "Trabajo en ambas modalidades. Las sesiones de Reiki, Constelaciones y Tarot pueden hacerse de forma presencial en Córdoba o vía videollamada. Los Registros Akáshicos y la Biodecodificación funcionan igual de profundo en remoto.",
  },
  {
    pregunta: "¿Cómo sé qué tipo de sesión me conviene?",
    respuesta:
      "No es necesario que lo sepas antes de escribirme. En un primer intercambio te cuento cómo trabajo y juntas vemos qué herramienta tiene más sentido para lo que estás atravesando en este momento.",
  },
  {
    pregunta: "¿Cuánto dura cada sesión individual?",
    respuesta:
      "Las sesiones tienen una duración de entre 60 y 75 minutos, dependiendo del tipo de trabajo. El Programa Alquimia tiene encuentros de 90 minutos.",
  },
  {
    pregunta: "¿Qué incluye la membresía exactamente?",
    respuesta:
      "Cada plan incluye distintos niveles de acceso: desde clases grabadas y contenido exclusivo (Semilla), hasta clases en vivo, sesiones individuales mensuales y comunidad privada (Raíz), o acceso completo con prioridad y descuentos en el Programa Alquimia (Floración).",
  },
  {
    pregunta: "¿Hay algún compromiso mínimo de tiempo para las formaciones?",
    respuesta:
      "Las formaciones de Reiki (Nivel I y II) se dictan en formato intensivo de fin de semana. La formación de Registros Akáshicos tiene una estructura similar. Te paso el cronograma exacto cuando te contactás.",
  },
];

// ─── WHATSAPP ─────────────────────────────────────────────────────────────────

export const whatsapp = {
  numero: "5493516000000", // reemplazar con el número real
  mensaje: "Hola Jimena! Me gustaría saber más sobre tus servicios 🌿",
};

// ─── FOOTER ──────────────────────────────────────────────────────────────────

export const footerLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Quién soy", href: "#quien-soy" },
  { label: "Sesiones", href: "#sesiones" },
  { label: "Yoga", href: "#clases-yoga" },
  { label: "Formaciones", href: "#formaciones" },
  { label: "Membresía", href: "#membresia" },
];
