export interface ImageItem {
  id: number
  src: string
  title: string
  description: string
  size: "small" | "medium" | "large"
}

export const images: ImageItem[] = [
  { id: 1, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950650/0035-Dimensio%CC%81n_violeta_o%CC%81leo_sobre_tela_enchapada_148_x_111_1975_c8gowu.jpg", title: "1", description: "107 x 147 cm", size: "medium" },
  { id: 2, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950651/0054-Flores_o%CC%81leo_sobre_tela_80_x_50_1970_l1ubpa.jpg", title: " 2", description: "107 x 147 cm ", size: "small" },
  { id: 3, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950664/0059-Serie_del_huevo_o%CC%81leo_sobre_tela_70_x_50_1973_pxljqk.jpg", title: "3 ", description: "95 x 120 cm", size: "large" },
  { id: 4, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950656/0061-Gestacio%CC%81n_o%CC%81leo_sobre_madera_39_x_28_1973_fycmch.jpg", title: "4 ", description: "94 x 124 cm", size: "medium" },

  { id: 5, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950651/0062-Mensaje_oculto_o%CC%81leo_sobre_madera_ckjqlh.jpg", title: " 5", description: "98 x 66 cm", size: "large" },
  { id: 6, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950655/0346-Soliloquio_oleo_sobre_tela_1974_110_x_158_Cartellone_cdud2v.jpg", title: "6 ", description: "105 x 75 cm", size: "medium" },
  { id: 7, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950659/0348-El_manto_blanco_oleo_sobre_tela_120_x_90_1979_Cartellone_ewun8o.jpg", title: " 7 ", description: "74 x 104 cm", size: "large" },
  { id: 8, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950655/0351-La_casa_blanca_o%CC%81leo_sobre_tela_90_x_70.5_1979_Cartellone_rhsor6.jpg", title: "8", description: "75 x 100 cm", size: "large" },

  { id: 9, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950662/0361-Clamor_al_atardecer_o%CC%81leo_sobre_tela_149_x_105_1973_Cartellone_s2agkn.jpg", title: " 9", description: "90 x 70 cm", size: "medium" },
  { id: 10, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950656/0362-Errante_o%CC%81leo_sobre_tela_103_x_86_1976_Cartellone_1_arm043.jpg", title: "10", description: "61 x 47 cm", size: "medium" },
  { id: 11, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950649/Oleo_Despues_del_Zonda_iu2u6t.jpg", title: "11", description: "61 x 47 cm", size: "small" },

]
