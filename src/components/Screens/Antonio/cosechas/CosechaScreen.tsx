
import HeaderUi from '../../../Ui/Header/HeaderUi'
import { CosechasUi } from '../../../Ui/Antonio/Cosechas/CosechasUi'
import styles from "./Cosechas.module.css"

export const CosechasScreen = () => {
  return (
      <div className={styles.contenedorGlobalLanding}>
          <HeaderUi/>
          <CosechasUi/>
      </div>
  )
}
