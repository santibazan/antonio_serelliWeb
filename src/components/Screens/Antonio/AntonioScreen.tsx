import { AntonioUi } from "../../Ui/Antonio/AntonioUi";
import { HeaderUi } from "../../Ui/Header/HeaderUi";
import styles from "./AntonioScreen.module.css"

export const AntonioScreen = () => {
  return (
    <div className={styles.contenedorGlobalLanding}>
      <HeaderUi />
      <AntonioUi/>
    </div>
  );
};
