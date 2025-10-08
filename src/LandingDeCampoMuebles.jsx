// src/LandingDeCampoMuebles.jsx
import React, { useRef, useState, useEffect } from "react";

/* ──────────────────────────────────────────────────────────────
   Configuración del sitio (paleta y textos)
   ────────────────────────────────────────────────────────────── */
const site = {
  linkedin: "https://www.linkedin.com/in/luquedavid/",
  brand: "De Campo Muebles",
  tagline: "Muebles rústicos e industriales para quinchos y exteriores",
  description:
    "Fabricamos a medida mesas, islas, racks, sillas y camastros en maderas nativas del NEA. Calidad, durabilidad y diseño personalizado.",
  phone: "+54 9 379 426 2972",
  whatsappMsg:
    "Hola, ¿qué tal? Estuve viendo la web y quería realizar una consulta.",
  instagram: "https://www.instagram.com/decampomuebles_ctes/",
  address: "San Luis del Palmar, Corrientes, Argentina",
  email: "",
  horario: "Lun a Sáb 9:00–19:00",
  mapEmbed:
    "https://www.google.com/maps?q=San+Luis+del+Palmar,+Corrientes&output=embed",
  heroImg: "/images/hero.webp",
  logo: "/images/logo.png",
  colors: {
    primary: "#28120D", // marrón oscuro
    secondary: "#BF5E3A", // naranja quemado
    accent: "#E5BD83", // beige dorado
    neutral: "#F9E0B7", // beige claro (fondo)
    whatsapp: "#22C55E",
  },
};

/* ──────────────────────────────────────────────────────────────
   Data
   ────────────────────────────────────────────────────────────── */
const materiales = [
  {
    key: "lapacho",
    nombre: "Lapacho",
    img: "/images/lapacho.webp",
    breve:
      "Extraordinariamente dura y pesada. Resiste agua, sol e insectos; ideal interior/exterior.",
    larga: `El lapacho es uno de los árboles más emblemáticos del litoral y el norte argentino…
Su madera, de tonos que van del castaño oscuro al verde oliváceo, con vetas profundas y marcadas,
destaca por ser extraordinariamente dura y pesada. Es famosa por su resistencia natural al agua,
al sol y a los insectos… Con pulido y aceitado adecuado, entrega un acabado lujoso y cálido.
Cada mueble de lapacho es único: imponente, sólido y hecho para toda la vida.`,
  },
  {
    key: "urunday",
    nombre: "Urunday",
    img: "/images/urunday.jpg",
    breve:
      "Alta densidad y gran estabilidad. Miel a rojizo; funciona muy bien en interiores y galerías.",
    larga: `Nacido en el monte nativo del Nordeste, el urunday es famoso por su fortaleza…
De color castaño (miel a rojizo) y veta fina, es naturalmente resistente a humedad, hongos e insectos.
En taller exige herramientas afiladas y manos pacientes; acepta aceites y lacas muy bien y envejece parejo.
Un mueble de urunday está pensado para durar y ser heredado.`,
  },
  {
    key: "timbo",
    nombre: "Timbó",
    img: "/images/timbo.jpg",
    breve:
      "Beige a castaño suave. Liviana, dócil de trabajar y con muy buena estabilidad dimensional.",
    larga: `El timbó es un árbol generoso del litoral. Su madera, de tono claro (beige a castaño suave),
es liviana y se deja cortar, cepillar y lijar con docilidad. Responde muy bien a aceites, barnices o lacas.
Ideal para muebles luminosos y modernos que buscan equilibrio entre durabilidad y estética.`,
  },
  {
    key: "quebracho",
    nombre: "Quebracho",
    img: "/images/quebracho.jpg",
    breve:
      "Densísima, casi incorruptible. Rojizos profundos; transmite solidez y carácter eterno.",
    larga: `El “quiebra-hacha” del monte chaqueño-correntino. Muy pesado, denso y casi incorruptible:
resiste agua, insectos y paso del tiempo como pocas especies. Difícil de trabajar, pero el resultado
es único: brillo cálido que realza su veta marcada. Perfecto para muebles robustos y piezas de herencia.`,
  },
  {
    key: "pino",
    nombre: "Pino",
    img: "/images/pino.jpg",
    breve:
      "Claro y luminoso. Versátil, accesible y sustentable. Veta recta; gran relación costo-calidad.",
    larga: `Cultivado en los suelos rojos de Misiones, el pino misionero combina tradición y forestación
sustentable. De tonos claros (amarillo suave a dorado), aporta calidez y funciona en estilos modernos
o rústicos. Ligero y fácil de trabajar, permite terminaciones prolijas. Excelente opción práctica y noble.`,
  },
];

const productos = [
  {
    nombre: "Mesa rústica",
    desde: null,
    imgs: [
      "/images/Mesas/mesa1.JPG",
      "/images/Mesas/mesa2.JPG",
      "/images/Mesas/mesa3.JPG",
      "/images/Mesas/mesa4.JPG",
    ],
    tags: ["Exterior", "A medida"],
  },
  {
    nombre: "Isla / Barra para quincho",
    desde: null,
    imgs: [
      "/images/Islas/isla1.JPG",
      "/images/Islas/isla2.JPG",
      "/images/Islas/isla3.JPG",
      "/images/Islas/isla4.JPG",
    ],
    tags: ["Quincho", "Barra"],
  },
  {
    nombre: "Rack TV / Estantería",
    desde: null,
    imgs: ["/images/Racks/rack1.JPG", "/images/Racks/rack2.JPG"],
    tags: ["Living", "Industrial"],
  },
  {
    nombre: "Sillas y bancos",
    desde: null,
    imgs: ["/images/Sillas/silla1.jpg", "/images/Sillas/silla2.jpg", "/images/Sillas/silla3.jpg"],
    tags: ["Galería", "Exterior"],
  },
  {
    nombre: "Camastro de exterior",
    desde: null,
    imgs: [
      "/images/Camastros/camastro1.jpg",
      "/images/Camastros/camastro2.jpg",
      "/images/Camastros/camastro3.jpg",
    ],
    tags: ["Descanso", "Exterior"],
  },
];

const diferenciales = [
  { title: "A medida", text: "Diseñamos según tu espacio y uso." },
  { title: "Maderas nativas", text: "Timbó, lapacho, quebracho, urunday, etc." },
  { title: "Acabado profesional", text: "Aceite, barniz o cetol con filtro UV." },
  { title: "Envíos", text: "Envíos a todo el país." },
];

const faq = [
  { q: "¿Hacen muebles a medida?", a: "Sí. Adaptamos diseño, madera y terminación a tu espacio." },
  {
    q: "¿Qué mantenimiento requieren?",
    a: "El único mantenimiento que requiere es pasar un producto tipo BLEM con una franela en seco una vez al mes, solo para realzar el brillo característico de cada madera.",
  },
  { q: "¿Plazos de fabricación?", a: "Entre 10 y 25 días según complejidad y volumen." },
  { q: "¿Realizan envíos?", a: "Sí, realizamos envíos a todo el país." },
];

const nosotros = {
  parrafo:
    "De Campo Muebles, con taller en San Luis del Palmar (Corrientes), fabrica y comercializa muebles de diseño industrial y rústico en maderas nativas del NEA (timbó, lapacho, quebracho y urunday). Priorizamos calidad, durabilidad y sostenibilidad: piezas macizas, personalizadas y resistentes que resaltan la belleza natural de la madera.",
  mision:
    "Realizar muebles únicos con maderas de excelente calidad, otorgando al cliente una opción durable para toda la vida.",
  vision:
    "Ser referentes en el NEA y a nivel nacional por artesanía de alta calidad, diseño innovador y compromiso con la sostenibilidad.",
  valores: ["Responsabilidad", "Honestidad", "Excelencia", "Confianza"],
};

const currency = (n) =>
  new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(n ?? 0);

/* ──────────────────────────────────────────────────────────────
   Helpers / UI
   ────────────────────────────────────────────────────────────── */
const SectionTitle = ({ kicker, title, subtitle }) => (
  <div className="max-w-3xl mx-auto text-center">
    {kicker && (
      <p
        className="uppercase tracking-widest text-sm font-semibold"
        style={{ color: site.colors.accent }}
      >
        {kicker}
      </p>
    )}
    <h2
      className="text-3xl md:text-4xl font-extrabold mt-1"
      style={{ color: site.colors.primary, fontFamily: "Raleway, sans-serif" }}
    >
      {title}
    </h2>
    {subtitle && <p className="text-neutral-700 mt-4">{subtitle}</p>}
  </div>
);

/* Resalta palabras dentro de un texto */
const Highlight = ({ text, words = [], className = "" }) => {
  if (!words.length) return <>{text}</>;
  const re = new RegExp(
    `(${words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "gi"
  );
  const parts = text.split(re);
  return (
    <span className={className}>
      {parts.map((p, i) =>
        words.some((w) => w.toLowerCase() === p.toLowerCase()) ? (
          <strong key={i} className="font-extrabold">
            {p}
          </strong>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </span>
  );
};

/* Ícono WhatsApp (monocromo) */
const IconWpp = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
    <path d="M.057 24l1.687-6.163A11.867 11.867 0 0112.02 0C18.617 0 24 5.383 24 11.98c0 6.597-5.383 11.98-11.98 11.98a11.95 11.95 0 01-6.119-1.688L.057 24zm6.597-3.807c1.735 1.033 3.276 1.666 5.347 1.666 5.448 0 9.886-4.438 9.886-9.886 0-5.449-4.438-9.887-9.886-9.887-5.449 0-9.887 4.438-9.887 9.887 0 2.197.72 3.756 1.933 5.347l-.8 2.924 2.407-.948zm11.387-5.464c-.067-.112-.245-.179-.512-.313-.268-.134-1.586-.784-1.833-.873-.245-.09-.423-.134-.6.134-.179.268-.689.873-.845 1.053-.157.179-.312.201-.58.067-.268-.134-1.134-.418-2.157-1.334-.798-.711-1.334-1.586-1.49-1.854-.156-.268-.017-.413.117-.546.12-.12.268-.312.401-.468.134-.156.179-.268.268-.446.09-.179.045-.335-.022-.469-.067-.134-.6-1.446-.823-1.979-.214-.512-.431-.445-.6-.445l-.512-.01c-.179 0-.469.067-.713.335-.245.268-.934.912-.934 2.222s.957 2.579 1.09 2.758c.134.179 1.885 2.878 4.566 4.033.638.275 1.135.436 1.523.558.64.204 1.223.176 1.685.107.514-.077 1.586-.648 1.81-1.275.224-.626.224-1.164.157-1.275z" />
  </svg>
);

/* Botón base */
const Button = ({
  href,
  children,
  variant = "primary",
  size = "md",
  leading = null,
  className = "",
  style,
  ...props
}) => {
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-3",
    lg: "px-6 py-3.5 text-lg",
  };

  const base =
    "rounded-full font-semibold transition active:scale-95 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 inline-flex items-center gap-2";
  const mapVariantClass = {
    primary: `${base} text-white`,
    secondary: `${base} text-white`,
    outlineLight: `${base} border border-neutral-300 text-neutral-900 hover:bg-neutral-100`,
    glassDark: `${base} text-white/95 border border-white/20 bg-white/10 hover:bg-white/15 backdrop-blur-md`,
  };

  const bg =
    variant === "primary"
      ? site.colors.primary
      : variant === "secondary"
      ? site.colors.secondary
      : undefined;

  return (
    <a
      href={href}
      className={`${mapVariantClass[variant]} ${sizes[size]} ${className}`}
      style={{ background: bg, ...style }}
      {...props}
    >
      {leading}
      {children}
    </a>
  );
};

// Botón WhatsApp
const WhatsAppButton = ({
  label = "Pedir presupuesto por WhatsApp",
  about = "",
  size = "md",
  variant = "secondary",
  className = "",
}) => {
  const base = `https://wa.me/${site.phone.replace(/[^\d]/g, "")}`;
  const text = about ? `${site.whatsappMsg} — ${about}` : site.whatsappMsg;
  const href = `${base}?text=${encodeURIComponent(text)}`;

  const iconColor = variant === "outlineLight" ? "text-neutral-900" : "text-white";

  return (
    <Button
      href={href}
      size={size}
      variant={variant}
      className={`rounded-full ${className}`}
      leading={<IconWpp className={`h-5 w-5 ${iconColor}`} />}
      target="_blank"
      rel="noreferrer noopener"
    >
      {label}
    </Button>
  );
};

/* ── Sello “Triple Capa de Impregnante” (FALTABA y causaba el error) ── */
const SelloTripleCapa = ({ withText = false, className = "" }) => (
  <span
    title="Aplicamos triple capa de impregnante para bloquear la humedad"
    className={`flex items-center gap-1 text-[10px] font-semibold px-2 py-1 rounded-full bg-amber-500/90 text-white shadow-sm ${className}`}
  >
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
      <path d="M12 2l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3z" />
      <path d="M9.5 12.5l1.5 1.5 3.5-3.5 1.2 1.2-4.7 4.7-2.7-2.7 1.2-1.2z" fill="white" />
    </svg>
    TRIPLE CAPA
    {withText && (
      <span className="ml-2 text-[11px] font-normal text-white/95">
        Impregnante en tres manos sobre todos nuestros productos para evitar que,
        a futuro, vuelva a ingresar humedad dentro de la madera.
      </span>
    )}
  </span>
);


/* ——— Lightbox ——— */
const Lightbox = ({ images = [], index = 0, onClose, setIndex }) => {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowRight") setIndex?.((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setIndex?.((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [images.length, onClose, setIndex]);

  if (!images.length) return null;

  return (
    <div
      className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 text-white grid place-items-center hover:bg-white/20"
        aria-label="Cerrar"
      >
        ✕
      </button>

      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIndex((i) => (i - 1 + images.length) % images.length);
          }}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 text-white grid place-items-center hover:bg-white/20"
          aria-label="Anterior"
        >
          ‹
        </button>
      )}

      <img
        src={images[index]}
        alt=""
        className="max-h-[90vh] max-w-[92vw] rounded-2xl shadow-2xl object-contain"
        onClick={(e) => e.stopPropagation()}
      />

      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIndex((i) => (i + 1) % images.length);
          }}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 text-white grid place-items-center hover:bg-white/20"
          aria-label="Siguiente"
        >
          ›
        </button>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setIndex(i);
              }}
              className={`h-2.5 w-2.5 rounded-full ${i === index ? "bg-white" : "bg-white/50"}`}
              aria-label={`Ir a imagen ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

/* ——— Card de producto con mini-carrusel interno + lightbox ——— */
const ProductCard = ({ p }) => {
  const [idx, setIdx] = useState(0);
  const [open, setOpen] = useState(false);
  const total = p.imgs?.length || 0;

  const prev = (e) => {
    e?.preventDefault?.();
    if (!total) return;
    setIdx((i) => (i - 1 + total) % total);
  };
  const next = (e) => {
    e?.preventDefault?.();
    if (!total) return;
    setIdx((i) => (i + 1) % total);
  };

  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm border group snap-start shrink-0 w-[360px] md:w-[420px]">
      <div className="relative aspect-[4/3]">
        <img
          src={p.imgs?.[idx] || ""}
          alt={p.nombre}
          className="absolute inset-0 h-full w-full object-cover transition scale-100 group-hover:scale-[1.01] cursor-zoom-in"
          loading="lazy"
          onClick={() => setOpen(true)}
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex gap-2">
          {p.tags.map((t) => (
            <span key={t} className="text-xs bg-black/70 text-white px-2 py-1 rounded-full">
              {t}
            </span>
          ))}
          <SelloTripleCapa />
        </div>

        {/* Flechas */}
        {total > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white h-9 w-9 rounded-full grid place-items-center hover:bg-black/60"
              aria-label="Foto anterior"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white h-9 w-9 rounded-full grid place-items-center hover:bg-black/60"
              aria-label="Foto siguiente"
            >
              ›
            </button>

            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
              {p.imgs.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.preventDefault();
                    setIdx(i);
                  }}
                  className={`h-2.5 w-2.5 rounded-full ${i === idx ? "bg-white" : "bg-white/60"}`}
                  aria-label={`Ir a imagen ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-lg">{p.nombre}</h3>
        <p className="text-neutral-600 mt-1">
          {p.desde == null ? "A medida" : `Desde ${currency(p.desde)}`}
        </p>
        <div className="mt-4">
          <WhatsAppButton
            label="Consultar"
            about={`Consulta por: ${p.nombre}`}
            size="sm"
            variant="secondary"
            className="w-full justify-center"
          />
        </div>
      </div>

      {open && (
        <Lightbox images={p.imgs} index={idx} onClose={() => setOpen(false)} setIndex={setIdx} />
      )}
    </article>
  );
};

/* Carrusel horizontal del catálogo */
const CatalogCarousel = ({ items = [] }) => {
  const scroller = useRef(null);
  const scrollBy = (dir) => {
    const el = scroller.current;
    if (!el) return;
    const amount = 340;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={scroller}
        className="mt-8 flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2"
      >
        {items.map((p, i) => (
          <ProductCard key={i} p={p} />
        ))}
      </div>

      <div className="hidden md:block">
        <button
          className="absolute -left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/40 text-white grid place-items-center hover:bg-black/60"
          aria-label="Desplazar a la izquierda"
          onClick={() => scrollBy(-1)}
        >
          ‹
        </button>
        <button
          className="absolute -right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/40 text-white grid place-items-center hover:bg-black/60"
          aria-label="Desplazar a la derecha"
          onClick={() => scrollBy(1)}
        >
          ›
        </button>
      </div>
    </div>
  );
};

// Modal info larga de la madera
const WoodModal = ({ open, onClose, item }) => {
  if (!open || !item) return null;
  return (
    <div
      className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
      onClick={onClose}
    >
      <article
        className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-60 sm:h-72">
          <img src={item.img} alt={item.nombre} className="w-full h-full object-cover" loading="lazy" />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 h-9 w-9 rounded-full grid place-items-center bg-black/60 text-white hover:bg-black/70"
            aria-label="Cerrar"
            title="Cerrar"
          >
            ✕
          </button>
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-extrabold" style={{ color: "#28120D" }}>
            {item.nombre}
          </h3>
          <p className="text-neutral-700 mt-3 leading-relaxed whitespace-pre-line">{item.larga}</p>
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="rounded-full border border-neutral-300 px-5 py-2.5 font-semibold hover:bg-neutral-100"
            >
              Cerrar
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

// Tarjeta de madera
const WoodCard = ({ m, onOpen }) => {
  return (
    <article className="bg-white rounded-2xl shadow-sm border overflow-hidden hover:shadow-md transition">
      <div className="relative h-44 sm:h-48">
        <img src={m.img} alt={m.nombre} className="w-full h-full object-cover" loading="lazy" />
        <span className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg">{m.nombre}</h3>
        <p className="text-neutral-700 mt-2">{m.breve}</p>
        <div className="mt-4">
          <button
            onClick={() => onOpen(m)}
            className="rounded-full border border-neutral-300 px-4 py-2 font-semibold hover:bg-neutral-100"
          >
            Más info
          </button>
        </div>
      </div>
    </article>
  );
};

const MaterialsGrid = () => {
  const [active, setActive] = useState(null);
  return (
    <>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {materiales.map((m) => (
          <WoodCard key={m.key} m={m} onOpen={setActive} />
        ))}
      </div>

      <WoodModal open={!!active} item={active} onClose={() => setActive(null)} />
    </>
  );
};

const ProcesoProBanner = () => (
  <div className="mt-8 rounded-2xl border border-amber-300 bg-amber-50 text-amber-900 p-5">
    <div className="flex items-start gap-3">
      <svg className="h-6 w-6 shrink-0 text-amber-700" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3zm-1 13l5-5-1.4-1.4L11 11.2 9.4 9.6 8 11l3 4z" />
      </svg>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide">
          Proceso <span className="text-amber-800">PRO</span>
        </p>
        <p className="text-sm mt-1">
          Aplicamos <strong>triple capa de impregnante</strong> en todos nuestros productos para{" "}
          <strong>bloquear la humedad</strong> y maximizar la durabilidad.
        </p>
      </div>
    </div>
  </div>
);

// ——— Aparece al hacer scroll (una sola vez) ———
const useSectionInView = () => {
  const [seen, setSeen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setSeen(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, seen };
};

const DiferencialesGrid = () => {
  const { ref, seen } = useSectionInView();

  return (
    <div
      ref={ref}
      className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {diferenciales.map((d, i) => (
        <div
          key={d.title}
          style={{ transitionDelay: `${i * 90}ms` }}  // stagger suave
          className={[
            // estado inicial (oculto)
            "opacity-0 translate-y-3",
            // cuando entra en viewport
            seen && "opacity-100 translate-y-0",
            // transición
            "transition-all duration-700",
            // card base
            "bg-white rounded-2xl p-6 shadow-sm border",
            // hover sutil
            "hover:-translate-y-1 hover:shadow-md hover:border-amber-400"
          ].filter(Boolean).join(" ")}
        >
          <h3 className="font-bold text-lg">{d.title}</h3>
          <p className="text-neutral-600 mt-2">{d.text}</p>
        </div>
      ))}
    </div>
  );
};


/* ──────────────────────────────────────────────────────────────
   Página
   ────────────────────────────────────────────────────────────── */
export default function LandingDeCampoMuebles() {
   // ⬇️ Estado para el fade-in del HERO
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  return (
    <div className="text-neutral-800" style={{ background: site.colors.neutral }}>
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/75 backdrop-blur border-b h-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            {site.logo ? (
              <img src={site.logo} alt={site.brand} className="h-9 w-auto rounded" />
            ) : (
              <div
                className="h-9 w-9 rounded-xl flex items-center justify-center font-black text-white"
                style={{ background: site.colors.primary }}
              >
                {site.brand.split(" ")[0].slice(0, 2)}
              </div>
            )}
            <div>
              <p className="font-bold leading-tight" style={{ fontFamily: "Raleway, sans-serif" }}>
                {site.brand}
              </p>
              <p className="text-xs text-neutral-500 -mt-1">{site.tagline}</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#productos" className="hover:opacity-80">
              Productos
            </a>
            <a href="#materiales" className="hover:opacity-80">
              Maderas
            </a>
            <a href="#pasoapaso" className="hover:opacity-80">
              Paso a paso
            </a>
            <a href="#nosotros" className="hover:opacity-80">
              Nosotros
            </a>
            <a href="#contacto" className="hover:opacity-80">
              Contacto
            </a>
          </nav>
        </div>
      </header>

     {/* HERO (mobile con CTAs más abajo, sin chevron; desktop intacto) */}
    <section className="relative min-h-[calc(100svh-4rem)] pt-12 md:pt-16 pb-44 md:pb-12">
      <img
        src={site.heroImg}
        alt="Conjunto de sillones de exterior en madera frente a laguna"
        className="absolute inset-0 w-full h-full object-cover object-[50%_60%] md:object-[50%_55%]"
        loading="eager"
      />
      <div className="absolute inset-0 bg-black/55 md:bg-gradient-to-t md:from-black/60 md:via-black/35 md:to-transparent" />
     <div className={`max-w-3xl text-white transition-all duration-700 ${
      mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
      ></div>
      <div className="relative z-10 h-full flex items-end">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl text-white">
            <h1
              className="text-4xl md:text-6xl font-extrabold drop-shadow leading-tight"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Muebles rústicos e industriales para quinchos y exteriores
            </h1>

            <p className="mt-4 text-lg md:text-xl opacity-95">
              <Highlight
                text={site.description}
                words={["mesas", "islas", "racks", "sillas", "camastros"]}
              />
            </p>

            {/* CTAs: en mobile apilados y más abajo; en desktop fila como antes */}
            <div className="mt-12 md:mt-6 flex flex-col md:flex-row gap-4 md:gap-3 md:items-center w-full md:w-auto max-w-sm md:max-w-none">
              <WhatsAppButton size="md" className="w-full md:w-auto" />
              <Button
                href={site.instagram}
                size="md"
                variant="glassDark"
                className="w-full md:w-auto"
                target="_blank"
                rel="noreferrer noopener"
              >
                Ver Instagram
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>


    {/* DIFERENCIALES */}
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          kicker="Por qué elegirnos"
          title="Hecho a mano, pensado para durar"
          subtitle="Piezas macizas, personalizadas y resistentes, con maderas del NEA."
        />

        {/* Sello (puede latir suave) */}
        <div className="mt-6 flex justify-center">
          <SelloTripleCapa withText className="bg-amber-600 animate-pulse" />
        </div>

        {/* Grid con efecto de aparición y hover */}
        <DiferencialesGrid />
      </div>
    </section>


      {/* PRODUCTOS */}
      <section id="productos" className="py-16 bg-neutral-100 border-t border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle kicker="Catálogo" title="Algunas de nuestras piezas" subtitle="Deslizá para ver más." />
          <CatalogCarousel items={productos} />
        </div>
      </section>

      {/* MATERIALES */}
      <section id="materiales" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            kicker="Maderas"
            title="Materiales que trabajamos"
            subtitle="Seleccionamos por dureza, veta y comportamiento a la intemperie."
          />
          <MaterialsGrid />
          {/* Si querés destacar el proceso, podés mostrar el banner: */}
          {/* <ProcesoProBanner /> */}
        </div>
      </section>

    {/* PASO A PASO */}
<section id="pasoapaso" className="py-16 bg-neutral-100 border-t border-b">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionTitle
      kicker="Cómo comprar"
      title="Paso a paso: elegí tu próximo mueble"
      subtitle="Te acompañamos en todo el proceso."
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
      {/* Tarjeta izquierda: Paso a paso + LOGO centrado y grande */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border">
        <h3 className="font-bold text-lg">Paso a paso</h3>
        <ol className="list-decimal pl-5 mt-3 space-y-2 text-neutral-700">
          <li>
            <strong>Elegí el mueble</strong> que más te guste: mesa para quincho, mesa ratona, isla de
            cocina/quincho, rack de TV, juego de camastro para exterior, u otros.
          </li>
          <li>
            <strong>Elegí la madera</strong>: Timbó, Urunday, Lapacho, Pino-Misionero, Quebracho.
          </li>
          <li>
            <strong>Indicá las medidas</strong>. Si no estás seguro, te asesoramos sin cargo.
          </li>
          <li>
            <strong>Esperá la entrega</strong> y ¡listo!
          </li>
        </ol>

        {/* Logo centrado y más grande */}
        <div className="mt-8 pt-4 border-t border-neutral-200">
          {site.logo ? (
            <img
              src={site.logo}
              alt={site.brand}
              className="block mx-auto h-16 md:h-20 w-auto opacity-90"
              loading="lazy"
            />
          ) : (
            <div
              className="mx-auto h-16 w-16 md:h-20 md:w-20 rounded-xl flex items-center justify-center font-black text-white"
              style={{ background: site.colors.primary }}
              aria-hidden="true"
              title={site.brand}
            >
              {site.brand.split(" ")[0].slice(0, 2)}
            </div>
          )}
        </div>
      </div>

      {/* Tarjeta derecha: Proceso */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border">
        <h3 className="font-bold text-lg">Proceso de elaboración</h3>
        <p className="text-neutral-700 mt-2">
          Seleccionamos tablas sanas y parejas, realizamos secado natural para eliminar humedad, cepillamos y
          pulimos para una textura suave, y protegemos con triple capa de impregnante para evitar reingreso de
          humedad.
        </p>

        <h4 className="font-semibold mt-4">Mantenimiento</h4>
        <p className="text-neutral-700 mt-1">
          Una vez recibido, sólo pasá un producto tipo <em>BLEM</em> con una franela en seco una vez al mes para
          realzar el brillo de la madera.
        </p>

        <h4 className="font-semibold mt-4">Información importante</h4>
        <ul className="mt-2 list-disc pl-5 text-neutral-700 space-y-1">
          <li>Envíos a todo el país.</li>
          <li>Muebles estandarizados y a medida.</li>
        </ul>
      </div>
    </div>
  </div>
</section>



      {/* NOSOTROS */}
      <section id="nosotros" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle kicker="Nuestro taller" title="Quiénes somos" />
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="bg-white rounded-2xl p-6 shadow-sm border">
              <p className="text-neutral-700 leading-relaxed">{nosotros.parrafo}</p>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {[
                  "Fabricación a medida",
                  "Asesoramiento de diseño y terminación",
                  "Garantía de fabricación 6 meses",
                  "Envíos a todo el país",
                ].map((txt) => (
                  <li key={txt} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full" style={{ background: site.colors.primary }} />
                    {txt}
                  </li>
                ))}
              </ul>
              <div className="text-neutral-600 text-sm mt-4 space-y-1">
                <p>
                  <strong>Misión:</strong> {nosotros.mision}
                </p>
                <p>
                  <strong>Visión:</strong> {nosotros.vision}
                </p>
                <p>
                  <strong>Valores:</strong> {nosotros.valores.join(" • ")}
                </p>
              </div>
              <div className="mt-6">
                <WhatsAppButton />
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm border">
              <img src="/images/Procesos2.JPG" alt="Taller de carpintería" className="w-full h-96 object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-neutral-100 border-t border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle kicker="Preguntas" title="Preguntas frecuentes" />
          <div className="mt-8 divide-y rounded-2xl bg-white border shadow-sm">
            {faq.map((f, i) => (
              <details key={i} className="p-6 group open:bg-neutral-50">
                <summary className="cursor-pointer font-semibold flex items-center justify-between list-none">
                  {f.q}
                  <span className="ml-4 text-neutral-400 group-open:rotate-180 transition">⌄</span>
                </summary>
                <p className="mt-2 text-neutral-700">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle kicker="Contacto" title="Hablemos de tu proyecto" subtitle={`Horarios: ${site.horario}`} />

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="bg-white rounded-2xl p-6 shadow-sm border">
              <div className="space-y-3 text-neutral-700">
                <p>
                  <strong>WhatsApp:</strong>{" "}
                  <a
                    className="underline"
                    href={`https://wa.me/${site.phone.replace(/[^\d]/g, "")}?text=${encodeURIComponent(
                      site.whatsappMsg
                    )}`}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {site.phone}
                  </a>
                </p>
                <p>
                  <strong>Instagram:</strong>{" "}
                  <a className="underline" href={site.instagram} target="_blank" rel="noreferrer noopener">
                    @decampomuebles_ctes
                  </a>
                </p>
                <p>
                  <strong>Dirección:</strong> {site.address}
                </p>
                {site.email && (
                  <p>
                    <strong>Email:</strong> <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>
                  </p>
                )}
                <div className="pt-2">
                  <WhatsAppButton />
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-sm border min-h-[320px]">
              <iframe
                src={site.mapEmbed}
                className="w-full h-[320px] md:h-[420px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de ubicación"
              />
              <div className="text-right text-sm p-2">
                <a
                  className="underline"
                  href="https://maps.app.goo.gl/NpTDhVFiKtBRwdy88"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Abrir en Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-neutral-500">
            © {new Date().getFullYear()} {site.brand}. Todos los derechos reservados.
          </div>
          <div className="text-sm text-neutral-500">
            Hecho en Corrientes • Sitio por{" "}
            <a
              href={site.linkedin || "https://www.linkedin.com/in/luquedavid/"}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-neutral-700"
            >
              David Luque
            </a>
          </div>
        </div>
      </footer>

      {/* SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: site.brand,
            description: site.description,
            address: { "@type": "PostalAddress", addressLocality: site.address },
            telephone: site.phone,
            url: typeof window !== "undefined" ? window.location.href : "",
            sameAs: [site.instagram],
            openingHours: site.horario,
            areaServed: "Argentina",
          }),
        }}
      />
    </div>
  );
}
