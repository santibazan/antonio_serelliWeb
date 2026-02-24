export interface ImageItem {
  id: number
  src: string
  title: string
  description: string
  size: "small" | "medium" | "large"
}

export const images: ImageItem[] = [
  { id: 1, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967343/Cordo%CC%81n_de_Plata_en_Casa_Gobierno_Mza_bcxsm9.jpg", title: "Cordón de Plata en Casa Gobierno Mza", description: "107 x 147 cm", size: "medium" },
  { id: 2, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967344/Cuadro_Residencia_de_Olivos_vrcgh7.jpg", title: "Cuadro Residencia de Olivos", description: "107 x 147 cm ", size: "small" },
  { id: 3, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967346/Escrito_Piso_7_de_Casa_Gobierno_abotqc.jpg", title: "Escrito Piso 7 de Casa Gobierno", description: "95 x 120 cm", size: "small" },
  { id: 4, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967347/Espacio_Antonio_Sarelli_-_Piso_7_Casa_de_Gobierno_yu3own.jpg", title: "Espacio Antonio Sarelli - Piso 7 Casa de Gobierno", description: "94 x 124 cm", size: "large" },

  { id: 5, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967348/WhatsApp_Image_2025-12-17_at_12.54.14_PM_dsgpp4.jpg", title: "Figura con ave óleo sobre madera", description: "98 x 66 cm", size: "large" },
  { id: 6, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967350/WhatsApp_Image_2025-12-23_at_11.00.34_PM_gelprx.jpg", title: "6 A nada nadas  óleo sobre tela enchapada", description: "105 x 75 cm", size: "medium" },
  { id: 7, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967351/WhatsApp_Image_2025-12-23_at_11.10.42_PM_tc64ew.jpg", title: "7 Después de la lluvia óleo sobre tela enchapada", description: "74 x 104 cm", size: "medium" },
  { id: 8, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967352/WhatsApp_Image_2025-12-23_at_11.10.43_PM_ua61bn.jpg", title: "8 Contraluz óleo sobre tela enchapada", description: "75 x 100 cm", size: "small" },

  { id: 9, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967353/WhatsApp_Image_2025-12-23_at_11.16.11_PM_vftdbt.jpg", title: "9 Diálogo en ocres óleo sobre tela", description: "90 x 70 cm", size: "small" },
  { id: 10, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967355/WhatsApp_Image_2026-01-02_at_3.05.57_PM_2_grexvh.jpg", title: "10 Cueva del sueño óleo sobre madera", description: "61 x 47 cm", size: "small" },
  { id: 11, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967356/WhatsApp_Image_2026-01-02_at_3.05.57_PM_3_nz4zpa.jpg", title: "11 Cueva del sueño óleo sobre madera", description: "61 x 47 cm", size: "small" },
  { id: 12, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967357/WhatsApp_Image_2026-01-02_at_3.05.57_PM_4_jbfkwt.jpg", title: "12 Cueva del sueño óleo sobre madera", description: "61 x 47 cm", size: "small" },
  { id: 13, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771967359/WhatsApp_Image_2026-01-02_at_3.05.57_PM_jzaerj.jpg", title: "13 Cueva del sueño óleo sobre madera", description: "61 x 47 cm", size: "small" }
  
]