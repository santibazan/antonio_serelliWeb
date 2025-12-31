
import HeaderUi from "../../Ui/Header/HeaderUi";
import { LandingUi } from "../../Ui/Landing/LandingUi";
import styles from "./LandingScreen.module.css"

export const LandingScreen = () => {
  return (
    <>
    <div className={styles.contenedorGlobalLanding}>
      <HeaderUi />
      <LandingUi />
    </div>
    </>
  );
};
