import styles from "./AntonioUi.module.css";
import { Link } from "react-router-dom";
import ScrollToTop from "../Scroll/ScrollToTop";

const OBRAS = [
  {
    href: "/AntonioSarelli/LaSiembra",
    label: "La siembra",
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951898/LaSiembra_pqikvj.png",
    alt: "Imagen Siembra",
  },
  {
    href: "/AntonioSarelli/LosFrutos",
    label: "Los Frutos",
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951900/LosFrutos_bpffqx.png",
    alt: "Imagen Fruto",
  },
  {
    href: "/AntonioSarelli/LaCosecha",
    label: "La Cosecha",
    img: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951902/LaCosecha_akmpk9.png",
    alt: "Imagen Cosecha",
  },
];

export const AntonioUi = () => {
  return (
    <div className={styles.contenedorGlobalLanding}>
      <section className={styles.imagen}>
        <div className={styles.overlay} />

        <div className={styles.contentTallerSarelli}>
          <h1>Antonio Sarelli</h1>

          <p className={styles.quote}>
            "Porque el mundo tal cual era nunca podría ser más que una fracción
            del mundo, porque lo real también consistía en lo que podría haber
            ocurrido y no sucedió"
          </p>
          <p className={styles.quoteAuthor}>Paul Auster.</p>

          <p>
            Hasta encontrarse con sus primeros maestros, Antonio Sarelli fue un
            niño que al terminar la escuela primaria, no tenía otro destino que
            continuar con el oficio heredado de agricultor. Aquel destino
            heredado, el del trabajo en el campo, ese otro sendero no tomado,
            sigue latiendo en cada una de sus obras. Para honrarlo, esta página
            se divide en tres partes, denominados con elementos vinculados a la
            agricultura; la siembra, que presenta una biografía del artista, los
            frutos, un catálogo de obras y la cosecha, una selección de críticas
            y artículos periodísticos.
          </p>
        </div>
      </section>

      <div className={styles.containerPrincipal}>
        {OBRAS.map((obra) => (
          <section key={obra.href} className={styles.card}>
            <Link to={obra.href}>
              <img src={obra.img} alt={obra.alt} className={styles.cardImg} />
              <h4 className={styles.cardTitle}>{obra.label}</h4>
            </Link>
          </section>
        ))}
      </div>

      <div className={styles.libro}>
        <a
          href="https://drive.google.com/file/d/1DVXd3-FIxUqICRfbHsYFTbKYvi91Ado8/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://res.cloudinary.com/dovztsxyv/image/upload/v1774869643/Hora_de_la_tarde_y6wcxn.jpg"
            className={styles.imgLibro}
            alt="Portada libro"
          />
          <h1 className={styles.titulo}>Libro digital de Antonio Sarelli</h1>
        </a>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default AntonioUi;
