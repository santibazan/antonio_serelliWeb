import HeaderUi from "../../Ui/Header/HeaderUi"
import { FooterUi } from "../../Ui/Footer/FooterUi"
import { CosechasUi } from "../../Ui/Antonio/Cosechas/CosechasUi"

import styles from "./AntonioScreen.module.css"


export const CosechasScreen = () => {
  return (
      <div className={styles.contenedorGlobalLanding}>
          <HeaderUi/>
          <CosechasUi/>
          <FooterUi/>
      </div>
  )
}
