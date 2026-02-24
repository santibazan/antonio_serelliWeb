import { useState } from "react";
import { images } from "./data/imagesRebeca";
import type { ImageItem } from "./data/imagesRebeca";

import ImageModal from "./ImageModal";
import styles from "./ImageGrid.module.css";

export default function ImageGridRebeca() {
  const [selected, setSelected] = useState<ImageItem | null>(null);

  return (
    <>
      <div className={styles.gallery}>
        {images.map((img) => (
          <div key={img.id} className={`${styles.item} ${styles[img.size]}`}>
            <img
              src={img.src}
              alt={img.title}
              onClick={() => setSelected(img)}
            />
          </div>
        ))}
      </div>

      {selected && (
        <ImageModal image={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
