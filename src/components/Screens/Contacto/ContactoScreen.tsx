import { ContactoUi } from "../../Ui/Contacto/ContactoUi"
import { HeaderUi } from "../../Ui/Header/HeaderUi"
import styles from "./ContactoScreen.module.css"

export const ContactoScreen = () => {
  return (
    <div className={styles.contenedorGlobalLanding}>
      <HeaderUi />
        <ContactoUi/>
    </div>
  )
}
