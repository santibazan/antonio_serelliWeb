export interface ImageItem {
  id: number
  src: string
  title: string
  description?: string
  medida?: string
  anio?: number
  size: "small" | "medium" | "large"
}

export const images: ImageItem[] = [
  { id: 1, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950650/0035-Dimensio%CC%81n_violeta_o%CC%81leo_sobre_tela_enchapada_148_x_111_1975_c8gowu.jpg", title: "Dimensión Violeta", description: "Óleo sobre tela enchapada",medida:"148 x 111 cm",anio:1975, size: "medium" },
  { id: 2, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950651/0054-Flores_o%CC%81leo_sobre_tela_80_x_50_1970_l1ubpa.jpg", title: "Flores", description: "Óleo sobre tela ",medida:"80 x 50 cm",anio:1970, size: "small" },
  { id: 3, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950664/0059-Serie_del_huevo_o%CC%81leo_sobre_tela_70_x_50_1973_pxljqk.jpg", title: "Serie del huevo ", description: "Óleo sobre tela",medida:"70 x 50 cm",anio:1973, size: "large" },
  { id: 4, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950656/0061-Gestacio%CC%81n_o%CC%81leo_sobre_madera_39_x_28_1973_fycmch.jpg", title: "Gestación ", description: "Óleo sobre madera",medida:"39 x 28 cm",anio:1973, size: "medium" },

  { id: 5, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950651/0062-Mensaje_oculto_o%CC%81leo_sobre_madera_ckjqlh.jpg", title: "Mensaje oculto", description: "Óleo sobre madera",medida:"40 x 30 cm",anio:1973, size: "large" },
  { id: 6, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950655/0346-Soliloquio_oleo_sobre_tela_1974_110_x_158_Cartellone_cdud2v.jpg", title: "Soliloquilo ", description: "Óleo sobre tela",medida:"110 x 158 cm",anio:1974, size: "medium" },
  { id: 7, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950659/0348-El_manto_blanco_oleo_sobre_tela_120_x_90_1979_Cartellone_ewun8o.jpg", title: "El manto blanco", description: "Óleo sobre tela",medida:"120 x 90 cm",anio:1979, size: "large" },
  { id: 8, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950655/0351-La_casa_blanca_o%CC%81leo_sobre_tela_90_x_70.5_1979_Cartellone_rhsor6.jpg", title: "La casa blanca", description: "Óleo sobre tela",medida:"90 x 70.5 cm",anio:1979, size: "large" },

  { id: 9, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950662/0361-Clamor_al_atardecer_o%CC%81leo_sobre_tela_149_x_105_1973_Cartellone_s2agkn.jpg", title: "Clamor de la tarde", description: "Óleo sobre tela",medida:"149 x 105 cm",anio:1973, size: "medium" },
  { id: 10, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950656/0362-Errante_o%CC%81leo_sobre_tela_103_x_86_1976_Cartellone_1_arm043.jpg", title: "Errante", description: "Óleo sobre tela",medida:"103 x 86 cm",anio:1976, size: "medium" },

]
