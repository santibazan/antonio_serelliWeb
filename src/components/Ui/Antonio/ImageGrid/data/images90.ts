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
  { id: 1, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950739/0004-El_aire_me_sabe_bien_o%CC%81leo_sobre_tela_140_x_180_cm_1994_nxjud8.jpg", title: "El aire me sabe bien", description: "Óleo sobre tela", medida:"140 x 180 cm", anio:1994, size: "small" },
  { id: 2, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950738/0005-Primera_leccio%CC%81n_o%CC%81leo_sobre_tela_160_x_180_cm_1998_gitk6i.jpg", title: "Primera lección", description: "Óleo sobre tela", medida:"160 x 180 cm", anio:1998, size: "large" },
  { id: 3, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950740/0006-Sembrador_o%CC%81leo_sobre_tela_160_x_180_cm_1998_u7l2jy.jpg", title: "Sembrador", description: "Óleo sobre tela", medida:"160 x 180 cm", anio:1998, size: "medium" },
  { id: 4, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950740/0020-Blanca_ternura_en_Tupungato_o%CC%81leo_sobre_tela_130_x_162_cm_1995_rnzd96.jpg", title: "Blanca ternura en Tupungato", description: "Óleo sobre tela", medida:"130 x 162 cm", anio:1995, size: "small" },

  { id: 5, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950742/0027-Poesi%CC%81a_y_orden_o%CC%81leo_sobre_tela_120_x_160_cm_1991_dabp43.jpg", title: "Poesía y orden", description: "Óleo sobre tela", medida:"120 x 160 cm", anio:1991, size: "large" },
  { id: 6, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950741/0028-Homenaje_a_Walt_Whitman_III_o%CC%81leo_sobre_tela_160_x_120_cm_1991_e3lx3e.jpg", title: "Homenaje a Walt Whitman 3", description: "Óleo sobre tela", medida:"160 x 120 cm", anio:1991, size: "medium" },
  { id: 7, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950740/0029-Figura_sentada_con_paisaje_o%CC%81leo_sobre_tela_100_x_150_cm_1994_qp73lk.jpg", title: "Figura sentada con paisaje", description: "Óleo sobre tela", medida:"100 x 150 cm", anio:1994, size: "large" },
  { id: 8, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950743/0032-Flor_azul_sobre_jarro%CC%81n_blanco_o%CC%81leo_sobre_tela_150_x_100_cm_1991_yhcjpa.jpg", title: "Flor azul sobre jarron blanco", description: "Óleo sobre tela", medida:"150 x 100 cm", anio:1991, size: "medium" },

  { id: 9, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950744/0041-Alegori%CC%81a_al_mantelito_blanco_mixta_sobre_tela_116_x_89_cm_1995_atxfdp.jpg", title: "Alegoria al mantelito blanco", description: "Mixta sobre tela", medida:"116 x 89 cm", anio:1995, size: "medium" },
  { id: 10, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951616/0270_-_Evocacion_o%CC%81leo_sobre_tela_145_x_154_cm_1995_dash33.jpg", title: "Evocación", description: "Óleo sobre tela", medida:"145 x 154 cm", anio:1995, size: "small" },

]
