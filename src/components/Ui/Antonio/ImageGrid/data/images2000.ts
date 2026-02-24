export interface ImageItem {
  id: number
  src: string
  title: string
  description: string
  size: "small" | "medium" | "large"
}

export const images: ImageItem[] = [
  { id: 1, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950885/0014-Repertorio_acri%CC%81lico_sobre_tela_200_x_120_cm_2009_eaxzdv.jpg", title: "1", description: "107 x 147 cm", size: "medium" },
  { id: 2, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950879/0016-Perpetuo_dilema_acri%CC%81lico_sobre_tela_200_x_120_cm_2009_gjvdkt.jpg", title: "2", description: "107 x 147 cm ", size: "small" },
  { id: 3, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950880/0019-Solo_lo_salva_el_amor_mixta_sobre_tela_180_x_140_cm_2001_ipn8nq.jpg", title: "3", description: "95 x 120 cm", size: "small" },
  { id: 4, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950882/0021-Resurreccio%CC%81n_mixta_sobre_tela_170_x_114_cm_2000_seweyh.jpg", title: "4", description: "94 x 124 cm", size: "large" },

  { id: 5, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950881/0046-E%CC%81xodo_2000_mixta_sobre_tela_110_x_80_cm_2000_h8wyof.jpg", title: "5", description: "98 x 66 cm", size: "large" },
  { id: 6, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950889/0130-Evocando_a_los_maestros_mixta_sobre_tela_152_x_400_cm_2006_tejzh1.jpg", title: "6", description: "105 x 75 cm", size: "medium" },
  { id: 7, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950882/0268-Desde_la_Construccio%CC%81n_mixta_sobre_madera_120_x_300_cm_2000_obuuee.jpg", title: "7", description: "74 x 104 cm", size: "medium" },
  { id: 8, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950894/0269-Evocacio%CC%81n_mixta_sobre_tela_200_x_280_cm_2000_hxvzra.jpg", title: "8", description: "75 x 100 cm", size: "small" },

  { id: 9, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950880/0271-Diciembre_Enero_y_Febrero_mixta_sobre_tela_120_x_300_cm_2002_tkoius.jpg", title: "9", description: "90 x 70 cm", size: "small" },
  { id: 10, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950886/0305-Timonel_de_quimeras_mixta_sobre_tela_100_x_120_cm_2006_fsyxeu.jpg", title: "10", description: "61 x 47 cm", size: "small" },

]