
import HeaderUi from '../../../Ui/Header/HeaderUi'
import { CosechasUi } from '../../../Ui/Antonio/Cosechas/CosechasUi'
import styles from "./Cosechas.module.css"
import { FooterUi } from '../../../Ui/Footer/FooterUi'

export const CosechasScreen = () => {
  return (
      <div className={styles.contenedorGlobalLanding}>
          <HeaderUi/>
          <CosechasUi/>
          <FooterUi/>
      </div>
  )
}
