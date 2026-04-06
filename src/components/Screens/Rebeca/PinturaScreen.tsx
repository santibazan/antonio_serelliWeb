
import { FooterUi } from '../../Ui/Footer/FooterUi'
import { HeaderUi } from '../../Ui/Header/HeaderUi'
import { PinturaUi } from '../../Ui/Rebeca/PinturaUi'

import styles from "./RebecaScreen.module.css"
export const PinturaScreen = () => {
  return (
    <div className={styles.contenedorGlobalLanding}>
      <HeaderUi />
      <PinturaUi/>
      <FooterUi/>
    </div>
  )
}