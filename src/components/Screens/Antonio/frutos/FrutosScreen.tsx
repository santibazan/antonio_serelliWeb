
import HeaderUi from '../../../Ui/Header/HeaderUi'
import { FrutosUi } from '../../../Ui/Antonio/Frutos/FrutosUi'
import styles from "./Frutos.module.css"

export const FrutosScreen = () => {
  return (
    <div className={styles.contenedorGlobalLanding}>
        <HeaderUi/>
        <FrutosUi/>
    </div>
  )
}
