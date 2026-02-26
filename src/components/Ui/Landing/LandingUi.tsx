import styles from "./LandingUi.module.css";

import { useEffect } from "react";

import ImageGridTaller from "../Antonio/ImageGrid/ImageGridTaller";
import ScrollToTop from "../Scroll/ScrollToTop";

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
          <h1>Taller de Arte Sarelli </h1>
          <h4>
            Nace para preservar y difundir el legado artistico y humano de una
            familia de artistas comprometida con los valores mas sublimes del
            ser: el amor, el respeto, la union, la paz, la serenidad y la
            contemplación. A través de la pintura, la escultura y la educacion,
            promovemos un arte que no solo se contempla, sino que tambien se
            comparte, se honra y se vive.
            {/* Nuestra misión es que el arte de Mendoza -como el buen vino- llegue a cada mesa, a cada hogar, a cada alma que necesite detenerse y volver a mirar con el corazón. */}
          </h4>
        </div>
      </section>

      {/* Parte de las viñetas */}

      <section className={styles.contentVisiones}>
        {/*1. Historia de Origen */}
        <div className={`${styles.contenedorEtiqueta}`}>
          <div className={styles.textoWrapper}>
            <div className={`${styles.animacion} ${styles.fromLeft}`}>
              <h2 className={styles.tituloFinal}>Historia de origen.</h2>

              <p className={styles.textoFinal}>
                En un rincón sereno de Mendoza, entre montañas, viñedos y
                memorias, un atelier resiste al olvido. No es solo un taller, es
                un santuario de contemplacion, un espacio donde el arte ha sido,
                durante décadas, un acto de resistencia, de paz, y de profundo
                amor humano. Antonio Sarelli, con más de siete decadas de
                entrega silenciosa a la pintura, ha sostenido una misión
                constante: preservar la esencial del ser hbumano. Sus trazos son
                susurros firmes que hablan de respeto, unión, serenidad,
                contemplación y paz. Su obra no grita, abraza. No exige, invita.
                Cada pieza es una ofrenda a los valores que el mundo parece
                haber dejado atras. A su lado -y con una voz propia poderosa-
                Rebeca Sarelli tomo un camino distinto, pero completamente: el
                de la escultura. Sus manos moldean no solo materia, sino
                sensibilidad. En cada volumen que crea hay un llamado a
                detenerse, a contemplar con profundidad, a escuchar al silencio.
                Su obra es un ancla en un tiempo que corre sin mirar. Es la voz
                del presente que busca reconectar con lo más humano a través de
                la forma.
              </p>
            </div>
          </div>
          <img
            className={styles.imgMision}
            src="https://res.cloudinary.com/dovztsxyv/image/upload/v1771951855/TallerDesdeAbajo_zd4uhe.jpg"
          />
        </div>

        {/*2. Proposito */}
        <div className={`${styles.contenedorEtiqueta} ${styles.reverse}`}>
          <div className={styles.textoWrapper}>
            <div className={`${styles.animacion} ${styles.fromRight}`}>
              <h2 className={styles.tituloFinal}>Nuestro proposito</h2>

              <div className={styles.textoFinal}>
                Tenemos un doble proposito:
                <ul>
                  <br />
                  <li>
                    Preservar y proyectar el legado artistico y humano de
                    Antonio y Rebeca Sarelli.
                  </li>
                  <br />
                  <li>
                    Difundir el arte mendocino con la misma naturalidad con la
                    que se sirve un vino: que llegue a cada mesa, a cada hogar,
                    a cada alma que necesite volver a sentir.
                  </li>
                </ul>
                <br />
              </div>
            </div>
          </div>
          <img
            className={styles.imgMisionn}
            src="https://res.cloudinary.com/dovztsxyv/image/upload/v1771951854/TallerSur_ifn7uu.jpg"
          />
        </div>

        {/*3. Valores */}
        <div className={`${styles.contenedorEtiqueta}`}>
          <div className={styles.textoWrapper}>
            <div className={`${styles.animacion} ${styles.fromLeft}`}>
              <h2 className={styles.tituloFinal}>Nuestros valores: </h2>
              <div className={styles.textoFinal}>
                <ul>
                  <li>Amor como motor del acto creativo.</li>
                  <li>Respeto por la vida, naturaleza y el otro.</li>
                  <li>Union intergeneracional y comunitaria.</li>
                  <li>Paz como forma de presencia.</li>
                  <li>Serenidad como actitud frente al tiempo.</li>
                  <li>
                    Contemplacion como modo de habitarnos y habitar el mundo.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <img
            className={styles.imgMision}
            src="https://res.cloudinary.com/dovztsxyv/image/upload/v1771951858/puertaNorte_hon0of.jpg"
          />
        </div>

        <h4>Algunas imagenes de nuestro taller</h4>
        <ImageGridTaller />
      </section>
      <ScrollToTop />

    </>
  );
};
