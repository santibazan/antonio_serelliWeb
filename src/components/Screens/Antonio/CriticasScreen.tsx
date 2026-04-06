import HeaderUi from "../../Ui/Header/HeaderUi"
import { FooterUi } from "../../Ui/Footer/FooterUi"
import { CriticasUi } from "../../Ui/Antonio/Cosechas/Criticas/CriticasUi"
import styles from "./AntonioScreen.module.css"


export const CriticasScreen = () => {
  return (
      <div className={styles.contenedorGlobalLanding}>
          <HeaderUi/>
          <CriticasUi/>
          <FooterUi/>
      </div>
  )
}
