import ImageGridRebecaEscultura from "../Antonio/ImageGrid/ImageGridRebecaEscultura";
import styles from "./Rebeca.module.css";

export const EsculturaUi = () => {
  return (
    <div>
      <div className={styles.grilla}>
        <h3>Esculturas de Rebeca Sarelli.</h3>
        <ImageGridRebecaEscultura />
      </div>
    </div>
  );
};
