// src/data/content.ts
// Centraliza todo el contenido del sitio.

// ─── NAVEGACIÓN ──────────────────────────────────────────────────────────────

// Secciones del sitio: cada una es una página con su propio path.
// Para sumar una sección nueva: crear la página en src/app/(secciones)/<path>
// y agregarla acá (aparece sola en el menú y la home).
export const secciones = [
  {
    label: "Sesiones",
    href: "/sesiones",
    eyebrow: "Individuales · Mentoring",
    resumen:
      "Reiki, Registros Akáshicos, Tarot Evolutivo, Constelaciones y Biodescodificación para integrar lo que no termina de acomodarse.",
  },
  {
    label: "Yoga",
    href: "/yoga",
    eyebrow: "Presencial · Semanal",
    resumen:
      "Clases semanales presenciales. Una práctica de reconexión con el cuerpo y la respiración.",
  },
  {
    label: "Formaciones",
    href: "/formaciones",
    eyebrow: "Reiki · Registros",
    resumen:
      "Programas para quienes sienten el llamado a acompañar a otras personas desde estas herramientas.",
  },
  {
    label: "Membresías",
    href: "/membresias",
    eyebrow: "Semilla · Raíz · Floración",
    resumen:
      "El espacio para sostener el proceso entre encuentros, con contenido, práctica y comunidad.",
  },
];

// Menú: las secciones + "Quién soy", que baja a esa parte de la home.
export const navLinks = [
  ...secciones.map(({ label, href }) => ({ label, href })),
  { label: "Quién soy", href: "/#quien-soy" },
];

// ─── HERO ────────────────────────────────────────────────────────────────────

export const hero = {
  eyebrow: "Ingeniería Holística",
  titulo: ["Tu vida puede cambiar", "cuando decidís ", "hacerte responsable", " de\u00A0ella"],
  // índice 2 es la frase en itálico/color de acento
  subtitulo:
    "Acompaño a personas que ya hicieron mucho y aún sienten que algo no termina de integrarse.",
  ctaPrimario: { label: "Quiero acompañamiento", href: "/sesiones" },
  ctaSecundario: { label: "Conocer el proceso", href: "/#propuesta" },
};

// ─── QUIÉN SOY ────────────────────────────────────────────────────────────────

export const quienSoy = {
  eyebrow: "Quién soy",
  titulo: ["Una ingeniera que", "aprendió a ", "integrar"],
  parrafos: [
    "Soy Jimena Navarro, y fundé este espacio desde la ingeniería industrial y mi propio proceso de transformación personal — ese largo camino donde las herramientas técnicas se encontraron con las espirituales y, en vez de contradecirse, se completaron y fusionaron.",
    "Creé el Método Ingeniería Holística para acompañar a personas que buscan y saben que algo tiene que cambiar y transformarse, pero que todavía no encontraron el proceso que sostenga ese cambio de verdad.",
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

// precio: "$ —" hasta tener los valores reales
export const sesiones = [
  {
    numero: "01",
    nombre: "Reiki Usui",
    desc: "Armonizamos tu cuerpo, liberando bloqueos, restaurando el flujo de la energía y acompañando todo el proceso de integración.",
    precio: "$ —",
  },
  {
    numero: "02",
    nombre: "Registros Akáshicos",
    desc: "Accedemos al libro de tu alma para obtener la información correcta y perfecta para tu evolución hoy. Nos conectamos con tu ángel de la guarda y le hacemos todas las preguntas que necesites y sientas.",
    precio: "$ —",
  },
  {
    numero: "03",
    nombre: "Tarot Evolutivo",
    desc: "A través de las cartas, usamos el tarot como herramienta para ver con más claridad eso que hoy no estás pudiendo ver, para poder integrar y avanzar.",
    precio: "$ —",
  },
  {
    numero: "04",
    nombre: "Constelaciones Familiares",
    desc: "Con el tema que más energía te consume hoy, buscamos traer a la consciencia eso que nos muestra el campo cuántico disponible para sanar e integrar, practicando el asentimiento y la aceptación.",
    precio: "$ —",
  },
  {
    numero: "05",
    nombre: "Biodescodificación",
    desc: "Tratamos el tema, emoción o conflicto que más energía te consuma hoy, yendo desde ese conflicto desencadenante al programante.",
    precio: "$ —",
  },
  {
    numero: "06",
    nombre: "Limpiezas Energéticas",
    desc: "Pueden realizarse a personas, vehículos, vínculos, relaciones, negocios, casas, espacios y trámites. Vamos a limpiar lo que hoy esté generando un bloqueo o impedimento para avanzar.",
    precio: "$ —",
  },
  {
    numero: "07",
    nombre: "Coaching Holístico",
    desc: "Integramos cuerpo, mente, alma, lo espiritual, las emociones y la energía para trabajar el tema que hoy más te preocupa, en sesiones individuales que combinan distintas técnicas y herramientas.",
    precio: "$ —",
  },
];

export const alquimia = {
  sub: "Mentoring · 3 meses",
  titulo: "Programa Alquimia",
  texto:
    "Para quienes ya saben que los cambios de fondo no se hacen solos ni en una sesión. Seis encuentros de 90 minutos para trabajar en profundidad y con continuidad real.",
  cta: { label: "Quiero saber más", href: "/alquimia" },
};

// ─── ALQUIMIA (página /alquimia) ─────────────────────────────────────────────
// Contenido tomado del Canva "Mentoría Alquimia" (páginas 1 a 8).

export const alquimiaPagina = {
  hero: {
    eyebrow: "Mentoría · 3 meses",
    titulo: "Alquimia",
    bajada: "Mentoría para personas responsables",
    frase: "Un programa diseñado para guiarte en tu expansión total.",
    ctaPrimario: "Quiero vivir mi Alquimia",
    ctaSecundario: { label: "Ver el valor", href: "#valor" },
    fondo: "https://odxbwxmixquriirb.public.blob.vercel-storage.com/Mentoria%20Alquimia.png",
  },
  paraVos: {
    eyebrow: "Para quién es",
    titulo: ["Este espacio", "es para ", "vos si…"],
    texto:
      "Alquimia es un programa de acompañamiento y transformación para vos que estás buscando un compromiso real y verdadero, para potenciar tus capacidades y brillar al máximo.",
    items: [
      "Ya conocés tus dolores, traumas y heridas, y querés profundizar más en tu proceso de sanación.",
      "Ya probaste muchas terapias y llegó la hora de comprometerte con un proceso real.",
      "Querés trabajar desde lo energético y lo espiritual, buscando un cambio de mindset.",
      "Estás buscando hacer las cosas diferentes a tu clan familiar, honrándolos y decidiendo por vos.",
    ],
  },
  deQueSeTrata: {
    eyebrow: "La mentoría",
    titulo: ["¿De qué se trata", "esta ", "mentoría?"],
    parrafos: [
      "Son seis encuentros 1:1, uno cada quince días —es decir, durante 3 meses—, de 1 hora y 30 minutos cada uno, donde vamos a trabajar en vos al 100%.",
      "Descubriremos tus creencias limitantes, qué te está condicionando para avanzar, cuáles son tus miedos, qué valor personal tenés para con vos y qué historias te estás contando (y comprando) que limitan tu realidad.",
      "Vamos a trabajar con herramientas holísticas como Reiki, movimientos de Constelaciones Familiares, Biodescodificación, Limpiezas Energéticas, Coaching Holístico y Registros Akáshicos. Además, integramos lo holístico con lo técnico para que tu proceso sea único e integral. El cambio es total.",
    ],
    datos: [
      { valor: "6", label: "encuentros 1:1" },
      { valor: "90", label: "minutos cada uno" },
      { valor: "3", label: "meses, uno cada 15 días" },
    ],
  },
  comoTrabajamos: {
    eyebrow: "El proceso",
    titulo: ["¿Cómo", "", "trabajamos?"],
    pasos: [
      {
        numero: "01",
        nombre: "Tu situación actual",
        desc: "Empezamos viendo cómo estás hoy, qué te está pasando, qué estás sintiendo y hacia dónde querés llegar, sin vergüenza ni limitaciones (los límites están en la mente nomás).",
      },
      {
        numero: "02",
        nombre: "Un plan de acción",
        desc: "Desde ahí, juntos trazamos un plan para pasar de tu situación actual a tu situación deseada: qué vamos a concretar y a manifestar.",
      },
      {
        numero: "03",
        nombre: "Cambios que se sostienen",
        desc: "Para que puedas ver manifestados los cambios e incorporar esos nuevos hábitos en tu rutina diaria.",
      },
    ],
  },
  incluye: {
    eyebrow: "Qué incluye",
    titulo: ["¿Qué incluye", "", "Alquimia?"],
    items: [
      "6 sesiones 1:1 de 90 minutos, online o presencial en Córdoba, Argentina.",
      "Material interactivo que te queda para siempre, ideal para aplicar a diario.",
      "Acompañamiento diario, de lunes a viernes.",
      "Ejercicios de profundización: tapping y técnicas de respiración.",
      "Armonización energética de todos tus cuerpos.",
      "Audio de afirmación y subliminal hecho para vos, según la temática a trabajar.",
    ],
  },
  acompana: {
    eyebrow: "Quién te acompaña",
    titulo: ["¿Quién", "te ", "acompaña?"],
    parrafos: [
      "Soy Jimena Navarro, Ingeniera Industrial, profesora de Yoga y Terapeuta Holística. Acompaño procesos de transformación desde una mirada integral: cuerpo, mente, alma, emoción y energía.",
      "Este espacio nace del deseo de acompañar procesos profundos, con herramientas que se pueden aplicar en el día a día, generando los cambios deseados, para que puedas tomar las riendas y ser protagonista de tu propia vida.",
    ],
    link: { label: "Conocer más sobre mí", href: "/#quien-soy" },
  },
  valor: {
    eyebrow: "Valor de la transformación",
    nombre: "Mentoría Alquimia",
    precio: "$450.000",
    precioUsd: "450 USD",
    cuotas: "O en dos pagos de $250.000 / 250 USD",
    medios: "Se abona por transferencia bancaria, Mercado Pago, Wise o PayPal.",
    notas: [
      "En caso de abonar en 2 pagos, el primero se abona como seña de la mentoría y el segundo antes de cumplir los 30 días del pago de la seña.",
      "También se puede abonar en más cuotas según la financiación de Mercado Pago.",
    ],
    pregunta:
      "¿Te animás a vivir el proceso de transformación que cambia tu forma de pensar, de sentir, de ser y de vivir?",
    cta: "Quiero vivir mi Alquimia",
  },
  // Mensaje con el que se abre WhatsApp desde esta página.
  whatsappMensaje:
    "Hola Jimena! Quiero vivir mi Alquimia 🌿 Me gustaría saber más sobre la mentoría.",
};

// ─── YOGA ────────────────────────────────────────────────────────────────────

export const yoga = {
  eyebrow: "Método Ingeniería Holística",
  titulo: ["Yoga que trabaja", "desde ", "adentro"],
  texto:
    "Las clases no son solo movimiento. Son una práctica de reconexión — con el cuerpo, con la respiración y con lo que estás viviendo.",
  items: [
    {
      modalidad: "Presencial",
      titulo: "Clases semanales",
      desc: "Grupos pequeños para trabajar con presencia real. Práctica física, respiración y espacio para integrar.",
    },
  ],
  // Horarios de las clases semanales.
  horarios: [
    { dia: "Lunes y Miércoles", hora: "18:30 y 20 hs" },
    { dia: "Martes y Jueves", hora: "17 hs" },
  ],
};

// ─── FORMACIONES ─────────────────────────────────────────────────────────────

export const formacionesHeader = {
  eyebrow: "Formaciones",
  titulo: ["Para las que quieren", "transmitir lo que ", "transformaron"],
  texto:
    "Programas de formación para quienes sienten el llamado a acompañar a otras personas desde estas herramientas.",
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
    cargo: "Tarot Evolutivo & Biodescodificación",
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
      "No. Trabajo con personas en distintos momentos del camino — desde quienes no saben nada del mundo holístico hasta quienes llevan años explorándolo. Lo que importa es que algo en vos está buscando un cambio real.",
  },
  {
    pregunta: "¿Las sesiones son presenciales u online?",
    respuesta:
      "Trabajo en ambas modalidades. Las sesiones de Reiki, Constelaciones y Tarot pueden hacerse de forma presencial en Córdoba o vía videollamada. Los Registros Akáshicos y la Biodescodificación funcionan igual de profundo en remoto.",
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

// ─── PROPUESTA (home) ─────────────────────────────────────────────────────────
// Bloque de la home que presenta la propuesta y lleva a cada sección.

export const propuestaHeader = {
  eyebrow: "La propuesta",
  titulo: ["Distintos caminos", "para un mismo ", "proceso"],
  texto:
    "Según el momento que estés atravesando, podemos trabajar en sesiones individuales, en la práctica de yoga, en una formación o sosteniendo el proceso en el tiempo.",
};

// ─── CIERRE ──────────────────────────────────────────────────────────────────
// Llamado a la acción al final de cada página de sección.

export const cierre = {
  titulo: ["¿Sentís que es ", "tu momento", "?"],
  cta: "Contactame",
};

// ─── WHATSAPP ─────────────────────────────────────────────────────────────────

export const whatsapp = {
  numero: "5493515171023",
  mensaje: "Hola Jimena! Me gustaría saber más sobre tus servicios 🌿",
};

export const whatsappUrl = `https://wa.me/${whatsapp.numero}?text=${encodeURIComponent(whatsapp.mensaje)}`;

// ─── REDES ───────────────────────────────────────────────────────────────────
// Íconos del footer, a la derecha (WhatsApp se agrega siempre).
// Una red con url vacía no se muestra.

export const redes: { red: "instagram" | "facebook" | "youtube" | "tiktok"; label: string; url: string }[] = [
  { red: "instagram", label: "Instagram", url: "https://www.instagram.com/ingenieria.holistica" },
  { red: "facebook", label: "Facebook", url: "https://www.facebook.com/ingenieriaholistica1" },
  { red: "youtube", label: "YouTube", url: "https://www.youtube.com/@ingenieria.holistica" },
  { red: "tiktok", label: "TikTok", url: "https://www.tiktok.com/@ingenieria.holistica" },
];

