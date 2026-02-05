import { useEffect, useRef, useState } from "react";
import { animate, scroll } from "motion";
import styles from "./Timeline.module.css";

type Slide = {
  year: string;
  text: string;
  img?: string;
};

const slides: Slide[] = [
  { year: "1936", text: "Nace en Russell, Maipú" },
  { year: "1953", text: "Ingresa a la academia provincial de Bellas Artes" },
  { year: "1954", text: "Primer óleo" },
  {
    year: "1961–1962",
    text:
      "Comienza a trabajar en irrigación y es trasladado por 9 meses a Valle Hermoso para trabajos de Hidronivometeorología",
  },
  { year: "1963", text: "Fundación grupo Numen" },
];

export const Timeline = () => {
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

      const progress =
        (window.scrollY - offsetTop) / scrollable;

      const index = Math.round(progress * (slidesCount - 1));
      const clamped = Math.max(0, Math.min(index, slidesCount - 1));

      setCurrent(clamped);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
        <h1>Su vida</h1>
      </header>

      <section
        ref={containerRef}
        className={styles["img-group-container"]}
      >
        <div>
          <button
            className={`${styles.arrow} ${styles.left}`}
            onClick={() => goToSlide(current - 1)}
            aria-label="Slide anterior"
          >
            ◀
          </button>

          <button
            className={`${styles.arrow} ${styles.right}`}
            onClick={() => goToSlide(current + 1)}
            aria-label="Slide siguiente"
          >
            ▶
          </button>

          <ul className={styles["img-group"]}>
            {slides.map((slide, i) => (
              <li key={i} className={styles["img-container"]}>
                <img src={slide.img ?? ""} alt="" />
                <h3>{slide.year}</h3>
                <h6>{slide.text}</h6>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
};
