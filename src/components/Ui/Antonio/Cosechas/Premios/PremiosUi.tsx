import ScrollToTop from "../../../Scroll/ScrollToTop"
import ImageGridPremios from "../../ImageGrid/ImageGridPremios"

import styles from "./Premios.module.css"

export const PremiosUi = () => {
  return (
    <div className={styles.contenedorGlobal}>
      <h3>Premios de Aldo Sarelli.</h3>
     <ImageGridPremios/> 
     <ScrollToTop/>
    </div>
  )
}
