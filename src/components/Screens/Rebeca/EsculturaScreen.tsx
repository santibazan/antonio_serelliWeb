
import { FooterUi } from '../../Ui/Footer/FooterUi'
import { HeaderUi } from '../../Ui/Header/HeaderUi'
import { EsculturaUi } from '../../Ui/Rebeca/EsculturaUi'

import styles from "./RebecaScreen.module.css"
export const EsculturaScreen = () => {
  return (
    <div className={styles.contenedorGlobalLanding}>
      <HeaderUi />
      <EsculturaUi/>
      <FooterUi/>
    </div>
  )
}