import styles from "./Footer.module.css";

export const FooterUi = () => {
  return (
    <footer
    // className={styles.ContenedorFoter}
    >
      {/* <p>Este es el footer de mi pagina</p> */}

      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h3>Navegación</h3>
          <ul>
            <li>
              <a href="#">Taller</a>
            </li>
            <li>
              <a href="#AntonioSarelli">Antonio Sarelli</a>
            </li>
            <li>
              <a href="#ArteMendocino">Arte Mendocino</a>
            </li>
            <li>
              <a href="#RebecaSarelli">Rebeca Sarelli</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Antonio Sarelli</h3>
          <ul>
            <li>
              <a href="#AntonioSarelli/LaSiembra">Siembra</a>
            </li>
            <li>
              <a href="#AntonioSarelli/LaCosecha">Cosecha</a>
            </li>
            <li>
              <a href="#AntonioSarelli/LosFrutos">Frutos</a>
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Contacto</h3>
          <ul>
            <li>Email: tallersarelli@gmail.com</li>
            <li>Email: rebecasarelli@gmail.com</li>
            <li>Teléfono: +5491132973461(Aldo)</li>
            <li>Teléfono: +5492615368431(Rebeca)</li>
            <li>Ubicación: Marcos Sastre 1510, Godoy Cruz, Mendoza, Argentina</li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Seguinos</h3>
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com/tallerdeartesarelli/">
              Instagram
            </a>
            <a href="https://www.facebook.com/profile.php?id=61586642446595&locale=es_LA">
              Facebook
            </a>
            <a href="https://wa.me/5492615368431">
              Whatsapp
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        © 2026 Santiago Bazan - Todos los derechos reservados
      </div>
    </footer>
  );
};
