import { useEffect, useRef, useState } from "react";
import { animate, scroll } from "motion";
import styles from "./Timeline.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type Slide = {
  year: string;
  text: string;
  img?: string;
};

const slides: Slide[] = [
  {
    img: "",
    year: "",
    text: "",
  },
  {
    img: "",
    year: "1936",
    text: "Nace el 26 de agosto en Russell Maipú Mendoza",
  },
  {
    img: "",
    year: "1942",
    text: "Gutierres “Escuela Moyano“",
  },
  {
    img: "",
    year: "1947",
    text: "Carrodilla “Escuela Nacional Nº 61”",
  },
  {
    img: "",
    year: "1951",
    text: "Ingresa a la Academia Provincial de Bellas Artes",
  },
  {
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951737/1954_ygw45m.jpg",
    year: "1954",
    text: "Su primer óleo, “Homenaje a Zurbarán” (1954), marca el inicio de su camino artístico.",
  },
  {
    img: "",
    year: "1960",
    text: "Se recibe como profesor de Dibujo",
  },
  {
    img: "",
    year: "1961",
    text: "Comienza a trabajar en Irrigación y es trasladado por 9 meses a Valle Hermoso para realizar trabajos de Hidronivometereología.",
  },
  {
    img: "",
    year: "1962",
    text: "Participa del II Salón Bienal de Artes Plásticas de Mendoza",
  },
  {
    img: "",
    year: "1963",
    text: "Fundación Grupo Numen",
  },
  {
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951740/1964_rerxfl.jpg",
    year: "1964",
    text: "“Diálogo con Duendes” (1964) — Premio Bienal de Arte y Premio Estímulo. Una obra temprana que anticipa la fuerza expresiva de Sarelli.",
  },
   {
    img: "",
    year: "1965",
    text: "Salón Primavera de San Rafael, premio estímulo “Brigadas Líricas” por su obra “Figura” (1965-03-28 – Diploma)",
  },
  {
    img: "",
    year: "1966",
    text: "Iº Salón Colectivo de Artes Plásticas de Mendoza F.O.E.C.Y.T: Primer Premio: Antonio Sarelli con “Nocturno”",
  },
  {
    img: "",
    year: "1967",
    text: "1º premio IV Salón Nacional Feria del Libro de Mendoza compartido junto a Rafael Montemayor.",
  },
  
  {
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951741/1968_hjq07u.jpg",
    year: "1968",
    text: "“La hora de sueño” (1968) — Primer Premio UCEIDM otorgado a Antonio Sarelli, reconocimiento a su originalidad y profundidad expresiva.",
  },
  {
    img: "",
    year: "1969",
    text: "XVII Salón de Primavera de San Rafael, Gran Premio de Honor “Cristeta González de Viñuela” Antonio Sarelli con la obra “Después de la tormenta”.",
  },
  {
    img: "",
    year: "1970",
    text: "1º Premio Salón Vendimia de Pintura 1970 con la obra “Detente escucha”",
  },
  {
    img: "",
    year: "1971",
    text: "El 3 de febrero se casa con Silvia Spera, profesora de arte y concertista de piano dedicada a la docencia infantil.",
  },
  {
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951743/1972_kixtij.jpg",
    year: "1972",
    text: "Medioevo (1972) – Obra premiada con el segundo puesto en “Plásticos del Interior” y adquirida por el Museo Eduardo Sívori. Exhibida en la sala de reuniones de la Quinta de Olivos.",
  },
  {
    img: "",
    year: "1973",
    text: "Nacimiento de su primer hijo Aldo Gabriel el 3 de junio. Comienza la Serie del Huevo, vemos en Sarelli un cambio en la paleta y mayor simbolismo.",
  },
  {
    img: "",
    year: "1974",
    text: "Muestra Grupo A3 en Galería Witcomb. Ángel Gil, Alfredo Ceverino y Antonio Sarelli",
  },
  {
    img: "",
    year: "1975",
    text: "Muestra en Galería Witcomb",
  },
  {
    img: "",
    year: "1976",
    text: "Nace su hija Rebeca el 17 de septiembre. En su pintura vemos ya un desarrollo hacia la figura humana como centro de la obra y su paleta va desarrollando mayores cromatismos.",
  },
  {
    img: "",
    year: "1977",
    text: "Apertura de la Galería Zulema Zoireff como director de la misma.",
  },
  {
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951792/1979_osxbzy.jpg",
    year: "1979",
    text: "Salón de Artes Plásticas – Vendimia 1979: Primer Premio otorgado a Antonio Sarelli por su obra “Domingo en la tarde”.",
  },
  {
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951747/1982_qmhugq.jpg",
    year: "1982",
    text: "Salón Nacional de Pintura “Centenario del Diario Los Andes” (1982): Mención Honorífica para Antonio Sarelli por su obra “Dos Imágenes y el Silencio”.",
  },
  {
    img: "",
    year: "1983",
    text: "Salón Vendimia '83' de Artes Plásticas MMAMM",
  },
  {
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951746/1985_v1uqhd.jpg",
    year: "1985",
    text: "Premio Cecilia Grierson en el Salón Nacional de Pintura (1985) por la obra “Dimensión del Silencio” — óleo sobre madera, 180 x 160 cm. Tras recibir 17 galardones, Sarelli decide no participar más en salones.",
  },
  {
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951747/1988_ly2box.jpg",
    year: "1988",
    text: " Exposición individual en el Museo Emiliano Guiñazú – Casa Fader (1988), uno de los espacios más emblemáticos del arte mendocino.",
  },
  {
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951749/1988a_r8j8r3.jpg",
    year: "1988",
    text: "Antonio Sarelli realiza su primera exposición en Barcelona en 1988, en la Sala Jaimes. A partir de allí, consolida una intensa presencia en España con muestras en 1991 y 1993 en la misma sala, y en el Museo de Vilassar en 1996. En 1993, su obra protagoniza la tapa de la revista GAL ART (Barcelona), reflejo del reconocimiento a su trabajo en el ámbito internacional.",
  },
  {
    img: "",
    year: "1990",
    text: "Galería de Arte Gran Via, Logroño, La Rioja. Alfredo Ceverino, Ángel Gil, Antonio Sarelli, José Scacco.",
  },
  {
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951751/1991_lxffua.jpg",
    year: "1991",
    text: "Colección 1991 – “Denominación de Origen”, Bodega Luigi Bosca: 12 vinos con etiquetas de seda ilustradas con obras de Antonio Sarelli. Edición especial de regalos empresariales para celebrar la denominación de origen de su vino.",
  },
  {
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951753/1993_tiouwm.jpg",
    year: "1993",
    text: "Tapa de la revista GAL ART (Barcelona, 1993), en el marco de sus numerosas exposiciones en España: Sala Jaimes (1988, 1991, 1993) y Museo de Vilassar (1996).",
  },
  {
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951755/1995_wwzrdy.jpg",
    year: "1995",
    text: "Reconocimiento a su labor artística otorgado por la Cámara de Diputados de Mendoza en 1995.",
  },
  {
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951756/1995a_uzetk1.jpg",
    year: "1995",
    text: "Evocación (1995) – Óleo sobre tela, 145 x 154 cm. Antonio Sarelli pinta su propia historia: el rostro de su madre, el amor, el arte, su estudio, y hasta la carreta con la que distribuía carne en su juventud. Una obra donde la memoria se vuelve pintura y la biografía, símbolo. Un testimonio visual de raíces, pasiones y caminos recorridos.",
  },
  {
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951758/1996_q7fujt.jpg",
    year: "1996",
    text: "Reconocimiento a su labor artística otorgado por la Presidencia de la Nación Argentina en 1996.",
  },
  {
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951760/1996a_mrzdlp.jpg",
    year: "1996",
    text: "Exposición en el Museo de Arte Moderno de Mendoza (1996), consolidando su presencia en uno de los espacios más emblemáticos del arte contemporáneo de la provincia.",
  },
  {
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951762/1996b_exldzx.jpg",
    year: "1996",
    text: "Exposición en el Museo de la Marina de Vilassar (Barcelona, 1996), consolidando la presencia de Antonio Sarelli en el circuito artístico español.",
  },
  {
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951763/1997_adcsjs.jpg",
    year: "1997",
    text: "En 1997, el expresidente Carlos Menem obsequia al Papa Juan Pablo II una obra de Antonio Sarelli: un símbolo de arte argentino como ofrenda espiritual.",
  },
  {
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951765/1998_kvfnvo.jpg",
    year: "1998",
    text: "Premio Nihuil 1998 – Rubro Arte. Reconocimiento a la trayectoria y aporte cultural de Antonio Sarelli.",
  },
  {
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951770/1998a_iwgtng.jpg",
    year: "1998",
    text: "Serie Constelaciones. Muestra presentada en el Palais de Glace (Buenos Aires, 1998), donde Antonio Sarelli desplegó un cielo interior: constelaciones de memoria, pérdida y trascendencia. Una cartografía afectiva en la que lo íntimo se eleva a lo universal.",
  },
  {
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951768/2000_uck6o3.jpg",
    year: "2000",
    text: "Evocación (2000) – Técnica mixta sobre tela, 180 x 300 cm. En esta constelación personal, Sarelli traza un mapa íntimo del cielo: su madre, su padre y su hermano fallecido emergen entre los astros. Fragmentos de memoria y afecto suspendidos en azul profundo. Una cartografía del alma donde el duelo se transforma en luz y el universo se vuelve casa.",
  },
  {
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951773/2000a_kn2k4o.jpg",
    year: "2000",
    text: " Participa en la Exposición Universal “Jubileo 2000” – Cáritas Política, Vaticano, con la obra “Entre el silencio y la ternura”. Museo del Vaticano (2000).",
  },
  {
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951775/2000b_x29jl4.jpg",
    year: "2000",
    text: " Resurrección (2000). Técnica mixta sobre tela, 170 x 114 cm. El dolor del mundo asciende, y en la cruz se transforma en promesa de redención.",
  },
  {
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951782/2000c_tmcfd2.jpg",
    year: "2000",
    text: " Éxodo (2000). Una travesía de cuerpos y almas. Técnica mixta sobre tela, 110x80 cm. Sarelli nos enfrenta al drama de dejarlo todo atrás.",
  },
  {
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951777/2004_uhhsfi.jpg",
    year: "2004",
    text: " ´Medio Siglo con la Pintura´ (2004) — Muestra retrospectiva que recorrió 50 años de trayectoria artística.",
  },
  {
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951790/2006_tlmagu.jpg",
    year: "2006",
    text: "Evocando a los Maestros (2006) – Técnica mixta sobre tela, 152 x 400 cm. Obra adquirida por el Gobierno de Mendoza y emplazada en el 7° piso de Casa de Gobierno, espacio que hoy lleva el nombre de Antonio Sarelli. Reproducciones de su obra acompañan, como homenaje vivo a su legado en la cultura mendocina.",
  },
  {
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951778/2008_e1vvqk.jpg",
    year: "2008",
    text: " En 2008 se inaugura, en su honor, la Escuela N° 4-225 ´Antonio Sarelli´ en Maipú.",
  },
  {
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951780/2009_irrwtn.jpg",
    year: "2009",
    text: " Perpetuo Dilema (2009) marca el inicio de la Serie Equilibrio: más de 20 obras en óleo y técnicas mixtas de gran formato, donde Antonio Sarelli nos confronta con los equilibrios esenciales de la vida —entre el riesgo y la ambición, entre la supervivencia y el deseo de permanecer... y muchos otros que nos atraviesan día a día.",
  },
  {
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951782/2014_jmgnet.jpg",
    year: "2014",
    text: " Obra destacada en la contratapa del libro ´Historia del Arte en Mendoza´ (2014), de Ignacio Gutiérrez Zaldívar.",
  },
  {
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951786/2015_h6ijzp.jpg",
    year: "2015",
    text: "Muestra Retrospectiva 2015 - Nave Cultural.",
  },
  {
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951788/2021_jdtlyt.jpg",
    year: "2021",
    text: "Imagen original realizada por Antonio Sarelli para toda la gama de vinos de Bodega Ruca Malen (2021). La obra se convirtió en emblema visual reproducido en sus etiquetas.",
  },
  {
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951784/2026_xyg6qo.jpg",
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
              <ArrowBackIosIcon />
            </button>

            <button
              className={`${styles.arrow} ${styles.right}`}
              onClick={() => goToSlide(current + 1)}
              aria-label="Slide siguiente"
            >
              <ArrowForwardIosIcon />
            </button>

            <ul className={styles["img-group"]}>
              {slides.map((slide, i) => (
                <li key={i} className={styles["img-container"]}>
                  <div className={styles.contenedorVin}>
                    <div className={styles.imageWrapper}>
                      <img src={slide.img ?? ""} alt="" />
                    </div>
                    <div className={styles.texto}>
                      <h3>{slide.year}</h3>
                      <h5>{slide.text}</h5>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </article>
  );
};
