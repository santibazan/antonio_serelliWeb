import HeaderUi from "../../Ui/Header/HeaderUi"
import { FooterUi } from "../../Ui/Footer/FooterUi"
import { ReconocimientosUi } from "../../Ui/Antonio/Cosechas/Reconocientos/ReconocimientosUi"
import styles from "./AntonioScreen.module.css"



export const ReconocimientosScreen = () => {
  return (
      <div className={styles.contenedorGlobalLanding}>
          <HeaderUi/>
          <ReconocimientosUi/>
          <FooterUi/>
      </div>
  )
}
