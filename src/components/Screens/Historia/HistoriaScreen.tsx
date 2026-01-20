
import HeaderUi from "../../Ui/Header/HeaderUi";
import { HistoriaUi } from "../../Ui/Historia/HistoriaUi";
import styles from "./HistoriaScreen.module.css"

export const HistoriaScreen = () => {
  return (
    <>
    <div className={styles.contenedorGlobalLanding}>
      <HeaderUi />
      <HistoriaUi />
    </div>
    </>
  );
};
