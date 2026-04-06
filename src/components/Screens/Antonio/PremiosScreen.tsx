import HeaderUi from "../../Ui/Header/HeaderUi"
import { FooterUi } from "../../Ui/Footer/FooterUi"
import { PremiosUi } from "../../Ui/Antonio/Cosechas/Premios/PremiosUi"
import styles from "./AntonioScreen.module.css"


export const PremiosScreen = () => {
  return (
      <div className={styles.contenedorGlobalLanding}>
          <HeaderUi/>
          <PremiosUi/>
          <FooterUi/>
      </div>
  )
}
