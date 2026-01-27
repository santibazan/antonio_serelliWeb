import styles from "./LandingUi.module.css";

import imgProposito from "../../../Imagenes/TallerSur.jpg";
import imgMision from "../../../Imagenes/imgResiliencia.jpeg";
import imgValores from "../../../Imagenes/puerta.jpeg";
import imgHistoria from "../../../Imagenes/maquina.jpeg";


import { useEffect } from "react";

import { Link } from "react-router-dom";

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
      { threshold: 0.3 },
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      {/* Hero con imagen */}
      <section className={styles.imagen}>
        <div className={styles.overlay} />

        <div className={styles.contentTallerSarelli}>
          <h1>Taller Sarelli </h1>
          <h4>
            Bienvenidos a la Fundación de Antonio Sarelli, un espacio donde el
            arte conecta culturas, territorios y comunidades.
          </h4>
        </div>
      </section>

      {/* Parte de las viñetas */}
      <section className={styles.contentVisiones}>
        {/* Proposito */}
        <div className={`${styles.contenedorEtiqueta} ${styles.normal}`}>
          <div className={styles.textoWrapper}>
            <div className={`${styles.animacion} ${styles.fromLeft}`}>
              <h2 className={styles.tituloFinal}>Nuestro propósito</h2>
              <p className={styles.textoFinal}>
                "El taller Serelli nace para preservar y difundir el legado
                artistico y humano de una familia de artistas comprometida con
                los valores mas sublimes del ser: el amor, el respeto, la union,
                la paz, la serenidad y la contemplación"
              </p>
            </div>
          </div>
          <img className={styles.imgMision} src={imgProposito} />
        </div>
        {/* Mision */}
        <div className={`${styles.contenedorEtiqueta} ${styles.reverse}`}>
          <div className={styles.textoWrapper}>
            <div className={`${styles.animacion} ${styles.fromRight}`}>
              <h2 className={styles.tituloFinal}>Nuestra misión:</h2>
              <p className={styles.textoFinal}>
                Nuestra misión es que el arte de Mendoza -como el buen vino-
                llegue a cada mesa, a cada hogar, a cada alma que necesite
                detenerse y volver a mirar con el corazón.
              </p>
            </div>
          </div>
          <img className={styles.imgMision} src={imgMision} />
        </div>
        {/* Valores */}
        <div className={`${styles.contenedorEtiqueta} ${styles.normal}`}>
          <div className={styles.textoWrapper}>
            <div className={`${styles.animacion} ${styles.fromLeft}`}>
              <h2 className={styles.tituloFinal}>Nuestros valores:</h2>
              <ul className={styles.listaFinal}>
                <li>
                  <h3 >Amor como motor del acto creativo</h3>
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
          </div>
          <img className={styles.imgMision} src={imgValores} />
        </div>

        {/* Historia */}
        <div className={`${styles.contenedorEtiqueta} ${styles.reverse} ${styles.destacada}`}>
          <div className={styles.textoWrapper}>
            <div className={`${styles.animacion} ${styles.fromRight}`}>
              <h2 className={styles.tituloFinal}>Historia de origen</h2>
              <p className={styles.textoFinal}>
                Un recorrido por los comienzos, la memoria y el espiritu que
                dieron vida al Taller Sarelli.
              </p>
              <Link to="/Historia" className={styles.botonn}>
                Ver historia completa →{" "}
              </Link>
            </div>
          </div>
          <img className={styles.imgMision} src={imgHistoria} />
        </div>
      </section>
    </>
  );
};
