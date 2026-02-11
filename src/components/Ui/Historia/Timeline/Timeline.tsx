import { useEffect, useRef, useState } from "react";
import { animate, scroll } from "motion";
import styles from "./Timeline.module.css";

import img1 from "../../../../Imagenes/Historia/1954.jpg";
import img2 from "../../../../Imagenes/Historia/1964.jpg";
import img3 from "../../../../Imagenes/Historia/1968.jpg";
import img4 from "../../../../Imagenes/Historia/1972.jpg";
import img5 from "../../../../Imagenes/Historia/1979.jpg";
import img6 from "../../../../Imagenes/Historia/1982.jpg";

import img7 from "../../../../Imagenes/Historia/1985.jpg";
import img8 from "../../../../Imagenes/Historia/1988.jpg";
import img9 from "../../../../Imagenes/Historia/1988a.jpg";
import img10 from "../../../../Imagenes/Historia/1993.jpg";
import img11 from "../../../../Imagenes/Historia/1993.jpg";

import img12 from "../../../../Imagenes/Historia/1991.jpg";
import img13 from "../../../../Imagenes/Historia/1995.jpg";
import img14 from "../../../../Imagenes/Historia/1995a.jpg";
import img15 from "../../../../Imagenes/Historia/1996.jpg";
import img16 from "../../../../Imagenes/Historia/1996a.jpg";
import img17 from "../../../../Imagenes/Historia/1996b.jpg";

import img18 from "../../../../Imagenes/Historia/1997.jpg";
import img19 from "../../../../Imagenes/Historia/1998.jpg";
import img20 from "../../../../Imagenes/Historia/1998a.jpg";
import img21 from "../../../../Imagenes/Historia/2000.jpg";
import img22 from "../../../../Imagenes/Historia/2000a.jpg";

import img23 from "../../../../Imagenes/Historia/2000b.jpg";
import img24 from "../../../../Imagenes/Historia/2000c.jpg";
import img25 from "../../../../Imagenes/Historia/2004.jpg";
import img26 from "../../../../Imagenes/Historia/2006.jpg";
import img27 from "../../../../Imagenes/Historia/2008.jpg";

import img28 from "../../../../Imagenes/Historia/2009.jpg";
import img29 from "../../../../Imagenes/Historia/2014.jpg";
import img30 from "../../../../Imagenes/Historia/2015.jpg";
import img31 from "../../../../Imagenes/Historia/2021.jpg";
import img32 from "../../../../Imagenes/Historia/2026.jpg";

type Slide = {
  year: string;
  text: string;
  img?: string;
};

const slides: Slide[] = [
  {
    img: img1,
    year: "1954",
    text: "Su primer óleo, “Homenaje a Zurbarán” (1954), marca el inicio de su camino artístico.",
  },
  {
    img: img2,
    year: "1964",
    text: "“Diálogo con Duendes” (1964) — Premio Bienal de Arte y Premio Estímulo. Una obra temprana que anticipa la fuerza expresiva de Sarelli.",
  },
  {
    img: img3,
    year: "1968",
    text: "“La hora de sueño” (1968) — Primer Premio UCEIDM otorgado a Antonio Sarelli, reconocimiento a su originalidad y profundidad expresiva.",
  },
  {
    img: img4,
    year: "1972",
    text: "Medioevo (1972) – Obra premiada con el segundo puesto en “Plásticos del Interior” y adquirida por el Museo Eduardo Sívori. Exhibida en la sala de reuniones de la Quinta de Olivos.",
  },
  {
    img: img5,
    year: "1979",
    text: "Salón de Artes Plásticas – Vendimia 1979: Primer Premio otorgado a Antonio Sarelli por su obra “Domingo en la tarde”.",
  },

  {
    img: img6,
    year: "1982",
    text: "Salón Nacional de Pintura “Centenario del Diario Los Andes” (1982): Mención Honorífica para Antonio Sarelli por su obra “Dos Imágenes y el Silencio”.",
  },
  {
    img: img7,
    year: "1985",
    text: "Premio Cecilia Grierson en el Salón Nacional de Pintura (1985) por la obra “Dimensión del Silencio” — óleo sobre madera, 180 x 160 cm. Tras recibir 17 galardones, Sarelli decide no participar más en salones.",
  },
  {
    img: img8,
    year: "1988",
    text: " Exposición individual en el Museo Emiliano Guiñazú – Casa Fader (1988), uno de los espacios más emblemáticos del arte mendocino.",
  },
  {
    img: img9,
    year: "1988",
    text: "Antonio Sarelli realiza su primera exposición en Barcelona en 1988, en la Sala Jaimes. A partir de allí, consolida una intensa presencia en España con muestras en 1991 y 1993 en la misma sala, y en el Museo de Vilassar en 1996. En 1993, su obra protagoniza la tapa de la revista GAL ART (Barcelona), reflejo del reconocimiento a su trabajo en el ámbito internacional.",
  },
  {
    img: img10,
    year: "1993",
    text: "Tapa de la revista GAL ART (Barcelona, 1993), en el marco de sus numerosas exposiciones en España: Sala Jaimes (1988, 1991, 1993) y Museo de Vilassar (1996).",
  },
  {
    img: img11,
    year: "1991",
    text: "Colección 1991 – “Denominación de Origen”, Bodega Luigi Bosca: 12 vinos con etiquetas de seda ilustradas con obras de Antonio Sarelli. Edición especial de regalos empresariales para celebrar la denominación de origen de su vino.",
  },
  {
    img: img12,
    year: "1995",
    text: "Reconocimiento a su labor artística otorgado por la Cámara de Diputados de Mendoza en 1995.",
  },
  {
    img: img13,
    year: "1995",
    text: "Evocación (1995) – Óleo sobre tela, 145 x 154 cm. Antonio Sarelli pinta su propia historia: el rostro de su madre, el amor, el arte, su estudio, y hasta la carreta con la que distribuía carne en su juventud. Una obra donde la memoria se vuelve pintura y la biografía, símbolo. Un testimonio visual de raíces, pasiones y caminos recorridos.",
  },
  {
    img: img14,
    year: "1995",
    text: "Reconocimiento a su labor artística otorgado por la Presidencia de la Nación Argentina en 1996.",
  },
  {
    img: img15,
    year: "1996",
    text: "Exposición en el Museo de Arte Moderno de Mendoza (1996), consolidando su presencia en uno de los espacios más emblemáticos del arte contemporáneo de la provincia.",
  },
  {
    img: img16,
    year: "1996",
    text: "Exposición en el Museo de la Marina de Vilassar (Barcelona, 1996), consolidando la presencia de Antonio Sarelli en el circuito artístico español.",
  },
  {
    img: img17,
    year: "1996",
    text: "Exposición en el Museo de la Marina de Vilassar (Barcelona, 1996), consolidando la presencia de Antonio Sarelli en el circuito artístico español.",
  },
  {
    img: img18,
    year: "1997",
    text: "En 1997, el expresidente Carlos Menem obsequia al Papa Juan Pablo II una obra de Antonio Sarelli: un símbolo de arte argentino como ofrenda espiritual.",
  },
  {
    img: img19,
    year: "1998",
    text: "Premio Nihuil 1998 – Rubro Arte. Reconocimiento a la trayectoria y aporte cultural de Antonio Sarelli.",
  },
  {
    img: img20,
    year: "1998",
    text: "Serie Constelaciones. Muestra presentada en el Palais de Glace (Buenos Aires, 1998), donde Antonio Sarelli desplegó un cielo interior: constelaciones de memoria, pérdida y trascendencia. Una cartografía afectiva en la que lo íntimo se eleva a lo universal.",
  },
  {
    img: img21,
    year: "2000",
    text: "Evocación (2000) – Técnica mixta sobre tela, 180 x 300 cm. En esta constelación personal, Sarelli traza un mapa íntimo del cielo: su madre, su padre y su hermano fallecido emergen entre los astros. Fragmentos de memoria y afecto suspendidos en azul profundo. Una cartografía del alma donde el duelo se transforma en luz y el universo se vuelve casa.",
  },
  {
    img: img22,
    year: "2000",
    text: " Participa en la Exposición Universal “Jubileo 2000” – Cáritas Política, Vaticano, con la obra “Entre el silencio y la ternura”. Museo del Vaticano (2000).",
  },
  {
    img: img23,
    year: "2000",
    text: " Resurrección (2000). Técnica mixta sobre tela, 170 x 114 cm. El dolor del mundo asciende, y en la cruz se transforma en promesa de redención.",
  },
  {
    img: img24,
    year: "2000",
    text: " Éxodo (2000). Una travesía de cuerpos y almas. Técnica mixta sobre tela, 110x80 cm. Sarelli nos enfrenta al drama de dejarlo todo atrás.",
  },
  {
    img: img25,
    year: "2004",
    text: " ´Medio Siglo con la Pintura´ (2004) — Muestra retrospectiva que recorrió 50 años de trayectoria artística.",
  },
  {
    img: img26,
    year: "2006",
    text: "Evocando a los Maestros (2006) – Técnica mixta sobre tela, 152 x 400 cm. Obra adquirida por el Gobierno de Mendoza y emplazada en el 7° piso de Casa de Gobierno, espacio que hoy lleva el nombre de Antonio Sarelli. Reproducciones de su obra acompañan, como homenaje vivo a su legado en la cultura mendocina.",
  },
  {
    img: img27,
    year: "2008",
    text: " En 2008 se inaugura, en su honor, la Escuela N° 4-225 ´Antonio Sarelli´ en Maipú.",
  },
  {
    img: img28,
    year: "2009",
    text: " Perpetuo Dilema (2009) marca el inicio de la Serie Equilibrio: más de 20 obras en óleo y técnicas mixtas de gran formato, donde Antonio Sarelli nos confronta con los equilibrios esenciales de la vida —entre el riesgo y la ambición, entre la supervivencia y el deseo de permanecer... y muchos otros que nos atraviesan día a día.",
  },
  {
    img: img29,
    year: "2014",
    text: " Obra destacada en la contratapa del libro ´Historia del Arte en Mendoza´ (2014), de Ignacio Gutiérrez Zaldívar.",
  },
  {
    img: img30,
    year: "2015",
    text: "Muestra Retrospectiva 2015 - Nave Cultural.",
  },
  {
    img: img31,
    year: "2021",
    text: "Imagen original realizada por Antonio Sarelli para toda la gama de vinos de Bodega Ruca Malen (2021). La obra se convirtió en emblema visual reproducido en sus etiquetas.",
  },
  {
    img: img32,
    year: "2026",
    text: "Gama completa de Vinos Ruca Malen 2026 con la Imagen de Antonio Sarelli",
  },
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

      const progress = (window.scrollY - offsetTop) / scrollable;

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
      <div className={styles.contenedorGlobal}>

        <header className={styles.tituloPrincipal}>
          <h1>Su vida</h1>
        </header>

        <section ref={containerRef} className={styles["img-group-container"]}>
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
                  <div className={styles.imageWrapper}>
                    <img src={slide.img ?? ""} alt="" />
                  </div>
                  <h3>{slide.year}</h3>
                  <h4>{slide.text}</h4>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </article>
  );
};
