import { useState } from "react";
import styles from "./Header.module.css";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a className={styles.botonn} href="/">
          <span>Fundacion Antonio Sarelli</span>
        </a>
      </div>

      <nav className={styles.nav}>
    
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <a className={styles.botonn} href="/AntonioSarelli"> Antonio Sarelli</a>

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
    </header>
  );
};

export default Header;
