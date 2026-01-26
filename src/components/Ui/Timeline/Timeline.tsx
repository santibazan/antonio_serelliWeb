import { useEffect } from "react";
import { animate, scroll } from "motion";
import styles from "./gallery.module.css";

const Gallery: React.FC = () => {
  useEffect(() => {
    const items = document.querySelectorAll(`.${styles["img-container"]}`);

    // Animate gallery horizontally during vertical scroll
    scroll(
      animate(`.${styles["img-group"]}`, {
        transform: ["none", `translateX(-${items.length - 1}00vw)`],
      }),
      {
        target: document.querySelector(
          `.${styles["img-group-container"]}`
        ) as Element,
      }
    );

    // Progress bar representing gallery scroll
    scroll(animate(`.${styles.progress}`, { scaleX: [0, 1] }), {
      target: document.querySelector(
        `.${styles["img-group-container"]}`
      ) as Element,
    });
  }, []);

  return (
    <>
      <article id="gallery">
        <header>
          <h1>Su vida</h1>
        </header>

        <section className={styles["img-group-container"]}>
          <div>
            <ul className={styles["img-group"]}>
              <li className={styles["img-container"]}>
                <img src="/photos/cityscape/1.jpg" alt="" />
                <h3>1936</h3>
                <h6>Nace en Russell, Maipu</h6>
              </li>
              <li className={styles["img-container"]}>
                <img src="/photos/cityscape/2.jpg" alt="" />
                <h3>1953</h3>
                <h6>Ingresa a la acedemia provincial de Bellas Artes</h6>
              </li>
              <li className={styles["img-container"]}>
                <img src="/photos/cityscape/3.jpg" alt="" />
                <h3>1954</h3>
                <h6>Primer óleo</h6>
              </li>
              <li className={styles["img-container"]}>
                <img src="/photos/cityscape/4.jpg" alt="" />
                <h3>1961-1962</h3>
                <h6>Comienza a trabajar en irrigacion y es trasladado por 9 meses a valle hermoso para realizar trabajos de Hidronivometereología. </h6>
              </li>
              <li className={styles["img-container"]}>
                <img src="/photos/cityscape/5.jpg" alt="" />
                <h3>1963</h3>
                <h6>Fundacion grupo Numen</h6>
              </li>
              <li className={styles["img-container"]}>
                <img src="/photos/cityscape/5.jpg" alt="" />
                <h3>1964</h3>
                <h6>III Salon Bienal de Artes Plásticas, obtiene el premio estímulo por la obra "Dialogo de duendes"</h6>
              </li>
              <li className={styles["img-container"]}>
                <img src="/photos/cityscape/5.jpg" alt="" />
                <h3>1968</h3>
                <h6> Bodas de oro de la unión comercial e industrial de Mendoza</h6>
              </li>
              <li className={styles["img-container"]}>
                <img src="/photos/cityscape/5.jpg" alt="" />
                <h3>1969</h3> 
                <h6>XVII salón de primavera de San Rafael, Gran Premio de Honor "Cristeta González de Viñuela".</h6>
              </li>
              <li className={styles["img-container"]}>
                <img src="/photos/cityscape/5.jpg" alt="" />
                <h3>1970</h3>
                <h6> Primer premio salón vendimia de pintura 1970</h6>
              </li>
              <li className={styles["img-container"]}>
                <img src="/photos/cityscape/5.jpg" alt="" />
                <h3>1971</h3>
                <h6> Tercer Tremio IX Salón Bienal Municipal de Artes Plásticas</h6>
              </li>
              <li className={styles["img-container"]}>
                <img src="/photos/cityscape/5.jpg" alt="" />
                <h3>1972</h3>
                <h6>Certamen valores plásticos del interior</h6>
              </li>
              <li className={styles["img-container"]}>
                <img src="/photos/cityscape/5.jpg" alt="" />
                <h3>1973</h3>
                <h6>X Salón Bienal Municipalidad de Artes Plásticas</h6>
              </li>
              <li className={styles["img-container"]}>
                <img src="/photos/cityscape/5.jpg" alt="" />
                <h3>#005</h3>
              </li>
              <li className={styles["img-container"]}>
                <img src="/photos/cityscape/5.jpg" alt="" />
                <h3>#005</h3>
              </li>
              <li className={styles["img-container"]}>
                <img src="/photos/cityscape/5.jpg" alt="" />
                <h3>#005</h3>
              </li>
              <li className={styles["img-container"]}>
                <img src="/photos/cityscape/5.jpg" alt="" />
                <h3>#005</h3>
              </li>
              <li className={styles["img-container"]}>
                <img src="/photos/cityscape/5.jpg" alt="" />
                <h3>#005</h3>
              </li>
              <li className={styles["img-container"]}>
                <img src="/photos/cityscape/5.jpg" alt="" />
                <h3>#005</h3>
              </li>
            </ul>
          </div>
        </section>

        {/* <footer>
          <p>
            Photos by{" "}
            <a
              href="https://twitter.com/mattgperry"
              target="_blank"
              rel="noreferrer"
            >
              Matt Perry
            </a>
          </p>
        </footer> */}
      </article>

      {/* <div className={styles.progress}></div> */}
    </>
  );
};

export default Gallery;
