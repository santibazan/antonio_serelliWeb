
import { HeaderUi } from '../../Ui/Header/HeaderUi'
import { RebecaUi } from '../../Ui/Rebeca/RebecaUi'
import styles from "./RebecaScreen.module.css"
export const RebecaScreen = () => {
  return (
    <div className={styles.contenedorGlobalLanding}>
      <HeaderUi />
      <RebecaUi/>
    </div>
  )
}
