import { ContactoUi } from "../../Ui/Contacto/ContactoUi"
import { FooterUi } from "../../Ui/Footer/FooterUi"
import { HeaderUi } from "../../Ui/Header/HeaderUi"
import styles from "./ContactoScreen.module.css"

export const ContactoScreen = () => {
  return (
    <div className={styles.contenedorGlobalLanding}>
      <HeaderUi />
      <ContactoUi/>
      <FooterUi/>
    </div>
  )
}
