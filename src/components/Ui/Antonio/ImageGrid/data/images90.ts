export interface ImageItem {
  id: number
  src: string
  title: string
  description: string
  size: "small" | "medium" | "large"
}

export const images: ImageItem[] = [
  { id: 1, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950739/0004-El_aire_me_sabe_bien_o%CC%81leo_sobre_tela_140_x_180_cm_1994_nxjud8.jpg", title: "1", description: "107 x 147 cm", size: "medium" },
  { id: 2, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950738/0005-Primera_leccio%CC%81n_o%CC%81leo_sobre_tela_160_x_180_cm_1998_gitk6i.jpg", title: "2", description: "107 x 147 cm ", size: "small" },
  { id: 3, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950740/0006-Sembrador_o%CC%81leo_sobre_tela_160_x_180_cm_1998_u7l2jy.jpg", title: "3", description: "95 x 120 cm", size: "small" },
  { id: 4, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950740/0020-Blanca_ternura_en_Tupungato_o%CC%81leo_sobre_tela_130_x_162_cm_1995_rnzd96.jpg", title: "4", description: "94 x 124 cm", size: "large" },

  { id: 5, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950742/0027-Poesi%CC%81a_y_orden_o%CC%81leo_sobre_tela_120_x_160_cm_1991_dabp43.jpg", title: "5", description: "98 x 66 cm", size: "large" },
  { id: 6, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950741/0028-Homenaje_a_Walt_Whitman_III_o%CC%81leo_sobre_tela_160_x_120_cm_1991_e3lx3e.jpg", title: "6", description: "105 x 75 cm", size: "medium" },
  { id: 7, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950740/0029-Figura_sentada_con_paisaje_o%CC%81leo_sobre_tela_100_x_150_cm_1994_qp73lk.jpg", title: "7", description: "74 x 104 cm", size: "medium" },
  { id: 8, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950743/0032-Flor_azul_sobre_jarro%CC%81n_blanco_o%CC%81leo_sobre_tela_150_x_100_cm_1991_yhcjpa.jpg", title: "8", description: "75 x 100 cm", size: "small" },

  { id: 9, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950744/0041-Alegori%CC%81a_al_mantelito_blanco_mixta_sobre_tela_116_x_89_cm_1995_atxfdp.jpg", title: "9", description: "90 x 70 cm", size: "small" },
  { id: 10, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951616/0270_-_Evocacion_o%CC%81leo_sobre_tela_145_x_154_cm_1995_dash33.jpg", title: "10", description: "61 x 47 cm", size: "small" },

]
