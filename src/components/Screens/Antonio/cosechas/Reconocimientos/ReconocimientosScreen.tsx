import styles from "../Cosechas.module.css"
import { ReconocimientosUi } from '../../../../Ui/Antonio/Cosechas/Reconocientos/ReconocimientosUi'
import HeaderUi from "../../../../Ui/Header/HeaderUi"
import { FooterUi } from "../../../../Ui/Footer/FooterUi"

export const ReconocimientosScreen = () => {
  return (
      <div className={styles.contenedorGlobalLanding}>
          <HeaderUi/>
          <ReconocimientosUi/>
          <FooterUi/>
      </div>
  )
}
