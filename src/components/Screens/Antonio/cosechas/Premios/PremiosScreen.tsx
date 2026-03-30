import styles from "../Cosechas.module.css"
import HeaderUi from "../../../../Ui/Header/HeaderUi"
import { PremiosUi } from "../../../../Ui/Antonio/Cosechas/Premios/PremiosUi"
import { FooterUi } from "../../../../Ui/Footer/FooterUi"

export const PremiosScreen = () => {
  return (
      <div className={styles.contenedorGlobalLanding}>
          <HeaderUi/>
          <PremiosUi/>
          <FooterUi/>
      </div>
  )
}
