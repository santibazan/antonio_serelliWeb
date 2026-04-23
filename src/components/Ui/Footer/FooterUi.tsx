import styles from "./Footer.module.css";

export const FooterUi = () => {
  return (
    <footer
    >

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
              <a href="#RebecaSarelli">Rebeca Sarelli</a>
            </li>
            <li>
              <a href="#ArteMendocino">Arte Mendocino</a>
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
              <a href="#AntonioSarelli/LosFrutos">Frutos</a>
            </li>
            <li>
              <a href="#AntonioSarelli/LaCosecha">Cosecha</a>
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Contacto</h3>
          <ul>
            <li>Email: tallersarelli@gmail.com</li>
            <li>Teléfono: +5492615368431(Rebeca)</li>
            <li>Ubicación: Godoy Cruz, Mendoza, Argentina</li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Nuestras redes</h3>
          <div className={styles.socialIcons}>
            <ul>
              <li>
                <a href="https://www.instagram.com/tallerdeartesarelli/">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=61586642446595&locale=es_LA">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://wa.me/5492615368431">Whatsapp</a>
              </li>
              <li>
                <a href="https://www.youtube.com/@TallerSarelli">Youtube</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        © 2026 Santiago Bazan - Todos los derechos reservados
      </div>
    </footer>
  );
};
