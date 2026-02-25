import { ArteMendocinoUi } from "../../Ui/ArteMendocino/ArteMendocinoUi";
import { HeaderUi } from "../../Ui/Header/HeaderUi";
import styles from "./ArmeScreen.module.css"
export const ArmeScreen = () => {
  return (
    <div className={styles.contenedorGlobalLanding}>
      <HeaderUi />
      <ArteMendocinoUi/>
    </div>
  );
};
