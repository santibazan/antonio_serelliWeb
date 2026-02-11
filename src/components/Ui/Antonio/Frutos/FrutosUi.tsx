import { TimelineFrutos } from "./TimelineFrutos";
import styles from "./Frutos.module.css"
import ScrollToTop from "../../Scroll/ScrollToTop";


export const FrutosUi = () => {
  return (
    <div className={styles.contenedorGlobal}>
      <h1>Los frutos</h1>
      <p>
        Con el paso del tiempo, aquello que fue sembrado comienza a dar forma
        visible. Los frutos reúne las obras de arte de Antonio Sarelli como
        expresión madura de su búsqueda estética y personal. Cada cuadro es el
        resultado de años de dedicación, disciplina y sensibilidad, donde la
        técnica se une con la emoción y el pensamiento. En esta parte del libro,
        las creaciones dialogan entre sí y con el espectador, mostrando una
        identidad artística definida y reconocible. Los frutos no son solo
        pinturas, sino testimonios de una trayectoria, reflejos de una mirada
        que interpreta la realidad y la transforma en lenguaje visual. Aquí se
        consolida el artista, y su obra empieza a trascender el ámbito íntimo
        para proyectarse hacia el mundo.
      </p>
      <TimelineFrutos/>
      <ScrollToTop/>
    </div>
  );
};
