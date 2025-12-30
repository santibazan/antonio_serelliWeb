import styles from "./ContactoPage.module.css"
import imgPrincipal from "../../../Imagenes/fondoPagina.jpeg";

export const ContactoPage = () => {
  return (
    <>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${imgPrincipal})` }}
      >
        <div className={styles.contacto}>
          <div className={styles.datos}>
            <h2>Taller Sarelli</h2>
            <h5>Av Sanidad 8080</h5>
            <h5>Godoy Cruz, Mendoza</h5>
            <h5>Teléfono: +542613297612</h5>
            <a href="mailto:santiago.n.bazan@outlook.com" className={styles.mail}>santiago.n.bazan@outlook.com</a>
          </div>

          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3349.585492445323!2d-68.87761292433176!3d-32.90912597360874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCsDU0JzMyLjkiUyA2OMKwNTInMzAuMSJX!5e0!3m2!1ses-419!2sar!4v1767035519464!5m2!1ses-419!2sar"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              title="Ubicación de la Fundación Antonio Sarelli"
            />
          </div>
        </div>
      </div>  
    </>
  )
}
