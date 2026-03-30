import styles from "../Cosechas.module.css"
import HeaderUi from "../../../../Ui/Header/HeaderUi"
import { CriticasUi } from "../../../../Ui/Antonio/Cosechas/Criticas/CriticasUi"
import { FooterUi } from "../../../../Ui/Footer/FooterUi"

export const CriticasScreen = () => {
  return (
      <div className={styles.contenedorGlobalLanding}>
          <HeaderUi/>
          <CriticasUi/>
          <FooterUi/>
      </div>
  )
}
