import { ArteMendocinoUi } from "../../Ui/ArteMendocino/ArteMendocinoUi";
import { FooterUi } from "../../Ui/Footer/FooterUi";
import { HeaderUi } from "../../Ui/Header/HeaderUi";
import styles from "./ArmeScreen.module.css"
export const ArmeScreen = () => {
  return (
    <div className={styles.contenedorGlobalLanding}>
      <HeaderUi />
      <ArteMendocinoUi/>
      <FooterUi/>
    </div>
  );
};
