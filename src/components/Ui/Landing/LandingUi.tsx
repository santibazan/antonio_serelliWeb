// import styles from "./LandingUi.module.css";

// import { useEffect } from "react";

// import ImageGridTaller from "../Antonio/ImageGrid/ImageGridTaller";
// import ScrollToTop from "../Scroll/ScrollToTop";

// export const LandingUi = () => {
//   useEffect(() => {
//     const elements = document.querySelectorAll(`.${styles.animacion}`);

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add(styles.visible);
//             observer.unobserve(entry.target); // 🔑 CLAVE
//           }
//         });
//       },
//       { threshold: 0.3 },
//     );

//     elements.forEach((el) => observer.observe(el));
//   }, []);

//   return (
//     <>
//       <div className={styles.contenedorGlobalLanding}>
//         {/* Hero con imagen */}
//         <section className={styles.imagen}>
//           <div className={styles.overlay} />

//           <div className={styles.contentTallerSarelli}>
//             <h1>Taller de Arte Sarelli </h1>
//             <h4>
//               Nace para preservar y difundir el legado artistico y humano de una
//               familia de artistas comprometida con los valores mas sublimes del
//               ser: el amor, el respeto, la union, la paz, la serenidad y la
//               contemplación. A través de la pintura, la escultura y la
//               educacion, promovemos un arte que no solo se contempla, sino que
//               tambien se comparte, se honra y se vive.
//             </h4>
//           </div>
//         </section>

//         {/* Parte de las viñetas */}

//         <section className={styles.contentVisiones}>
//           {/*1. Historia de Origen */}
//           <div className={`${styles.contenedorEtiqueta}`}>
//             <div className={styles.textoWrapper}>
//               <div className={`${styles.animacion} ${styles.fromLeft}`}>
//                 <h2 className={styles.tituloFinal}>Historia de origen.</h2>

//                 <p className={styles.textoFinal}>
//                   En un rincón sereno de Mendoza, entre montañas y memorias, un
//                   atelier resiste al olvido. No es solo un taller, es un
//                   santuario de contemplación, un espacio donde el arte ha sido,
//                   durante décadas, un acto de resistencia, de paz, y de profundo
//                   amor humano. Antonio Sarelli, con más de siete decadas de
//                   entrega silenciosa a la pintura, ha sostenido una misión
//                   constante: preservar lo esencial del ser humano. Sus trazos
//                   son susurros firmes que hablan de respeto, unión, serenidad,
//                   contemplación y paz. Su obra no grita, abraza. No exige,
//                   invita. Cada pieza es una ofrenda a los valores que el mundo
//                   parece haber dejado atras. A su lado -y con una voz propia
//                   poderosa- Rebeca Sarelli tomo un camino distinto, pero
//                   completamente: el de la escultura. Sus manos moldean no solo
//                   materia, sino sensibilidad. En cada volumen que crea hay un
//                   llamado a detenerse, a contemplar con profundidad, a escuchar
//                   al silencio. Su obra es un ancla en un tiempo que corre sin
//                   mirar. Es la voz del presente que busca reconectar con lo más
//                   humano a través de la forma.
//                 </p>
//               </div>
//             </div>
//             <img
//               className={styles.imgMision}
//               src="https://res.cloudinary.com/dovztsxyv/image/upload/v1771951829/5_dyrmtj.jpg"
//             />
//           </div>

//           {/*2. Proposito */}
//           <div className={`${styles.contenedorEtiqueta} ${styles.reverse}`}>
//             <div className={styles.textoWrapper}>
//               <div className={`${styles.animacion} ${styles.fromRight}`}>
//                 <h2 className={styles.tituloFinal}>Nuestro propósito</h2>

//                 <div className={styles.textoFinal}>
//                   <p> Tenemos un doble propósito: </p>
//                   <ul>
//                     <li>
//                       Preservar y proyectar el legado artístico y humano de
//                       Antonio y Rebeca Sarelli.
//                     </li>
//                     <li>
//                       Difundir el arte mendocino con la misma naturalidad con la
//                       que se sirve un vino: que llegue a cada mesa, a cada
//                       hogar, a cada alma que necesite volver a sentir.
//                     </li>
//                   </ul>
//                   <br />
//                 </div>
//               </div>
//             </div>
//             <img
//               className={styles.imgMisionn}
//               src="https://res.cloudinary.com/dovztsxyv/image/upload/v1771951823/2imgResiliencia_lnfhtq.jpg"
//             />
//           </div>

//           {/*3. Valores */}
//           <div className={`${styles.contenedorEtiqueta}`}>
//             <div className={styles.textoWrapper}>
//               <div className={`${styles.animacion} ${styles.fromLeft}`}>
//                 <h2 className={styles.tituloFinal}>Nuestros valores: </h2>
//                 <div className={styles.textoFinal}>
//                   <ul>
//                     <li>Amor como motor del acto creativo.</li>
//                     <li>Respeto por la vida, naturaleza y el otro.</li>
//                     <li>Union intergeneracional y comunitaria.</li>
//                     <li>Paz como forma de presencia.</li>
//                     <li>Serenidad como actitud frente al tiempo.</li>
//                     <li>
//                       Contemplación como modo de habitarnos y habitar el mundo.
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//             <img
//               className={styles.imgMision}
//               src="https://res.cloudinary.com/dovztsxyv/image/upload/v1771951821/1entradaTaller_wrlc3i.jpg"
//             />
//           </div>

//           <h4>Algunas imagenes de nuestro taller</h4>
//           <ImageGridTaller />
//         </section>
//         <ScrollToTop />
//       </div>
//     </>
//   );
// };

import styles from "./LandingUi.module.css";

import { useEffect, useRef, useState } from "react";

import ImageGridTaller from "../Antonio/ImageGrid/ImageGridTaller";
import ScrollToTop from "../Scroll/ScrollToTop";

export const LandingUi = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  // Revelado de bloques al hacer scroll (texto e imágenes)
  useEffect(() => {
    const elements = document.querySelectorAll(`.${styles.animacion}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target); // 🔑 CLAVE
          }
        });
      },
      { threshold: 0.3 },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Barra de progreso de scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cursor custom (solo dispositivos con mouse real)
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMove = (e: MouseEvent) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, img")) {
        cursor.classList.add(styles.cursorHover);
      }
    };

    const handleOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, img")) {
        cursor.classList.remove(styles.cursorHover);
      }
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mouseout", handleOut);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleOut);
    };
  }, []);

  return (
    <>
      <div className={styles.contenedorGlobalLanding}>
        {/* Barra de progreso de scroll */}
        <div
          className={styles.scrollProgress}
          style={{ width: `${progress}%` }}
        />

        {/* Textura de grano sobre toda la landing */}
        <div className={styles.grain} aria-hidden="true" />

        {/* Cursor custom (desktop / pointer fino) */}
        <div ref={cursorRef} className={styles.cursorDot} aria-hidden="true" />

        {/* Hero con imagen */}
        <section className={styles.imagen}>
          <div className={styles.overlay} />

          <div className={styles.contentTallerSarelli}>
            <h1>Taller de Arte Sarelli </h1>
            <h4>
              Nace para preservar y difundir el legado artistico y humano de una
              familia de artistas comprometida con los valores mas sublimes del
              ser: el amor, el respeto, la union, la paz, la serenidad y la
              contemplación. A través de la pintura, la escultura y la
              educacion, promovemos un arte que no solo se contempla, sino que
              tambien se comparte, se honra y se vive.
            </h4>
          </div>

          <div className={styles.scrollCue} aria-hidden="true">
            <span />
          </div>
        </section>

        {/* Parte de las viñetas */}
        <section className={styles.contentVisiones}>
          {/*1. Historia de Origen */}
          <div className={`${styles.contenedorEtiqueta}`}>
            <div className={styles.textoWrapper}>
              <div className={`${styles.animacion} ${styles.fromLeft}`}>
                <h2 className={styles.tituloFinal}>Historia de origen.</h2>

                <p className={styles.textoFinal}>
                  En un rincón sereno de Mendoza, entre montañas y memorias, un
                  atelier resiste al olvido. No es solo un taller, es un
                  santuario de contemplación, un espacio donde el arte ha sido,
                  durante décadas, un acto de resistencia, de paz, y de profundo
                  amor humano. Antonio Sarelli, con más de siete decadas de
                  entrega silenciosa a la pintura, ha sostenido una misión
                  constante: preservar lo esencial del ser humano. Sus trazos
                  son susurros firmes que hablan de respeto, unión, serenidad,
                  contemplación y paz. Su obra no grita, abraza. No exige,
                  invita. Cada pieza es una ofrenda a los valores que el mundo
                  parece haber dejado atras. A su lado -y con una voz propia
                  poderosa- Rebeca Sarelli tomo un camino distinto, pero
                  completamente: el de la escultura. Sus manos moldean no solo
                  materia, sino sensibilidad. En cada volumen que crea hay un
                  llamado a detenerse, a contemplar con profundidad, a escuchar
                  al silencio. Su obra es un ancla en un tiempo que corre sin
                  mirar. Es la voz del presente que busca reconectar con lo más
                  humano a través de la forma.
                </p>
              </div>
            </div>
            <div className={`${styles.animacion} ${styles.imgFrame}`}>
              <img
                className={styles.imgMision}
                src="https://res.cloudinary.com/dovztsxyv/image/upload/v1771951829/5_dyrmtj.jpg"
                alt="Taller de arte de la familia Sarelli"
              />
            </div>
          </div>

          {/*2. Proposito */}
          <div className={`${styles.contenedorEtiqueta} ${styles.reverse}`}>
            <div className={styles.textoWrapper}>
              <div className={`${styles.animacion} ${styles.fromRight}`}>
                <h2 className={styles.tituloFinal}>Nuestro propósito</h2>

                <div className={styles.textoFinal}>
                  <p> Tenemos un doble propósito: </p>
                  <ul>
                    <li>
                      Preservar y proyectar el legado artístico y humano de
                      Antonio y Rebeca Sarelli.
                    </li>
                    <li>
                      Difundir el arte mendocino con la misma naturalidad con la
                      que se sirve un vino: que llegue a cada mesa, a cada
                      hogar, a cada alma que necesite volver a sentir.
                    </li>
                  </ul>
                  <br />
                </div>
              </div>
            </div>
            <div className={`${styles.animacion} ${styles.imgFrame}`}>
              <img
                className={styles.imgMisionn}
                src="https://res.cloudinary.com/dovztsxyv/image/upload/v1771951823/2imgResiliencia_lnfhtq.jpg"
                alt="Resiliencia en el arte del taller Sarelli"
              />
            </div>
          </div>

          {/*3. Valores */}
          <div className={`${styles.contenedorEtiqueta}`}>
            <div className={styles.textoWrapper}>
              <div className={`${styles.animacion} ${styles.fromLeft}`}>
                <h2 className={styles.tituloFinal}>Nuestros valores: </h2>
                <div className={styles.textoFinal}>
                  <ul>
                    <li>Amor como motor del acto creativo.</li>
                    <li>Respeto por la vida, naturaleza y el otro.</li>
                    <li>Union intergeneracional y comunitaria.</li>
                    <li>Paz como forma de presencia.</li>
                    <li>Serenidad como actitud frente al tiempo.</li>
                    <li>
                      Contemplación como modo de habitarnos y habitar el mundo.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`${styles.animacion} ${styles.imgFrame}`}>
              <img
                className={styles.imgMision}
                src="https://res.cloudinary.com/dovztsxyv/image/upload/v1771951821/1entradaTaller_wrlc3i.jpg"
                alt="Entrada del taller de arte Sarelli"
              />
            </div>
          </div>

          <h4>Algunas imagenes de nuestro taller</h4>
          <ImageGridTaller />
        </section>
        <ScrollToTop />
      </div>
    </>
  );
};

export default LandingUi;
