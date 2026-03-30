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
  { id: 1, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950685/0024-Altar_de_los_humildes_o%CC%81leo_sobre_madera_158_x_140_1988_rdlzet.jpg", title: "Altar de los humildes", description: "Óleo sobre madera", medida:"158 x 140 cm", anio:1988, size: "large" },
  { id: 2, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950686/0025-Universos_de_silencios_o%CC%81leo_sobre_madera_160_x_140_1987_burjzd.jpg", title: "Universo de silencios", description: "Óleo sobre madera", medida:"160 x 140 cm", anio:1987, size: "medium" },
  { id: 3, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950688/0026-Paisaje_de_la_memoria_dormida_o%CC%81leo_sobre_madera_150_x_138_1988_uxhauy.jpg", title: "Paisaje de la memoria dormida", description: "Óleo sobre madera", medida:"150 x 138 cm", anio:1988, size: "small" },
  { id: 4, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950686/0044-Primavera_o%CC%81leo_sobre_tela_110_x_100_1984_lvrokq.jpg", title: "Primevera", description: "Óleo sobre tela", medida:"110 x 100 cm", anio:1984, size: "large" },

  { id: 5, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950686/0045-Dos_ima%CC%81genes_y_el_silencio_o%CC%81leo_sobre_tela_110_x_100_1982_ydoemg.jpg", title: "Dos imágenes y el silencio", description: "Óleo sobre tela. Mencion honorifica salon nacional de pintura ´centenario del diario los andes´", medida:"110 x 100 cm", anio:1982, size: "large" },
  { id: 6, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950699/0051-Composicio%CC%81n_azul_o%CC%81leo_sobre_madera_80_x_90_1987_tvuafx.jpg", title: "Composición azul", description: "Óleo sobre madera", medida:"80 x 90", anio:1988, size: "medium" },
  { id: 7, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950688/0058-Naturaleza_con_fondo_rojo_y_blanco_o%CC%81leo_sobre_tela_70_x_50_1983_h5i14b.jpg", title: "Naturaleza con fondo rojo y blanco", description: "Óleo sobre tela", medida:"70 x 50 cm", anio:1983, size: "large" },
  { id: 8, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950690/0110-La_nota_del_silencio_o%CC%81leo_sobre_madera_165_x_182_1984_1_mgmciq.jpg", title: "La nota del silencio", description: "Óleo sobre madera", medida:"165 x 182 cm", anio:1984, size: "large" },

  { id: 9, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950692/0226_-_Dimensio%CC%81n_del_silencio_o%CC%81leo_sobre_madera_180_x_165_1985_1_l532kw.jpg", title: "Dimensión del silencio", description: "Óleo sobre madera. Premio ´Cecilia Grierson´ LXXIV Salón Nacional de Artes Plásticas", medida:"180 x 165 cm", anio:1985, size: "medium" },
  { id: 10, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950691/0272-Desde_siempre_o%CC%81leo_sobre_tela_90_x_70_1981_bhxdnl.jpg", title: "Desde siempre", description: "Óleo sobre tela", medida:"90 x 70 cm", anio:1981, size: "medium" },
]

