
import VerticalGallery from "./SiembraFrutoCosecha/VerticalGallery";
import styles from "./AntonioUi.module.css"

export const AntonioUi = () => {
  return (
    <>
      <h1>Antonio Sarelli</h1>
      <img src="" alt="" />

      <p>
        Nacido el 26 de agosto de 1936. Se diplomó como “Profesor de Bellas
        Artes” en la Academia Provincial de Bellas Artes, bajo la formación de
        notables maestros de la época como Abal, Azzoni, Ramponi, Santarone,
        entre otros. Posteriormente se desempeñó como profesor, colaborando a la
        formación de nuevas generaciones de artistas. Sus obras están en
        colecciones privadas en Argentina, América, Europa y Asia, como Museos
        Nacionales e Internacionales. Fue merecedor de 18 importantes premios en
        salones Provinciales y Nacionales que acompañaron a su trayectoria,
        entre los años 1964 y 1985. Desde 1986 no participa de concursos. En
        1995, por su destacada trayectoria artística, reconocimiento de la
        Honorable Cámara de Diputados de Mendoza. En 1996, reconocimiento a su
        labor artística de la Presidencia de la Nación Argentina. En 1997,
        Cancillería Argentina selecciona su obra “Símbolos de ofrenda”, como
        obsequio del Gobierno Nacional a su Santidad el Papa Juan Pablo II, la
        misma se encuentra en el Museo del Vaticano. En el año 2000, por
        invitación especial representa a Argentina con la obra “Entre el
        silencio y la ternura” Exposición Universal “Fin de Milenio”. Esta obra
        forma parte del Museo de la Asociación Internacional Cárita Política en
        Roma, Italia. En el 2002 fue declarado ciudadano destacado del
        departamento de Maipú, lugar de su nacimiento en Mendoza, Argentina.
        Muestra retrospectiva en el Espacio Contemporáneo de Arte de Mendoza
        2004. Se inaugura la escuela 4-225 “Antonio Sarelli, Luzuriaga, Maipú en
        el año 2010. En la Nave Cultural de Mendoza muestra retrospectiva en
        octubre de 2015. Declarado ciudadano ilustre del departamento de Godoy
        Cruz en el año 2016. Hasta el día de la fecha continúa realizando su
        labor en su taller. Sus numerosas exposiciones en el país y el
        extranjero, han logrado resonancia de la crítica especializada.
      </p>

      <div className={styles.gallerySnap}>
        <VerticalGallery />
      </div>
    </>
  );
};
