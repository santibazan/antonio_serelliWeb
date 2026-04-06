import HeaderUi from "../../Ui/Header/HeaderUi"
import { FooterUi } from "../../Ui/Footer/FooterUi"
import { FrutosUi } from "../../Ui/Antonio/Frutos/FrutosUi"
import styles from "./AntonioScreen.module.css"


export const FrutosScreen = () => {
  return (
    <div className={styles.contenedorGlobalLanding}>
        <HeaderUi/>
        <FrutosUi/>
        <FooterUi/>
    </div>
  )
}
