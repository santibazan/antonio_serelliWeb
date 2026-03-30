import ScrollToTop from "../Scroll/ScrollToTop";
import styles from "./ArteMendocino.module.css";

export const ArteMendocinoUi = () => {
  return (
    <>
      <section className={styles.contentVisiones}>
        <h1>Arte Mendocino</h1>
        <div className={`${styles.contenedorEtiqueta}`}>
          <div className={styles.textoWrapper}>
            <div className={`${styles.contentPrincipal}`}>
              <p>
                La sección de Arte Mendocino es un espacio donde encontraremos
                obras de artistas locales que reflejan la identidad, la
                sensibilidad y la diversidad cultural de la región. A través de
                distintas expresiones visuales, este recorrido propone un
                acercamiento a miradas personales que dialogan con el paisaje,
                la historia y la vida cotidiana de Mendoza.
              </p>
              <p>
                Las obras reunidas en este espacio dan cuenta de una producción
                artística rica y heterogénea, donde conviven distintas técnicas,
                estilos y generaciones. Cada pieza es testimonio de un proceso
                creativo atravesado por el entorno, las tradiciones y las
                experiencias propias de quienes habitan este territorio.
              </p>
              <p>
                Más que una simple muestra, esta sección busca poner en valor el
                arte local como una forma de expresión viva, en constante
                transformación, y como un puente entre los artistas y la
                comunidad. Un lugar para descubrir, contemplar y reconocer la
                fuerza creativa que define al arte mendocino.
              </p>
            </div>
          </div>
          <img
            className={styles.imgMision}
            // src="https://res.cloudinary.com/dovztsxyv/image/upload/v1771951855/TallerDesdeAbajo_zd4uhe.jpg"
            src="https://res.cloudinary.com/dovztsxyv/image/upload/v1771951832/7ArteMendodino_j1pevm.jpg"
          />
        </div>
      </section>

      {/* ======================================================================================================================= */}
      {/* <section className={styles.imagen}> */}
      {/* <div className={styles.overlay} /> */}
      {/* <div className={styles.contentPrincipal}>
          <h1>Arte Mendocino</h1>
          <p>
            La sección de Arte Mendocino es un espacio donde encontraremos obras
            de artistas locales que reflejan la identidad, la sensibilidad y la
            diversidad cultural de la región. A través de distintas expresiones
            visuales, este recorrido propone un acercamiento a miradas
            personales que dialogan con el paisaje, la historia y la vida
            cotidiana de Mendoza.
          </p>
          <p>
            Las obras reunidas en este espacio dan cuenta de una producción
            artística rica y heterogénea, donde conviven distintas técnicas,
            estilos y generaciones. Cada pieza es testimonio de un proceso
            creativo atravesado por el entorno, las tradiciones y las
            experiencias propias de quienes habitan este territorio.
          </p>
          <p>
            Más que una simple muestra, esta sección busca poner en valor el
            arte local como una forma de expresión viva, en constante
            transformación, y como un puente entre los artistas y la comunidad.
            Un lugar para descubrir, contemplar y reconocer la fuerza creativa
            que define al arte mendocino.
          </p>
        </div> */}
      {/* </section> */}

      {/* <ImageGridArteMendocino /> */}
      <ScrollToTop />
    </>
  );
};
