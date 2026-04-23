import ScrollToTop from "../../../Scroll/ScrollToTop";
import styles from "./Premios.module.css";
import { TimelinePremios } from "./Timeline/TimelinePremios";


export const PremiosUi = () => {
  return (
    <div className={styles.contentTallerSarelli}>
      <div className={styles.contenedorGlobal}>
        <h1>Premios de Antonio Sarelli</h1>
      </div>
      <TimelinePremios/>
      <ScrollToTop />
    </div>
  );
};
