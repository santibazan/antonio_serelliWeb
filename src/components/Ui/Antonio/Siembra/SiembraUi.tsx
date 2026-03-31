import { Timeline } from "../../Historia/Timeline/Timeline";
import ScrollToTop from "../../Scroll/ScrollToTop";

import styles from "./Siembra.module.css";

export const SiembraUi = () => {
  return (
    <div className={styles.contenedorGlobal}>
      <h1>La siembra</h1>
      <p>
        Antonio Sarelli creció en un entorno de niñez Campesina , donde lo
        cotidiano tenía un peso verdadero: la sencillez, la humildad y una
        armonía familiar que lo marcó para siempre. En esos primeros años se
        forma una sensibilidad hecha de silencios, afectos y contemplación; una
        memoria íntima que, lejos de quedar atrás, vuelve una y otra vez como
        semilla de su mirada y como sostén emocional de su pintura.
      </p>
      <p>
        Pero el punto de giro llega temprano, con un gesto que parece escrito
        para un a biografía: su maestro de la escuela primaria, Fausto Julián
        Gutiérrez, reconoce en él una vocación real, habla con sus padres y lo
        impulsa a dar el paso decisivo: ingresar a la Academia Provincial de
        Bellas Artes. No es solo una recomendación: es la mano de un maestro que
        “ sale a buscarlo ” para abrirle una puerta. Y desde ahí, desde esa
        infancia sencilla y ese llamado oportuno, comienza el camino de una vida
        dedicada al arte.
      </p>
      <Timeline />
      <ScrollToTop />
    </div>
  );
};
