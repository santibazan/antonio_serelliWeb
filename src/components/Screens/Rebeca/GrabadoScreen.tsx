
import { FooterUi } from '../../Ui/Footer/FooterUi'
import { HeaderUi } from '../../Ui/Header/HeaderUi'
import { GrabadoUi } from '../../Ui/Rebeca/GrabadoUi'

import styles from "./RebecaScreen.module.css"
export const GrabadoScreen = () => {
  return (
    <div className={styles.contenedorGlobalLanding}>
      <HeaderUi />
      <GrabadoUi/>
      <FooterUi/>
    </div>
  )
}