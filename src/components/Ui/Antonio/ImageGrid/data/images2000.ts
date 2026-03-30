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
  { id: 1, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950885/0014-Repertorio_acri%CC%81lico_sobre_tela_200_x_120_cm_2009_eaxzdv.jpg", title: "Repertorio", description: "Acrilico sabre tela", medida:"200 x 120 cm", anio:2009, size: "large" },
  { id: 2, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950882/0268-Desde_la_Construccio%CC%81n_mixta_sobre_madera_120_x_300_cm_2000_obuuee.jpg", title: "Desde la construcción", description: "Mixta sobre madera ", medida:"120 x 300 cm", anio:2000, size: "medium" },
  { id: 3, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950880/0019-Solo_lo_salva_el_amor_mixta_sobre_tela_180_x_140_cm_2001_ipn8nq.jpg", title: "Solo lo salva el amor", description: "Mixta sobre tela", medida:"180 x 140 cm", anio:2001, size: "large" },
  { id: 4, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950882/0021-Resurreccio%CC%81n_mixta_sobre_tela_170_x_114_cm_2000_seweyh.jpg", title: "Resurrección", description: "Mixta sobre telas. Premio Mención VIII Bienal de Arte Sacro Pintura 2000", medida:"170 x 114 cm", anio:2000, size: "medium" },

  { id: 5, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950894/0269-Evocacio%CC%81n_mixta_sobre_tela_200_x_280_cm_2000_hxvzra.jpg", title: "Evocación", description: "Mixta sobre tela", medida:"200 x 280 cm", anio:2000, size: "medium" },
  { id: 6, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950889/0130-Evocando_a_los_maestros_mixta_sobre_tela_152_x_400_cm_2006_tejzh1.jpg", title: "Evocando a los maestros", description: "mixta sobre tela. Casa de Gobierno de Mendoza 7° Piso", medida:"152 x 400 cm", anio:2006, size: "medium" },
  { id: 7, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950879/0016-Perpetuo_dilema_acri%CC%81lico_sobre_tela_200_x_120_cm_2009_gjvdkt.jpg", title: "Perpetuo dilema", description: "Acrílico sobre tela", medida:"200 x 120 cm", anio:2009, size: "large" },
  { id: 8, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950881/0046-E%CC%81xodo_2000_mixta_sobre_tela_110_x_80_cm_2000_h8wyof.jpg", title: "Éxodo 2000", description: "Mixta sobre tela", medida:"110 x 80 cm", anio:2000, size: "large" },

  { id: 9, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950880/0271-Diciembre_Enero_y_Febrero_mixta_sobre_tela_120_x_300_cm_2002_tkoius.jpg", title: "Diciembre, Enero, Febrero", description: "Mixta sobre tela", medida:"120 x 300 cm", anio:2002, size: "medium" },
  { id: 10, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950886/0305-Timonel_de_quimeras_mixta_sobre_tela_100_x_120_cm_2006_fsyxeu.jpg", title: "Timonel de quimeras", description: "Mixta sobre tela", medida:"100 x 120 cm", anio:2006, size: "medium" },

]