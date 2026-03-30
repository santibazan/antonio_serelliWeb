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
  { id: 1, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951554/0178-Historias_secretas_collage_sobre_tela_150_x_300_cm_2013_vaowpx.jpg", title: "Historias secretas", description: "collage sobre tela", medida:"150 x 300cm", anio:2013, size: "medium" },
  { id: 2, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951555/0188-La_Carta-_Triptico_acrilico_sobre_tela_200_x_360_cm_2013_wfuxt8.jpg", title: "La Carta", description: "Acrilico sobre tela", medida:"200 x 360 cm", anio:2013, size: "small" },
  { id: 3, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951569/0189-Polichinela_o%CC%81leo_sobre_tela_94_x_80_cm_2013_xqcgia.jpg", title: "Polichinela ", description: "óleo sobre tela", medida:"94 x 80 cm", anio:2013, size: "large" },
  { id: 4, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951546/0237-Hora_del_Sosiego_o%CC%81leo_sobre_tela_120_x_200_cm_2012_hofurp.jpg", title: "Hora del Sosiego", description: "óleo sobre tela", medida:"120 x 200 cm", anio:2012, size: "medium" },

  { id: 5, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951559/0300-Formula_para_la_Piedra_Infinita_mixta_sobre_tela_2013_nlzodk.jpg", title: "Formula para la Piedra Infinita", description: "Mixta sobre tela", medida:"120 x 80 cm", anio:2014, size: "medium" },
  { id: 6, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951561/0311-Equilibrio_musical_o%CC%81leo_sobre_tela_120_x_80_cm_2013_tmjdnq.jpg", title: "Equilibrio musical 1", description: "óleo sobre tela", medida:"120 x 80 cm", anio:2013, size: "large" },
  // { id: 7, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951536/0528_wnduhm.jpg", title: "", description: "74 x 104 cm", medida:"", anio:1, size: "medium" },
  // { id: 8, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951538/0529_delabh.jpg", title: "8", description: "75 x 100 cm", medida:"", anio:1, size: "large" },

  // { id: 9, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951539/0530_qe2to9.jpg", title: "9", description: "90 x 70 cm", medida:"", anio:1, size: "medium" },
  { id: 10, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951549/0537-Equilibrio_con_pa%CC%81jaros_y_luna_mixta_sobre_tela_120_x_80_cm_2015_ostiu9.jpg", title: "Equilibrio con pájaros y luna ", description: "mixta sobre tela", medida:"120 x 80 cm", anio:2015, size: "large" },
  { id: 11, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951565/0538-Espejos_o%CC%81leo_sobre_tela_240_x_180_cm_2015_fy3z6p.jpg", title: "Espejos", description: "óleo sobre tela", medida:"240 x 180 cm", anio:2015, size: "medium" },
  { id: 12, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951541/0539-Verano_o%CC%81leo_sobre_tela_200_x_150_cm_2015_xkxkbk.jpg", title: "Verano", description: " óleo sobre tela", medida:"200 x 150 cm", anio:2015, size: "large" },  
  { id: 13, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771951552/La_silla_del_poeta_qfr5ip.jpg", title: "La silla del poeta", description: "Óleo sobre tela", medida:"100 x 60 cm", anio:2019, size: "small" },

]