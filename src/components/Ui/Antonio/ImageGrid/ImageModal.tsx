
import type { ImageItem } from "./data/images"

import styles from "./ImageGrid.module.css"

interface Props {
  image: ImageItem
  onClose: () => void
}

export default function ImageModal({ image, onClose }: Props) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={e => e.stopPropagation()}
      >
        <button className={styles.close} onClick={onClose}>
          ✕
        </button>

        <img src={image.src} alt={image.title} />

        <div className={styles.text}>
          <h2>{image.title}</h2>
          <p>{image.description}</p>
        </div>
      </div>
    </div>
  )
}
