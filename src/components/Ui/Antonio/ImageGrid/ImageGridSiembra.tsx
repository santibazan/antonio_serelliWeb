import { useState } from "react";
import { images } from "./data/imagesSiembra";
import type { ImageItem } from "./data/imagesSiembra";

import ImageModal from "./ImageModal";
import styles from "./ImageGrid.module.css";

export default function ImageGridSiembra() {
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
