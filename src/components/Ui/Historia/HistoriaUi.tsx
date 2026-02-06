import { Timeline } from "./Timeline/Timeline";
import styles from "./Historia.module.css"



export const HistoriaUi = () => {
  return (
    <div className={styles.contenedorGlobal}>
      <h2>Historia de Antonio Sarelli</h2>
      <h4>"El arte como refugio de lo que no debe olvidarse"</h4>
  
      <p>
        Asi nacio el taller de arte Sarelli. No como una institución más del arte, sino
        como un refugio de los valores más sublimes del espiritu humano. Un
        taller donde el arte se honra como un lenguaje que cura, conecta y
        despierta. No buscamos conservar, sino activar. No busca congelar, sino
        abrir diálogos. Es un puente entre generaciones, entre pintura y
        escultura, entre la herencia y lo porvenir. Un espacio donde aun es
        posible respirar con calma, mirar con ternura, y recordar que el arte
        -cuando nace del alma- es una forma de amor profundo y de resistencia
        luminosa.
      </p>
      <Timeline/>
    </div>
  );
};
