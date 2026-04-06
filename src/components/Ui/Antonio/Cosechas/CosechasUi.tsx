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
      <div className={styles.containerPrincipal}>
        <div className={styles.imagen2}>
          <img
            src="https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1775507066/Premios_y_Obras_en_Museos_o9mpdf.jpg"
            alt=""
          />
          <Link to="/AntonioSarelli/Premios">
            <h3 className={styles.title}>Premios y obras en museos</h3>
          </Link>
        </div>

        <div className={styles.imagen2}>
          <img
            src="https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1775490718/1998_-_Premio_Nihuil_en_rubro_Arte_juv83h.jpg"
            alt=""
          />
          <Link to="/AntonioSarelli/Reconocimientos">
            <h3 className={styles.title}>Reconocimientos</h3>
          </Link>
        </div>
        <div className={styles.imagen2}>
          <img
            src="https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1771951753/1993_tiouwm.jpg"
            alt=""
          />
          <Link to="/AntonioSarelli/Criticas">
            <h3 className={styles.title}>Criticas</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};
