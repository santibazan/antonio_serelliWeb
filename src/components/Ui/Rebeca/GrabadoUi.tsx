import ImageGridRebecaGrabado from "../Antonio/ImageGrid/ImageGridRebecaGrabado";
import styles from "./Rebeca.module.css";

export const GrabadoUi = () => {
  return (
    <div>
      <div className={styles.grilla}>
        <h3>Grabados de Rebeca Sarelli.</h3>
        <ImageGridRebecaGrabado />
      </div>
    </div>
  );
};
