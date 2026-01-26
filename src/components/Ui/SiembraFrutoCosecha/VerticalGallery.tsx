import { useEffect } from "react";
import { animate, scroll } from "motion";
import styles from "./VerticalGallery.module.css";
import { Link } from "react-router-dom";

import imagenSiembra from "../../../Imagenes/LaSiembra.jpeg"
import imagenFruto from "../../../Imagenes/LosFrutos.jpeg"
import imagenCosecha from "../../../Imagenes/LaCosecha.jpeg"

const VerticalGallery: React.FC = () => {
  useEffect(() => {
    // Progress bar representing gallery scroll
    scroll(
      animate(`.${styles.progress}`, { scaleX: [0, 1] }, { ease: "linear" })
    );

    document
      .querySelectorAll(`.${styles["img-container"]}`)
      .forEach((section) => {
        const header = section.querySelector(`.${styles.title}`);
        // const header = section.querySelector("h2");

        if (!header) return;

        scroll(
          animate(header, { y: [-400, 400] }, { ease: "linear" }),
          {
            target: header,
          }
        );
      });
  }, []);

  return (
    <>
      <section className={styles["img-container"]}>
        <div>
          <img src={imagenSiembra} alt="Imagen Siembra" style={{width: "auto" }}/>

          <Link to="/AntonioSarelli/LaSiembra">
          <h4 className={styles.title}>La siembra</h4>
          {/* <h2>La siembra</h2> */}
          </Link>
        </div>
      </section>

      <section className={styles["img-container"]}>
        <div>
          <img src={imagenFruto} alt="Imagen Fruto" />
          <Link to="/AntonioSarelli/LosFrutos">
          <h4 className={styles.title}>Los Frutos</h4>
          {/* <h2>Los Frutos</h2> */}
          </Link>
        </div>
      </section>

      <section className={styles["img-container"]}>
        <div>
          <img src={imagenCosecha} alt="Imagen Cosecha" style={{width: "auto" }}/>
          <Link to="/AntonioSarelli/LaCosecha">
          <h4 className={styles.title}>La Cosecha</h4>
          {/* <h2>La Cosecha</h2> */}
          </Link>
        </div>
      </section>

      <div className={styles.progress}></div>
    </>
  );
};

export default VerticalGallery;
