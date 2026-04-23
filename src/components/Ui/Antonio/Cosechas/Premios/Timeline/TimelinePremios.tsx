import { useEffect, useRef, useState } from "react";
import { animate, scroll } from "motion";
import styles from "./TimelinePremios.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  year: string;
  text: string;
  img?: string;
  diploma?: string;
};

const slides: Slide[] = [
  {
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1774983817/1964_premio_estimulo.jpg",
    year: "1964",
    text: "Premio Estímulo -Diálogo de duendes- Tercer Salón Bienal de Artes Plásticas.",
    diploma:
      "https://res.cloudinary.com/dovztsxyv/image/upload/v1774983817/1964_premio_estimulo_diploma.jpg",
  },
  {
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1774983817/1965_brigadas_liricas.jpg",
    year: "1965",
    text: "Obra -Figura-Premio Brigadas Líricas- XV Salón de Primavera San Rafael.",
    diploma:
      "https://res.cloudinary.com/dovztsxyv/image/upload/v1774983816/1965_brigadas_liricas_diploma.jpg",
  },
  {
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1774983817/1966_nocturno.jpg",
    year: "1966",
    text: "Nocturno -Primer Premio Adquisición- Primer Salón F.O.E.C.Y.T.",
    diploma:
      "https://res.cloudinary.com/dovztsxyv/image/upload/v1774983816/1966_los_andes.jpg",
  },
  {
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1774983817/1967_premio_salon_nacional.jpg",
    year: "1967",
    text: "Primer Premio IV Salón Nacional Feria del Libro de Mendoza compartido junto a Rafael Montemayor.",
    diploma:
      "https://res.cloudinary.com/dovztsxyv/image/upload/v1774983816/1968_diario_el_trabajo.jpg",
  },
  {
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1774983820/1969_despues_de_la_tormenta.jpg",
    year: "1969",
    text: "Después de la Tormenta - Gran Premio de Honor Cristela González de Viñuela.",
    diploma:
      "https://res.cloudinary.com/dovztsxyv/image/upload/v1774983816/1969_despues_de_la_tormenta_diploma.jpg",
  },
  {
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1774983827/1971_la_visita_del_duende.jpg",
    year: "1971",
    text: "Diario Mendoza - Premios de la Bienal se entregan hoy.",
    diploma:
      "https://res.cloudinary.com/dovztsxyv/image/upload/v1774983816/1971_entrega_premios.jpg",
  },
  {
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1776893937/1979_domingo_por_la_tarde_m8hfdy.jpg",
    year: "1979",
    text: "-Domingo por la tarde- Primer Premio del Salón Vendimia.",
    diploma:
      "https://res.cloudinary.com/dovztsxyv/image/upload/v1776893935/1979_domingo_por_la_tarde_diploma_jf0pek.jpg",
  },
  {
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1776894118/1982_dos-imagenes-y-el-silencio_as3xfo.jpg",
    year: "1982",
    text: "Premio Centenario Diario Los Andes.",
    diploma:
      "https://res.cloudinary.com/dovztsxyv/image/upload/v1776894120/1982_dos-imagenes-y-el-silencio_articulo_z14a35.jpg",
  },
  {
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1776894253/1985_dimension_del_silencio_kl9fvr.jpg",
    year: "1985",
    text: "-Dimensión del Silencio- Carta Premio Cecilia Grierson.",
    diploma:
      "https://res.cloudinary.com/dovztsxyv/image/upload/v1776894250/1985_dimension_del_silencio_premio_pwygcn.jpg",
  },
  {
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1776894449/1997_simbolo_de_ofrenda_syif3y.jpg",
    year: "1997",
    text: "- Símbolo de ofrenda - Museo del Vaticano.",
    diploma:
      "https://res.cloudinary.com/dovztsxyv/image/upload/v1776894458/1997_revista_gente_nkylyr.jpg",
  },
  {
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1776894890/2000_resurreccion_igg9xy.jpg",
    year: "2000",
    text: "- Resurrección- Mención Bienal Arte Sacro.",
    diploma:
      "https://res.cloudinary.com/dovztsxyv/image/upload/v1776894892/2000_catalogo_bienal_arte_sacro_osql6w.jpg",
  },
];

export const TimelinePremios = () => {
  const [zoomImg, setZoomImg] = useState<string | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);
  const [current, setCurrent] = useState(0);
  const slidesCount = slides.length;

  /* Animación horizontal ligada al scroll */
  useEffect(() => {
    if (!containerRef.current || slidesCount <= 1) return;

    scroll(
      animate(`.${styles["img-group"]}`, {
        transform: ["none", `translateX(-${(slidesCount - 1) * 100}vw)`],
      }),
      {
        target: containerRef.current,
      },
    );
  }, [slidesCount]);

  /* Sincroniza el índice con el scroll manual */
  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current || slidesCount <= 1) return;

      const { offsetTop, offsetHeight } = containerRef.current;
      const scrollable = offsetHeight - window.innerHeight;

      const progress = (window.scrollY - offsetTop) / scrollable;

      const index = Math.round(progress * (slidesCount - 1));
      const clamped = Math.max(0, Math.min(index, slidesCount - 1));

      setCurrent(clamped);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [slidesCount]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setZoomImg(null);
      }
    };

    // solo escucha cuando el modal está abierto
    if (zoomImg) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [zoomImg]);

  const goToSlide = (index: number) => {
    if (!containerRef.current || slidesCount <= 1) return;

    const clamped = Math.max(0, Math.min(index, slidesCount - 1));
    setCurrent(clamped);

    const container = containerRef.current;
    const start = container.offsetTop;
    const scrollable = container.offsetHeight - window.innerHeight;
    const step = scrollable / (slidesCount - 1);

    window.scrollTo({
      top: start + step * clamped,
      behavior: "smooth",
    });
  };

  return (
    <article id="gallery">
      <div className={styles.contenedorGlobal}>
        <section ref={containerRef} className={styles["img-group-container"]}>
          <div>
            <button
              className={`${styles.arrow} ${styles.left}`}
              onClick={() => goToSlide(current - 1)}
              aria-label="Slide anterior"
            >
              <ChevronLeft size={32}/>
            </button>

            <button
              className={`${styles.arrow} ${styles.right}`}
              onClick={() => goToSlide(current + 1)}
              aria-label="Slide siguiente"
            >
              <ChevronRight size={32}/>
            </button>

            <ul className={styles["img-group"]}>
              {slides.map((slide, i) => (
                <li key={i}>
                  <div className={styles.contenedorVin}>
                    <div className={styles.imageWrapper}>
                      <img src={slide.img ?? ""} alt="Obra Premiada" />
                    </div>
                    <div className={styles.texto}>
                      <img
                        src={slide.diploma ?? ""}
                        alt="Articulo/Diploma"
                        onClick={() => setZoomImg(slide.diploma ?? null)}
                        style={{ cursor: "zoom-in" }}
                      />
                      <h3>{slide.year}</h3>
                      <h5>{slide.text}</h5>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            {zoomImg && (
              <div className={styles.lightbox} onClick={() => setZoomImg(null)}>
                <img
                  src={zoomImg}
                  alt="Zoom"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            )}
          </div>
        </section>
      </div>
    </article>
  );
};
