import { useEffect, useRef, useState } from "react";
import { animate, scroll } from "motion";
import styles from "./TimelineFrutos.module.css";
import { Link } from "react-router-dom";

const slides = [
  { img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950611/0036-El_llamado_o%CC%81leo_sobre_tela_enchapada_107_x_147_cm_1969_sjxdeu.jpg", text:"Criticas de la decada 60", label: "Década 60" },
  { img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950650/0035-Dimensio%CC%81n_violeta_o%CC%81leo_sobre_tela_enchapada_148_x_111_1975_c8gowu.jpg", text:"Criticas de la decada 70",label: "Década 70" },
  { img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950685/0024-Altar_de_los_humildes_o%CC%81leo_sobre_madera_158_x_140_1988_rdlzet.jpg", text:"Criticas de la decada 80",label: "Década 80" },
  { img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950739/0004-El_aire_me_sabe_bien_o%CC%81leo_sobre_tela_140_x_180_cm_1994_nxjud8.jpg", text:"Criticas de la decada 90",label: "Década 90" },
  { img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950885/0014-Repertorio_acri%CC%81lico_sobre_tela_200_x_120_cm_2009_eaxzdv.jpg", text:"Criticas de la decada 2000",label: "Década 2000" },
  { img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951554/0178-Historias_secretas_collage_sobre_tela_150_x_300_cm_2013_vaowpx.jpg", text:"Criticas de la decada 2010",label: "Década 2010" },
];

export const TimelineFrutos = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const [current, setCurrent] = useState(0);
  const slidesCount = slides.length;

  /* Scroll horizontal animado */
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
      <header>
        <h1>Décadas</h1>
      </header>

      <section
        ref={containerRef}
        className={styles["img-group-container"]}
      >
        <div>
          {/* Flechas */}
          <button
            className={`${styles.arrow} ${styles.left}`}
            onClick={() => goToSlide(current - 1)}
            aria-label="Década anterior"
          >
            ◀
          </button>

          <button
            className={`${styles.arrow} ${styles.right}`}
            onClick={() => goToSlide(current + 1)}
            aria-label="Década siguiente"
          >
            ▶
          </button>

          <ul className={styles["img-group"]}>
            {slides.map((slide, i) => (
              <li key={i} className={styles["img-container"]}>
                <img src={slide.img} alt={slide.label} />
                <h3>
                  <Link
                    to="/AntonioSarelli/Decadas"
                    // className={styles.title}
                  >
                    {slide.label}
                  </Link>
                </h3>
                <h6>{slide.text}</h6>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
};
