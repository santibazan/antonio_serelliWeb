import { useEffect } from "react";
import type { ImageItem } from "./data/images60";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./ImageGrid.module.css";

interface Props {
  image: ImageItem;
  onClose: () => void;
}

export default function ImageModal({ image, onClose }: Props) {
  useEffect(() => {
  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  };

  window.addEventListener("keydown", handleEsc);
  return () => window.removeEventListener("keydown", handleEsc);
}, [onClose]);
  return (
    <AnimatePresence>
      <motion.div
        className={styles.overlay}
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className={styles.modal}
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.95, opacity: 0, y: 10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <button className={styles.close} onClick={onClose}>
            ✕
          </button>

          <div className={styles.imageWrapper}>
            <img src={image.src} alt={image.title} />
          </div>

          <div className={styles.text}>
            <h2>{image.title}</h2>
            <p>{image.description}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}


