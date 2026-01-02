import { useState } from "react";
import styles from "./HeaderUi.module.css";
import { AntonioUi } from "../Antonio/AntonioUi";
import { Link } from "react-router-dom";

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
            className={styles.dropdown}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <span className={styles.botonn}>Antonio Sarelli</span>

            <div className={`${styles.submenu} ${isOpen ? styles.show : ""}`}>
              <ul>
                <li>
                  <Link to="/AntonioSarelli" className={styles.submenuLink}>La siembra</Link>
                </li>
                <li>
                  <Link to="/AntonioSarelli" className={styles.submenuLink}>Los frutos</Link>
                </li>
                <li>
                  <Link to="/AntonioSarelli" className={styles.submenuLink}>La cosecha</Link>
                </li>
              </ul>
            </div>
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
