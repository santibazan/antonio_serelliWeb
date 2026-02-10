import styles from "./AntonioUi.module.css";
import { Link } from "react-router-dom";
import imagenSiembra from "../../../Imagenes/LaSiembra.jpeg";
import imagenFruto from "../../../Imagenes/LosFrutos.jpeg";
import imagenCosecha from "../../../Imagenes/LaCosecha.jpeg";
import { Timeline } from "../Historia/Timeline/Timeline";
import ScrollToTop from "../Scroll/ScrollToTop";

export const AntonioUi = () => {
  return (
    <div className={styles.contenedorGlobal}>
      <h1>Antonio Sarelli</h1>
      <img src="" alt="" />

      <p>
        "Porque el mundo tal cual era nunca podría ser más que una fracción del
        mundo, porque lo real también consistía en lo que podría haber ocurrido
        y no sucedió" Paul Auster Hasta encontrarse con sus primeros maestros,
        Antonio Sarelli fue un niño que al terminar la escuela primaria, no
        tenía otro destino que continuar con el oficio heredado de agricultor.
        Aquel destino heredado, el del trabajo en el campo, ese otro sendero no
        tomado, sigue latiendo en cada una de sus obras. Para honrarlo, esta
        página se divide en tres partes, denominados con elementos vinculados a
        la agricultura; la siembra, que presenta una biografía del artista, los
        frutos, un catálogo de obras y la cosecha, una selección de críticas y
        artículos periodísticos
      </p>
      <div className={styles.containerPrincipal}>
        <section className={styles["img-container"]}>
          <div>
            <img
              src={imagenSiembra}
              alt="Imagen Siembra"
              style={{ width: "auto" }}
            />

            <Link to="/AntonioSarelli/LaSiembra">
              <h4 className={styles.title}>La siembra</h4>
            </Link>
          </div>
        </section>
        <section className={styles["img-container"]}>
          <div>
            <img src={imagenFruto} alt="Imagen Fruto" />
            <Link to="/AntonioSarelli/LosFrutos">
              <h4 className={styles.title}>Los Frutos</h4>
            </Link>
          </div>
        </section>
        <section className={styles["img-container"]}>
          <div>
            <img
              src={imagenCosecha}
              alt="Imagen Cosecha"
              style={{ width: "auto" }}
            />
            <Link to="/AntonioSarelli/LaCosecha">
              <h4 className={styles.title}>La Cosecha</h4>
            </Link>
          </div>
        </section>
      </div>
      <Timeline />
      <ScrollToTop />
    </div>
  );
};
