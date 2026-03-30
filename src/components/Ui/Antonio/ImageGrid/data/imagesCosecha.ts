export interface ImageItem {
  id: number
  src: string
  title: string
  description: string
  medida?: string
  anio?: number
  size: "small" | "medium" | "large"
}

export const images: ImageItem[] = [
  { id: 1, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967343/Cordo%CC%81n_de_Plata_en_Casa_Gobierno_Mza_bcxsm9.jpg", title: "Evocando a los Maestros (2006)", description: "Obra adquirida por el Gobierno de Mendoza y emplazada en el 7° piso de Casa de Gobierno, espacio que hoy lleva el nombre de Antonio Sarelli. Reproducciones de su obra acompañan, como homenaje vivo a su legado en la cultura mendocina.", size: "small" },
  { id: 3, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967346/Escrito_Piso_7_de_Casa_Gobierno_abotqc.jpg", title: "Escrito Piso 7 de Casa Gobierno", description: "2", size: "large" },
  { id: 2, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967344/Cuadro_Residencia_de_Olivos_vrcgh7.jpg", title: "“Medioevo” (1972)", description: "Una obra de Antonio Sarelli adquirida por el Museo Sívori que, sin buscarlo, fue testigo de la historia.", size: "small" },
  { id: 4, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967347/Espacio_Antonio_Sarelli_-_Piso_7_Casa_de_Gobierno_yu3own.jpg", title: "Espacio Antonio Sarelli - Piso 7 Casa de Gobierno", description: "4", size: "medium" },

  { id: 6, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967350/WhatsApp_Image_2025-12-23_at_11.00.34_PM_gelprx.jpg", title: "Colección 1991 – “Denominación de Origen”, Bodega Luigi Bosca", description: "12 vinos con etiquetas de seda ilustradas con obras de Antonio Sarelli. Edición especial de regalos empresariales para celebrar la denominación de origen de su vino.", size: "large" },
  { id: 7, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967351/WhatsApp_Image_2025-12-23_at_11.10.42_PM_tc64ew.jpg", title: "7 Después de la lluvia óleo sobre tela enchapada", description: "6", size: "large" },
  { id: 5, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1772470544/residencia_olivos_cfk_hmsbzf.png", title: "“Medioevo” (1972)", description: "Desde el arte al alma de la nación: aparece en la Quinta de Olivos durante distintas presidencias, acompañando diálogos trascendentes. El arte como presencia silenciosa, memoria viva y puente entre tiempos.", size: "small" },
  { id: 8, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967359/WhatsApp_Image_2026-01-02_at_3.05.57_PM_jzaerj.jpg", title: "Premio Nihuil 1998", description: "Rubro Arte. Reconocimiento a la trayectoria y aporte cultural de Antonio Sarelli.", size: "large" },
  

  { id: 9, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967353/WhatsApp_Image_2025-12-23_at_11.16.11_PM_vftdbt.jpg", title: "9 Diálogo en ocres óleo sobre tela", description: "9", size: "medium" },
  { id: 10, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967355/WhatsApp_Image_2026-01-02_at_3.05.57_PM_2_grexvh.jpg", title: "10 Cueva del sueño óleo sobre madera", description: "10", size: "large" },
  { id: 11, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967356/WhatsApp_Image_2026-01-02_at_3.05.57_PM_3_nz4zpa.jpg", title: "Reconocimiento", description: "A su labor artística otorgado por la Cámara de Diputados de Mendoza en 1995.", size: "large" },
  { id: 12, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967357/WhatsApp_Image_2026-01-02_at_3.05.57_PM_4_jbfkwt.jpg", title: "Reconocimiento", description: "A su labor artística otorgado por la Presidencia de la Nación Argentina en 1996.", size: "medium" },
  { id: 13, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967352/WhatsApp_Image_2025-12-23_at_11.10.43_PM_ua61bn.jpg", title: "8 Contraluz óleo sobre tela enchapada", description: "13", size: "small" }
  
  
]