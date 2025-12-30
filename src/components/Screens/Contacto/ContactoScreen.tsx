import { ContactoPage } from "../../Ui/Contacto/ContactoPage";
import { Header } from "../../Ui/Header/Header";
import styles from "./Contacto.module.css"

// import styles from "./Contacto.module.css";

export const ContactoScreen = () => {
  return (
    <>
      <div className={styles.header}>
      <Header />
      </div>
        <ContactoPage />
    </>
  );
};
