import { useState } from "react";
import { images } from "./data/images80";


import ImageModal from "./ImageModal";
import styles from "./ImageGrid.module.css";

export default function ImageGrid80() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      <div className={styles.gallery}>
        {images.map((img, index) => (
          <div key={img.id} className={`${styles.item} ${styles[img.size]}`}>
            <img
              src={img.src}
              alt={img.title}
              onClick={() => setSelectedIndex(index)}
            />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
              <ImageModal
                image={images[selectedIndex]}
                onClose={() => setSelectedIndex(null)}
                onNext={() =>
                  setSelectedIndex((prev) =>
                    prev !== null ? (prev + 1) % images.length : 0,
                  )
                }
                onPrev={() =>
                  setSelectedIndex((prev) =>
                    prev !== null ? (prev - 1 + images.length) % images.length : 0,
                  )
                }
              />
            )}
    </>
  );
}
