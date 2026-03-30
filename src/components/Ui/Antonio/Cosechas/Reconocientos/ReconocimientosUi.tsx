import ScrollToTop from "../../../Scroll/ScrollToTop"
import ImageGridCosecha from "../../ImageGrid/ImageGridCosecha"
import styles from "./Reconocimientos.module.css"

export const ReconocimientosUi = () => {
  return (
    <div className={styles.contenedorGlobal}>
      <h3>Algunos de los reconocimientos que obtuvo Antonio Sarelli a lo largo de su vida.</h3>
     <ImageGridCosecha/> 
     <ScrollToTop/>
    </div>
  )
}
