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
  { id: 1, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950611/0036-El_llamado_o%CC%81leo_sobre_tela_enchapada_107_x_147_cm_1969_sjxdeu.jpg", title: "´El llamado´", description: "Oleo sobre tela enchapada", medida: "107 x 147 cm", anio: 1969, size: "large" },
  { id: 2, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950612/0037-Dimensio%CC%81n_blanca_o%CC%81leo_sobre_tela_enchapada_107_x_147_cm_1969_rzf26b.jpg", title: "Dimensión blanca  ", description: "óleo sobre tela enchapada. Primer participacion del LIX Salón nacipnal de Artes Plásticas", medida: "107 x 147 cm", anio: 1969, size: "medium" },
  { id: 3, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950613/0042-La_hora_del_suen%CC%83o_o%CC%81leo_sobre_tela_enchapada_95_x_120_cm_1968_ys3rw3.jpg", title: "La hora del sueño ", description: "óleo sobre tela enchapada. Primer premio UCIM.", medida: "95 x 120 cm", anio: 1968, size: "large" },
  { id: 4, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950612/0043-Reflejos_de_la_tarde_o%CC%81leo_sobre_tela_enchapada_94_x_124_cm_1967_wwy2rh.jpg", title: "Reflejos de la tarde ", description: "óleo sobre tela enchapada", medida: "94 x 120 cm", anio: 1967, size: "small" },

  { id: 5, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950615/0047-Figura_con_ave_o%CC%81leo_sobre_madera_98_x_66_cm_1965_xeb5wf.jpg", title: "Figura con ave ", description: "óleo sobre madera", medida: "98 x 66 cm", anio: 1965, size: "large" },
  { id: 6, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950614/0048-A_nada_nadas_o%CC%81leo_sobre_tela_enchapada_105_x_75_cm_1968_ewlttv.jpg", title: "A nada nadas", description: "óleo sobre tela enchapada", medida: "105 x 75 cm", anio: 1968, size: "medium" },
  { id: 7, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950614/0049-Despue%CC%81s_de_la_lluvia_o%CC%81leo_sobre_tela_enchapada_74_x_104_cm_1966_lenjzy.jpg", title: "Después de la tormenta ", description: "óleo sobre tela enchapada", medida: "74 x 104 cm", anio: 1966, size: "large" },
  { id: 8, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950622/0053-Contraluz_o%CC%81leo_sobre_tela_enchapada_75_x_100_cm_1964_qsay7d.jpg", title: "Contraluz ", description: "óleo sobre tela enchapada", medida: "75 x 100 cm", anio: 1964, size: "large" },

  { id: 9, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950612/0055-Dia%CC%81logo_en_ocres_o%CC%81leo_sobre_tela_90_x_70_cm_1968_ztpc6w.jpg", title: "Diálogo en ocres ", description: "óleo sobre tela", medida: "90 x 70 cm", anio: 1968, size: "medium" },
  { id: 10, src: "https://res.cloudinary.com/dovztsxyv/image/upload/v1771950618/0060-Cueva_del_suen%CC%83o_o%CC%81leo_sobre_madera_61_x_47_cm_1964_w5scfw.jpg", title: "Cueva del sueño ", description: "óleo sobre madera", medida: "61 x 47 cm", anio: 1964, size: "medium" },


]
