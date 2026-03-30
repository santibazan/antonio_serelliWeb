import { Link } from "react-router-dom";
import styles from "./Cosechas.module.css";

export const CosechasUi = () => {
  return (
    <div className={styles.contenedorGlobal}>
      <h1>La cosecha</h1>
      <p>
        No podría ser completamente objetivo si intentara escribir una crítica
        sobre mi papá como artista. Su obra está atravesada por el sacrificio
        con el que sostuvo a su familia y, al mismo tiempo, la constancia con la
        que defendió su pasión.
      </p>
      <p>
        Él lo resume en dos frases que lo definen: “La musa viene, pero te tiene
        que encontrar trabajando” y “Una buena obra tiene 90% de transpiración y
        10% de inspiración”.
      </p>
      <p>
        Cuando uno entra a su estudio, lo encuentra a él. Se respira amor,
        ternura, silencio y reflexión . Y lo más conmovedor es la coherencia :
        la misma templanza que sostiene su vida es la que aparece en sus
        pinturas. Al mirar su obra en conjunto se percibe algo inconfundible: el
        esfuerzo y la pasión de una vida entregada al arte durante más de se t
        en ta años , un recorrido que muy pocos logran sostener con esa
        intensidad.
      </p>
      <p className={styles.aldo}>Aldo Sarelli.</p>
      <a
        href="https://drive.google.com/file/d/1DVXd3-FIxUqICRfbHsYFTbKYvi91Ado8/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.linkLibro}
      >
        Libro Antonio Sarelli
      </a>
      <div className={styles.containerPrincipal}>
        <Link to="/AntonioSarelli/Premios">
          <h4 className={styles.title}>Premios y obras en museos.</h4>
        </Link>

        <Link to="/AntonioSarelli/Reconocimientos">
          <h4 className={styles.title}>Reconocimientos.</h4>
        </Link>

        <Link to="/AntonioSarelli/Criticas">
          <h4 className={styles.title}>Críticas.</h4>
        </Link>
      </div>
    </div>
  );
};
