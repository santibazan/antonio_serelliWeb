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
  { id: 1, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1771950611/el_llamado_oleo_sobre_tela_enchapada.jpg", title: "´El llamado´", description: "Oleo sobre tela enchapada", medida: "107 x 147 cm", anio: 1969, size: "large" },
  { id: 2, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1771950612/dimension_blanca_oleo_sobre_tela_enchapada.jpg", title: "Dimensión blanca  ", description: "óleo sobre tela enchapada. Primer participacion del LIX Salón nacipnal de Artes Plásticas", medida: "107 x 147 cm", anio: 1969, size: "medium" },
  { id: 3, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1771950613/la_hora_del_suenio_oleo_sobre_tela_enchapada.jpg", title: "La hora del sueño ", description: "óleo sobre tela enchapada. Primer premio UCIM.", medida: "95 x 120 cm", anio: 1968, size: "large" },
  { id: 4, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1771950612/reflejos_de_la_tarde_oleo_sobre_tela_enchapada.jpg", title: "Reflejos de la tarde ", description: "óleo sobre tela enchapada", medida: "94 x 120 cm", anio: 1967, size: "small" },

  { id: 5, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1771950615/figura_con_ave_oleo_sobre_madera.jpg", title: "Figura con ave ", description: "óleo sobre madera", medida: "98 x 66 cm", anio: 1965, size: "large" },
  { id: 6, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1771950614/a_nada_nadas_oleo_sobre_tela_enchapada.jpg", title: "A nada nadas", description: "óleo sobre tela enchapada", medida: "105 x 75 cm", anio: 1968, size: "medium" },
  { id: 7, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1771950614/despues_de_la_lluvia_oleo_sobre_tela_enchapadaa.jpg", title: "Después de la tormenta ", description: "óleo sobre tela enchapada", medida: "74 x 104 cm", anio: 1966, size: "large" },
  { id: 8, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1771950622/contraluz_oleo_sobre_tela_enchapada.jpg", title: "Contraluz ", description: "óleo sobre tela enchapada", medida: "75 x 100 cm", anio: 1964, size: "large" },

  { id: 9, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1771950612/dialogo_en_ocres_ooleo_sobre_tela.jpg", title: "Diálogo en ocres ", description: "óleo sobre tela", medida: "90 x 70 cm", anio: 1968, size: "medium" },
  { id: 10, src: "https://res.cloudinary.com/dovztsxyv/image/upload/q_auto/f_auto/v1771950618/cueva_del_suenio_oleo_sobre_madera.jpg", title: "Cueva del sueño ", description: "óleo sobre madera", medida: "61 x 47 cm", anio: 1964, size: "medium" },
]
