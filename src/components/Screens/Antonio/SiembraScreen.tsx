import HeaderUi from "../../Ui/Header/HeaderUi"
import { FooterUi } from "../../Ui/Footer/FooterUi"
import { SiembraUi } from "../../Ui/Antonio/Siembra/SiembraUi";
import styles from "./AntonioScreen.module.css"


export const SiembraScreen = () => {
  return (
    <div className={styles.contenedorGlobalLanding}>
      <HeaderUi />
      <SiembraUi />
      <FooterUi/>
    </div>
  );
};
