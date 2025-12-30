import imgPrincipal from "../../../Imagenes/imgPrincipal.jpg";
import styles from "./LandingPage.module.css";


export const LandingPage = () => {
  return (
    <>
      <section
        className={styles.imagen}>
        <img 
        src={imgPrincipal}
        alt="Taller Sarelli"
        className={styles.heroImage}
        />
      
        <div className={styles.overlay} />

        <div className={styles.content}>
          <h1>Taller Sarelli</h1>
          <h4>
            Bienvenidos a la Fundación de Antonio Sarelli, un espacio donde el
            arte conecta culturas, territorios y comunidades.
          </h4>

          <div className={styles.proposito}>
            <h2>Nuestro Proposito:</h2>
            <p>
              El taller Sarelli nace para preservar y difundir el legado
              artistico y humano de una familia de artistas comprometida con los
              valores mas sublimes del ser: el amor, el respeto, la union, la
              paz, la serenidad y la contemplación
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
