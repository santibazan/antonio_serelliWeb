import styles from "./LandingUi.module.css";
import imgVision from "../../../Imagenes/ArteMendocino.jpeg";

import { useEffect } from "react";

export const LandingUi = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(`.${styles.animacion}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target); // 🔑 CLAVE
          }
        });
      },
      { threshold: 0.3 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      {/* Hero con imagen */}
      <section className={styles.imagen}>
        <div className={styles.overlay} />

        <div className={styles.contentTallerSarelli}>
          <h1>Taller Sarelli</h1>
          <h4>
            Bienvenidos a la Fundación de Antonio Sarelli, un espacio donde el
            arte conecta culturas, territorios y comunidades.
          </h4>
        </div>
      </section>
      <section className={styles.contentVisiones}>
        {/* mision */}

        <div className={styles.contenedorEtiqueta}>
          <div className={styles.animacion}>
            <h2>Nuestra mision</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
              iure enim vitae iste voluptas delectus esse ducimus, tempore
              quisquam minima sunt. Eos, consequatur est ab qui ad reprehenderit
              ut provident!
            </p>
          </div>
          <img
            className={styles.imgMision}
            src={imgVision}
            alt="imagen vision"
          />
        </div>

        {/* proposito */}
        <div className={styles.contenedorEtiqueta}>
         
          <div className={styles.animacion}>
            
            <h2>Nuestro Proposito:</h2>
            <p>
              El taller Sarelli nace para preservar y difundir el legado
              artistico y humano de una familia de artistas comprometida con los
              valores mas sublimes del ser: el amor, el respeto, la union, la
              paz, la serenidad y la contemplación
            </p>
          </div>
          <img
            className={styles.imgMision}
            src={imgVision}
            alt="imagen vision"
          />
        </div>
        {/* valores */}
        <div className={styles.contenedorEtiqueta}>
          <div className={styles.animacion}>
            <h2>Nuestros valores:</h2>
            <ul>
              <li>
                <h3>Amor como motor del acto creativo</h3>
              </li>
              <li>
                <h3>Respeto por la vida, naturaleza y el otro</h3>
              </li>
              <li>
                <h3>Union intergeneracional y comunitaria</h3>
              </li>
              <li>
                <h3>Paz como forma de presencia</h3>
              </li>
              <li>
                <h3>Serenidad como actitud frente al tiempo</h3>
              </li>
              <li>
                <h3>
                  Contemplacion como modo de habitarnos y habitar el mundo
                </h3>
              </li>
            </ul>
          </div>
          <img
            className={styles.imgProposito}
            src={imgVision}
            alt="imagen vision"
          />
        </div>

        {/* vision */}
        <div className={styles.contenedorEtiqueta}>
          <div className={styles.animacion}>
            <h2>Nuestra vision:</h2>
            <p>
              El taller Sarelli nace para preservar y difundir el legado
              artistico y humano de una familia de artistas comprometida con los
              valores mas sublimes del ser: el amor, el respeto, la union, la
              paz, la serenidad y la contemplación
            </p>
          </div>
          <img
            className={styles.imgProposito}
            src={imgVision}
            alt="imagen vision"
          />
        </div>
      </section>
    </>
  );
};
