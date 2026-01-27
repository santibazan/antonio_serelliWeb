import { useEffect } from "react";
import { animate, scroll } from "motion";
import styles from "./TimelineFrutos.module.css"
import { Link } from "react-router-dom";


export const TimelineFrutos = () => {
  useEffect(() => {
    const items = document.querySelectorAll(`.${styles["img-container"]}`);

    scroll(
      animate(`.${styles["img-group"]}`, {
        transform: ["none", `translateX(-${items.length - 1}00vw)`],
      }),
      {
        target: document.querySelector(
          `.${styles["img-group-container"]}`,
        ) as Element,
      },
    );


    scroll(animate(`.${styles.progress}`, { scaleX: [0, 1] }), {
      target: document.querySelector(
        `.${styles["img-group-container"]}`,
      ) as Element,
    });
  }, []);

  return (
    <>
      <article id="gallery">
        <header>
          <h1>Decadas</h1>
        </header>

        <section className={styles["img-group-container"]}>
          <div>
            <ul className={styles["img-group"]}>
              <li className={styles["img-container"]}>
                <img src="/photos/cityscape/2.jpg" alt="" />
                <Link to="/AntonioSarelli/Decadas" className={styles.botonn}>
                Decada del 60
              </Link>
                
              </li>
              <li className={styles["img-container"]}>
                <img src="/photos/cityscape/3.jpg" alt="" />
                <Link to="/AntonioSarelli/Decadas" className={styles.botonn}>
                Decada del 70
              </Link>
                
              </li>
              <li className={styles["img-container"]}>
                <img src="/photos/cityscape/4.jpg" alt="" />
                <Link to="/AntonioSarelli/Decadas" className={styles.botonn}>
                Decada del 80
              </Link>
              
              </li>
              <li className={styles["img-container"]}>
                <img src="/photos/cityscape/5.jpg" alt="" />
                <Link to="/AntonioSarelli/Decadas" className={styles.botonn}>
                Decada del 90
              </Link>
                
              </li>
              <li className={styles["img-container"]}>
                <img src="/photos/cityscape/5.jpg" alt="" />
                <Link to="/AntonioSarelli/Decadas" className={styles.botonn}>
                Decada del 2000
              </Link>
              </li>
              <li className={styles["img-container"]}>
                <img src="/photos/cityscape/5.jpg" alt="" />
                <Link to="/AntonioSarelli/Decadas" className={styles.botonn}>
                Decada del 2010
              </Link>
              </li>
              
            </ul>
          </div>
        </section>


      </article>


    </>
  );
};

export default TimelineFrutos;
