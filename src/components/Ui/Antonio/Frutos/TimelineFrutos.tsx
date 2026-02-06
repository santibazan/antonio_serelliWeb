import { useEffect, useRef, useState } from "react";
import { animate, scroll } from "motion";
import styles from "./TimelineFrutos.module.css";
import { Link } from "react-router-dom";

import img1 from "../../../../Imagenes/Decada60/0036-El llamado óleo sobre tela enchapada  107 x 147 cm 1969.jpeg";
import img2 from "../../../../Imagenes/Decada70/0035-Dimensión violeta óleo sobre tela enchapada  148 x 111 1975.jpeg";
import img3 from "../../../../Imagenes/Decada80/0024-Altar de los humildes  óleo sobre madera  158 x 140 1988.jpeg";
import img4 from "../../../../Imagenes/Decada90/0004-El aire me sabe bien  óleo sobre tela  140 x 180 cm  1994.jpeg";
import img5 from "../../../../Imagenes/Decada2000/0014-Repertorio  acrílico sobre tela 200 x 120 cm  2009.jpeg";
import img6 from "../../../../Imagenes/Decada2010/0178-Historias secretas collage sobre tela 150 x 300 cm 2013.jpeg";

const slides = [
  { img: img1, text:"Criticas de la decada 60", label: "Década 60" },
  { img: img2, text:"Criticas de la decada 70",label: "Década 70" },
  { img: img3, text:"Criticas de la decada 80",label: "Década 80" },
  { img: img4, text:"Criticas de la decada 90",label: "Década 90" },
  { img: img5, text:"Criticas de la decada 2000",label: "Década 2000" },
  { img: img6, text:"Criticas de la decada 2010",label: "Década 2010" },
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
