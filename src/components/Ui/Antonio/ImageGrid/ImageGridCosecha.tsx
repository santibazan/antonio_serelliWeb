import { useState } from "react";
import { images } from "./data/imagesCosecha";
import type { ImageItem } from "./data/imagesCosecha";

import ImageModal from "./ImageModal";
import styles from "./ImageGrid.module.css";

export default function ImageGridCosecha() {
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
