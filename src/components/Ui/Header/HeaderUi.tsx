import { useState } from "react";
import styles from "./HeaderUi.module.css";

export const HeaderUi = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.contenedorPrincipalHeader}>
        <a className={styles.botonn} href="/">
          <span>Fundacion Antonio Sarelli</span>
        </a>

        <nav className={styles.nav}>
          <div
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <a className={styles.botonn} href="/AntonioSarelli">
              {" "}
              Antonio Sarelli
            </a>

            {isOpen && (
              <ul>
                <li>La siembra</li>
                <li>Los frutos</li>
                <li>La cosecha</li>
              </ul>
            )}
          </div>

          <a className={styles.botonn} href="/ArteMendocino">
            Arte Mendocino
          </a>

          <a className={styles.botonn} href="/RebecaSarelli">
            Rebeca Sarelli
          </a>

          <a className={styles.botonn} href="/Contacto">
            Contacto
          </a>
        </nav>
      </div>
    </>
  );
};

export default HeaderUi;
