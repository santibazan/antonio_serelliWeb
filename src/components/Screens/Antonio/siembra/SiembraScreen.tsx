import { SiembraUi } from "../../../Ui/Antonio/Siembra/SiembraUi";
import HeaderUi from "../../../Ui/Header/HeaderUi";
import styles from "./Siembra.module.css"


export const SiembraScreen = () => {
  return (
    <div className={styles.contenedorGlobalLanding}>
      <HeaderUi />
      <SiembraUi />
    </div>
  );
};
