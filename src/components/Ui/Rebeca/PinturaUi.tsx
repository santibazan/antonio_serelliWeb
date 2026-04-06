import ImageGridRebecaPintura from "../Antonio/ImageGrid/ImageGridRebecaPintura";
import styles from "./Rebeca.module.css";

export const PinturaUi = () => {
  return (
    <div>
      <div className={styles.grilla}>
        <h3>Pinturas de Rebeca Sarelli.</h3>
        <ImageGridRebecaPintura />
      </div>
    </div>
  );
};
